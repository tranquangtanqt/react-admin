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

import { Utilities } from 'pages/utilities';
import { UtilitieAppProjectInfoGoogleSheet } from 'pages/utilities/app/project-info-google-sheet';
import { UtilitieAppProjectDetailInfoGoogleSheet } from 'pages/utilities/app/project-info-google-sheet/project-detail';
import { UtilitieAppSearchTable } from 'pages/utilities/app/search-table';
import { UtilitiesCreateTableFromExcel } from 'pages/utilities/sql/create-table-from-excel';
import { UtilitiesFileMakeJsonFromExcel } from 'pages/utilities/file/make-json-from-excel';
import { UtilitiesJapanVocabulary } from 'pages/utilities/japan/vocabulary';
import { UtilitiesJapanVocabularyUnit } from 'pages/utilities/japan/vocabulary/unit';
import { UtilitiesListFileSelected } from 'pages/utilities/file/list-file-selected';
import { UtilitiesMakeInsertSQL } from 'pages/utilities/sql/make-insert-sql';
import { UtilitiesMakeInsertSQLFromProcedure } from 'pages/utilities/sql/make-insert-procedure';
import { UtilitiesMakeJsonVocabulary } from 'pages/utilities/excel/make-json-vocabulary';
import { UtilitiesReadContentMultiFile } from 'pages/utilities/file/read-content-multi-file';
import { UtilitiesTextCommon } from 'pages/utilities/text/common';
import { UtilitiesTextRepeat } from 'pages/utilities/text/repeat';
import { UtilitiesTextReplace } from 'pages/utilities/text/replace';

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

          <Route path="/software" element={<Software />} />
          <Route path="/software/:sheetId" element={<ContentGoogleSheet/>} />

          <Route path="/tutorial/:tutorial" element={<Tutorial />} />
          <Route path="/tutorial/:tutorial/:sheetId" element={<ContentGoogleSheet/>} />

          <Route path="/other" element={<Other />} />
          <Route path="/other/:sheetId" element={<ContentGoogleSheet />} />
         
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/utilities/file/list-file-selected" element={<UtilitiesListFileSelected />} />
          <Route path="/utilities/file/read-content-multi-file" element={<UtilitiesReadContentMultiFile />} />
          <Route path="/utilities/file/make-json-from-excel" element={<UtilitiesFileMakeJsonFromExcel />} />
          <Route path="/utilities/text/common" element={<UtilitiesTextCommon />} />
          <Route path="/utilities/text/repeat" element={<UtilitiesTextRepeat />} />
          <Route path="/utilities/text/replace" element={<UtilitiesTextReplace />} />
          <Route path="/utilities/sql/random-insert" element={<UtilitiesMakeInsertSQL />} />
          <Route path="/utilities/sql/make-insert-from-procedure" element={<UtilitiesMakeInsertSQLFromProcedure />} />
          <Route path="/utilities/sql/create-table-from-excel" element={<UtilitiesCreateTableFromExcel />} />
          <Route path="/utilities/excel/make-json-vocabulary-japanese" element={<UtilitiesMakeJsonVocabulary />} />
          <Route path="/utilities/japan/vocabulary" element={<UtilitiesJapanVocabulary />} />
          <Route path="/utilities/japan/vocabulary/unit" element={<UtilitiesJapanVocabularyUnit />} />
          <Route path="/utilities/app/project-info" element={<UtilitieAppProjectInfoGoogleSheet />} />
          <Route path="/utilities/app/project-info/:project_id" element={<UtilitieAppProjectDetailInfoGoogleSheet />} />
          <Route path="/utilities/app/search-table" element={<UtilitieAppSearchTable />} />

          <Route path="/sample/create-content-page" element={<SampleCreateContentPage />} />
          <Route path="/sample/content-page" element={<SampleContentPage />} />
          <Route path="/sample/monaco-editor-page" element={<SampleMonacoEditorPage />} />
          <Route path="/sample/google-sheet" element={<SampleGoogleSheet />} />
          
        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};
