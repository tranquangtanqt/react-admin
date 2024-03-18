import { SoftwareDockerIntro } from '../content/docker/intro';
import { SoftwareDockerMongo } from '../content/docker/mongo';
import { SoftwareDockerPostgresql } from '../content/docker/postgresql';
import { SoftwareDockerSQLServer } from '../content/docker/sqlserver';
import { SoftwareNotepadRecordMacro } from '../content/notepad/record-macro';
import { SoftwareNotepadRemoveTextBeforeCharacter } from '../content/notepad/remove-text-before-character';
import { SoftwareNotepadRemoveTextAfterCharacter } from '../content/notepad/remove-text-after-character';
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
  'remove-text-before-character',
  <SoftwareNotepadRemoveTextBeforeCharacter />,
);
mapContent.set(
  'remove-text-after-character',
  <SoftwareNotepadRemoveTextAfterCharacter />,
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
        text: 'Remove Text Before Character',
        path: '/software/notepad/remove-text-before-character',
      },
      {
        text: 'Remove Text After Character',
        path: '/software/notepad/remove-text-after-character',
      },
    ],
  },
];
