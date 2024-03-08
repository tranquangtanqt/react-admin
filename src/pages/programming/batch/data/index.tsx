import { ProgrammBatchGetAllFolder } from '../content/get-all-folder';
import { ProgrammBatchIfElse } from '../content/if-else';
import { ProgramBatchStartEndProgram } from '../content/start-end-program';

export const mapContent = new Map();
mapContent.set('if-else', <ProgrammBatchIfElse />);
mapContent.set('start-end-program', <ProgramBatchStartEndProgram />);
mapContent.set('get-all-folder', <ProgrammBatchGetAllFolder />);

export const cardData = [
  {
    title: 'Common',
    links: [
      {
        text: 'If...Else...',
        path: '/programming/batch/if-else',
      },
      {
        text: 'Start, end program',
        path: '/programming/batch/start-end-program',
      },
      {
        text: 'Get all folder',
        path: '/programming/batch/get-all-folder',
      },
    ],
  },
];
