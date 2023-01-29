import { PageTitle } from "../../../../../components/modules/pageTitle";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/BoSung_2_ChuyenMon.json";

export const TutorialJapanVocabularyLessonSpecialize = () => {
  return (
    <>
      <PageTitle title="2. Từ vựng chuyên môn"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
