import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';

export const EbookVietnamese = () => {
  const cardData = [
    {
      title: 'Clean code',
      links: [
        {
          text: 'Chương 1: Code sạch',
          path: '/ebook/vietnamese/clean-code/chapter-1',
        },
        {
          text: 'Chương 2',
          path: '/ebook/vietnamese/clean-code/chapter-2',
        },
      ],
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
