import { Vocabulary } from 'components/modules/vocabulary';
import vocabularies from 'resources/json/japan/N5/Bai_3.json';

export const TutorialJapanVocabularyLesson3 = () => {
  return (
    <>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
