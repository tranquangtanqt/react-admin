import Code from '../../../../../components/modules/code';
import { PageTitle } from '../../../../../components/modules/page-title';

export const TutorialPostgreSQLChapter27 = () => {
  return (
    <>
      <PageTitle title="27. EXTENSION dblink and postgres_fdw"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Extention FDW</b>
          <div className="tab-1">
            <p>
              FDW is an implimentation of dblink it is more helpful, so to use
              it:
            </p>
          </div>
          <div className="tab-2">
            <p>1. Create an extention:</p>
          </div>
          <div className="tab-2">
            <Code code={`CREATE EXTENSION postgres_fdw;`} language="sql" />
          </div>
          <div className="tab-2">
            <p>2. Create SERVER:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE SERVER name_srv FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'hostname', dbname 'bd_name', port '5432');`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>3. Create user mapping for postgres server</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE USER MAPPING FOR postgres SERVER name_srv OPTIONS(USER 'postgres', PASSWORD 'password');`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>4. Create foreign table:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE FOREIGN TABLE table_foreign (id INTEGER, code CHARACTER VARYING)
SERVER name_srv OPTIONS(schema_name 'schema', table_name 'table');`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>5. use this foreign table like it is in your database:</p>
          </div>
          <div className="tab-2">
            <Code code={`SELECT * FROM table_foreign;`} language="sql" />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Foreign Data Wrapper</b>
          <div className="tab-1">
            <p>
              To access complete schema of server db instead of single table.
              Follow below steps:
            </p>
          </div>
          <div className="tab-2">
            <p>1. Create EXTENSION</p>
          </div>
          <div className="tab-2">
            <Code code={`CREATE EXTENSION postgres_fdw;`} language="sql" />
          </div>
          <div className="tab-2">
            <p>2. Create SERVER:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE SERVER server_name FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'host_ip',
    dbname 'db_name', port 'port_number');`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>3. Create USER MAPPING:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE USER MAPPING FOR CURRENT_USER
SERVER server_name
OPTIONS (USER 'user_name', PASSWORD 'password');`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>4. Create new schema to access schema of server DB:</p>
          </div>
          <div className="tab-2">
            <Code code={`CREATE SCHEMA schema_name;`} language="sql" />
          </div>
          <div className="tab-2">
            <p>5. Import server schema:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`IMPORT FOREIGN SCHEMA schema_name_to_import_from_remote_db
FROM SERVER server_name
INTO schema_name;`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>6. Access any table of server schema:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT * FROM schema_name.table_name;`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>This can be used to access multiple schema of remote DB.</p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Extention dblink</b>
          <div className="tab-1">
            <p>
              dblink EXTENSION is a technique to connect another database and
              make operation of this database so to do that you need:
            </p>
          </div>
          <div className="tab-2">
            <p>1-Create a dblink extention:</p>
          </div>
          <div className="tab-2">
            <Code code={`CREATE EXTENSION dblink;`} language="sql" />
          </div>
          <div className="tab-2">
            <p>2-Make your operation:</p>
          </div>
          <div className="tab-2">
            <p>
              For exemple Select some attribute from another table in another
              database:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT * FROM
dblink ('dbname = bd_distance port = 5432 host = 10.6.6.6 user = username
password = passw@rd', 'SELECT id, code FROM schema.table')
AS newTable(id INTEGER, code CHARACTER VARYING);`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
