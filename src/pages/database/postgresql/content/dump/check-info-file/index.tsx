import { PageTitle } from 'components/modules/page-title';
import Code from 'components/modules/code';

export const DatabasePostgresqlCheckInfoFileDump = () => {
  return (
    <>
      <PageTitle title="Run All Sql In A Folder"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>Open command line</p>
            <Code
              code={`pg_restore -l file_dump
              
pg_restore -l C:\\Users\\tantq\\Desktop\\abcd.dmp>test.txt`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
