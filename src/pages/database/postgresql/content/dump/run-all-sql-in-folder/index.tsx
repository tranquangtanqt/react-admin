import { PageTitle } from 'components/modules/page-title';
import Code from 'components/modules/code';

export const DatabasePostgresqlRunAllSqlInAFolder = () => {
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
            <p>Chuyển từ scram-sha-256 {'->'} trust (chạy xong nhớ undo)</p>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 mt-2">
          <b>3. Copy file .bat vào folder chứa sql chỉ định, rồi chạy</b>
        </div>
        <div className="col-12 col-sm-12 col-md-12 mt-2">
          <hr />
          <b>*** Cách 2</b>
          <div className="tab-1">
            <Code
              code={`set PATH=C:\\Program Files\\PostgreSQL\\12\\bin;%PATH%
pushd %PATH%

@set PGHOME=C:\\Program Files\\PostgreSQL\\12\\
chcp 65001
set folderScript=D:\\Script

pushd %folderScript%
set databaseName=db-name
set PGPASSWORD=postgres

@echo off

FOR /R %folderScript% %%F IN (*.sql) DO (
  ECHO "%%F" 
  psql -h 192.168.111.222 -d %databaseName% -p 5432 -U postgres -f %%F>>log.txt
)

echo %0
pause`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
