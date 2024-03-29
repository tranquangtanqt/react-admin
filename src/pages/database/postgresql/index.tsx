import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';
import { cardData } from './data';

export const DatabasePostgresql = () => {
  return (
    <>
      <PageTitle title="Database Postgresql"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};
