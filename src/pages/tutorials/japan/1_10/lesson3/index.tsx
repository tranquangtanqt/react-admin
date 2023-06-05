import { PageTitle } from 'components/modules/page-title';
import { Vocabulary } from 'components/modules/vocabulary';
import vocabularies from 'resources/json/japan/N5/Bai_3.json';

export const TutorialJapanVocabularyLesson3 = () => {
  return (
    <>
      <PageTitle title="3. Từ vựng bài 3"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
