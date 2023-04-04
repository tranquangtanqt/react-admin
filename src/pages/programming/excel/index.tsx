import { CardList } from "../../../components/modules/card-list";
import { PageTitle } from "../../../components/modules/page-title";

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
        {
          text: "Làm lịch chấm công",
          path: "/programming-excel/tips/timekeeping-calendar",
        },
        {
          text: "Tô màu ngày nghỉ tự động",
          path: "/programming-excel/tips/color-column-holiday",
        },
        {
          text: "Chuyển đổi ngày sinh sang tuổi",
          path: "/programming-excel/tips/convert-day-of-birth-to-age",
        },
      ],
    },
    {
      title: "VBA",
      links: [
        {
          text: "001. Tạo hyperlink đến toàn bộ các sheet của workbook",
          path: "/programming-excel/vba/001",
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