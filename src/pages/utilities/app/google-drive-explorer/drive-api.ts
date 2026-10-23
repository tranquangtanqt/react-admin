export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || '';
export const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
export const ROOT_FOLDER_ID = '1oKrdeVl4bUvto8ee_8xY_k2bFpYDMyW1';

export const MIME_FOLDER = 'application/vnd.google-apps.folder';
export const MIME_SHEET = 'application/vnd.google-apps.spreadsheet';

const DRIVE_URL = 'https://www.googleapis.com/drive/v3/files';
const UPLOAD_URL = 'https://www.googleapis.com/upload/drive/v3/files';
const FILE_FIELDS =
  'id,name,mimeType,modifiedTime,webViewLink,iconLink,size,parents';
const SCOPE = 'https://www.googleapis.com/auth/drive';
const TOKEN_STORAGE_KEY = 'drive-explorer-token';

export interface IDriveFile {
  id: string;
  name: string;
  mimeType: string;
  modifiedTime?: string;
  webViewLink?: string;
  iconLink?: string;
  size?: string;
  parents?: string[];
}

interface IStoredToken {
  accessToken: string;
  expiresAt: number;
}

/**
 * Get the access token saved in this session (if it has not expired)
 */
export const getStoredToken = (): string => {
  try {
    const raw = sessionStorage.getItem(TOKEN_STORAGE_KEY);
    if (!raw) return '';
    const token = JSON.parse(raw) as IStoredToken;
    return token.expiresAt > Date.now() ? token.accessToken : '';
  } catch {
    return '';
  }
};

export const clearStoredToken = () => {
  try {
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  } catch {
    // ignore
  }
};

const loadGoogleIdentityScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if ((window as any).google?.accounts?.oauth2) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Không tải được Google Identity'));
    document.body.appendChild(script);
  });
};

/**
 * Open the Google sign-in popup and return an access token
 */
export const requestAccessToken = async (): Promise<string> => {
  if (!GOOGLE_CLIENT_ID) {
    throw new Error('Chưa cấu hình REACT_APP_GOOGLE_CLIENT_ID trong file .env');
  }
  await loadGoogleIdentityScript();

  return new Promise((resolve, reject) => {
    const client = (window as any).google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: SCOPE,
      callback: (response: any) => {
        if (response.error) {
          reject(new Error(response.error_description || response.error));
          return;
        }
        const token: IStoredToken = {
          accessToken: response.access_token,
          expiresAt: Date.now() + (+response.expires_in - 60) * 1000,
        };
        try {
          sessionStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token));
        } catch {
          // ignore
        }
        resolve(token.accessToken);
      },
      error_callback: (err: any) => {
        reject(new Error(err?.message || 'Đăng nhập bị huỷ'));
      },
    });
    client.requestAccessToken();
  });
};

const request = async (url: string, token: string, init: RequestInit = {}) => {
  const headers = new Headers(init.headers);
  let finalUrl = url;
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  } else {
    if (!GOOGLE_API_KEY) {
      throw new Error(
        'Chưa cấu hình REACT_APP_GOOGLE_API_KEY trong file .env (hoặc hãy đăng nhập Google)',
      );
    }
    finalUrl += (url.includes('?') ? '&' : '?') + `key=${GOOGLE_API_KEY}`;
  }

  const response = await fetch(finalUrl, { ...init, headers });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error: any = new Error(
      body?.error?.message || `Lỗi ${response.status}`,
    );
    error.status = response.status;
    throw error;
  }
  return body;
};

/**
 * List all files and folders directly inside a folder (folders first)
 */
export const listFiles = async (
  folderId: string,
  token: string,
): Promise<IDriveFile[]> => {
  const files: IDriveFile[] = [];
  let pageToken = '';
  do {
    const params = new URLSearchParams({
      q: `'${folderId}' in parents and trashed = false`,
      fields: `nextPageToken,files(${FILE_FIELDS})`,
      orderBy: 'folder,name',
      pageSize: '1000',
      supportsAllDrives: 'true',
      includeItemsFromAllDrives: 'true',
    });
    if (pageToken) params.set('pageToken', pageToken);

    const body = await request(`${DRIVE_URL}?${params}`, token);
    files.push(...(body.files || []));
    pageToken = body.nextPageToken || '';
  } while (pageToken);
  return files;
};

export const getFile = (fileId: string, token: string): Promise<IDriveFile> => {
  const params = new URLSearchParams({
    fields: FILE_FIELDS,
    supportsAllDrives: 'true',
  });
  return request(`${DRIVE_URL}/${fileId}?${params}`, token);
};

/**
 * Build the breadcrumb from the root folder down to the current folder
 */
export const getBreadcrumb = async (
  folderId: string,
  token: string,
): Promise<IDriveFile[]> => {
  const path: IDriveFile[] = [];
  let currentId = folderId;
  for (let i = 0; i < 20; i++) {
    const folder = await getFile(currentId, token);
    path.unshift(folder);
    if (currentId === ROOT_FOLDER_ID || !folder.parents?.length) break;
    currentId = folder.parents[0];
  }
  return path;
};

/**
 * Create a new empty file (Google Sheet or folder) inside a folder
 */
export const createFile = (
  name: string,
  mimeType: string,
  folderId: string,
  token: string,
): Promise<IDriveFile> => {
  return request(
    `${DRIVE_URL}?fields=${FILE_FIELDS}&supportsAllDrives=true`,
    token,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, mimeType, parents: [folderId] }),
    },
  );
};

/**
 * Move a file/folder to the Drive trash (can be restored within 30 days)
 */
export const trashFile = (
  fileId: string,
  token: string,
): Promise<IDriveFile> => {
  return request(
    `${DRIVE_URL}/${fileId}?fields=id,name&supportsAllDrives=true`,
    token,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trashed: true }),
    },
  );
};

const SPREADSHEET_EXT = /\.(xlsx|xls|csv)$/i;

export const isSpreadsheetFile = (name: string) => SPREADSHEET_EXT.test(name);

export const isImage = (file: IDriveFile) => file.mimeType.startsWith('image/');

/**
 * Direct image URL, usable as <img src> (e.g. content of an IMAGE row)
 * as long as the file is shared publicly
 */
export const imageUrl = (file: IDriveFile) =>
  `https://lh3.googleusercontent.com/d/${file.id}`;

/**
 * File content served by the Drive API with the API key.
 * Works in <img> without Google cookies (public files only).
 */
export const apiMediaUrl = (file: IDriveFile) =>
  GOOGLE_API_KEY
    ? `${DRIVE_URL}/${file.id}?alt=media&key=${GOOGLE_API_KEY}`
    : '';

/**
 * Thumbnail generated by Drive, resized to the given width (px)
 */
export const thumbnailUrl = (file: IDriveFile, width: number) =>
  `https://drive.google.com/thumbnail?id=${file.id}&sz=w${width}`;

/**
 * Upload a local file (any type) into a folder.
 * When convertToSheet is true, an Excel/CSV file is converted to a Google Sheet
 * so it can be edited online and read by the Google Sheets API.
 */
export const uploadFile = (
  file: File,
  folderId: string,
  convertToSheet: boolean,
  token: string,
): Promise<IDriveFile> => {
  const convert = convertToSheet && isSpreadsheetFile(file.name);
  const metadata: Record<string, any> = {
    name: convert ? file.name.replace(SPREADSHEET_EXT, '') : file.name,
    parents: [folderId],
  };
  if (convert) metadata.mimeType = MIME_SHEET;

  const form = new FormData();
  form.append(
    'metadata',
    new Blob([JSON.stringify(metadata)], { type: 'application/json' }),
  );
  form.append('file', file);

  return request(
    `${UPLOAD_URL}?uploadType=multipart&fields=${FILE_FIELDS}&supportsAllDrives=true`,
    token,
    { method: 'POST', body: form },
  );
};
