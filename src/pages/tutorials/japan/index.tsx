import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';
import japanLessonData from './data/lesson.data';

export const TutorialJapan = () => {
  const cardData = [
    {
      title: 'Từ vựng Nihongo 1 - 15',
      links: japanLessonData.slice(0, 15),
    },
    {
      title: 'Từ vựng Nihongo 16 - 25',
      links: japanLessonData.slice(15, 25),
    },
    {
      title: 'Từ vựng Nihongo chung',
      links: japanLessonData.slice(25, 32),
    },
    {
      title: 'Từ vựng Kanji',
      links: japanLessonData.slice(32, 33),
    },
  ];

  return (
    <>
      <PageTitle title="PostgreSQL"></PageTitle>
      <div className="row">
        <CardList cardData={cardData} startWith={-1}></CardList>
      </div>
    </>
  );
};
