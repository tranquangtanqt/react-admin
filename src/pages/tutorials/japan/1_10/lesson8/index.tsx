import { PageTitle } from "../../../../../components/modules/pageTitle";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_8.json";

export const TutorialJapanVocabularyLesson8 = () => {
  return (
    <>
      <PageTitle title="8. Từ vựng bài 8"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
