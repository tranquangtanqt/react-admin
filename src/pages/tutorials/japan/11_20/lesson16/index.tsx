import { PageTitle } from 'components/modules/page-title';
import { Vocabulary } from 'components/modules/vocabulary';
import vocabularies from 'resources/json/japan/N5/Bai_16.json';

export const TutorialJapanVocabularyLesson16 = () => {
  return (
    <>
      <PageTitle title="16. Từ vựng bài 16"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
