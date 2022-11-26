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
          text: "Special",
          path: "/utilities/text/special",
        },
        {
          text: "Tiny MCE",
          path: "/utilities/tinyMCE",
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
      title: "App",
      links: [
        {
          text: "Todo",
          path: "/utilities/app/todo",
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
