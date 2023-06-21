import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';
import javaLessonData from './data/lesson.data';

export const TutorialJava = () => {
  const cardData = [
    {
      title: 'Lesson 1 - 10',
      links: javaLessonData.slice(0, 10),
    },
  ];

  return (
    <>
      <PageTitle title="Java"></PageTitle>
      <div className="row">
        <CardList cardData={cardData} startWith={1}></CardList>
      </div>
    </>
  );
};
