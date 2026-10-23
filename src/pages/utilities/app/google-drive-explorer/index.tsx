import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import {
  IDriveFile,
  MIME_FOLDER,
  apiMediaUrl,
  MIME_SHEET,
  ROOT_FOLDER_ID,
  clearStoredToken,
  createFile,
  getBreadcrumb,
  getStoredToken,
  imageUrl,
  isImage,
  thumbnailUrl,
  listFiles,
  requestAccessToken,
  trashFile,
  uploadFile,
} from './drive-api';

const BASE_PATH = '/utilities/app/drive-explorer';

const folderPath = (folderId: string) =>
  folderId === ROOT_FOLDER_ID ? BASE_PATH : `${BASE_PATH}/${folderId}`;

const fileLink = (file: IDriveFile) =>
  file.webViewLink || `https://drive.google.com/open?id=${file.id}`;

const THUMB_WIDTH_STORAGE_KEY = 'drive-explorer-thumb-width';
const DEFAULT_THUMB_WIDTH = 350;
const THUMB_WIDTH_PRESETS = [150, 200, 350, 500, 800, 1200, 2000];

const loadThumbWidth = () => {
  try {
    const value = +(localStorage.getItem(THUMB_WIDTH_STORAGE_KEY) || '');
    return THUMB_WIDTH_PRESETS.includes(value) ? value : DEFAULT_THUMB_WIDTH;
  } catch {
    return DEFAULT_THUMB_WIDTH;
  }
};

const formatDate = (value?: string) =>
  value ? new Date(value).toLocaleString('vi-VN') : '';

/**
 * Screenshots pasted from the clipboard are all called "image.png":
 * give them a unique name like paste-20261023-143005.png
 */
const renamePasted = (file: File, index: number) => {
  if (file.name && !/^image\.\w+$/i.test(file.name)) return file;
  const ext = file.type.split('/')[1]?.replace('jpeg', 'jpg') || 'png';
  const pad = (n: number) => n.toString().padStart(2, '0');
  const d = new Date();
  const stamp =
    `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}` +
    `-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
  const name = `paste-${stamp}${index ? `-${index + 1}` : ''}.${ext}`;
  return new File([file], name, { type: file.type });
};

interface ICrumb {
  id: string;
  name: string;
}

// Without sign-in the API key cannot read parent folders, so the path
// taken to reach each folder is remembered here: { folderId: ICrumb[] }
const PATHS_STORAGE_KEY = 'drive-explorer-paths';
const ROOT_CRUMB: ICrumb = { id: ROOT_FOLDER_ID, name: 'react-admin-data' };

const loadPaths = (): Record<string, ICrumb[]> => {
  try {
    return JSON.parse(localStorage.getItem(PATHS_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
};

const rememberPath = (path: ICrumb[]) => {
  if (path[0]?.id !== ROOT_FOLDER_ID) return;
  try {
    const paths = loadPaths();
    paths[path[path.length - 1].id] = path.map(({ id, name }) => ({
      id,
      name,
    }));
    localStorage.setItem(PATHS_STORAGE_KEY, JSON.stringify(paths));
  } catch {
    // ignore
  }
};

/**
 * Full path from the root folder: from the API when it could read every
 * parent, otherwise the remembered path, otherwise root + current folder
 */
const resolveBreadcrumb = (folderId: string, apiPath: ICrumb[]): ICrumb[] => {
  if (apiPath[0]?.id === ROOT_FOLDER_ID) return apiPath;

  const current = apiPath[apiPath.length - 1];
  const remembered = loadPaths()[folderId];
  if (remembered?.length) {
    // keep the latest name of the current folder (it may have been renamed)
    return current
      ? [...remembered.slice(0, -1), { id: folderId, name: current.name }]
      : remembered;
  }

  if (folderId === ROOT_FOLDER_ID) return current ? [current] : [ROOT_CRUMB];
  return current ? [ROOT_CRUMB, current] : [ROOT_CRUMB];
};

export const UtilitieAppGoogleDriveExplorer = () => {
  const params = useParams();
  const folderId = params.folderId || ROOT_FOLDER_ID;

  const [token, setToken] = useState(getStoredToken());
  const [files, setFiles] = useState<IDriveFile[]>([]);
  const [breadcrumb, setBreadcrumb] = useState<ICrumb[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [keyword, setKeyword] = useState('');

  const [newName, setNewName] = useState('');
  const [uploadInput, setUploadInput] = useState<File[]>([]);
  // bump to remount (clear) the file input after uploading
  const [uploadInputKey, setUploadInputKey] = useState(0);
  const [convertToSheet, setConvertToSheet] = useState(true);
  const [saving, setSaving] = useState(false);
  const [created, setCreated] = useState<IDriveFile[]>([]);
  const [deleted, setDeleted] = useState('');
  const [copied, setCopied] = useState('');
  const [thumbWidth, setThumbWidth] = useState(loadThumbWidth());
  const [progress, setProgress] = useState('');
  const [dragging, setDragging] = useState(false);

  const loadFolder = useCallback(async () => {
    setLoading(true);
    setError('');
    // read from storage: the token may have been renewed since this render,
    // and an expired one is dropped so the list falls back to the API key
    const currentToken = token ? getStoredToken() : '';
    try {
      const [list, path] = await Promise.all([
        listFiles(folderId, currentToken),
        getBreadcrumb(folderId, currentToken).catch(() => []),
      ]);
      setFiles(list);
      const fullPath = resolveBreadcrumb(folderId, path);
      setBreadcrumb(fullPath);
      rememberPath(fullPath);
    } catch (e: any) {
      if (e.status === 401 && currentToken) {
        // token expired -> sign out and read again with the API key
        clearStoredToken();
        setToken('');
        return;
      }
      setFiles([]);
      setError(
        (e.status === 403 || e.status === 404) &&
          !/API has not been used|is disabled/i.test(e.message)
          ? `${e.message}. Hãy đăng nhập Google, hoặc chia sẻ thư mục ở chế độ "Bất kỳ ai có đường liên kết".`
          : e.message,
      );
    } finally {
      setLoading(false);
    }
  }, [folderId, token]);

  useEffect(() => {
    loadFolder();
  }, [loadFolder]);

  useEffect(() => {
    setKeyword('');
    setCreated([]);
    setDeleted('');
  }, [folderId]);

  const login = async () => {
    setError('');
    try {
      setToken(await requestAccessToken());
    } catch (e: any) {
      setError(e.message);
    }
  };

  const logout = () => {
    clearStoredToken();
    setToken('');
  };

  /**
   * Open the sign-in popup again when the session has expired
   */
  const renewToken = async () => {
    try {
      const newToken = await requestAccessToken();
      setToken(newToken);
      return newToken;
    } catch (e: any) {
      clearStoredToken();
      setToken('');
      // the upload panel is hidden while signed out -> clear the selection
      setUploadInput([]);
      setUploadInputKey((k) => k + 1);
      throw new Error(
        `Phiên đăng nhập Google đã hết hạn (${e.message}). Bấm "Đăng nhập Google" rồi thử lại.`,
      );
    }
  };

  /**
   * Call the Drive API with a valid token: renew it first when it has
   * expired, and once more if Google still answers 401
   */
  const withToken = async <T,>(action: (token: string) => Promise<T>) => {
    const currentToken = getStoredToken() || (await renewToken());
    try {
      return await action(currentToken);
    } catch (e: any) {
      if (e.status !== 401) throw e;
      return action(await renewToken());
    }
  };

  /**
   * Run a create/upload action, then reload the folder
   */
  const save = async (action: () => Promise<IDriveFile[]>) => {
    setSaving(true);
    setError('');
    setCreated([]);
    setDeleted('');
    try {
      const result = await action();
      setCreated(result);
      setNewName('');
      setUploadInput([]);
      setUploadInputKey((k) => k + 1);
      await loadFolder();
    } catch (e: any) {
      setError(e.message);
      // some files of a multi-file upload may already be on Drive
      if (e.uploaded?.length) {
        setCreated(e.uploaded);
        await loadFolder();
      }
    } finally {
      setSaving(false);
      setProgress('');
    }
  };

  const createSheet = () => {
    if (!newName.trim()) return;
    save(async () => [
      await withToken((t) =>
        createFile(newName.trim(), MIME_SHEET, folderId, t),
      ),
    ]);
  };

  const createFolder = () => {
    if (!newName.trim()) return;
    save(async () => [
      await withToken((t) =>
        createFile(newName.trim(), MIME_FOLDER, folderId, t),
      ),
    ]);
  };

  /**
   * Upload files one by one (from the file input, Ctrl+V or drag & drop)
   */
  const uploadFiles = (list: File[]) => {
    if (!list.length || saving) return;
    if (!token) {
      setError('Đăng nhập Google để tải file lên.');
      return;
    }
    save(async () => {
      const result: IDriveFile[] = [];
      try {
        for (let i = 0; i < list.length; i++) {
          setProgress(`Đang tải ${i + 1}/${list.length}: ${list[i].name}`);
          result.push(
            await withToken((t) =>
              uploadFile(list[i], folderId, convertToSheet, t),
            ),
          );
        }
      } catch (e: any) {
        e.uploaded = result;
        throw e;
      }
      return result;
    });
  };

  const upload = () => uploadFiles(uploadInput);

  // paste / drop listeners are registered once -> always call the latest version
  const uploadFilesRef = useRef(uploadFiles);
  uploadFilesRef.current = uploadFiles;

  // Ctrl+V anywhere on the page uploads the pasted files (e.g. screenshots)
  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const files = Array.from(e.clipboardData?.files || []);
      if (!files.length) return;
      // pasting text into an input keeps working as usual
      const target = e.target as HTMLElement;
      if (
        target.closest?.('input, textarea') &&
        e.clipboardData?.types.includes('text/plain')
      ) {
        return;
      }
      e.preventDefault();
      uploadFilesRef.current(files.map(renamePasted));
    };
    document.addEventListener('paste', onPaste);
    return () => document.removeEventListener('paste', onPaste);
  }, []);

  // drag & drop files anywhere on the page
  useEffect(() => {
    let depth = 0;
    const hasFiles = (e: DragEvent) =>
      !!e.dataTransfer?.types.includes('Files');

    const onDragEnter = (e: DragEvent) => {
      if (!hasFiles(e)) return;
      depth++;
      setDragging(true);
    };
    const onDragOver = (e: DragEvent) => {
      if (hasFiles(e)) e.preventDefault();
    };
    const onDragLeave = (e: DragEvent) => {
      if (!hasFiles(e)) return;
      depth = Math.max(0, depth - 1);
      if (!depth) setDragging(false);
    };
    const onDrop = (e: DragEvent) => {
      if (!hasFiles(e)) return;
      e.preventDefault();
      depth = 0;
      setDragging(false);
      // folders are not supported -> skip them
      const files = Array.from(e.dataTransfer?.items || [])
        .filter((item) => item.kind === 'file')
        .filter((item) => !item.webkitGetAsEntry()?.isDirectory)
        .map((item) => item.getAsFile())
        .filter((file): file is File => !!file);
      uploadFilesRef.current(files);
    };

    window.addEventListener('dragenter', onDragEnter);
    window.addEventListener('dragover', onDragOver);
    window.addEventListener('dragleave', onDragLeave);
    window.addEventListener('drop', onDrop);
    return () => {
      window.removeEventListener('dragenter', onDragEnter);
      window.removeEventListener('dragover', onDragOver);
      window.removeEventListener('dragleave', onDragLeave);
      window.removeEventListener('drop', onDrop);
    };
  }, []);

  const remove = async (file: IDriveFile) => {
    const isFolder = file.mimeType === MIME_FOLDER;
    const message = isFolder
      ? `Chuyển thư mục "${file.name}" và toàn bộ nội dung bên trong vào thùng rác?`
      : `Chuyển "${file.name}" vào thùng rác?`;
    if (!window.confirm(message)) return;

    setSaving(true);
    setError('');
    setCreated([]);
    setDeleted('');
    try {
      await withToken((t) => trashFile(file.id, t));
      setDeleted(file.name);
      setFiles((list) => list.filter((f) => f.id !== file.id));
    } catch (e: any) {
      setError(
        e.status === 403
          ? `${e.message}. Chỉ chủ sở hữu file mới xoá được (hoặc tài khoản đang đăng nhập không có quyền).`
          : e.message,
      );
    } finally {
      setSaving(false);
    }
  };

  /**
   * Change the thumbnail width for all images and remember it for next time
   */
  const changeThumbWidth = (width: number) => {
    setThumbWidth(width);
    try {
      localStorage.setItem(THUMB_WIDTH_STORAGE_KEY, width.toString());
    } catch {
      // ignore
    }
  };

  const hasImages = files.some(isImage);

  /**
   * Remember the path to a sub folder before opening it
   */
  const openFolder = (folder: IDriveFile) => {
    rememberPath([...breadcrumb, { id: folder.id, name: folder.name }]);
  };

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      window.prompt('Copy:', text);
    }
    setCopied(text);
    setTimeout(() => setCopied(''), 1500);
  };

  const filteredFiles = files.filter((f) =>
    f.name.toLowerCase().includes(keyword.trim().toLowerCase()),
  );

  return (
    <>
      <PageTitle title="Google Drive"></PageTitle>

      {dragging && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            zIndex: 2000,
            background: 'rgba(13, 110, 253, 0.12)',
            border: '4px dashed #0d6efd',
            pointerEvents: 'none',
          }}
        >
          <div className="bg-white rounded shadow px-4 py-3 fs-5 text-center">
            {token ? (
              <>
                Thả file để tải lên thư mục{' '}
                <b>{breadcrumb[breadcrumb.length - 1]?.name}</b>
              </>
            ) : (
              'Đăng nhập Google để tải file lên'
            )}
          </div>
        </div>
      )}

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                {breadcrumb.length === 0 && (
                  <li className="breadcrumb-item">
                    <Link to={BASE_PATH}>Thư mục gốc</Link>
                  </li>
                )}
                {breadcrumb.map((item, key) => (
                  <li
                    key={item.id}
                    className={
                      'breadcrumb-item' +
                      (key === breadcrumb.length - 1 ? ' active' : '')
                    }
                  >
                    {key === breadcrumb.length - 1 ? (
                      item.name
                    ) : (
                      <Link to={folderPath(item.id)}>{item.name}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="d-flex gap-2">
              <a
                className="btn btn-sm btn-outline-secondary"
                href={`https://drive.google.com/drive/folders/${folderId}`}
                target="_blank"
                rel="noreferrer"
              >
                Mở trên Drive
              </a>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={loadFolder}
                disabled={loading}
              >
                Tải lại
              </button>
              {token ? (
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={logout}
                >
                  Đăng xuất
                </button>
              ) : (
                <button className="btn btn-sm btn-primary" onClick={login}>
                  Đăng nhập Google
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {token ? (
        <div className="row mt-3">
          <div className="col-12 col-md-6 mb-2">
            <div className="card h-100">
              <div className="card-body">
                <label className="form-label">Tạo mới trong thư mục này</label>
                <input
                  className="form-control mb-2"
                  placeholder="Tên file / thư mục"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && createSheet()}
                />
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-success"
                    onClick={createSheet}
                    disabled={saving || !newName.trim()}
                  >
                    Tạo Google Sheet
                  </button>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={createFolder}
                    disabled={saving || !newName.trim()}
                  >
                    Tạo thư mục
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-2">
            <div className="card h-100">
              <div className="card-body">
                <label className="form-label">
                  Tải file lên (Excel, ảnh, PDF...)
                </label>
                <input
                  key={uploadInputKey}
                  type="file"
                  multiple
                  className="form-control mb-2"
                  onChange={(e) =>
                    setUploadInput(Array.from(e.target.files || []))
                  }
                />
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="convertToSheet"
                      checked={convertToSheet}
                      onChange={(e) => setConvertToSheet(e.target.checked)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="convertToSheet"
                    >
                      Chuyển file Excel/CSV thành Google Sheet
                    </label>
                  </div>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={upload}
                    disabled={saving || !uploadInput.length}
                  >
                    Tải lên
                  </button>
                </div>
                <small className="text-secondary d-block mt-2">
                  Hoặc dán ảnh (Ctrl+V) / kéo thả file vào bất kỳ đâu trên trang
                  để tải lên ngay.
                </small>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-secondary mt-3 mb-0 py-2">
          Đăng nhập Google để tạo file hoặc tải file lên.
        </div>
      )}

      {saving && (
        <div className="alert alert-info mt-3 mb-0 py-2">
          {progress || 'Đang xử lý...'}
        </div>
      )}

      {created.length > 0 && (
        <div className="alert alert-success mt-3 mb-0 py-2">
          {created.map((file) => (
            <div key={file.id}>
              Đã tạo <b>{file.name}</b>.{' '}
              {file.mimeType === MIME_FOLDER ? (
                <Link to={folderPath(file.id)} onClick={() => openFolder(file)}>
                  Mở thư mục
                </Link>
              ) : (
                <a href={fileLink(file)} target="_blank" rel="noreferrer">
                  Mở để chỉnh sửa
                </a>
              )}
              {isImage(file) && (
                <button
                  className="btn btn-sm btn-outline-success ms-2 py-0"
                  onClick={() => copy(imageUrl(file))}
                >
                  {copied === imageUrl(file) ? 'Đã copy' : 'Copy link ảnh'}
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {deleted && (
        <div className="alert alert-warning mt-3 mb-0 py-2">
          Đã chuyển <b>{deleted}</b> vào thùng rác.{' '}
          <a
            href="https://drive.google.com/drive/trash"
            target="_blank"
            rel="noreferrer"
          >
            Mở thùng rác để khôi phục
          </a>
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3 mb-0 py-2">{error}</div>
      )}

      <div className="row mt-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="d-flex flex-wrap gap-2 mb-2">
            <input
              className="form-control flex-grow-1 w-auto"
              placeholder="Tìm theo tên..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            {hasImages && (
              <div className="input-group w-auto">
                <span className="input-group-text">Độ rộng thu nhỏ</span>
                <select
                  className="form-select"
                  value={thumbWidth}
                  onChange={(e) => changeThumbWidth(+e.target.value)}
                >
                  {THUMB_WIDTH_PRESETS.map((w) => (
                    <option key={w} value={w}>
                      {w}px{w === DEFAULT_THUMB_WIDTH ? ' (mặc định)' : ''}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="card">
            <ul className="list-group list-group-flush">
              {loading && <li className="list-group-item">Đang tải...</li>}

              {!loading && filteredFiles.length === 0 && (
                <li className="list-group-item text-secondary">
                  Không có file nào
                </li>
              )}

              {!loading &&
                filteredFiles.map((file) => (
                  <li className="list-group-item" key={file.id}>
                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                      <div className="d-flex align-items-center gap-2 text-break">
                        {isImage(file) && apiMediaUrl(file) ? (
                          <img
                            src={apiMediaUrl(file)}
                            alt=""
                            width={40}
                            height={40}
                            className="rounded border"
                            style={{ objectFit: 'cover' }}
                            loading="lazy"
                            onError={(e) => {
                              // fall back to the file-type icon
                              const img = e.currentTarget;
                              if (file.iconLink && img.src !== file.iconLink) {
                                img.src = file.iconLink;
                                img.style.objectFit = 'none';
                              }
                            }}
                          />
                        ) : (
                          file.iconLink && (
                            <img
                              src={file.iconLink}
                              alt=""
                              width={16}
                              height={16}
                            />
                          )
                        )}
                        {file.mimeType === MIME_FOLDER ? (
                          <Link
                            to={folderPath(file.id)}
                            onClick={() => openFolder(file)}
                          >
                            <b>{file.name}</b>
                          </Link>
                        ) : (
                          <a
                            href={fileLink(file)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {file.name}
                          </a>
                        )}
                      </div>

                      <div className="d-flex flex-wrap align-items-center gap-2">
                        <small className="text-secondary">
                          {formatDate(file.modifiedTime)}
                        </small>
                        {file.mimeType !== MIME_FOLDER && (
                          <>
                            {isImage(file) && (
                              <button
                                className="btn btn-sm btn-outline-secondary"
                                title="Link trực tiếp, dùng làm src ảnh"
                                onClick={() => copy(imageUrl(file))}
                              >
                                {copied === imageUrl(file)
                                  ? 'Đã copy'
                                  : 'Copy link ảnh'}
                              </button>
                            )}
                            {isImage(file) && (
                              <button
                                className="btn btn-sm btn-outline-secondary"
                                title={`Ảnh thu nhỏ do Drive tạo, rộng ${thumbWidth}px`}
                                onClick={() =>
                                  copy(thumbnailUrl(file, thumbWidth))
                                }
                              >
                                {copied === thumbnailUrl(file, thumbWidth)
                                  ? 'Đã copy'
                                  : `Copy thu nhỏ ${thumbWidth}px`}
                              </button>
                            )}
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => copy(fileLink(file))}
                            >
                              {copied === fileLink(file)
                                ? 'Đã copy'
                                : 'Copy link'}
                            </button>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              title="Dùng cho cột sheet_id"
                              onClick={() => copy(file.id)}
                            >
                              {copied === file.id ? 'Đã copy' : 'Copy ID'}
                            </button>
                          </>
                        )}
                        {token && (
                          <button
                            className="btn btn-sm btn-outline-danger"
                            title="Chuyển vào thùng rác"
                            onClick={() => remove(file)}
                            disabled={saving}
                          >
                            Xoá
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
