import { useParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import javaLessonData from '../data/lesson.data';
import { TutorialJavaLesson1 } from './1-10/lesson-1';
import { TutorialJavaLesson2 } from './1-10/lesson-2';
import { TutorialJavaLesson3 } from './1-10/lesson-3';
import { TutorialJavaLesson4 } from './1-10/lesson-4';
import { TutorialJavaLesson5 } from './1-10/lesson-5';
import { TutorialJavaLesson6 } from './1-10/lesson-6';

export const TutorialJavaLesson = () => {
  const params = useParams();
  const lesson: string | undefined = params.lesson;
  let title: String = '';

  if (javaLessonData[Number(lesson) - 1]) {
    title = javaLessonData[Number(lesson) - 1].text;
  }

  const arrLessonElement: JSX.Element[] = [
    <TutorialJavaLesson1 />,
    <TutorialJavaLesson2 />,
    <TutorialJavaLesson3 />,
    <TutorialJavaLesson4 />,
    <TutorialJavaLesson5 />,
    <TutorialJavaLesson6 />,
  ];

  return (
    <>
      <PageTitle title={title.toString()}></PageTitle>
      {arrLessonElement[Number(lesson) - 1]}
    </>
  );
};
