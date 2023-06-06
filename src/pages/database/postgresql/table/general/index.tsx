import { PageTitle } from 'components/modules/page-title';
import { PageContent } from 'components/modules/page-content';
import IContent from 'utils/interface';

export const PostgresqlTableGeneral = () => {
  const data: IContent[] = [
    {
      title: 'Get size in folder',
      contents: [
        {
          code: {
            src: `SELECT
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
        },
      ],
    },
  ];

  return (
    <>
      <PageTitle title="PostgresqlTableGeneral"></PageTitle>
      <PageContent content={data}></PageContent>
    </>
  );
};
