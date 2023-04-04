import { PageTitle } from "../../../../../components/modules/page-title";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_24.json";

export const TutorialJapanVocabularyLesson24 = () => {
  return (
    <>
      <PageTitle title="24. Từ vựng bài 24"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
