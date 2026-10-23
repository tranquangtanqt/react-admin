import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import {
  IDriveFile,
  MIME_FOLDER,
  MIME_SHEET,
  ROOT_FOLDER_ID,
  clearStoredToken,
  createFile,
  getBreadcrumb,
  getStoredToken,
  imageUrl,
  isImage,
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

const formatDate = (value?: string) =>
  value ? new Date(value).toLocaleString('vi-VN') : '';

export const UtilitieAppGoogleDriveExplorer = () => {
  const params = useParams();
  const folderId = params.folderId || ROOT_FOLDER_ID;

  const [token, setToken] = useState(getStoredToken());
  const [files, setFiles] = useState<IDriveFile[]>([]);
  const [breadcrumb, setBreadcrumb] = useState<IDriveFile[]>([]);
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

  const loadFolder = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [list, path] = await Promise.all([
        listFiles(folderId, token),
        getBreadcrumb(folderId, token).catch(() => []),
      ]);
      setFiles(list);
      setBreadcrumb(path);
    } catch (e: any) {
      if (e.status === 401 && token) {
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
    setKeyword('');
    setCreated([]);
    setDeleted('');
  }, [loadFolder]);

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
    } finally {
      setSaving(false);
    }
  };

  const createSheet = () => {
    if (!newName.trim()) return;
    save(async () => [
      await createFile(newName.trim(), MIME_SHEET, folderId, token),
    ]);
  };

  const createFolder = () => {
    if (!newName.trim()) return;
    save(async () => [
      await createFile(newName.trim(), MIME_FOLDER, folderId, token),
    ]);
  };

  const upload = () => {
    if (!uploadInput.length) return;
    save(async () => {
      const result: IDriveFile[] = [];
      for (const file of uploadInput) {
        result.push(await uploadFile(file, folderId, convertToSheet, token));
      }
      return result;
    });
  };

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
      await trashFile(file.id, token);
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
        <div className="alert alert-info mt-3 mb-0 py-2">Đang xử lý...</div>
      )}

      {created.length > 0 && (
        <div className="alert alert-success mt-3 mb-0 py-2">
          {created.map((file) => (
            <div key={file.id}>
              Đã tạo <b>{file.name}</b>.{' '}
              {file.mimeType === MIME_FOLDER ? (
                <Link to={folderPath(file.id)}>Mở thư mục</Link>
              ) : (
                <a href={fileLink(file)} target="_blank" rel="noreferrer">
                  Mở để chỉnh sửa
                </a>
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
          <input
            className="form-control mb-2"
            placeholder="Tìm theo tên..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

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
                        {isImage(file) ? (
                          <img
                            src={imageUrl(file)}
                            alt=""
                            width={40}
                            height={40}
                            className="rounded border"
                            style={{ objectFit: 'cover' }}
                            loading="lazy"
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
                          <Link to={folderPath(file.id)}>
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

                      <div className="d-flex align-items-center gap-2">
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
