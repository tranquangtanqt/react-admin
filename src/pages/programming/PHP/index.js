import { PageTitle } from "../../../components/modules/pageTitle";
import { CardList } from "../../../components/modules/cardList";

export const ProgrammingPHP = () => {
  const cardData = [
    {
      title: "Convert",
      links: [
        {
          text: "Chuyển đổi Datetime",
          path: "/programming-php/convertDatetimen",
        },
        {
          text: "Chuyển chuỗi Unicode thành chuỗi không dấu",
          path: "/programming-php/convertUnicode",
        },
        {
          text: "Cắt chuỗi với dấu ba chấm (ellipses)",
          path: "/programming-php/substringEllipses",
        },
        {
          text: "Xóa tệp",
          path: "/programming-php/phpDeleteFile",
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
