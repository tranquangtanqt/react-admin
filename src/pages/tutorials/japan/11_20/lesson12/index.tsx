import { PageTitle } from '../../../../../components/modules/page-title';
import { Vocabulary } from '../../../../../components/modules/vocabulary';
import vocabularies from './../../../../../resources/json/japan/N5/Bai_12.json';

export const TutorialJapanVocabularyLesson12 = () => {
  return (
    <>
      <PageTitle title="12. Từ vựng bài 12"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
