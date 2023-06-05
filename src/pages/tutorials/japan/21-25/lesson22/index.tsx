import { PageTitle } from '../../../../../components/modules/page-title';
import { Vocabulary } from '../../../../../components/modules/vocabulary';
import vocabularies from './../../../../../resources/json/japan/N5/Bai_22.json';

export const TutorialJapanVocabularyLesson22 = () => {
  return (
    <>
      <PageTitle title="22. Từ vựng bài 22"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
