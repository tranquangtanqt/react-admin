import { PageTitle } from "../../../../../components/modules/page-title";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_23.json";

export const TutorialJapanVocabularyLesson23 = () => {
  return (
    <>
      <PageTitle title="23. Từ vựng bài 23"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
