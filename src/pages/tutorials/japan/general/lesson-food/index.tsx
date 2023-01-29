import { PageTitle } from "../../../../../components/modules/pageTitle";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/BoSung_4_ThucAn.json";

export const TutorialJapanVocabularyLessonFood = () => {
  return (
    <>
      <PageTitle title="4. Từ vựng thức ăn"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
