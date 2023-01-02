import { CardList } from "../../components/modules/cardList";
import { PageTitle } from "../../components/modules/pageTitle";

export const Utilities = () => {
  const cardData = [
    {
      title: "File",
      links: [
        {
          text: "List file selected",
          path: "/utilities/file/list-file-selected",
        },
        {
          text: "Read content multi file",
          path: "/utilities/file/read-content-multi-file",
        },
        {
          text: "Make json from excel",
          path: "/utilities/file/make-json-from-excel",
        },
      ],
    },
    {
      title: "Text",
      links: [
        {
          text: "Common",
          path: "/utilities/text/common",
        },
        {
          text: "Find Different Two List",
          path: "/utilities/text/find-different-two-list",
        },
        {
          text: "Find Different Two List 1",
          path: "/utilities/text/find-different-two-list-1",
        },
        {
          text: "Find Text ColumnJP_EN",
          path: "/utilities/text/find-text-column-jp-en",
        },
        {
          text: "Repeat",
          path: "/utilities/text/repeat",
        },
        {
          text: "Replace",
          path: "/utilities/text/replace",
        },
        {
          text: "Tiny MCE",
          path: "/utilities/tinyMCE",
        },
      ],
    },
    {
      title: "Japan",
      links: [
        {
          text: "Vocabulary",
          path: "/utilities/japan/vocabulary",
        },
        {
          text: "Special",
          path: "/utilities/japan/special",
        },
      ],
    },
    {
      title: "App",
      links: [
        {
          text: "Todo",
          path: "/utilities/app/todo",
        },
      ],
    },
    {
      title: "General",
      links: [
        {
          text: "GIT",
          path: "/utilities/general/git",
        },
        {
          text: "Collapse all button in git change",
          path: "/utilities/general/collapse-git",
        },
      ],
    },
    {
      title: "Excel",
      links: [
        {
          text: "Make Json Vocabulary Japanese",
          path: "/utilities/excel/make-json-vocabulary-japanese",
        },
      ],
    },
    {
      title: "SQL",
      links: [
        {
          text: "Make Insert SQL",
          path: "/utilities/sql/make-insert",
        },
        {
          text: "Make Insert SQL from procedure",
          path: "/utilities/sql/make-insert-from-procedure",
        },
        {
          text: "Create Table From Excel",
          path: "/utilities/sql/create-table-from-excel",
        },
      ],
    },
    {
      title: "English",
      links: [
        {
          text: "Special",
          path: "/utilities/english/special",
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
