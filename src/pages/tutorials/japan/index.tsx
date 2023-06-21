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
      links: [
        {
          text: 'Chung',
          path: '/tutorial/japan/vocabulary/lesson-common',
        },
        {
          text: 'Chuyên môn',
          path: '/tutorial/japan/vocabulary/lesson-specialize',
        },
        {
          text: 'Nghề nghiệp',
          path: '/tutorial/japan/vocabulary/lesson-job',
        },
        {
          text: 'Thức ăn',
          path: '/tutorial/japan/vocabulary/lesson-food',
        },
        {
          text: 'Món ăn',
          path: '/tutorial/japan/vocabulary/lesson-food1',
        },
        {
          text: 'Gia vị',
          path: '/tutorial/japan/vocabulary/lesson-spice',
        },
        {
          text: 'Thân thể',
          path: '/tutorial/japan/vocabulary/lesson-body',
        },
      ],
    },
    {
      title: 'Từ vựng Kanji',
      links: [
        {
          text: 'N5 - 01',
          path: '/tutorial/japan/vocabulary/kanji/N5-01',
        },
      ],
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
