import { PageTitle } from "../../../../components/modules/page-title";
import Code from "../../../../components/modules/code";

export const PostgresqlRunAllSqlInAFolder = () => {
  return (
    <>
      <PageTitle title="Run All Sql In A Folder"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>
            <b>1. Tạo file .bat</b>
          </p>
          <div className="tab-1">
            <Code
              code={`for %%G in (*.sql) do psql -h localhost -d tpldb -U tpl -p 5433 -f "%%G"
pause`}
              language="sql"
            />
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 mt-2">
          <b>2. Chỉnh sửa file pg_hba.conf</b>
          <div className="tab-1">
            <p>Chuyển từ scram-sha-256 {"->"} trust (chạy xong nhớ undo)</p>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 mt-2">
          <b>3. Copy file .bat vào folder chứa sql chỉ định, rồi chạy</b>
        </div>
      </div>
    </>
  );
};
