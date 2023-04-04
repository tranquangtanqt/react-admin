import { PageTitle } from "../../../../../components/modules/page-title";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_11.json";

export const TutorialJapanVocabularyLesson11 = () => {
  return (
    <>
      <PageTitle title="11. Từ vựng bài 11"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
