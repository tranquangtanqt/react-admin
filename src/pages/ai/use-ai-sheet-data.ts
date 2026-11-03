import { useMemo } from 'react';
import { useGoogleSheetsData } from 'hooks/use-google-sheets-data';

// 1 file Google Sheet chung cho mục AI, gồm các tab trong AI_SHEET_NAME.
// Để trống thì các trang dùng dữ liệu mặc định trong data.ts
export const AI_GOOGLE_SHEETS_ID =
  '1DiDvlmk8tiFe4TP2fYPjeYnPRfUwOJrk4_RjkrL24F4';

export const AI_SHEET_NAME = {
  TIP_CATEGORIES: 'tip_categories',
  TIPS: 'tips',
  LINK_CATEGORIES: 'link_categories',
  LINKS: 'links',
};

export type SheetRow = Record<string, string>;
export type GetSheetRows = (sheetName: string) => SheetRow[];

/**
 * Đọc dữ liệu từ Google Sheet của mục AI.
 * Chưa cấu hình sheet hoặc tải lỗi thì trả về `fallback`.
 */
export const useAiSheetData = <T>(
  parse: (getRows: GetSheetRows) => T,
  fallback: T,
) => {
  const { data, loading, error } = useGoogleSheetsData(AI_GOOGLE_SHEETS_ID);
  const enabled = Boolean(AI_GOOGLE_SHEETS_ID);

  const { result, fromSheet } = useMemo(() => {
    if (!enabled || error || !data || data.length === 0) {
      return { result: fallback, fromSheet: false };
    }
    const getRows: GetSheetRows = (sheetName) =>
      ((data.find((sheet) => sheet.id === sheetName)?.data ?? []) as SheetRow[])
        // bỏ dòng trống
        .filter((row) => String(row.id ?? '').trim() !== '');
    return { result: parse(getRows), fromSheet: true };
    // parse, fallback phải khai báo ngoài component để không tính lại mỗi lần render
  }, [enabled, data, error, parse, fallback]);

  if (error) {
    console.error('Không tải được Google Sheet mục AI:', error);
  }

  return { data: result, loading: enabled && loading, fromSheet };
};

export const cell = (row: SheetRow, key: string) =>
  String(row[key] ?? '').trim();
