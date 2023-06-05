import { PageTitle } from '../../../../../components/modules/page-title';
import { Vocabulary } from '../../../../../components/modules/vocabulary';
import vocabularies from './../../../../../resources/json/japan/N5/Bai_6.json';

export const TutorialJapanVocabularyLesson6 = () => {
  return (
    <>
      <PageTitle title="6. Từ vựng bài 6"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
