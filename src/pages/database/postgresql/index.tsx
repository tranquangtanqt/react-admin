import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';

export const DatabasePostgresql = () => {
  const cardData = [
    {
      title: 'General',
      links: [
        {
          text: 'Configure PostgreSQL to accept all incoming connections',
          path: '/database/postgresql/general/config-pghba',
        },
        {
          text: 'Tip and Tricks 1',
          path: '/tutorial/postgreSQL/chapter28',
        },
      ],
    },
    {
      title: 'Table',
      links: [
        {
          text: 'General',
          path: '/database/postgresql/table/general',
        },
      ],
    },
    {
      title: 'Dump',
      links: [
        {
          text: 'Run all SQL in a folder',
          path: '/database/postgresql/dump/run-all-sql-in-folder',
        },
        {
          text: 'Check info file dump',
          path: '/database/postgresql/dump/check-info-file-dump',
        },
      ],
    },
  ];
  return (
    <>
      <PageTitle title="Database Postgresql"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};
