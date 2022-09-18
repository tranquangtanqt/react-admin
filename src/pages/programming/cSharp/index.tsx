import { CardList } from "../../../components/modules/cardList";
import { PageTitle } from "../../../components/modules/pageTitle";

export const ProgrammingCSharp = () => {
  const cardData = [
    {
      title: "Coding",
      links: [
        {
          text: "Name Control Winform",
          path: "/programming-csharp/nameControlWinform",
        },
      ],
    },
    {
      title: "File",
      links: [
        {
          text: "Get all file in folder",
          path: "/programming-csharp/getAllFileInFolder",
        },
        {
          text: "Read file excel",
          path: "/programming-csharp/readFileExcel",
        },
      ],
    },
    {
      title: "Database",
      links: [
        {
          text: "Connect and select Postgresql",
          path: "/programming-csharp/connectPostgresql",
        },
        {
          text: "Connect and select Oracle",
          path: "/programming-csharp/connectOracle",
        },
      ],
    },
    {
      title: "Library",
      links: [
        {
          text: "EPPLUS",
          path: "/programming-csharp/EPPlus",
        }
      ],
    },
  ];
  return (
    <>
    <PageTitle title="C Sharp"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};

 
