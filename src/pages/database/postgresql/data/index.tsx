import { DatabasePostgresqlCheckInfoFileDump } from '../content/dump/check-info-file';
import { DatabasePostgresqlDumpAndRestore } from '../content/dump/dump-restore';
import { DatabasePostgresqlRunAllSqlInAFolder } from '../content/dump/run-all-sql-in-folder';
import { DatabasePostgresqlConfigPghba } from '../content/general/config-pghba';
import { DatabasePostgresqlGenarateUniqueString } from '../content/table/genarate-unique-string';
import { DatabasePostgresqlTableGeneral } from '../content/table/general';

export const mapContent = new Map();
mapContent.set('general-config-pghba', <DatabasePostgresqlConfigPghba />);
mapContent.set('table-general', <DatabasePostgresqlTableGeneral />);
mapContent.set(
  'dump-run-all-sql-in-folder',
  <DatabasePostgresqlRunAllSqlInAFolder />,
);
mapContent.set(
  'dump-check-info-file-dump',
  <DatabasePostgresqlCheckInfoFileDump />,
);
mapContent.set('dump-and-restore', <DatabasePostgresqlDumpAndRestore />);
mapContent.set(
  'generate-unique-string-per-record',
  <DatabasePostgresqlGenarateUniqueString />,
);

export const cardData = [
  {
    title: 'General',
    links: [
      {
        text: 'Configure PostgreSQL to accept all incoming connections',
        path: '/database/postgresql/general-config-pghba',
      },
      {
        text: 'Tip and Tricks 1',
        path: '/tutorial/postgreSQL/lesson/28',
      },
    ],
  },
  {
    title: 'Table',
    links: [
      {
        text: 'General',
        path: '/database/postgresql/table-general',
      },
      {
        text: 'Generate a unique string per record in a table ',
        path: '/database/postgresql/generate-unique-string-per-record',
      },
    ],
  },
  {
    title: 'Dump',
    links: [
      {
        text: 'Dump and restore database',
        path: '/database/postgresql/dump-and-restore',
      },
      {
        text: 'Run all SQL in a folder',
        path: '/database/postgresql/dump-run-all-sql-in-folder',
      },
      {
        text: 'Check info file dump',
        path: '/database/postgresql/dump-check-info-file-dump',
      },
    ],
  },
];
