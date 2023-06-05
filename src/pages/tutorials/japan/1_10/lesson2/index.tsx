import { PageTitle } from 'components/modules/page-title';
import { Vocabulary } from 'components/modules/vocabulary';
import vocabularies from 'resources/json/japan/N5/Bai_2.json';

export const TutorialJapanVocabularyLesson2 = () => {
  return (
    <>
      <PageTitle title="2. Từ vựng bài 2"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
