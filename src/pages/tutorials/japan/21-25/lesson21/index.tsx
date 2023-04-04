import { PageTitle } from "../../../../../components/modules/page-title";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_21.json";

export const TutorialJapanVocabularyLesson21 = () => {
  return (
    <>
      <PageTitle title="21. Từ vựng bài 21"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
