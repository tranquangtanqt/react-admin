type Props = { loading: boolean; fromSheet: boolean };

export const AiDataSource = ({ loading, fromSheet }: Props) => (
  <div className="text-muted small mb-1">
    Nguồn dữ liệu:{' '}
    {loading
      ? 'đang tải Google Sheet...'
      : fromSheet
      ? 'Google Sheet'
      : 'dữ liệu mặc định (chưa tải được Google Sheet)'}
  </div>
);
