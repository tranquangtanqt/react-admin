import { PageTitle } from "../../../../../components/modules/page-title";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_1.json";

export const TutorialJapanVocabularyLesson1 = () => {
  return (
    <>
      <PageTitle title="1. Từ vựng bài 1"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
