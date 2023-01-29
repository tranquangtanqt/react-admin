import { PageTitle } from "../../../../../components/modules/pageTitle";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_9.json";

export const TutorialJapanVocabularyLesson9 = () => {
  return (
    <>
      <PageTitle title="9. Từ vựng bài 9"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
