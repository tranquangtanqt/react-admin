import { Vocabulary } from 'components/modules/vocabulary';
import vocabularies from 'resources/json/japan/N5/Bai_5.json';

export const TutorialJapanVocabularyLesson5 = () => {
  return (
    <>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
