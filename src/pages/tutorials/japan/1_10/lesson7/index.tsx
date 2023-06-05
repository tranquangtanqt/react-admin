import { PageTitle } from '../../../../../components/modules/page-title';
import { Vocabulary } from '../../../../../components/modules/vocabulary';
import vocabularies from './../../../../../resources/json/japan/N5/Bai_7.json';

export const TutorialJapanVocabularyLesson7 = () => {
  return (
    <>
      <PageTitle title="7. Từ vựng bài 7"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
