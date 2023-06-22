import { ProgramCSharpConnectOracle } from '../content/connect-oracle';
import { ProgramCSharpConnectPostgresql } from '../content/connect-postgresql';
import { ProgramCSharpEPPlus } from '../content/epplus';
import { ProgramCSharpGetAllFileInFolder } from '../content/get-all-file-in-folder';
import { ProgramCSharpNameControlWinform } from '../content/name-control-winform';
import { ProgramCSharpReadFileExcel } from '../content/read-file-excel';

export const mapContent = new Map();
mapContent.set('connect-oracle', <ProgramCSharpConnectOracle />);
mapContent.set('name-control-winform', <ProgramCSharpNameControlWinform />);
mapContent.set('get-all-file-in-folder', <ProgramCSharpGetAllFileInFolder />);
mapContent.set('read-file-excel', <ProgramCSharpReadFileExcel />);
mapContent.set('connect-postgresql', <ProgramCSharpConnectPostgresql />);
mapContent.set('ep-plus', <ProgramCSharpEPPlus />);

export const cardData = [
  {
    title: 'Coding',
    links: [
      {
        text: 'Name Control Winform',
        path: '/programming/csharp/name-control-winform',
      },
    ],
  },
  {
    title: 'File',
    links: [
      {
        text: 'Get all file in folder',
        path: '/programming/csharp/get-all-file-in-folder',
      },
      {
        text: 'Read file excel',
        path: '/programming/csharp/read-file-excel',
      },
    ],
  },
  {
    title: 'Database',
    links: [
      {
        text: 'Connect and select Postgresql',
        path: '/programming/csharp/connect-postgresql',
      },
      {
        text: 'Connect and select Oracle',
        path: '/programming/csharp/connect-oracle',
      },
    ],
  },
  {
    title: 'Library',
    links: [
      {
        text: 'EPPLUS',
        path: '/programming/csharp/ep-plus',
      },
    ],
  },
];
