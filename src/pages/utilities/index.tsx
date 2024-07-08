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
          text: 'Repeat',
          path: '/utilities/text/repeat',
        },
        {
          text: 'Repeat 2',
          path: '/utilities/text/repeat-2',
        },
        {
          text: 'Replace',
          path: '/utilities/text/replace',
        },
        {
          text: 'To HTML Table Generator',
          path: '/utilities/text/to-html-table-generator',
        },
      ],
    },
    {
      title: 'App',
      links: [
        {
          text: 'Project Info',
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
    {
      title: 'Other',
      links: [
        {
          text: 'Vocabulary Japanese',
          path: '/utilities/japan/vocabulary',
        },
        {
          text: 'Make Json Vocabulary Japanese From Excel',
          path: '/utilities/excel/make-json-vocabulary-japanese',
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
