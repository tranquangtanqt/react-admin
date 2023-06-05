import { PageTitle } from '../../../../../components/modules/page-title';
import Code from '../../../../../components/modules/code';
import { Fragment } from 'react';

export const PostgresqlTableGeneral = () => {
  const data = [
    {
      title: 'Get size in folder',
      contents: [
        {
          p: null,
          code: `SELECT
  table_name
  , pg_size_pretty(pg_relation_size(quote_ident(table_name)))
  , pg_relation_size(quote_ident(table_name)) 
FROM
  information_schema.tables 
WHERE
  table_schema = 'public' 
ORDER BY
  3 desc;`,
          language: 'sql',
        },
      ],
    },
  ];

  return (
    <>
      <PageTitle title="PostgresqlTableGeneral"></PageTitle>
      <div className="row mt-2">
        {data.map((dataVal, dataKey) => (
          <Fragment>
            <div className="col-12 col-sm-12 col-md-12" key={dataKey}>
              <p>
                <b>
                  {dataKey + 1}. {dataVal.title}
                </b>
              </p>
              {dataVal.contents.map((contentVal, contentKey) => (
                <Fragment>
                  <div className="tab-1">
                    {contentVal.p && contentVal.p}
                    {contentVal.code && (
                      <Code
                        code={contentVal.code}
                        language={contentVal.language}
                      />
                    )}
                  </div>
                </Fragment>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
