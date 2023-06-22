import { DatabaseOracleChangeLanguageOracleSQLDeveloper } from '../content/change-language-oracle-sql-developer';
import { DatabaseOracleImportDump } from '../content/import-dump-oracle';
import { DatabaseOracleDumpFull } from '../content/import-dump-oracle/dumpFull';
import { DatabaseOracleListenerAndTnsnames } from '../content/listener-and-tnsnames';
import { DatabaseOracleJoinPartition } from '../content/partition/join-partition';
import { DatabaseOracleSqltextSessionProcess } from '../content/sqltext-session-process';
import { DatabaseOracleTipsSQLDeveloper } from '../content/tips-sql-developer';
import { DatabaseOraclePasswordHasExpired } from '../content/tips/password-has-expired';
import { DatabaseOracleString } from '../content/tips/string';
import { DatabseOracleSystem } from '../content/tips/system';

export const mapContent = new Map();
mapContent.set(
  'change-language-oracle-sql-developer',
  <DatabaseOracleChangeLanguageOracleSQLDeveloper />,
);
mapContent.set('tips-sql-developer', <DatabaseOracleTipsSQLDeveloper />);
mapContent.set('dump-full', <DatabaseOracleDumpFull />);
mapContent.set('import-dump', <DatabaseOracleImportDump />);
mapContent.set('tips-system', <DatabseOracleSystem />);
mapContent.set('listener-and-tnsnames', <DatabaseOracleListenerAndTnsnames />);
mapContent.set(
  'sql-text-session-process',
  <DatabaseOracleSqltextSessionProcess />,
);
mapContent.set(
  'the-password-has-expired',
  <DatabaseOraclePasswordHasExpired />,
);
mapContent.set('tips-string', <DatabaseOracleString />);
mapContent.set('join-partition', <DatabaseOracleJoinPartition />);

export const cardData = [
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
        path: '/database/oracle/tips-system',
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
        path: '/database/oracle/tips-string',
      },
    ],
  },
  {
    title: 'Partition',
    links: [
      {
        text: 'Join table use partition',
        path: '/database/oracle/join-partition',
      },
    ],
  },
];
