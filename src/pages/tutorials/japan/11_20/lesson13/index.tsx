import { PageTitle } from 'components/modules/page-title';
import { Vocabulary } from 'components/modules/vocabulary';
import vocabularies from 'resources/json/japan/N5/Bai_13.json';

export const TutorialJapanVocabularyLesson13 = () => {
  return (
    <>
      <PageTitle title="13. Từ vựng bài 13"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
