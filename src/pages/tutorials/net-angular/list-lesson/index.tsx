import { useParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import netAngularLessonData from '../data/lesson.data';
import { TutorialNetAngularLesson1 } from './1-10/lesson-1';
import { TutorialNetAngularLesson2 } from './1-10/lesson-2';
import { TutorialNetAngularLesson3 } from './1-10/lesson-3';
import { TutorialNetAngularLesson4 } from './1-10/lesson-4';
import { TutorialNetAngularLesson5 } from './1-10/lesson-5';
import { TutorialNetAngularLesson6 } from './1-10/lesson-6';
import { TutorialNetAngularLesson7 } from './1-10/lesson-7';
import { TutorialNetAngularLesson8 } from './1-10/lesson-8';
import { TutorialNetAngularLesson9 } from './1-10/lesson-9';

export const TutorialNetAngularLesson = () => {
  const params = useParams();
  const lesson: string | undefined = params.lesson;
  let title: String = '';

  if (netAngularLessonData[Number(lesson) - 1]) {
    title = netAngularLessonData[Number(lesson) - 1].text;
  }

  const arrLessonElement: JSX.Element[] = [
    <TutorialNetAngularLesson1 />,
    <TutorialNetAngularLesson2 />,
    <TutorialNetAngularLesson3 />,
    <TutorialNetAngularLesson4 />,
    <TutorialNetAngularLesson5 />,
    <TutorialNetAngularLesson6 />,
    <TutorialNetAngularLesson7 />,
    <TutorialNetAngularLesson8 />,
    <TutorialNetAngularLesson9 />,
  ];

  return (
    <>
      <PageTitle title={title.toString()}></PageTitle>
      {arrLessonElement[Number(lesson) - 1]}
    </>
  );
};
