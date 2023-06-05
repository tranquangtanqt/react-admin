import { PageTitle } from '../../../../../components/modules/page-title';
import Code from '../../../../../components/modules/code';

export const PostgresqlTableGeneral = () => {
  const data = [
    {
      title: 'Get size in folder',
    },
  ];

  return (
    <>
      <PageTitle title="PostgresqlTableGeneral"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>
            <b>Get size in folder</b>
          </p>
          <div className="tab-1">
            <Code
              code={`SELECT
  table_name
  , pg_size_pretty(pg_relation_size(quote_ident(table_name)))
  , pg_relation_size(quote_ident(table_name)) 
FROM
  information_schema.tables 
WHERE
  table_schema = 'public' 
ORDER BY
  3 desc;`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
