import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';
import postgresLessonData from './data/lesson.data';

export const TutorialPostgreSQL = () => {
  const cardData = [
    {
      title: 'Chapter 1 - 5',
      links: postgresLessonData.slice(0, 5),
    },
    {
      title: 'Chapter 6 - 10',
      links: postgresLessonData.slice(5, 10),
    },
    {
      title: 'Chapter 11 - 15',
      links: postgresLessonData.slice(10, 15),
    },
    {
      title: 'Chapter 16 - 20',
      links: postgresLessonData.slice(15, 20),
    },
    {
      title: 'Chapter 21 - 25',
      links: postgresLessonData.slice(20, 25),
    },
    {
      title: 'Chapter 26 - 28',
      links: postgresLessonData.slice(25, 28),
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
