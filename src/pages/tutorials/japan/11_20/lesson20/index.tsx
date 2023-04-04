import { PageTitle } from "../../../../../components/modules/page-title";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_20.json";

export const TutorialJapanVocabularyLesson20 = () => {
  return (
    <>
      <PageTitle title="20. Từ vựng bài 20"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
