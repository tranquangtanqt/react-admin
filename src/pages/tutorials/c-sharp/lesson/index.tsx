import { useParams } from 'react-router-dom';
import { TutorialCSharpLesson1 } from './1-10/lesson-1';
import { TutorialCSharpLesson2 } from './1-10/lesson-2';
import { PageTitle } from 'components/modules/page-title';
import cSharpLessonData from '../data/lesson.data';

export const TutorialCSharpLesson = () => {
  const params = useParams();
  const lesson: string | undefined = params.lesson;
  let title: String = '';

  if (cSharpLessonData[Number(lesson) - 1]) {
    title = cSharpLessonData[Number(lesson) - 1].text;
  }

  const arrLessonElement: JSX.Element[] = [
    <TutorialCSharpLesson1 />,
    <TutorialCSharpLesson2 />,
  ];

  return (
    <>
      <PageTitle title={title.toString()}></PageTitle>
      {arrLessonElement[Number(lesson)]}
    </>
  );
};
