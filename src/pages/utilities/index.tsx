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
          path: "/utilities/textCommon",
        },
        {
          text: "Find Different Two List",
          path: "/utilities/findDifferentTwoList",
        },
        {
          text: "Find Text ColumnJP_EN",
          path: "/utilities/findTextColumnJP_EN",
        },
        {
          text: "Repeat",
          path: "/utilities/textRepeat",
        },
        {
          text: "Replace",
          path: "/utilities/textReplace",
        },
        {
          text: "Special",
          path: "/utilities/textSpecial",
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
          text: "Random Insert SQL",
          path: "/utilities/sql/random-insert-sql",
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
          path: "/utilities/todoApp",
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
