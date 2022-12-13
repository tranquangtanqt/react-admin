import { Route, Routes, HashRouter } from "react-router-dom";
import { DatabaseOracle } from "./pages/database/oracle";
import { OracleChangeLanguageOracleSQLDeveloper } from "./pages/database/oracle/changeLanguageOracleSQLDeveloper";
import { OracleImportDump } from "./pages/database/oracle/importDumpOracle";
import { OracleDumpFull } from "./pages/database/oracle/importDumpOracle/dumpFull";
import { OracleListenerAndTnsnames } from "./pages/database/oracle/listenerAndTnsnames";
import { OracleSqltextSessionProcess } from "./pages/database/oracle/sqltextSessionProcess";
import { OracleString } from "./pages/database/oracle/tips/string";
import { OracleSystem } from "./pages/database/oracle/tips/system";
import { OracleTipsSQLDeveloper } from "./pages/database/oracle/tipsSQLDeveloper";
import { DatabasePostgresql } from "./pages/database/postgresql";
import { PostgresqlConfigPghba } from "./pages/database/postgresql/configPghba";
import { Home } from "./pages/home";
import { ProgrammingBatch } from "./pages/programming/batch";
import { BatchIfElse } from "./pages/programming/batch/ifElse";
import { ProgrammingCSharp } from "./pages/programming/cSharp";
import { CSharpConnectOracle } from "./pages/programming/cSharp/connectOracle";
import { CSharpConnectPostgresql } from "./pages/programming/cSharp/connectPostgresql";
import { CSharpEPPlus } from "./pages/programming/cSharp/epplus";
import { CSharpGetAllFileInFolder } from "./pages/programming/cSharp/getAllFileInFolder";
import { CSharpNameControlWinform } from "./pages/programming/cSharp/nameControlWinform";
import { CSharpReadFileExcel } from "./pages/programming/cSharp/readFileExcel";
import { ProgrammingExcel } from "./pages/programming/excel";
import { ExcelCharactersInExcel } from "./pages/programming/excel/charactersInExcel";
import { ExcelFilter1 } from "./pages/programming/excel/sortAndFilter/filter1";
import { ExcelSwapDataTwoCell } from "./pages/programming/excel/swapDataTwoCell";
import { ProgrammingJava } from "./pages/programming/java";
import { JavaDeleteData1 } from "./pages/programming/java/deleteData1";
import { JavaInsertData1 } from "./pages/programming/java/insertData1";
import { JavaSelectData1 } from "./pages/programming/java/selectData1";
import { JavaSelectData2 } from "./pages/programming/java/selectData2";
import { JavaSettingMaven } from "./pages/programming/java/settingMaven";
import { JavaUpdateData1 } from "./pages/programming/java/updateData1";
import { ProgrammingPHP } from "./pages/programming/PHP";
import { PHPConvertDatetime } from "./pages/programming/PHP/convertDatetime";
import { PHPConvertUnicode } from "./pages/programming/PHP/convertUnicode";
import { PHPDeleteFile } from "./pages/programming/PHP/phpDeleteFile";
import { PHPSubstringEllipses } from "./pages/programming/PHP/substringEllipses";
import { CreateContentPage } from "./pages/sample/createContentPage";
import { Software } from "./pages/software";
import { VisualStudioCodeAddHotkey } from "./pages/software/visualStudioCode/addHotkey";
import { VisualStudioCodeExtention } from "./pages/software/visualStudioCode/extention";
import { Utilities } from "./pages/utilities";
import { UtilitiesListFileSelected } from "./pages/utilities/file/listFileSelected";
import { UtilitiesReadContentMultiFile } from "./pages/utilities/file/readContentMultiFile";
import { UtilitiesCreateTableFromExcel } from "./pages/utilities/sql/createTableFromExcel";
import { UtilitiesMakeInsertSQL } from "./pages/utilities/sql/makeInsertSQL";
import { UtilitiesMakeInsertSQLFromProcedure } from "./pages/utilities/sql/makeInsertProcedure";
import { UtilitiesTextCommon } from "./pages/utilities/text/common";
import { UtilitiesTextFindDifferentTwoList } from "./pages/utilities/text/findDifferentTwoList";
import { UtilitiesTextFindDifferentTwoList1 } from "./pages/utilities/text/findDifferentTwoList1";
import { UtilitiesTextFindTextColumnJPEN } from "./pages/utilities/text/findTextColumnJpEn";
import { UtilitiesTextRepeat } from "./pages/utilities/text/repeat";
import { UtilitiesTextReplace } from "./pages/utilities/text/replace";
import { UtilitiesTextSpecial } from "./pages/utilities/text/special";
import { UtilitiesTinyMCE } from "./pages/utilities/tinyMCE";
import { MasterLayout } from "./pages/_layout/masterLayout";
import { TutorialPostgreSQL } from "./pages/tutorials/postgreSQL";
import { TutorialPostgreSQLChapter1 } from "./pages/tutorials/postgreSQL/1_10/chapter1";
import { TutorialPostgreSQLChapter2 } from "./pages/tutorials/postgreSQL/1_10/chapter2";
import { TutorialPostgreSQLChapter3 } from "./pages/tutorials/postgreSQL/1_10/chapter3";
import { TutorialPostgreSQLChapter4 } from "./pages/tutorials/postgreSQL/1_10/chapter4";
import { TutorialPostgreSQLChapter5 } from "./pages/tutorials/postgreSQL/1_10/chapter5";
import { TutorialPostgreSQLChapter6 } from "./pages/tutorials/postgreSQL/1_10/chapter6";
import { TutorialPostgreSQLChapter7 } from "./pages/tutorials/postgreSQL/1_10/chapter7";
import { TutorialPostgreSQLChapter8 } from "./pages/tutorials/postgreSQL/1_10/chapter8";
import { TutorialPostgreSQLChapter9 } from "./pages/tutorials/postgreSQL/1_10/chapter9";
import { TutorialPostgreSQLChapter10 } from "./pages/tutorials/postgreSQL/1_10/chapter10";
import { TutorialPostgreSQLChapter11 } from "./pages/tutorials/postgreSQL/11_20/chapter11";
import { TutorialPostgreSQLChapter12 } from "./pages/tutorials/postgreSQL/11_20/chapter12";
import { TutorialPostgreSQLChapter13 } from "./pages/tutorials/postgreSQL/11_20/chapter13";
import { TutorialPostgreSQLChapter14 } from "./pages/tutorials/postgreSQL/11_20/chapter14";
import { TutorialPostgreSQLChapter15 } from "./pages/tutorials/postgreSQL/11_20/chapter15";
import { TutorialPostgreSQLChapter16 } from "./pages/tutorials/postgreSQL/11_20/chapter16";
import { TutorialPostgreSQLChapter17 } from "./pages/tutorials/postgreSQL/11_20/chapter17";
import { TutorialPostgreSQLChapter18 } from "./pages/tutorials/postgreSQL/11_20/chapter18";
import { TutorialPostgreSQLChapter19 } from "./pages/tutorials/postgreSQL/11_20/chapter19";
import { TutorialPostgreSQLChapter20 } from "./pages/tutorials/postgreSQL/11_20/chapter20";
import { TutorialPostgreSQLChapter21 } from "./pages/tutorials/postgreSQL/21_28/chapter21";
import { TutorialPostgreSQLChapter22 } from "./pages/tutorials/postgreSQL/21_28/chapter22";
import { TutorialPostgreSQLChapter23 } from "./pages/tutorials/postgreSQL/21_28/chapter23";
import { TutorialPostgreSQLChapter24 } from "./pages/tutorials/postgreSQL/21_28/chapter24";
import { TutorialPostgreSQLChapter25 } from "./pages/tutorials/postgreSQL/21_28/chapter25";
import { TutorialPostgreSQLChapter26 } from "./pages/tutorials/postgreSQL/21_28/chapter26";
import { TutorialPostgreSQLChapter27 } from "./pages/tutorials/postgreSQL/21_28/chapter27";
import { TutorialPostgreSQLChapter28 } from "./pages/tutorials/postgreSQL/21_28/chapter28";
import { TutorialNetAngular } from "./pages/tutorials/netAngular";
import { TutorialNetAngularLesson1 } from "./pages/tutorials/netAngular/1_10/lesson1";
import { TutorialNetAngularLesson2 } from "./pages/tutorials/netAngular/1_10/lesson2";
import { TutorialNetAngularLesson3 } from "./pages/tutorials/netAngular/1_10/lesson3";
import { TutorialNetAngularLesson4 } from "./pages/tutorials/netAngular/1_10/lesson4";
import { TutorialNetAngularLesson5 } from "./pages/tutorials/netAngular/1_10/lesson5";
import { TutorialNetAngularLesson6 } from "./pages/tutorials/netAngular/1_10/lesson6";
import { TutorialNetAngularLesson7 } from "./pages/tutorials/netAngular/1_10/lesson7";
import { TutorialNetAngularLesson8 } from "./pages/tutorials/netAngular/1_10/lesson8";
import { TutorialNetAngularLesson9 } from "./pages/tutorials/netAngular/1_10/lesson9";
import { TutorialJava } from "./pages/tutorials/java";
import { TutorialJavaLesson1 } from "./pages/tutorials/java/1_10/lesson1";
import { TutorialJavaLesson2 } from "./pages/tutorials/java/1_10/lesson2";
import { TutorialJavaLesson3 } from "./pages/tutorials/java/1_10/lesson3";
import { TutorialJavaLesson4 } from "./pages/tutorials/java/1_10/lesson4";
import { TutorialJavaLesson5 } from "./pages/tutorials/java/1_10/lesson5";
import { TutorialJavaLesson6 } from "./pages/tutorials/java/1_10/lesson6";
import { UtilitieAppTodo } from "./pages/utilities/app/todo";
import { UtilitieAppTodoDetail } from "./pages/utilities/app/todo/todoDetail";
import { UtilitiesGeneralCollapseGit } from "./pages/utilities/general/collapseGit";
import { UtilitiesMakeJsonVocabulary } from "./pages/utilities/excel/makeJsonVocabulary";
import { UtilitiesJapanVocabulary } from "./pages/utilities/japan/vocabulary";
import { UtilitiesFileMakeJsonFromExcel } from "./pages/utilities/file/makeJsonFromExcel";
import { UtilitiesGeneralGit } from "./pages/utilities/general/git";
import { PHPLaravelInstallFontDompdf } from "./pages/programming/PHP/installFontDompdf";

export const RoutesRoot = () => {
  return (
    <HashRouter>
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample/create-content-page" element={<CreateContentPage />} />

          <Route path="/database/postgresql" element={<DatabasePostgresql />} />
          <Route path="/database/postgresql/config-pghba" element={<PostgresqlConfigPghba />} />

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

          <Route path="/programming-batch" element={<ProgrammingBatch />} />
          <Route path="/programming-batch/if-else" element={<BatchIfElse />} />

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
          <Route path="/programming-excel/swap-data-two-cell" element={<ExcelSwapDataTwoCell />} />

          <Route path="/programming-java" element={<ProgrammingJava />} />
          <Route path="/programming-java/delete-data-1" element={<JavaDeleteData1 />} />
          <Route path="/programming-java/insert-data-1" element={<JavaInsertData1 />} />
          <Route path="/programming-java/select-data-1" element={<JavaSelectData1 />} />
          <Route path="/programming-java/select-data-2" element={<JavaSelectData2 />} />
          <Route path="/programming-java/setting-maven" element={<JavaSettingMaven />} />
          <Route path="/programming-java/update-data-1" element={<JavaUpdateData1 />} />

          <Route path="/programming-php" element={<ProgrammingPHP />} />
          <Route path="/programming-php/convert/convert-datetime" element={<PHPConvertDatetime />} />
          <Route path="/programming-php/convert/convert-unicode" element={<PHPConvertUnicode />} />
          <Route path="/programming-php/convert/substring-ellipses" element={<PHPSubstringEllipses />} />
          <Route path="/programming-php/convert/delete-file" element={<PHPDeleteFile />} />
          <Route path="/programming-php/lavavel/install-font-dompdf" element={<PHPLaravelInstallFontDompdf />} />

          <Route path="/software" element={<Software />} />
          <Route path="/software/visual-studio-code/add-hotkey" element={<VisualStudioCodeAddHotkey />} />
          <Route path="/software/visual-studio-code/extention" element={<VisualStudioCodeExtention />} />

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
          <Route path="/utilities/text/special" element={<UtilitiesTextSpecial />} />
          <Route path="/utilities/tinyMCE" element={<UtilitiesTinyMCE />} />
          <Route path="/utilities/sql/random-insert" element={<UtilitiesMakeInsertSQL />} />
          <Route path="/utilities/sql/make-insert-from-procedure" element={<UtilitiesMakeInsertSQLFromProcedure />} />
          <Route path="/utilities/sql/create-table-from-excel" element={<UtilitiesCreateTableFromExcel />} />
          <Route path="/utilities/excel/make-json-vocabulary-japanese" element={<UtilitiesMakeJsonVocabulary />} />
          <Route path="/utilities/japan/vocabulary" element={<UtilitiesJapanVocabulary />} />

          <Route path="/utilities/app/todo" element={<UtilitieAppTodo />} />
          <Route path="/utilities/app/todo/:todo_id" element={<UtilitieAppTodoDetail />} />
          <Route path="/utilities/general/collapse-git" element={<UtilitiesGeneralCollapseGit />} />
          <Route path="/utilities/general/git" element={<UtilitiesGeneralGit />} />
        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};
