import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';
import { cardData } from './data';

export const Software = () => {
  return (
    <>
      <PageTitle title="Software"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};
