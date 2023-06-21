import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';
import cSharpLessonData from './data/lesson.data';

export const TutorialCSharp = () => {
  const cardData = [
    {
      title: 'Lesson 1 - 10',
      links: cSharpLessonData.slice(0, 10),
    },
  ];

  return (
    <>
      <PageTitle title="CSharp"></PageTitle>
      <div className="row">
        <CardList cardData={cardData} startWith={-1}></CardList>
      </div>
    </>
  );
};
