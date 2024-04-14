import { Route, Routes, HashRouter } from 'react-router-dom';
import { Home } from 'pages/home';
// import { CreateContentPage } from 'pages/sample/create-content-page';
import { MasterLayout } from 'pages/_layout/master-layout';

// import { DatabaseOracle } from 'pages/database/oracle';
// import { DatabaseOracleContent } from 'pages/database/oracle/content';
// import { DatabasePostgresql } from 'pages/database/postgresql';
// import { DatabasePostgresqlContent } from 'pages/database/postgresql/content';

// import { EbookEnglish } from 'pages/ebook/english';
// import { EbookEnglish97ThingYouKnow } from 'pages/ebook/english/97-things-every-programmer-should-know';
// import { EbookVietnamese } from 'pages/ebook/vietnamese';
// import { EbookVietnameseCleanCode } from 'pages/ebook/vietnamese/clean-code';
// import { EbookVietnameseHeadFirstDesignPatterns } from 'pages/ebook/vietnamese/head-first-design-patterns';

import { Programming } from 'pages/programming';
import { ContentGoogleSheet } from 'components/content-google-sheet';

// import { SampleContentPage } from 'pages/sample/content-page';
// import { SampleMonacoEditorPage } from 'pages/sample/monaco-editor';
// import { SampleGoogleSheet } from 'pages/sample/google-sheet';
import { Software } from 'pages/software';

// import { TutorialCSharp } from 'pages/tutorials/c-sharp';
// import { TutorialCSharpLesson } from 'pages/tutorials/c-sharp/list-lesson';
// import { TutorialJapan } from 'pages/tutorials/japan';
// import { TutorialJapanVocabularyLesson } from 'pages/tutorials/japan/list-lesson';
// import { TutorialJava } from 'pages/tutorials/java';
// import { TutorialJavaLesson } from 'pages/tutorials/java/list-lesson';
// import { TutorialNetAngular } from 'pages/tutorials/net-angular';
// import { TutorialNetAngularLesson } from 'pages/tutorials/net-angular/list-lesson';
// import { TutorialPostgreSQL } from 'pages/tutorials/postgreSQL';
// import { TutorialTutorialPostgreSQLLesson } from 'pages/tutorials/postgreSQL/list-lesson';

// import { Utilities } from 'pages/utilities';
// import { UtilitieAppProjectInfo } from 'pages/utilities/app/project-info';
// import { UtilitieAppProjectDetail } from 'pages/utilities/app/project-info/project-detail';
// import { UtilitieAppProjectInfoGoogleSheet } from 'pages/utilities/app/project-info-google-sheet';
// import { UtilitieAppProjectDetailInfoGoogleSheet } from 'pages/utilities/app/project-info-google-sheet/project-detail';
// import { UtilitieAppSearchTable } from 'pages/utilities/app/search-table';
// import { UtilitieAppTodo } from 'pages/utilities/app/todo';
// import { UtilitieAppTodoDetail } from 'pages/utilities/app/todo/todoDetail';
// import { UtilitiesCreateTableFromExcel } from 'pages/utilities/sql/create-table-from-excel';
// import { UtilitiesEnglishSpecial } from 'pages/utilities/english/special';
// import { UtilitiesFileMakeJsonFromExcel } from 'pages/utilities/file/make-json-from-excel';
// import { UtilitiesGeneralCommandLine } from 'pages/utilities/general/command-line';
// import { UtilitiesGeneralGit } from 'pages/utilities/general/git';
// import { UtilitiesJapanSpecial } from 'pages/utilities/japan/special';
// import { UtilitiesJapanVocabulary } from 'pages/utilities/japan/vocabulary';
// import { UtilitiesJapanVocabularyUnit } from 'pages/utilities/japan/vocabulary/unit';
// import { UtilitiesListFileSelected } from 'pages/utilities/file/list-file-selected';
// import { UtilitiesMakeInsertSQL } from 'pages/utilities/sql/make-insert-sql';
// import { UtilitiesMakeInsertSQLFromProcedure } from 'pages/utilities/sql/make-insert-procedure';
// import { UtilitiesMakeJsonVocabulary } from 'pages/utilities/excel/make-json-vocabulary';
// import { UtilitiesReadContentMultiFile } from 'pages/utilities/file/read-content-multi-file';
// import { UtilitiesTextCommon } from 'pages/utilities/text/common';
// import { UtilitiesTextFindDifferentTwoList } from 'pages/utilities/text/find-different-two-list';
// import { UtilitiesTextFindDifferentTwoList1 } from 'pages/utilities/text/find-different-two-list1';
// import { UtilitiesTextFindTextColumnJPEN } from 'pages/utilities/text/find-text-column-jp-en';
// import { UtilitiesTinyMCE } from 'pages/utilities/tiny-mce';
// import { UtilitiesTextRepeat } from 'pages/utilities/text/repeat';
// import { UtilitiesTextReplace } from 'pages/utilities/text/replace';

export const RoutesRoot = () => {
  return (
    <HashRouter>
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/sample/create-content-page" element={<CreateContentPage />} />
          <Route path="/sample/content-page" element={<SampleContentPage />} />
          <Route path="/sample/monaco-editor-page" element={<SampleMonacoEditorPage />} />
          <Route path="/sample/google-sheet" element={<SampleGoogleSheet />} />

          <Route path="/database/postgresql" element={<DatabasePostgresql />} />
          <Route path="/database/postgresql/:content" element={<DatabasePostgresqlContent />} />
          <Route path="/database/oracle" element={<DatabaseOracle />} />
          <Route path="/database/oracle/:content" element={<DatabaseOracleContent />} /> */}

          {/* <Route path="/ebook/english" element={<EbookEnglish />} />
          <Route path="/ebook/english/97-things-every-programmer-should-know/:thing_number" element={<EbookEnglish97ThingYouKnow />} />
          <Route path="/ebook/vietnamese" element={<EbookVietnamese />} />
          <Route path="/ebook/vietnamese/clean-code/:chapter" element={<EbookVietnameseCleanCode />} />
          <Route path="/ebook/vietnamese/head-first-design-patterns/:chapter" element={<EbookVietnameseHeadFirstDesignPatterns />} /> */}

          <Route path="/programming/:program" element={<Programming/>} />
          <Route path="/programming/:program/:sheetId" element={<ContentGoogleSheet/>} />

          <Route path="/software" element={<Software />} />
          <Route path="/software/:sheetId" element={<ContentGoogleSheet/>} />
          {/* 
          <Route path="/tutorial/c-sharp" element={<TutorialCSharp />} />
          <Route path="/tutorial/c-sharp/lesson/:lesson" element={<TutorialCSharpLesson />} />
          <Route path="/tutorial/java" element={<TutorialJava />} />
          <Route path="/tutorial/java/lesson/:lesson" element={<TutorialJavaLesson />} />
          <Route path="/tutorial/net-angular" element={<TutorialNetAngular />} />
          <Route path="/tutorial/net-angular/lesson/:lesson" element={<TutorialNetAngularLesson />} />
          <Route path="/tutorial/postgreSQL" element={<TutorialPostgreSQL />} />
          <Route path="/tutorial/postgreSQL/lesson/:lesson" element={<TutorialTutorialPostgreSQLLesson />} />
          <Route path="/tutorial/japan" element={<TutorialJapan />} />
          <Route path="/tutorial/japan/vocabulary/lesson/:lesson" element={<TutorialJapanVocabularyLesson />} />
         
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/utilities/file/list-file-selected" element={<UtilitiesListFileSelected />} />
          <Route path="/utilities/file/read-content-multi-file" element={<UtilitiesReadContentMultiFile />} />
          <Route path="/utilities/file/make-json-from-excel" element={<UtilitiesFileMakeJsonFromExcel />} />
          <Route path="/utilities/text/common" element={<UtilitiesTextCommon />} />
          <Route path="/utilities/text/find-different-two-list" element={<UtilitiesTextFindDifferentTwoList />} />
          <Route path="/utilities/text/find-different-two-list-1" element={<UtilitiesTextFindDifferentTwoList1 />} />
          <Route path="/utilities/text/find-text-column-jp-en" element={<UtilitiesTextFindTextColumnJPEN />} />
          <Route path="/utilities/text/repeat" element={<UtilitiesTextRepeat />} />
          <Route path="/utilities/text/replace" element={<UtilitiesTextReplace />} />
          <Route path="/utilities/tinyMCE" element={<UtilitiesTinyMCE />} />
          <Route path="/utilities/sql/random-insert" element={<UtilitiesMakeInsertSQL />} />
          <Route path="/utilities/sql/make-insert-from-procedure" element={<UtilitiesMakeInsertSQLFromProcedure />} />
          <Route path="/utilities/sql/create-table-from-excel" element={<UtilitiesCreateTableFromExcel />} />
          <Route path="/utilities/excel/make-json-vocabulary-japanese" element={<UtilitiesMakeJsonVocabulary />} />
          <Route path="/utilities/japan/vocabulary" element={<UtilitiesJapanVocabulary />} />
          <Route path="/utilities/japan/vocabulary/unit" element={<UtilitiesJapanVocabularyUnit />} />
          <Route path="/utilities/japan/special" element={<UtilitiesJapanSpecial />} />
          <Route path="/utilities/english/special" element={<UtilitiesEnglishSpecial />} />
          <Route path="/utilities/app/todo" element={<UtilitieAppTodo />} />
          <Route path="/utilities/app/project-info" element={<UtilitieAppProjectInfo />} />
          <Route path="/utilities/app/project-info-google-sheet" element={<UtilitieAppProjectInfoGoogleSheet />} />
          <Route path="/utilities/app/project-info-google-sheet/:project_id" element={<UtilitieAppProjectDetailInfoGoogleSheet />} />
          <Route path="/utilities/app/todo/:todo_id" element={<UtilitieAppTodoDetail />} />
          <Route path="/utilities/app/project-info/:project_id" element={<UtilitieAppProjectDetail />} />
          <Route path="/utilities/app/search-table" element={<UtilitieAppSearchTable />} />
          <Route path="/utilities/general/git" element={<UtilitiesGeneralGit />} />
          <Route path="/utilities/general/command-line" element={<UtilitiesGeneralCommandLine />} /> */}
        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};
