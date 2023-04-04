import { PageTitle } from "../../../../../components/modules/page-title";
import { Vocabulary } from "../../../../../components/modules/vocabulary";
import vocabularies from "./../../../../../resources/json/japan/N5/BoSung_3_NgheNghiep.json";

export const TutorialJapanVocabularyLessonJob = () => {
  return (
    <>
      <PageTitle title="3. Từ vựng nghề nghiệp"></PageTitle>
      <Vocabulary vocabularies={vocabularies}></Vocabulary>
    </>
  );
};
