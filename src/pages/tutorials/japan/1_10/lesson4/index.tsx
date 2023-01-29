import { PageTitle } from "../../../../../components/modules/pageTitle";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_4.json";

export const TutorialJapanVocabularyLesson4 = () => {
  return (
    <>
      <PageTitle title="4. Từ vựng bài 4"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
