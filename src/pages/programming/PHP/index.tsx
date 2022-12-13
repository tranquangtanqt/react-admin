import { PageTitle } from "../../../components/modules/pageTitle";
import { CardList } from "../../../components/modules/cardList";

export const ProgrammingPHP = () => {
  const cardData = [
    {
      title: "Convert",
      links: [
        {
          text: "Chuyển đổi Datetime",
          path: "/programming-php/convert/convert-datetime",
        },
        {
          text: "Chuyển chuỗi Unicode thành chuỗi không dấu",
          path: "/programming-php/convert/convert-unicode",
        },
        {
          text: "Cắt chuỗi với dấu ba chấm (ellipses)",
          path: "/programming-php/convert/substring-ellipses",
        },
        {
          text: "Xóa tệp",
          path: "/programming-php/convert/delete-file",
        },
      ],
    },
    {
      title: "Laravel",
      links: [
        {
          text: "Cài đặt font cho dompdf",
          path: "/programming-php/lavavel/install-font-dompdf",
        }
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
