// import { PageTitle } from "../../../../components/base/pageTitle";
import { PageTitle } from "../../../../components/modules/page-title";
import Code from "../../../../components/modules/code";

export const PostgresqlConfigPghba = () => {
  return (
    <>
      <PageTitle title="Database config"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>Edit pg_hba.conf</p>
          <Code
            code={`# TYPE  DATABASE        USER            ADDRESS                 METHOD
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
host    all             all             0.0.0.0/0            	md5`}
            language="sql"
          />
        </div>
      </div>
    </>
  );
};
