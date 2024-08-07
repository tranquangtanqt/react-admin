export const NAVBAR_LEFT = [
  {
    id: 0,
    active: true,
    open: false,
    link: '',
    text: 'Database',
    linkClass: 'dropdown-toggle collapsed',
    ulClass: 'collapse list-unstyled',
    children: [
      {
        id: 0,
        link: '/database/postgres',
        text: 'PostgreSQL',
        active: false,
      },
      {
        id: 1,
        link: '/database/oracle',
        text: 'Oracle',
        active: false,
      },
      {
        id: 2,
        link: '/database/sql-server',
        text: 'SQL Server',
        active: false,
      },
    ],
  },
  {
    id: 1,
    active: false,
    open: false,
    link: '',
    text: 'Ebook',
    linkClass: 'dropdown-toggle collapsed',
    ulClass: 'collapse list-unstyled',
    children: [
      {
        id: 0,
        link: '/ebook/english',
        text: 'English',
        active: false,
      },
      {
        id: 1,
        link: '/ebook/vietnamese',
        text: 'Vietnamese',
        active: false,
      },
    ],
  },
  {
    id: 2,
    active: false,
    open: false,
    link: '',
    text: 'Programming',
    linkClass: 'dropdown-toggle collapsed',
    ulClass: 'collapse list-unstyled',
    children: [
      {
        id: 0,
        link: '/programming/csharp',
        text: 'C#',
        active: false,
      },
      {
        id: 1,
        link: '/programming/java',
        text: 'Java',
        active: false,
      },
      {
        id: 2,
        link: '/programming/javascript',
        text: 'Javascript',
        active: false,
      },
      {
        id: 3,
        link: '/programming/php',
        text: 'PHP',
        active: false,
      },
      {
        id: 4,
        link: '/programming/batch',
        text: 'Batch',
        active: false,
      },
      {
        id: 5,
        link: '/programming/excel',
        text: 'Excel',
        active: false,
      },
    ],
  },
  {
    id: 3,
    active: false,
    link: '/software',
    text: 'Software',
    children: [],
  },

  {
    id: 4,
    active: false,
    open: false,
    link: '',
    text: 'Tutorials',
    linkClass: 'dropdown-toggle collapsed',
    ulClass: 'collapse list-unstyled',
    children: [
      {
        id: 1,
        link: '/tutorial/net-angular',
        text: 'Net - Angular',
        active: false,
      },
      {
        id: 2,
        link: '/tutorial/postgreSQL',
        text: 'PostgreSQL',
        active: false,
      },
      {
        id: 3,
        link: '/tutorial/laravel',
        text: 'Laravel',
        active: false,
      },
      {
        id: 4,
        link: '/tutorial/japan',
        text: 'Japan',
        active: false,
      },
    ],
  },
  {
    id: 5,
    active: false,
    open: false,
    link: 'utilities',
    text: 'Utilities',
    children: [],
  },
  {
    id: 6,
    active: false,
    open: false,
    link: 'other',
    text: 'Other',
    children: [],
  },
  {
    id: 7,
    active: false,
    open: false,
    link: '',
    text: 'Sample',
    linkClass: 'dropdown-toggle collapsed',
    ulClass: 'collapse list-unstyled',
    children: [
      {
        id: 0,
        link: '/sample/create-content-page',
        text: 'Create Page 1',
        active: false,
      },
      {
        id: 1,
        link: '/sample/content-page',
        text: 'Create page 2',
        active: false,
      },
      {
        id: 2,
        link: '/sample/monaco-editor-page',
        text: 'Monaco Editor',
        active: false,
      },
      {
        id: 3,
        link: '/sample/google-sheet',
        text: 'Google sheet',
        active: false,
      },
      {
        id: 3,
        link: '/sample/crud-google-sheet',
        text: 'CRUD Google sheet',
        active: false,
      },
    ],
  },
];
