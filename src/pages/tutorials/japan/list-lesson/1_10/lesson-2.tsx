import { Vocabulary } from 'components/modules/vocabulary';
import vocabularies from 'resources/json/japan/N5/Bai_2.json';

export const TutorialJapanVocabularyLesson2 = () => {
  return (
    <>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
