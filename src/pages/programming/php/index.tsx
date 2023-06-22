import { PageTitle } from 'components/modules/page-title';
import { CardList } from 'components/modules/card-list';
import { cardData } from './data';

export const ProgrammingPHP = () => {
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
