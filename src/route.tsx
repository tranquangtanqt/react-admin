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
import { TutorialPostgreSQLChapter1 } from 'pages/tutorials/postgreSQL/1_10/chapter1';
import { TutorialPostgreSQLChapter2 } from 'pages/tutorials/postgreSQL/1_10/chapter2';
import { TutorialPostgreSQLChapter3 } from 'pages/tutorials/postgreSQL/1_10/chapter3';
import { TutorialPostgreSQLChapter4 } from 'pages/tutorials/postgreSQL/1_10/chapter4';
import { TutorialPostgreSQLChapter5 } from 'pages/tutorials/postgreSQL/1_10/chapter5';
import { TutorialPostgreSQLChapter6 } from 'pages/tutorials/postgreSQL/1_10/chapter6';
import { TutorialPostgreSQLChapter7 } from 'pages/tutorials/postgreSQL/1_10/chapter7';
import { TutorialPostgreSQLChapter8 } from 'pages/tutorials/postgreSQL/1_10/chapter8';
import { TutorialPostgreSQLChapter9 } from 'pages/tutorials/postgreSQL/1_10/chapter9';
import { TutorialPostgreSQLChapter10 } from 'pages/tutorials/postgreSQL/1_10/chapter10';
import { TutorialPostgreSQLChapter11 } from 'pages/tutorials/postgreSQL/11_20/chapter11';
import { TutorialPostgreSQLChapter12 } from 'pages/tutorials/postgreSQL/11_20/chapter12';
import { TutorialPostgreSQLChapter13 } from 'pages/tutorials/postgreSQL/11_20/chapter13';
import { TutorialPostgreSQLChapter14 } from 'pages/tutorials/postgreSQL/11_20/chapter14';
import { TutorialPostgreSQLChapter15 } from 'pages/tutorials/postgreSQL/11_20/chapter15';
import { TutorialPostgreSQLChapter16 } from 'pages/tutorials/postgreSQL/11_20/chapter16';
import { TutorialPostgreSQLChapter17 } from 'pages/tutorials/postgreSQL/11_20/chapter17';
import { TutorialPostgreSQLChapter18 } from 'pages/tutorials/postgreSQL/11_20/chapter18';
import { TutorialPostgreSQLChapter19 } from 'pages/tutorials/postgreSQL/11_20/chapter19';
import { TutorialPostgreSQLChapter20 } from 'pages/tutorials/postgreSQL/11_20/chapter20';
import { TutorialPostgreSQLChapter21 } from 'pages/tutorials/postgreSQL/21_28/chapter21';
import { TutorialPostgreSQLChapter22 } from 'pages/tutorials/postgreSQL/21_28/chapter22';
import { TutorialPostgreSQLChapter23 } from 'pages/tutorials/postgreSQL/21_28/chapter23';
import { TutorialPostgreSQLChapter24 } from 'pages/tutorials/postgreSQL/21_28/chapter24';
import { TutorialPostgreSQLChapter25 } from 'pages/tutorials/postgreSQL/21_28/chapter25';
import { TutorialPostgreSQLChapter26 } from 'pages/tutorials/postgreSQL/21_28/chapter26';
import { TutorialPostgreSQLChapter27 } from 'pages/tutorials/postgreSQL/21_28/chapter27';
import { TutorialPostgreSQLChapter28 } from 'pages/tutorials/postgreSQL/21_28/chapter28';
import { TutorialNetAngular } from 'pages/tutorials/net-angular';
import { TutorialNetAngularLesson1 } from 'pages/tutorials/net-angular/1_10/lesson1';
import { TutorialNetAngularLesson2 } from 'pages/tutorials/net-angular/1_10/lesson2';
import { TutorialNetAngularLesson3 } from 'pages/tutorials/net-angular/1_10/lesson3';
import { TutorialNetAngularLesson4 } from 'pages/tutorials/net-angular/1_10/lesson4';
import { TutorialNetAngularLesson5 } from 'pages/tutorials/net-angular/1_10/lesson5';
import { TutorialNetAngularLesson6 } from 'pages/tutorials/net-angular/1_10/lesson6';
import { TutorialNetAngularLesson7 } from 'pages/tutorials/net-angular/1_10/lesson7';
import { TutorialNetAngularLesson8 } from 'pages/tutorials/net-angular/1_10/lesson8';
import { TutorialNetAngularLesson9 } from 'pages/tutorials/net-angular/1_10/lesson9';
import { TutorialJava } from 'pages/tutorials/java';
import { TutorialJavaLesson1 } from 'pages/tutorials/java/1_10/lesson1';
import { TutorialJavaLesson2 } from 'pages/tutorials/java/1_10/lesson2';
import { TutorialJavaLesson3 } from 'pages/tutorials/java/1_10/lesson3';
import { TutorialJavaLesson4 } from 'pages/tutorials/java/1_10/lesson4';
import { TutorialJavaLesson5 } from 'pages/tutorials/java/1_10/lesson5';
import { TutorialJavaLesson6 } from 'pages/tutorials/java/1_10/lesson6';
import { TutorialJapan } from 'pages/tutorials/japan';
import { TutorialJapanVocabularyLesson1 } from 'pages/tutorials/japan/1_10/lesson1';
import { TutorialJapanVocabularyLesson2 } from 'pages/tutorials/japan/1_10/lesson2';
import { TutorialJapanVocabularyLesson3 } from 'pages/tutorials/japan/1_10/lesson3';
import { TutorialJapanVocabularyLesson4 } from 'pages/tutorials/japan/1_10/lesson4';
import { TutorialJapanVocabularyLesson5 } from 'pages/tutorials/japan/1_10/lesson5';
import { TutorialJapanVocabularyLesson6 } from 'pages/tutorials/japan/1_10/lesson6';
import { TutorialJapanVocabularyLesson7 } from 'pages/tutorials/japan/1_10/lesson7';
import { TutorialJapanVocabularyLesson8 } from 'pages/tutorials/japan/1_10/lesson8';
import { TutorialJapanVocabularyLesson9 } from 'pages/tutorials/japan/1_10/lesson9';
import { TutorialJapanVocabularyLesson10 } from 'pages/tutorials/japan/1_10/lesson10';
import { TutorialJapanVocabularyLesson11 } from 'pages/tutorials/japan/11_20/lesson11';
import { TutorialJapanVocabularyLesson12 } from 'pages/tutorials/japan/11_20/lesson12';
import { TutorialJapanVocabularyLesson13 } from 'pages/tutorials/japan/11_20/lesson13';
import { TutorialJapanVocabularyLesson14 } from 'pages/tutorials/japan/11_20/lesson14';
import { TutorialJapanVocabularyLesson15 } from 'pages/tutorials/japan/11_20/lesson15';
import { TutorialJapanVocabularyLesson16 } from 'pages/tutorials/japan/11_20/lesson16';
import { TutorialJapanVocabularyLesson17 } from 'pages/tutorials/japan/11_20/lesson17';
import { TutorialJapanVocabularyLesson18 } from 'pages/tutorials/japan/11_20/lesson18';
import { TutorialJapanVocabularyLesson19 } from 'pages/tutorials/japan/11_20/lesson19';
import { TutorialJapanVocabularyLesson20 } from 'pages/tutorials/japan/11_20/lesson20';
import { TutorialJapanVocabularyLesson21 } from 'pages/tutorials/japan/21-25/lesson21';
import { TutorialJapanVocabularyLesson22 } from 'pages/tutorials/japan/21-25/lesson22';
import { TutorialJapanVocabularyLesson23 } from 'pages/tutorials/japan/21-25/lesson23';
import { TutorialJapanVocabularyLesson24 } from 'pages/tutorials/japan/21-25/lesson24';
import { TutorialJapanVocabularyLesson25 } from 'pages/tutorials/japan/21-25/lesson25';
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

          <Route path="/tutorial/java" element={<TutorialJava />} />
          <Route path="/tutorial/java/lesson1" element={<TutorialJavaLesson1 />} />
          <Route path="/tutorial/java/lesson2" element={<TutorialJavaLesson2 />} />
          <Route path="/tutorial/java/lesson3" element={<TutorialJavaLesson3 />} />
          <Route path="/tutorial/java/lesson4" element={<TutorialJavaLesson4 />} />
          <Route path="/tutorial/java/lesson5" element={<TutorialJavaLesson5 />} />
          <Route path="/tutorial/java/lesson6" element={<TutorialJavaLesson6 />} />

          <Route path="/tutorial/net-angular" element={<TutorialNetAngular />} />
          <Route path="/tutorial/net-angular/lesson1" element={<TutorialNetAngularLesson1 />} />
          <Route path="/tutorial/net-angular/lesson2" element={<TutorialNetAngularLesson2 />} />
          <Route path="/tutorial/net-angular/lesson3" element={<TutorialNetAngularLesson3 />} />
          <Route path="/tutorial/net-angular/lesson4" element={<TutorialNetAngularLesson4 />} />
          <Route path="/tutorial/net-angular/lesson5" element={<TutorialNetAngularLesson5 />} />
          <Route path="/tutorial/net-angular/lesson6" element={<TutorialNetAngularLesson6 />} />
          <Route path="/tutorial/net-angular/lesson7" element={<TutorialNetAngularLesson7 />} />
          <Route path="/tutorial/net-angular/lesson8" element={<TutorialNetAngularLesson8 />} />
          <Route path="/tutorial/net-angular/lesson9" element={<TutorialNetAngularLesson9 />} />

          <Route path="/tutorial/postgreSQL" element={<TutorialPostgreSQL />} />
          <Route path="/tutorial/postgreSQL/chapter1" element={<TutorialPostgreSQLChapter1 />} />
          <Route path="/tutorial/postgreSQL/chapter2" element={<TutorialPostgreSQLChapter2 />} />
          <Route path="/tutorial/postgreSQL/chapter3" element={<TutorialPostgreSQLChapter3 />} />
          <Route path="/tutorial/postgreSQL/chapter4" element={<TutorialPostgreSQLChapter4 />} />
          <Route path="/tutorial/postgreSQL/chapter5" element={<TutorialPostgreSQLChapter5 />} />
          <Route path="/tutorial/postgreSQL/chapter6" element={<TutorialPostgreSQLChapter6 />} />
          <Route path="/tutorial/postgreSQL/chapter7" element={<TutorialPostgreSQLChapter7 />} />
          <Route path="/tutorial/postgreSQL/chapter8" element={<TutorialPostgreSQLChapter8 />} />
          <Route path="/tutorial/postgreSQL/chapter9" element={<TutorialPostgreSQLChapter9 />} />
          <Route path="/tutorial/postgreSQL/chapter10" element={<TutorialPostgreSQLChapter10 />} />
          <Route path="/tutorial/postgreSQL/chapter11" element={<TutorialPostgreSQLChapter11 />} />
          <Route path="/tutorial/postgreSQL/chapter12" element={<TutorialPostgreSQLChapter12 />} />
          <Route path="/tutorial/postgreSQL/chapter13" element={<TutorialPostgreSQLChapter13 />} />
          <Route path="/tutorial/postgreSQL/chapter14" element={<TutorialPostgreSQLChapter14 />} />
          <Route path="/tutorial/postgreSQL/chapter15" element={<TutorialPostgreSQLChapter15 />} />
          <Route path="/tutorial/postgreSQL/chapter16" element={<TutorialPostgreSQLChapter16 />} />
          <Route path="/tutorial/postgreSQL/chapter17" element={<TutorialPostgreSQLChapter17 />} />
          <Route path="/tutorial/postgreSQL/chapter18" element={<TutorialPostgreSQLChapter18 />} />
          <Route path="/tutorial/postgreSQL/chapter19" element={<TutorialPostgreSQLChapter19 />} />
          <Route path="/tutorial/postgreSQL/chapter20" element={<TutorialPostgreSQLChapter20 />} />
          <Route path="/tutorial/postgreSQL/chapter21" element={<TutorialPostgreSQLChapter21 />} />
          <Route path="/tutorial/postgreSQL/chapter22" element={<TutorialPostgreSQLChapter22 />} />
          <Route path="/tutorial/postgreSQL/chapter23" element={<TutorialPostgreSQLChapter23 />} />
          <Route path="/tutorial/postgreSQL/chapter24" element={<TutorialPostgreSQLChapter24 />} />
          <Route path="/tutorial/postgreSQL/chapter25" element={<TutorialPostgreSQLChapter25 />} />
          <Route path="/tutorial/postgreSQL/chapter26" element={<TutorialPostgreSQLChapter26 />} />
          <Route path="/tutorial/postgreSQL/chapter27" element={<TutorialPostgreSQLChapter27 />} />
          <Route path="/tutorial/postgreSQL/chapter28" element={<TutorialPostgreSQLChapter28 />} />

          <Route path="/tutorial/japan" element={<TutorialJapan />} />
          <Route path="/tutorial/japan/vocabulary/lesson1" element={<TutorialJapanVocabularyLesson1 />} />
          <Route path="/tutorial/japan/vocabulary/lesson2" element={<TutorialJapanVocabularyLesson2 />} />
          <Route path="/tutorial/japan/vocabulary/lesson3" element={<TutorialJapanVocabularyLesson3 />} />
          <Route path="/tutorial/japan/vocabulary/lesson4" element={<TutorialJapanVocabularyLesson4 />} />
          <Route path="/tutorial/japan/vocabulary/lesson5" element={<TutorialJapanVocabularyLesson5 />} />
          <Route path="/tutorial/japan/vocabulary/lesson6" element={<TutorialJapanVocabularyLesson6 />} />
          <Route path="/tutorial/japan/vocabulary/lesson7" element={<TutorialJapanVocabularyLesson7 />} />
          <Route path="/tutorial/japan/vocabulary/lesson8" element={<TutorialJapanVocabularyLesson8 />} />
          <Route path="/tutorial/japan/vocabulary/lesson9" element={<TutorialJapanVocabularyLesson9 />} />
          <Route path="/tutorial/japan/vocabulary/lesson10" element={<TutorialJapanVocabularyLesson10 />} />
          <Route path="/tutorial/japan/vocabulary/lesson11" element={<TutorialJapanVocabularyLesson11 />} />
          <Route path="/tutorial/japan/vocabulary/lesson12" element={<TutorialJapanVocabularyLesson12 />} />
          <Route path="/tutorial/japan/vocabulary/lesson13" element={<TutorialJapanVocabularyLesson13 />} />
          <Route path="/tutorial/japan/vocabulary/lesson14" element={<TutorialJapanVocabularyLesson14 />} />
          <Route path="/tutorial/japan/vocabulary/lesson15" element={<TutorialJapanVocabularyLesson15 />} />
          <Route path="/tutorial/japan/vocabulary/lesson16" element={<TutorialJapanVocabularyLesson16 />} />
          <Route path="/tutorial/japan/vocabulary/lesson17" element={<TutorialJapanVocabularyLesson17 />} />
          <Route path="/tutorial/japan/vocabulary/lesson18" element={<TutorialJapanVocabularyLesson18 />} />
          <Route path="/tutorial/japan/vocabulary/lesson19" element={<TutorialJapanVocabularyLesson19 />} />
          <Route path="/tutorial/japan/vocabulary/lesson20" element={<TutorialJapanVocabularyLesson20 />} />
          <Route path="/tutorial/japan/vocabulary/lesson21" element={<TutorialJapanVocabularyLesson21 />} />
          <Route path="/tutorial/japan/vocabulary/lesson22" element={<TutorialJapanVocabularyLesson22 />} />
          <Route path="/tutorial/japan/vocabulary/lesson23" element={<TutorialJapanVocabularyLesson23 />} />
          <Route path="/tutorial/japan/vocabulary/lesson24" element={<TutorialJapanVocabularyLesson24 />} />
          <Route path="/tutorial/japan/vocabulary/lesson25" element={<TutorialJapanVocabularyLesson25 />} />
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
