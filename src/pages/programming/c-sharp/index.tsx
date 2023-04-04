import { CardList } from "../../../components/modules/card-list";
import { PageTitle } from "../../../components/modules/page-title";

export const ProgrammingCSharp = () => {
  const cardData = [
    {
      title: "Coding",
      links: [
        {
          text: "Name Control Winform",
          path: "/programming-csharp/name-control-winform",
        },
      ],
    },
    {
      title: "File",
      links: [
        {
          text: "Get all file in folder",
          path: "/programming-csharp/get-all-file-in-folder",
        },
        {
          text: "Read file excel",
          path: "/programming-csharp/read-file-excel",
        },
      ],
    },
    {
      title: "Database",
      links: [
        {
          text: "Connect and select Postgresql",
          path: "/programming-csharp/connect-postgresql",
        },
        {
          text: "Connect and select Oracle",
          path: "/programming-csharp/connect-oracle",
        },
      ],
    },
    {
      title: "Library",
      links: [
        {
          text: "EPPLUS",
          path: "/programming-csharp/ep-plus",
        },
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
