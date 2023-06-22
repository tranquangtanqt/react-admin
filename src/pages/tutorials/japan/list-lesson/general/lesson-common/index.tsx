import { PageTitle } from 'components/modules/page-title';
import { Vocabulary } from 'components/modules/vocabulary';
import vocabularies from 'resources/json/japan/N5/BoSung_1_Chung.json';

export const TutorialJapanVocabularyLessonCommon = () => {
  return (
    <>
      <PageTitle title="1. Từ vựng chung"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
