import { Route, Routes, HashRouter } from 'react-router-dom';
import { Home } from 'pages/home';
import { DatabaseOracle } from 'pages/database/oracle';
import { OracleChangeLanguageOracleSQLDeveloper } from 'pages/database/oracle/change-language-oracle-sql-developer';
import { OracleImportDump } from 'pages/database/oracle/import-dump-oracle';
import { OracleDumpFull } from 'pages/database/oracle/import-dump-oracle/dumpFull';
import { OracleListenerAndTnsnames } from 'pages/database/oracle/listener-and-tnsnames';
import { OracleSqltextSessionProcess } from 'pages/database/oracle/sqltext-session-process';
import { OracleString } from 'pages/database/oracle/tips/string';
import { OracleSystem } from 'pages/database/oracle/tips/system';
import { OracleTipsSQLDeveloper } from 'pages/database/oracle/tips-sql-developer';
import { DatabasePostgresql } from 'pages/database/postgresql';
import { PostgresqlConfigPghba } from 'pages/database/postgresql/general/config-pghba';
import { PostgresqlTableGeneral } from 'pages/database/postgresql/table/general';
import { ProgrammingBatch } from 'pages/programming/batch';
import { BatchIfElse } from 'pages/programming/batch/if-else';
import { ProgrammingCSharp } from 'pages/programming/c-sharp';
import { CSharpConnectOracle } from 'pages/programming/c-sharp/connect-oracle';
import { CSharpConnectPostgresql } from 'pages/programming/c-sharp/connect-postgresql';
import { CSharpEPPlus } from 'pages/programming/c-sharp/epplus';
import { CSharpGetAllFileInFolder } from 'pages/programming/c-sharp/get-all-file-in-folder';
import { CSharpNameControlWinform } from 'pages/programming/c-sharp/name-control-winform';
import { CSharpReadFileExcel } from 'pages/programming/c-sharp/read-file-excel';
import { ProgrammingExcel } from 'pages/programming/excel';
import { ExcelCharactersInExcel } from 'pages/programming/excel/characters-in-excel';
import { ExcelFilter1 } from 'pages/programming/excel/sort-and-filter/filter1';
import { ExcelSwapDataTwoCell } from 'pages/programming/excel/swap-datat-to-cell';
import { ProgrammingJava } from 'pages/programming/java';
import { JavaDeleteData1 } from 'pages/programming/java/spring-boot/_crud/delete-data1';
import { JavaInsertData1 } from 'pages/programming/java/spring-boot/_crud/insert-data1';
import { JavaSelectData1 } from 'pages/programming/java/spring-boot/_crud/select-data1';
import { JavaSelectData2 } from 'pages/programming/java/spring-boot/_crud/select-data2';
import { JavaSettingMaven } from 'pages/programming/java/spring-boot/_crud/setting-maven';
import { JavaUpdateData1 } from 'pages/programming/java/spring-boot/_crud/update-data1';
import { ProgrammingPHP } from 'pages/programming/php';
import { PHPConvertDatetime } from 'pages/programming/php/convert-datetime';
import { PHPConvertUnicode } from 'pages/programming/php/convert-unicode';
import { PHPDeleteFile } from 'pages/programming/php/php-delete-file';
import { PHPSubstringEllipses } from 'pages/programming/php/substring-ellipses';
import { PHPLaravelInstallFontDompdf } from 'pages/programming/php/install-font-dompdf';
import { CreateContentPage } from 'pages/sample/create-content-page';
import { Software } from 'pages/software';
import { VisualStudioCodeAddHotkey } from 'pages/software/visual-studio-code/addHotkey';
import { VisualStudioCodeExtention } from 'pages/software/visual-studio-code/extention';
import { Utilities } from 'pages/utilities';
import { UtilitiesListFileSelected } from 'pages/utilities/file/list-file-selected';
import { UtilitiesReadContentMultiFile } from 'pages/utilities/file/read-content-multi-file';
import { UtilitiesCreateTableFromExcel } from 'pages/utilities/sql/create-table-from-excel';
import { UtilitiesMakeInsertSQL } from 'pages/utilities/sql/make-insert-sql';
import { UtilitiesMakeInsertSQLFromProcedure } from 'pages/utilities/sql/make-insert-procedure';
import { UtilitiesTextCommon } from 'pages/utilities/text/common';
import { UtilitiesTextFindDifferentTwoList } from 'pages/utilities/text/find-different-two-list';
import { UtilitiesTextFindDifferentTwoList1 } from 'pages/utilities/text/find-different-two-list1';
import { UtilitiesTextFindTextColumnJPEN } from 'pages/utilities/text/find-text-column-jp-en';
import { UtilitiesTextRepeat } from 'pages/utilities/text/repeat';
import { UtilitiesTextReplace } from 'pages/utilities/text/replace';
import { UtilitiesJapanSpecial } from 'pages/utilities/japan/special';
import { UtilitiesTinyMCE } from 'pages/utilities/tiny-mce';
import { MasterLayout } from 'pages/_layout/master-layout';
import { TutorialPostgreSQL } from 'pages/tutorials/postgreSQL';
import { TutorialNetAngular } from 'pages/tutorials/net-angular';
import { TutorialJava } from 'pages/tutorials/java';
import { TutorialJapan } from 'pages/tutorials/japan';
import { TutorialJapanVocabularyLessonCommon } from 'pages/tutorials/japan/general/lesson-common';
import { TutorialJapanVocabularyLessonSpecialize } from 'pages/tutorials/japan/general/lesson-specialize';
import { TutorialJapanVocabularyLessonJob } from 'pages/tutorials/japan/general/lesson-job';
import { TutorialJapanVocabularyLessonFood } from 'pages/tutorials/japan/general/lesson-food';
import { TutorialJapanVocabularyLessonFood1 } from 'pages/tutorials/japan/general/lesson-food1';
import { TutorialJapanVocabularyLessonSpice } from 'pages/tutorials/japan/general/lesson-spice';
import { TutorialJapanVocabularyLessonBody } from 'pages/tutorials/japan/general/lesson-body';
import { TutorialJapanVocabularyKanjiN501 } from 'pages/tutorials/japan/kanji/N5_01';

import { UtilitieAppTodo } from 'pages/utilities/app/todo';
import { UtilitieAppTodoDetail } from 'pages/utilities/app/todo/todoDetail';
import { UtilitiesMakeJsonVocabulary } from 'pages/utilities/excel/make-json-vocabulary';
import { UtilitiesJapanVocabulary } from 'pages/utilities/japan/vocabulary';
import { UtilitiesFileMakeJsonFromExcel } from 'pages/utilities/file/make-json-from-excel';
import { UtilitiesGeneralGit } from 'pages/utilities/general/git';

import { BatchStartEndProgram } from 'pages/programming/batch/start-end-program';
import { UtilitiesJapanVocabularyUnit } from 'pages/utilities/japan/vocabulary/unit';
import { UtilitiesEnglishSpecial } from 'pages/utilities/english/special';
import { ProgrammingJavascript } from 'pages/programming/javascript';
import { ProgrammingJavascriptTipsTips } from 'pages/programming/javascript/tips/tips';
import { ExcelColorRowOfTable } from 'pages/programming/excel/color-row-of-table';
import { ExcelColorColumnHoliday } from 'pages/programming/excel/color-column-holiday';
import { ExcelTimekeepingCalendar } from 'pages/programming/excel/time-keeping-calendar';
import { ExcelConvertDayOfBirthToAge } from 'pages/programming/excel/convert-day-of-birth-to-age';
import { PogrammingExcelVBA001 } from 'pages/programming/excel/VBA/1-10/lession1';
import { UtilitieAppProjectInfo } from 'pages/utilities/app/project-info';
import { UtilitieAppProjectDetail } from 'pages/utilities/app/project-info/project-detail';
import { OraclePasswordHasExpired } from 'pages/database/oracle/tips/password-has-expired';
import { PostgresqlRunAllSqlInAFolder } from 'pages/database/postgresql/dump/run-all-sql-in-folder';
import { UtilitiesGeneralCommandLine } from 'pages/utilities/general/command-line';
import { JavaArrayArgument } from 'pages/programming/java/array/argument';
import { SampleContentPage } from 'pages/sample/content-page';
import { EbookVietnamese } from 'pages/ebook/vietnamese';
import { EbookVietnameseCleanCode } from 'pages/ebook/vietnamese/clean-code';
import { EbookVietnameseHeadFirstDesignPatterns } from 'pages/ebook/vietnamese/head-first-design-patterns';
import { SoftwareDockerPostgresql } from 'pages/software/docker/postgresql';
import { SoftwareDockerSQLServer } from 'pages/software/docker/sqlserver';
import { PostgresqlCheckInfoFileDump } from 'pages/database/postgresql/dump/check-info-file';
import { TutorialCSharp } from 'pages/tutorials/c-sharp';
import { TutorialCSharpLesson } from 'pages/tutorials/c-sharp/list-lesson';
import { TutorialJavaLesson } from 'pages/tutorials/java/list-lesson';
import { TutorialNetAngularLesson } from 'pages/tutorials/net-angular/list-lesson';
import { TutorialTutorialPostgreSQLLesson } from 'pages/tutorials/postgreSQL/list-lesson';
import { TutorialJapanVocabularyLesson } from 'pages/tutorials/japan/list-lesson';

export const RoutesRoot = () => {
  return (
    <HashRouter>
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample/create-content-page" element={<CreateContentPage />} />
          <Route path="/sample/content-page" element={<SampleContentPage />} />

          <Route path="/database/postgresql" element={<DatabasePostgresql />} />
          <Route path="/database/postgresql/general/config-pghba" element={<PostgresqlConfigPghba />} />
          <Route path="/database/postgresql/dump/run-all-sql-in-folder" element={<PostgresqlRunAllSqlInAFolder />} />
          <Route path="/database/postgresql/dump/check-info-file-dump" element={<PostgresqlCheckInfoFileDump />} />
          <Route path="/database/postgresql/table/general" element={<PostgresqlTableGeneral />} />

          <Route path="/database/oracle" element={<DatabaseOracle />} />
          <Route
            path="/database/oracle/change-language-oracle-sql-developer"
            element={<OracleChangeLanguageOracleSQLDeveloper />}
          />
          <Route path="/database/oracle/import-dump" element={<OracleImportDump />} />
          <Route path="/database/oracle/dump-full" element={<OracleDumpFull />} />
          <Route path="/database/oracle/listener-and-tnsnames" element={<OracleListenerAndTnsnames />} />
          <Route path="/database/oracle/sql-text-session-process" element={<OracleSqltextSessionProcess />} />
          <Route path="/database/oracle/tips/string" element={<OracleString />} />
          <Route path="/database/oracle/tips/system" element={<OracleSystem />} />
          <Route path="/database/oracle/tips-sql-developer" element={<OracleTipsSQLDeveloper />} />
          <Route path="/database/oracle/the-password-has-expired" element={<OraclePasswordHasExpired />} />

          <Route path="/ebook/english" element={<EbookVietnamese />} />
          <Route path="/ebook/vietnamese" element={<EbookVietnamese />} />
          <Route path="/ebook/vietnamese/clean-code/:chapter" element={<EbookVietnameseCleanCode />} />
          <Route path="/ebook/vietnamese/head-first-design-patterns/:chapter" element={<EbookVietnameseHeadFirstDesignPatterns />} />

          <Route path="/programming-batch" element={<ProgrammingBatch />} />
          <Route path="/programming-batch/if-else" element={<BatchIfElse />} />
          <Route path="/programming-batch/start-end-program" element={<BatchStartEndProgram />} />

          <Route path="/programming-csharp" element={<ProgrammingCSharp />} />
          <Route path="/programming-csharp/connect-oracle" element={<CSharpConnectOracle />} />
          <Route path="/programming-csharp/connect-postgresql" element={<CSharpConnectPostgresql />} />
          <Route path="/programming-csharp/ep-plus" element={<CSharpEPPlus />} />
          <Route path="/programming-csharp/get-all-file-in-folder" element={<CSharpGetAllFileInFolder />} />
          <Route path="/programming-csharp/name-control-winform" element={<CSharpNameControlWinform />} />
          <Route path="/programming-csharp/read-file-excel" element={<CSharpReadFileExcel />} />

          <Route path="/programming-excel" element={<ProgrammingExcel />} />
          <Route path="/programming-excel/characters-in-excel" element={<ExcelCharactersInExcel />} />
          <Route path="/programming-excel/filter1" element={<ExcelFilter1 />} />
          <Route path="/programming-excel/tips/swap-data-two-cell" element={<ExcelSwapDataTwoCell />} />
          <Route path="/programming-excel/tips/color-row-of-table" element={<ExcelColorRowOfTable />} />
          <Route path="/programming-excel/tips/timekeeping-calendar" element={<ExcelTimekeepingCalendar />} />
          <Route path="/programming-excel/tips/color-column-holiday" element={<ExcelColorColumnHoliday />} />
          <Route path="/programming-excel/tips/convert-day-of-birth-to-age" element={<ExcelConvertDayOfBirthToAge />} />
          <Route path="/programming-excel/vba/001" element={<PogrammingExcelVBA001 />} />

          <Route path="/programming-java" element={<ProgrammingJava />} />
          <Route path="/programming-java/spring-boot/crud/delete-data-1" element={<JavaDeleteData1 />} />
          <Route path="/programming-java/spring-boot/crud/insert-data-1" element={<JavaInsertData1 />} />
          <Route path="/programming-java/spring-boot/crud/select-data-1" element={<JavaSelectData1 />} />
          <Route path="/programming-java/spring-boot/crud/select-data-2" element={<JavaSelectData2 />} />
          <Route path="/programming-java/spring-boot/crud/setting-maven" element={<JavaSettingMaven />} />
          <Route path="/programming-java/spring-boot/crud/update-data-1" element={<JavaUpdateData1 />} />
          <Route path="/programming-java/array/arbitrary-number-of-arguments" element={<JavaArrayArgument />} />

          <Route path="/programming-php" element={<ProgrammingPHP />} />
          <Route path="/programming-php/convert/convert-datetime" element={<PHPConvertDatetime />} />
          <Route path="/programming-php/convert/convert-unicode" element={<PHPConvertUnicode />} />
          <Route path="/programming-php/convert/substring-ellipses" element={<PHPSubstringEllipses />} />
          <Route path="/programming-php/convert/delete-file" element={<PHPDeleteFile />} />
          <Route path="/programming-php/lavavel/install-font-dompdf" element={<PHPLaravelInstallFontDompdf />} />

          <Route path="/programming-javascript" element={<ProgrammingJavascript />} />
          <Route path="/programming-javascript/tips/tips" element={<ProgrammingJavascriptTipsTips />} />

          <Route path="/software" element={<Software />} />
          <Route path="/software/visual-studio-code/add-hotkey" element={<VisualStudioCodeAddHotkey />} />
          <Route path="/software/visual-studio-code/extention" element={<VisualStudioCodeExtention />} />
          <Route path="/software/docker/postgresql" element={<SoftwareDockerPostgresql />} />
          <Route path="/software/docker/sql-server" element={<SoftwareDockerSQLServer />} />

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
         
          <Route path="/tutorial/japan/vocabulary/lesson-common" element={<TutorialJapanVocabularyLessonCommon />} />
          <Route
            path="/tutorial/japan/vocabulary/lesson-specialize"
            element={<TutorialJapanVocabularyLessonSpecialize />}
          />
          <Route path="/tutorial/japan/vocabulary/lesson-job" element={<TutorialJapanVocabularyLessonJob />} />
          <Route path="/tutorial/japan/vocabulary/lesson-food" element={<TutorialJapanVocabularyLessonFood />} />
          <Route path="/tutorial/japan/vocabulary/lesson-food1" element={<TutorialJapanVocabularyLessonFood1 />} />
          <Route path="/tutorial/japan/vocabulary/lesson-spice" element={<TutorialJapanVocabularyLessonSpice />} />
          <Route path="/tutorial/japan/vocabulary/lesson-body" element={<TutorialJapanVocabularyLessonBody />} />
          <Route path="/tutorial/japan/vocabulary/kanji/N5-01" element={<TutorialJapanVocabularyKanjiN501 />} />

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
          <Route path="/utilities/app/todo/:todo_id" element={<UtilitieAppTodoDetail />} />
          <Route path="/utilities/app/project-info/:project_id" element={<UtilitieAppProjectDetail />} />
          <Route path="/utilities/general/git" element={<UtilitiesGeneralGit />} />
          <Route path="/utilities/general/command-line" element={<UtilitiesGeneralCommandLine />} />
        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};
