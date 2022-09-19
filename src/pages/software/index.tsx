import { CardList } from "../../components/modules/cardList";
import { PageTitle } from "../../components/modules/pageTitle";

export const Software = () => {
  const cardData = [
    {
      title: "Visua Studio Code",
      links: [
        {
          text: "Extention",
          path: "/software/visual-studio-code/extention",
        },
        {
          text: "Add hotkey",
          path: "/software/visual-studio-code/add-hotkey",
        },
      ],
    },
  ];
  return (
    <>
    <PageTitle title="Software"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};