import { CardList } from "../../../components/modules/cardList";
import { PageTitle } from "../../../components/modules/pageTitle";

export const DatabasePostgresql = () => {
  const cardData = [
    {
      title: "Config",
      links: [
        {
          text: "Configure PostgreSQL to accept all incoming connections",
          path: "/database/postgresql/config-pghba",
        },
      ],
    },
  ];
  return (
    <>
      <PageTitle title="Database Postgresql"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};
