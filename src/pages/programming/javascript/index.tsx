import { PageTitle } from "../../../components/modules/pageTitle";
import { CardList } from "../../../components/modules/cardList";

export const ProgrammingJavascript = () => {
  const cardData = [
    {
      title: "Thủ thuật JavaScript",
      links: [
        {
          text: "Thủ thuật JavaScript",
          path: "/programming-javascript/tips/tips",
        },
      ],
    },
  ];
  return (
    <>
      <>
      <PageTitle title="Javascript"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
    </>
  );
};
