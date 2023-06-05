import { PageTitle } from '../../../../../components/modules/page-title';
import { Vocabulary } from '../../../../../components/modules/vocabulary';
import vocabularies from './../../../../../resources/json/japan/N5/Bai_25.json';

export const TutorialJapanVocabularyLesson25 = () => {
  return (
    <>
      <PageTitle title="25. Từ vựng bài 25"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
