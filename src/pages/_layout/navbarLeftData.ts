export const NAVBAR_LEFT = [
  {
    id: 0,
    active: true,
    open: false,
    link: "",
    text: "Home",
    linkClass: "dropdown-toggle collapsed",
    ulClass: "collapse list-unstyled",
    children: [
      {
        id: 0,
        link: "",
        text: "Home1",
        active: false,
      },
      {
        id: 1,
        link: "",
        text: "Home2",
        active: false,
      },
      {
        id: 2,
        link: "",
        text: "Home3",
        active: false,
      },
    ],
  },
  {
    id: 1,
    active: false,
    link: "",
    text: "No Home",
    children: [],
  },
  {
    id: 2,
    active: false,
    open: false,
    link: "",
    text: "HomeB",
    linkClass: "dropdown-toggle collapsed",
    ulClass: "collapse list-unstyled",
    children: [
      {
        id: 0,
        link: "",
        text: "Home4",
        active: false,
      },
      {
        id: 1,
        link: "",
        text: "Home5",
        active: false,
      },
      {
        id: 2,
        link: "",
        text: "Home6",
        active: false,
      },
    ],
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
