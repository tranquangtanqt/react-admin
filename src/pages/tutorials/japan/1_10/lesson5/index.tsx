import { PageTitle } from '../../../../../components/modules/page-title';
import { Vocabulary } from '../../../../../components/modules/vocabulary';
import vocabularies from './../../../../../resources/json/japan/N5/Bai_5.json';

export const TutorialJapanVocabularyLesson5 = () => {
  return (
    <>
      <PageTitle title="5. Từ vựng bài 5"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
