import { PageTitle } from "../../../../../components/modules/pageTitle";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/Bai_19.json";

export const TutorialJapanVocabularyLesson19 = () => {
  return (
    <>
      <PageTitle title="19. Từ vựng bài 19"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
