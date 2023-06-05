import { PageTitle } from '../../../../../components/modules/page-title';
import { Vocabulary } from '../../../../../components/modules/vocabulary';
import vocabularies from './../../../../../resources/json/japan/N5/Bai_10.json';

export const TutorialJapanVocabularyLesson10 = () => {
  return (
    <>
      <PageTitle title="10. Từ vựng bài 10"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
