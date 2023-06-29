import { SoftwareDockerIntro } from '../content/docker/intro';
import { SoftwareDockerMongo } from '../content/docker/mongo';
import { SoftwareDockerPostgresql } from '../content/docker/postgresql';
import { SoftwareDockerSQLServer } from '../content/docker/sqlserver';
import { SoftwareVisualStudioCodeAddHotkey } from '../content/visual-studio-code/addHotkey';
import { SoftwareVisualStudioCodeExtention } from '../content/visual-studio-code/extention';

export const mapContent = new Map();
mapContent.set('add-hotkey', <SoftwareVisualStudioCodeAddHotkey />);
mapContent.set('extention', <SoftwareVisualStudioCodeExtention />);
mapContent.set('postgresql', <SoftwareDockerPostgresql />);
mapContent.set('sql-server', <SoftwareDockerSQLServer />);
mapContent.set('intro', <SoftwareDockerIntro />);
mapContent.set('mongo', <SoftwareDockerMongo />);

export const cardData = [
  {
    title: 'Visual Studio Code',
    links: [
      {
        text: 'Extention',
        path: '/software/visual-studio-code/extention',
      },
      {
        text: 'Add hotkey',
        path: '/software/visual-studio-code/add-hotkey',
      },
    ],
  },
  {
    title: 'Docker',
    links: [
      {
        text: 'Giới thiệu docker',
        path: '/software/docker/intro',
      },
      {
        text: 'Chạy Postgresql trong Docker container',
        path: '/software/docker/postgresql',
      },
      {
        text: 'Restore database SQL Server',
        path: '/software/docker/sql-server',
      },
      {
        text: 'Chạy mongo database trong Docker container',
        path: '/software/docker/mongo',
      },
    ],
  },
];
