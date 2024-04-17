import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';

export const Utilities = () => {
  const cardData = [
    {
      title: 'File',
      links: [
        {
          text: 'List file selected',
          path: '/utilities/file/list-file-selected',
        },
        {
          text: 'Read content multi file',
          path: '/utilities/file/read-content-multi-file',
        },
        {
          text: 'Make json from excel',
          path: '/utilities/file/make-json-from-excel',
        },
      ],
    },
    {
      title: 'Text',
      links: [
        {
          text: 'Common',
          path: '/utilities/text/common',
        },
        {
          text: 'Find Different Two List',
          path: '/utilities/text/find-different-two-list',
        },
        {
          text: 'Find Different Two List 1',
          path: '/utilities/text/find-different-two-list-1',
        },
        {
          text: 'Find Text ColumnJP_EN',
          path: '/utilities/text/find-text-column-jp-en',
        },
        {
          text: 'Repeat',
          path: '/utilities/text/repeat',
        },
        {
          text: 'Replace',
          path: '/utilities/text/replace',
        },
        {
          text: 'Tiny MCE',
          path: '/utilities/tinyMCE',
        },
      ],
    },
    {
      title: 'Japan',
      links: [
        {
          text: 'Vocabulary',
          path: '/utilities/japan/vocabulary',
        },
      ],
    },
    {
      title: 'App',
      links: [
        {
          text: 'Project Info',
          path: '/utilities/app/project-info-google-sheet',
        },
        {
          text: 'Project Info From Json Data',
          path: '/utilities/app/project-info',
        },
        {
          text: 'Search table',
          path: '/utilities/app/search-table',
        },
        {
          text: 'TinyMCE_1',
          path: 'https://codepen.io/tinymce/pen/QWNpjbg',
        },
        {
          text: 'TinyMCE_2',
          path: 'https://codepen.io/tinymce/pen/NGegZK',
        },
      ],
    },
    {
      title: 'Excel',
      links: [
        {
          text: 'Make Json Vocabulary Japanese',
          path: '/utilities/excel/make-json-vocabulary-japanese',
        },
      ],
    },
    {
      title: 'SQL',
      links: [
        {
          text: 'Make Insert SQL',
          path: '/utilities/sql/make-insert',
        },
        {
          text: 'Make Insert SQL from procedure',
          path: '/utilities/sql/make-insert-from-procedure',
        },
        {
          text: 'Create Table From Excel',
          path: '/utilities/sql/create-table-from-excel',
        },
      ],
    },
  ];

  return (
    <>
      <PageTitle title="Utilities"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};
