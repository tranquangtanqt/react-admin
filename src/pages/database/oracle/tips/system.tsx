import Code from '../../../../components/modules/code';
import { PageTitle } from '../../../../components/modules/page-title';

export const OracleSystem = () => {
  return (
    <>
      <PageTitle title="Tips System"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Kết nối DB</b>
          <div className="tab-1">
            <Code
              code={`sqlplus myusername/mypassword@host/ORCL`}
              language="sql"
            />
          </div>
          <b>2. Hiển thị toàn bộ comments của table và view</b>
          <div className="tab-1">
            <Code
              code={`SELECT * FROM all_tab_comments WHERE comments LIKE '%%';`}
              language="sql"
            />
          </div>
          <b>3. Hiển thị toàn bộ comments của column</b>
          <div className="tab-1">
            <Code
              code={`SELECT * FROM all_col_comments WHERE table_name LIKE '%%' OR comments LIKE '%%'`}
              language="sql"
            />
          </div>
          <b>4. Thư mục lưu file tablespace</b>
          <div className="tab-1">
            <Code
              code={`D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1\\database`}
              language="sql"
            />
          </div>
          <b>5. Kiểm tra user đang sử dụng</b>
          <div className="tab-1">
            <Code code={`SELECT user FROM dual`} language="sql" />
          </div>
          <b>6. Kiểm tra dung lượng DB</b>
          <div className="tab-1">
            <Code
              code={`SELECT SUM(bytes)/1024/1024/1024  FROM user_segments
SELECT SUM(bytes)/1024/1024 FROM user_segments where segment_name='FCM_RESOURCE'`}
              language="sql"
            />
          </div>
          <b>7. Hiển thị tất cả các cột</b>
          <div className="tab-1">
            <Code
              code={`SELECT table_name, column_name, data_type, data_length FROM USER_TAB_COLUMNS`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
