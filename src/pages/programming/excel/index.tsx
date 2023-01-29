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
      title: "Sort và Filter",
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
          text: "Hoán đổi dữ liệu 2 ô",
          path: "/programming-excel/tips/swap-data-two-cell",
        },
        {
          text: "Tô màu dòng xen kẽ",
          path: "/programming-excel/tips/color-row-of-table",
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