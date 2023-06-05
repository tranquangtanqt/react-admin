import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';

export const DatabaseOracle = () => {
  const cardData = [
    {
      title: 'Oracle SQL Developer',
      links: [
        {
          text: 'Change Language Oracle SQL Developer',
          path: '/database/oracle/change-language-oracle-sql-developer',
        },
        {
          text: 'Tips for oracle SQL developer',
          path: '/database/oracle/tips-sql-developer',
        },
      ],
    },
    {
      title: 'Dump',
      links: [
        {
          text: 'Import file dump Oracle Full',
          path: '/database/oracle/dump-full',
        },
        {
          text: 'Import file dump Oracle',
          path: '/database/oracle/import-dump',
        },
      ],
    },
    {
      title: 'System',
      links: [
        {
          text: 'Tips system',
          path: '/database/oracle/tips/system',
        },
        {
          text: 'Listener and Tnsnames',
          path: '/database/oracle/listener-and-tnsnames',
        },
        {
          text: 'Sqltext Session Process',
          path: '/database/oracle/sql-text-session-process',
        },
        {
          text: 'The password has expired oracle',
          path: '/database/oracle/the-password-has-expired',
        },
      ],
    },
    {
      title: 'Tips',
      links: [
        {
          text: 'String',
          path: '/database/oracle/tips/string',
        },
      ],
    },
  ];
  return (
    <>
      <PageTitle title="Database Oracle"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};
