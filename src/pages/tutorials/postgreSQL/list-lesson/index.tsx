import { useParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import postgresLessonData from '../data/lesson.data';
import { TutorialPostgreSQLLesson1 } from './1-10/lesson-1';
import { TutorialPostgreSQLLesson2 } from './1-10/lesson-2';
import { TutorialPostgreSQLLesson3 } from './1-10/lesson-3';
import { TutorialPostgreSQLLesson4 } from './1-10/lesson-4';
import { TutorialPostgreSQLLesson5 } from './1-10/lesson-5';
import { TutorialPostgreSQLLesson6 } from './1-10/lesson-6';
import { TutorialPostgreSQLLesson7 } from './1-10/lesson-7';
import { TutorialPostgreSQLLesson8 } from './1-10/lesson-8';
import { TutorialPostgreSQLLesson9 } from './1-10/lesson-9';
import { TutorialPostgreSQLLesson10 } from './1-10/lesson-10';
import { TutorialPostgreSQLLesson11 } from './11_20/lesson-11';
import { TutorialPostgreSQLLesson12 } from './11_20/lesson-12';
import { TutorialPostgreSQLLesson13 } from './11_20/lesson-13';
import { TutorialPostgreSQLLesson14 } from './11_20/lesson-14';
import { TutorialPostgreSQLLesson15 } from './11_20/lesson-15';
import { TutorialPostgreSQLLesson16 } from './11_20/lesson-16';
import { TutorialPostgreSQLLesson17 } from './11_20/lesson-17';
import { TutorialPostgreSQLLesson18 } from './11_20/lesson-18';
import { TutorialPostgreSQLLesson19 } from './11_20/lesson-19';
import { TutorialPostgreSQLLesson20 } from './11_20/lesson-20';
import { TutorialPostgreSQLLesson21 } from './21_28/lesson-21';
import { TutorialPostgreSQLLesson22 } from './21_28/lesson-22';
import { TutorialPostgreSQLLesson23 } from './21_28/lesson-23';
import { TutorialPostgreSQLLesson24 } from './21_28/lesson-24';
import { TutorialPostgreSQLLesson25 } from './21_28/lesson-25';
import { TutorialPostgreSQLLesson26 } from './21_28/lesson-26';
import { TutorialPostgreSQLLesson27 } from './21_28/lesson-27';
import { TutorialPostgreSQLLesson28 } from './21_28/lesson-28';

export const TutorialTutorialPostgreSQLLesson = () => {
  const params = useParams();
  const lesson: string | undefined = params.lesson;
  let title: String = '';

  if (postgresLessonData[Number(lesson) - 1]) {
    title = postgresLessonData[Number(lesson) - 1].text;
  }

  const arrLessonElement: JSX.Element[] = [
    <TutorialPostgreSQLLesson1 />,
    <TutorialPostgreSQLLesson2 />,
    <TutorialPostgreSQLLesson3 />,
    <TutorialPostgreSQLLesson4 />,
    <TutorialPostgreSQLLesson5 />,
    <TutorialPostgreSQLLesson6 />,
    <TutorialPostgreSQLLesson7 />,
    <TutorialPostgreSQLLesson8 />,
    <TutorialPostgreSQLLesson9 />,
    <TutorialPostgreSQLLesson10 />,
    <TutorialPostgreSQLLesson11 />,
    <TutorialPostgreSQLLesson12 />,
    <TutorialPostgreSQLLesson13 />,
    <TutorialPostgreSQLLesson14 />,
    <TutorialPostgreSQLLesson15 />,
    <TutorialPostgreSQLLesson16 />,
    <TutorialPostgreSQLLesson17 />,
    <TutorialPostgreSQLLesson18 />,
    <TutorialPostgreSQLLesson19 />,
    <TutorialPostgreSQLLesson20 />,
    <TutorialPostgreSQLLesson21 />,
    <TutorialPostgreSQLLesson22 />,
    <TutorialPostgreSQLLesson23 />,
    <TutorialPostgreSQLLesson24 />,
    <TutorialPostgreSQLLesson25 />,
    <TutorialPostgreSQLLesson26 />,
    <TutorialPostgreSQLLesson27 />,
    <TutorialPostgreSQLLesson28 />,
  ];

  return (
    <>
      <PageTitle title={title.toString()}></PageTitle>
      {arrLessonElement[Number(lesson) - 1]}
    </>
  );
};
