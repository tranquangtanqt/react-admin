import { PageTitle } from "../../../../../components/modules/page-title";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_18.json";

export const TutorialJapanVocabularyLesson18 = () => {
  return (
    <>
      <PageTitle title="18. Từ vựng bài 18"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
