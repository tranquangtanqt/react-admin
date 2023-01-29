import { PageTitle } from "../../../../../components/modules/pageTitle";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_15.json";

export const TutorialJapanVocabularyLesson15 = () => {
  return (
    <>
      <PageTitle title="15. Từ vựng bài 15"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
