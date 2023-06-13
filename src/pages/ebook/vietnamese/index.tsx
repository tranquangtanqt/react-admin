import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';
import cleanCodeChapter from './clean-code/data/_chapter';
import headFirstDesignPatternsChapter from './head-first-design-patterns/data/_chapter';

export const EbookVietnamese = () => {
  const cardData = [
    {
      title: 'Clean code',
      links: cleanCodeChapter,
    },
    {
      title: 'Head first Design Patterns',
      links: headFirstDesignPatternsChapter,
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
