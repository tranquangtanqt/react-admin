import { CardList } from "../../../components/modules/card-list";
import { PageTitle } from "../../../components/modules/page-title";

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
