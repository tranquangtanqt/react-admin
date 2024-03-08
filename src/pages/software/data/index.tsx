import { SoftwareDockerIntro } from '../content/docker/intro';
import { SoftwareDockerMongo } from '../content/docker/mongo';
import { SoftwareDockerPostgresql } from '../content/docker/postgresql';
import { SoftwareDockerSQLServer } from '../content/docker/sqlserver';
import { SoftwareNotepadRecordMacro } from '../content/notepad/record-macro';
import { SoftwareNotepadReplaceFromCharacterToEnd } from '../content/notepad/replace-from-character-to-end';
import { SoftwareVisualStudioCodeAddHotkey } from '../content/visual-studio-code/addHotkey';
import { SoftwareVisualStudioCodeExtention } from '../content/visual-studio-code/extention';

export const mapContent = new Map();
mapContent.set('vscode-add-hotkey', <SoftwareVisualStudioCodeAddHotkey />);
mapContent.set('vscode-extention', <SoftwareVisualStudioCodeExtention />);
mapContent.set('docker-postgresql', <SoftwareDockerPostgresql />);
mapContent.set('docker-sql-server', <SoftwareDockerSQLServer />);
mapContent.set('docker-intro', <SoftwareDockerIntro />);
mapContent.set('docker-mongo', <SoftwareDockerMongo />);
mapContent.set('notepad-record-macro', <SoftwareNotepadRecordMacro />);
mapContent.set(
  'replace-from-character-to-end',
  <SoftwareNotepadReplaceFromCharacterToEnd />,
);

export const cardData = [
  {
    title: 'Visual Studio Code',
    links: [
      {
        text: 'Extention',
        path: '/software/visual-studio-code/vscode-extention',
      },
      {
        text: 'Add hotkey',
        path: '/software/visual-studio-code/vscode-add-hotkey',
      },
    ],
  },
  {
    title: 'Docker',
    links: [
      {
        text: 'Giới thiệu docker',
        path: '/software/docker/docker-intro',
      },
      {
        text: 'Chạy Postgresql trong Docker container',
        path: '/software/docker/docker-postgresql',
      },
      {
        text: 'Restore database SQL Server',
        path: '/software/docker/docker-sql-server',
      },
      {
        text: 'Chạy mongo database trong Docker container',
        path: '/software/docker/docker-mongo',
      },
    ],
  },
  {
    title: 'Notepad++',
    links: [
      {
        text: 'Record Macro - Multi replace',
        path: '/software/notepad/notepad-record-macro',
      },
      {
        text: 'Replace From Character To End',
        path: '/software/notepad/replace-from-character-to-end',
      },
    ],
  },
];
