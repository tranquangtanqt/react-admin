import { Route, Routes, HashRouter } from 'react-router-dom';
import { Home } from 'pages/home';

import { MasterLayout } from 'pages/_layout/master-layout';

import { Database } from 'pages/database';
import { Programming } from 'pages/programming';
import { ContentGoogleSheet } from 'components/content-google-sheet';


import { Software } from 'pages/software';
import { Tutorial } from 'pages/tutorial';
import { Ebook } from 'pages/ebook';
import { Other } from 'pages/other';

import { SampleContentPage } from 'pages/sample/content-page';
import { SampleMonacoEditorPage } from 'pages/sample/monaco-editor';
import { SampleGoogleSheet } from 'pages/sample/google-sheet';
import { SampleCreateContentPage } from 'pages/sample/create-content-page';

import { LearningJapanVocabulary } from 'pages/learning/japan/vocabulary';
import { LearningJapanVocabularyDetail } from 'pages/learning/japan/vocabulary/detail';
import { LearningJapanVocabularyQuiz } from 'pages/learning/japan/vocabulary/quiz';
import { LearningJapanKanji } from 'pages/learning/japan/kanji';
import { LearningJapanKanjiDetail } from 'pages/learning/japan/kanji/detail';
import { LearningJapanKanjiQuiz } from 'pages/learning/japan/kanji/quiz';
import { LearningJapanKanjiWriting } from 'pages/learning/japan/kanji/writing';
import { LearningJapanExam } from 'pages/learning/japan/exam';
import { LearningJapanExamQuiz } from 'pages/learning/japan/exam/quiz';

import { Utilities } from 'pages/utilities';
import { UtilitieAppProjectInfoGoogleSheet } from 'pages/utilities/app/project-info-google-sheet';
import { UtilitieAppProjectDetailInfoGoogleSheet } from 'pages/utilities/app/project-info-google-sheet/project-detail';
import { UtilitieAppSearchTable } from 'pages/utilities/app/search-table';
import { UtilitieAppGoogleDriveExplorer } from 'pages/utilities/app/google-drive-explorer';
import { UtilitiesCreateTableFromExcel } from 'pages/utilities/sql/create-table-from-excel';
import { UtilitiesFileMakeJsonFromExcel } from 'pages/utilities/file/make-json-from-excel';
import { UtilitiesListFileSelected } from 'pages/utilities/file/list-file-selected';
import { UtilitiesMakeInsertSQL } from 'pages/utilities/sql/make-insert-sql';
import { UtilitiesMakeInsertSQLFromProcedure } from 'pages/utilities/sql/make-insert-procedure';
import { UtilitiesMakeJsonVocabulary } from 'pages/utilities/excel/make-json-vocabulary';
import { UtilitiesReadContentMultiFile } from 'pages/utilities/file/read-content-multi-file';
import { UtilitiesTextCommon } from 'pages/utilities/text/common';
import { UtilitiesTextRepeat } from 'pages/utilities/text/repeat';
import { UtilitiesTextReplace } from 'pages/utilities/text/replace';
import { UtilitiesTextReplace1 } from 'pages/utilities/text/replace1';
import { SampleCRUDGoogleSheet } from 'pages/sample/crud-google-sheet';
import { UtilitiesTextToHTMLTableGenerator } from 'pages/utilities/text/text-to-html-table-generator';
import { UtilitiesTextRepeat2 } from 'pages/utilities/text/repeat2';
import { ProgrammingJavaCheatSheet } from 'pages/programming/java/cheatsheet';

export const RoutesRoot = () => {
  return (
    <HashRouter>
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        

          <Route path="/ebook/:ebookType" element={<Ebook />} />
          <Route path="/ebook/:ebookType/:sheetId" element={<ContentGoogleSheet/>} />

          <Route path="/database/:database" element={<Database/>} />
          <Route path="/database/:database/:sheetId" element={<ContentGoogleSheet/>} />

          <Route path="/programming/:program" element={<Programming/>} />
          <Route path="/programming/:program/:sheetId" element={<ContentGoogleSheet/>} />
          <Route path="/programming/java/cheatsheet" element={<ProgrammingJavaCheatSheet />} />

          <Route path="/software" element={<Software />} />
          <Route path="/software/:sheetId" element={<ContentGoogleSheet/>} />

          <Route path="/tutorial/:tutorial" element={<Tutorial />} />
          <Route path="/tutorial/:tutorial/:sheetId" element={<ContentGoogleSheet/>} />

          <Route path="/learning/japan/vocabulary" element={<LearningJapanVocabulary />} />
          <Route path="/learning/japan/vocabulary/:level" element={<LearningJapanVocabularyDetail />} />
          <Route path="/learning/japan/vocabulary/:level/quiz" element={<LearningJapanVocabularyQuiz />} />
          <Route path="/learning/japan/kanji" element={<LearningJapanKanji />} />
          <Route path="/learning/japan/kanji/:categoryId" element={<LearningJapanKanjiDetail />} />
          <Route path="/learning/japan/kanji/:categoryId/quiz" element={<LearningJapanKanjiQuiz />} />
          <Route path="/learning/japan/kanji/:categoryId/writing" element={<LearningJapanKanjiWriting />} />
          <Route path="/learning/japan/exam" element={<LearningJapanExam />} />
          <Route path="/learning/japan/exam/:lesson/quiz" element={<LearningJapanExamQuiz />} />

          <Route path="/other" element={<Other />} />
          <Route path="/other/:sheetId" element={<ContentGoogleSheet />} />
         
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/utilities/file/list-file-selected" element={<UtilitiesListFileSelected />} />
          <Route path="/utilities/file/read-content-multi-file" element={<UtilitiesReadContentMultiFile />} />
          <Route path="/utilities/file/make-json-from-excel" element={<UtilitiesFileMakeJsonFromExcel />} />
          <Route path="/utilities/text/common" element={<UtilitiesTextCommon />} />
          <Route path="/utilities/text/repeat" element={<UtilitiesTextRepeat />} />
          <Route path="/utilities/text/repeat-2" element={<UtilitiesTextRepeat2 />} />
          <Route path="/utilities/text/replace" element={<UtilitiesTextReplace />} />
          <Route path="/utilities/text/replace1" element={<UtilitiesTextReplace1 />} />
          <Route path="/utilities/text/to-html-table-generator" element={<UtilitiesTextToHTMLTableGenerator />} />
          <Route path="/utilities/sql/random-insert" element={<UtilitiesMakeInsertSQL />} />
          <Route path="/utilities/sql/make-insert-from-procedure" element={<UtilitiesMakeInsertSQLFromProcedure />} />
          <Route path="/utilities/sql/create-table-from-excel" element={<UtilitiesCreateTableFromExcel />} />
          <Route path="/utilities/excel/make-json-vocabulary-japanese" element={<UtilitiesMakeJsonVocabulary />} />
          <Route path="/utilities/app/project-info" element={<UtilitieAppProjectInfoGoogleSheet />} />
          <Route path="/utilities/app/project-info/:projectId" element={<UtilitieAppProjectDetailInfoGoogleSheet />} />
          <Route path="/utilities/app/search-table" element={<UtilitieAppSearchTable />} />
          <Route path="/utilities/app/drive-explorer" element={<UtilitieAppGoogleDriveExplorer />} />
          <Route path="/utilities/app/drive-explorer/:folderId" element={<UtilitieAppGoogleDriveExplorer />} />

          <Route path="/sample/create-content-page" element={<SampleCreateContentPage />} />
          <Route path="/sample/content-page" element={<SampleContentPage />} />
          <Route path="/sample/monaco-editor-page" element={<SampleMonacoEditorPage />} />
          <Route path="/sample/google-sheet" element={<SampleGoogleSheet />} />
          <Route path="/sample/crud-google-sheet" element={<SampleCRUDGoogleSheet />} />
          
        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};
