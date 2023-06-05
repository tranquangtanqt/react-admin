import { PageTitle } from 'components/modules/page-title';
import { Vocabulary } from 'components/modules/vocabulary';
import vocabularies from 'resources/json/japan/N5/Bai_14.json';

export const TutorialJapanVocabularyLesson14 = () => {
  return (
    <>
      <PageTitle title="14. Từ vựng bài 14"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
