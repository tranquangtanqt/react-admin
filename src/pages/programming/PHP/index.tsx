import { PageTitle } from "../../../components/modules/pageTitle";
import { CardList } from "../../../components/modules/cardList";

export const ProgrammingPHP = () => {
  const cardData = [
    {
      title: "Convert",
      links: [
        {
          text: "Chuyển đổi Datetime",
          path: "/programming-php/convert-datetime",
        },
        {
          text: "Chuyển chuỗi Unicode thành chuỗi không dấu",
          path: "/programming-php/convert-unicode",
        },
        {
          text: "Cắt chuỗi với dấu ba chấm (ellipses)",
          path: "/programming-php/substring-ellipses",
        },
        {
          text: "Xóa tệp",
          path: "/programming-php/delete-file",
        },
      ],
    },
  ];
  return (
    <>
      <>
      <PageTitle title="PHP"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
    </>
  );
};
