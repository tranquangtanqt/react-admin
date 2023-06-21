import { Vocabulary } from 'components/modules/vocabulary';
import vocabularies from 'resources/json/japan/N5/Bai_1.json';

export const TutorialJapanVocabularyLesson1 = () => {
  return (
    <>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
