import useGoogleSheets from 'use-google-sheets';
import { GOOGLE_SHEETS_API_KEY } from 'utils/constants';

export const useGoogleSheetsData = (sheetId: string) => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: GOOGLE_SHEETS_API_KEY,
    sheetId,
  });

  if (loading) {
    console.log('loading....');
  }

  if (error) {
    console.log('Error!');
  }

  return { data, loading, error };
};
