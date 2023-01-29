import { PageTitle } from "../../../../../components/modules/pageTitle";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/BoSung_5_MonAn.json";

export const TutorialJapanVocabularyLessonFood1= () => {
  return (
    <>
      <PageTitle title="5. Từ vựng món ăn"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
