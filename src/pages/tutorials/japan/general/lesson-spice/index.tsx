import { PageTitle } from "../../../../../components/modules/pageTitle";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/BoSung_6_GiaVi.json";

export const TutorialJapanVocabularyLessonSpice = () => {
  return (
    <>
      <PageTitle title="6. Từ vựng gia vị"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
