import { useParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import japanLessonData from '../data/lesson.data';
import { TutorialJapanVocabularyLesson1 } from './1_10/lesson-1';
import { TutorialJapanVocabularyLesson2 } from './1_10/lesson-2';
import { TutorialJapanVocabularyLesson3 } from './1_10/lesson-3';
import { TutorialJapanVocabularyLesson4 } from './1_10/lesson-4';
import { TutorialJapanVocabularyLesson5 } from './1_10/lesson-5';
import { TutorialJapanVocabularyLesson6 } from './1_10/lesson-6';
import { TutorialJapanVocabularyLesson7 } from './1_10/lesson-7';
import { TutorialJapanVocabularyLesson8 } from './1_10/lesson-8';
import { TutorialJapanVocabularyLesson9 } from './1_10/lesson-9';
import { TutorialJapanVocabularyLesson10 } from './1_10/lesson-10';
import { TutorialJapanVocabularyLesson11 } from './11_20/lesson-11';
import { TutorialJapanVocabularyLesson12 } from './11_20/lesson-12';
import { TutorialJapanVocabularyLesson13 } from './11_20/lesson-13';
import { TutorialJapanVocabularyLesson14 } from './11_20/lesson-14';
import { TutorialJapanVocabularyLesson15 } from './11_20/lesson-15';
import { TutorialJapanVocabularyLesson16 } from './11_20/lesson-16';
import { TutorialJapanVocabularyLesson17 } from './11_20/lesson-17';
import { TutorialJapanVocabularyLesson18 } from './11_20/lesson-18';
import { TutorialJapanVocabularyLesson19 } from './11_20/lesson-19';
import { TutorialJapanVocabularyLesson20 } from './11_20/lesson-20';
import { TutorialJapanVocabularyLesson21 } from './21-25/lesson-21';
import { TutorialJapanVocabularyLesson22 } from './21-25/lesson-22';
import { TutorialJapanVocabularyLesson23 } from './21-25/lesson-23';
import { TutorialJapanVocabularyLesson24 } from './21-25/lesson-24';
import { TutorialJapanVocabularyLesson25 } from './21-25/lesson-25';

export const TutorialJapanVocabularyLesson = () => {
  const params = useParams();
  const lesson: string | undefined = params.lesson;
  let title: String = '';

  if (japanLessonData[Number(lesson) - 1]) {
    title = japanLessonData[Number(lesson) - 1].text;
  }

  const arrLessonElement: JSX.Element[] = [
    <TutorialJapanVocabularyLesson1 />,
    <TutorialJapanVocabularyLesson2 />,
    <TutorialJapanVocabularyLesson3 />,
    <TutorialJapanVocabularyLesson4 />,
    <TutorialJapanVocabularyLesson5 />,
    <TutorialJapanVocabularyLesson6 />,
    <TutorialJapanVocabularyLesson7 />,
    <TutorialJapanVocabularyLesson8 />,
    <TutorialJapanVocabularyLesson9 />,
    <TutorialJapanVocabularyLesson10 />,
    <TutorialJapanVocabularyLesson11 />,
    <TutorialJapanVocabularyLesson12 />,
    <TutorialJapanVocabularyLesson13 />,
    <TutorialJapanVocabularyLesson14 />,
    <TutorialJapanVocabularyLesson15 />,
    <TutorialJapanVocabularyLesson16 />,
    <TutorialJapanVocabularyLesson17 />,
    <TutorialJapanVocabularyLesson18 />,
    <TutorialJapanVocabularyLesson19 />,
    <TutorialJapanVocabularyLesson20 />,
    <TutorialJapanVocabularyLesson21 />,
    <TutorialJapanVocabularyLesson22 />,
    <TutorialJapanVocabularyLesson23 />,
    <TutorialJapanVocabularyLesson24 />,
    <TutorialJapanVocabularyLesson25 />,
  ];

  return (
    <>
      <PageTitle title={title.toString()}></PageTitle>
      {arrLessonElement[Number(lesson) - 1]}
    </>
  );
};
