export const NAVBAR_LEFT = [
  {
    id: 0,
    active: true,
    open: false,
    link: "",
    text: "Database",
    linkClass: "dropdown-toggle collapsed",
    ulClass: "collapse list-unstyled",
    children: [
      {
        id: 0,
        link: "/database/postgresql",
        text: "PostgreSQL",
        active: false,
      },
      {
        id: 1,
        link: "/database/oracle",
        text: "Oracle",
        active: false,
      },
    ],
  },
  {
    id: 1,
    active: false,
    open: false,
    link: "",
    text: "Programming",
    linkClass: "dropdown-toggle collapsed",
    ulClass: "collapse list-unstyled",
    children: [
      {
        id: 0,
        link: "/programming-csharp",
        text: "C#",
        active: false,
      },
      {
        id: 1,
        link: "/programming-java",
        text: "Java",
        active: false,
      },
      {
        id: 2,
        link: "/programming-php",
        text: "PHP",
        active: false,
      },
      {
        id: 3,
        link: "/programming-batch",
        text: "Batch",
        active: false,
      },
    ],
  },
  {
    id: 2,
    active: false,
    link: "",
    text: "No Home",
    children: [],
  },
  {
    id: 3,
    active: false,
    open: false,
    link: "",
    text: "Sample",
    linkClass: "dropdown-toggle collapsed",
    ulClass: "collapse list-unstyled",
    children: [
      {
        id: 0,
        link: "/sample/create-content-page",
        text: "Create Page",
        active: false,
      },
    ],
  },
];
