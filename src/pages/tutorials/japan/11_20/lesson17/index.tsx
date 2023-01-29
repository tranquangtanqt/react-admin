import { PageTitle } from "../../../../../components/modules/pageTitle";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_17.json";

export const TutorialJapanVocabularyLesson17 = () => {
  return (
    <>
      <PageTitle title="17. Từ vựng bài 17"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
