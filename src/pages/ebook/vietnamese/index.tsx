import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';
import cleanCodeChapter from './clean-code/_chapter';

export const EbookVietnamese = () => {
  const cardData = [
    {
      title: 'Clean code',
      links: cleanCodeChapter,
    },
  ];
  return (
    <>
      <PageTitle title="Sách tiếng Việt"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};
