import { PageTitle } from 'components/modules/page-title';
import Code from 'components/modules/code';

export const DatabasePostgresqlDumpAndRestore = () => {
  return (
    <>
      <PageTitle title="Dump and restore database"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <b>dump.bat</b>
            <Code
              code={`@echo off
SET PATH=C:\\Program Files\\PostgreSQL\\12\\bin;%PATH%
pg_dump -v -Fc -f file_dump.dmp -h 192.168.111.22 -p 5432 -U user_name -d database_name > file_dump_yyyymmdd.log 2>&1
pause`}
              language="sql"
            />

            <b>restore.bat</b>
            <Code
              code={`@echo off
SET PATH=C:\\Program Files\\PostgreSQL\\12\\bin;%PATH%
SET PGPASSWORD=654321
pg_restore -v -d database_name -h localhost -p 5432 -U postgres "D:\\file_dump.dmp" > "D:\\file_dump_yyyymmdd.log" 2>&1
pause`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
