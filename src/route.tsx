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
import { MasterLayout } from "./pages/_layout/masterLayout";

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
          <Route path="/database/oracle/change-language-oracle-sql-developer" element={<OracleChangeLanguageOracleSQLDeveloper />} />
          <Route path="/database/oracle/import-dump" element={<OracleImportDump />} />
          <Route path="/database/oracle/dump-full" element={<OracleDumpFull />} />
          <Route path="/database/oracle/listener-and-tnsnames" element={<OracleListenerAndTnsnames />} />
          <Route path="/database/oracle/sql-text-session-process" element={<OracleSqltextSessionProcess />} />
          <Route path="/database/oracle/tips/string" element={<OracleString />} />
          <Route path="/database/oracle/tips/system" element={<OracleSystem />} />
          <Route path="/database/oracle/tips-sql-developer" element={<OracleTipsSQLDeveloper />} />

          <Route path="/programming-csharp" element={<ProgrammingCSharp />} />
          <Route path="/programming-csharp/connect-oracle" element={<CSharpConnectOracle/>} />
          <Route path="/programming-csharp/connect-postgresql" element={<CSharpConnectPostgresql />} />
          <Route path="/programming-csharp/ep-plus" element={<CSharpEPPlus />} />
          <Route path="/programming-csharp/get-all-file-in-folder" element={<CSharpGetAllFileInFolder />} />
          <Route path="/programming-csharp/name-control-winform" element={<CSharpNameControlWinform />} />
          <Route path="/programming-csharp/read-file-excel" element={<CSharpReadFileExcel />} />

          <Route path="/programming-java" element={<ProgrammingJava />} />
          <Route path="/programming-java/delete-data-1" element={<JavaDeleteData1 />} />
          <Route path="/programming-java/insert-data-1" element={<JavaInsertData1 />} />
          <Route path="/programming-java/select-data-1" element={<JavaSelectData1 />} />
          <Route path="/programming-java/select-data-2" element={<JavaSelectData2 />} />
          <Route path="/programming-java/setting-maven" element={<JavaSettingMaven />} />
          <Route path="/programming-java/update-data-1" element={<JavaUpdateData1 />} />

          <Route path="/programming-php" element={<ProgrammingPHP />} />
          <Route path="/programming-php/convert-datetime" element={<PHPConvertDatetime />} />
          <Route path="/programming-php/convert-unicode" element={<PHPConvertUnicode />} />
          <Route path="/programming-php/substring-ellipses" element={<PHPSubstringEllipses />} />
          <Route path="/programming-php/delete-file" element={<PHPDeleteFile />} />

          <Route path="/programming-batch" element={<ProgrammingBatch />} />
          <Route path="/programming-batch/if-else" element={<BatchIfElse />} />

          <Route path="/software" element={<Software />} />
          <Route path="/software/visual-studio-code/add-hotkey" element={<VisualStudioCodeAddHotkey />} />
          <Route path="/software/visual-studio-code/extention" element={<VisualStudioCodeExtention />} />
        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};
