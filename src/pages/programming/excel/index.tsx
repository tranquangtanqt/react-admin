import { CardList } from "../../../components/modules/cardList";
import { PageTitle } from "../../../components/modules/pageTitle";

export const ProgrammingExcel = () => {
  const cardData = [
    {
      title: "Title",
      links: [
        {
          text: "Characters in Excel",  
          path: "/programming-excel/characters-in-excel",
        },
      ],
    },
    {
      title: "Sort and Filter",
      links: [
        {
          text: "Filter 1",
          path: "/programming-excel/filter1",
        },
      ],
    },
    {
      title: "Tips",
      links: [
        {
          text: "Swap data two cell",
          path: "/programming-excel/swap-data-two-cell",
        },
      ],
    },
  ];
  return (
    <>
      <PageTitle title="Excel"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};