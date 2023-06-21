import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';
import netAngularLessonData from './data/lesson.data';

export const TutorialNetAngular = () => {
  const cardData = [
    {
      title: 'Creating the .Net API Project',
      links: netAngularLessonData.slice(0, 5),
    },
    {
      title: 'Creating the Angular application',
      links: netAngularLessonData.slice(5, 8),
    },
    {
      title: 'Authentication basics',
      links: netAngularLessonData.slice(8, 9),
    },
  ];

  return (
    <>
      <PageTitle title="Net-Angular"></PageTitle>
      <div className="row">
        <CardList cardData={cardData} startWith={-1}></CardList>
      </div>
    </>
  );
};
