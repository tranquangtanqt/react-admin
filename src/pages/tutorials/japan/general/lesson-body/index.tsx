import { PageTitle } from "../../../../../components/modules/page-title";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/BoSung_7_ThanThe.json";

export const TutorialJapanVocabularyLessonBody = () => {
  return (
    <>
      <PageTitle title="7. Từ vựng thân thể"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
