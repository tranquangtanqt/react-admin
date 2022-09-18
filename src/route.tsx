import { Route, Routes, HashRouter } from "react-router-dom";
import { DatabaseOracle } from "./pages/database/oracle";
import { ChangeLanguageOracleSQLDeveloper } from "./pages/database/oracle/changeLanguageOracleSQLDeveloper";
import { ImportDumpOracle } from "./pages/database/oracle/importDumpOracle";
import { DumpFull } from "./pages/database/oracle/importDumpOracle/dumpFull";
import { ListenerAndTnsnames } from "./pages/database/oracle/listenerAndTnsnames";
import { SqltextSessionProcess } from "./pages/database/oracle/sqltextSessionProcess";
import { StringOracle } from "./pages/database/oracle/tips/string";
import { SystemOracle } from "./pages/database/oracle/tips/system";
import { TipsForOracleSQLDeveloper } from "./pages/database/oracle/tipsForOracleSQLDeveloper";
import { DatabasePostgresql } from "./pages/database/postgresql";
import { ConfigPghba } from "./pages/database/postgresql/configPghba";
import { Home } from "./pages/home";
import { ProgrammingCSharp } from "./pages/programming/cSharp";
import { ConnectOracleCSharp } from "./pages/programming/cSharp/connectOracle";
import { ConnectPostgresqlCsharp } from "./pages/programming/cSharp/connectPostgresql";
import { EPPlus } from "./pages/programming/cSharp/epplus";
import { GetAllFileInFolder } from "./pages/programming/cSharp/getAllFileInFolder";
import { NameControlWinform } from "./pages/programming/cSharp/nameControlWinform";
import { ReadFileExcel } from "./pages/programming/cSharp/readFileExcel";
import { ProgrammingJava } from "./pages/programming/java";
import { DeleteData1 } from "./pages/programming/java/deleteData1";
import { InsertData1 } from "./pages/programming/java/insertData1";
import { SelectData1 } from "./pages/programming/java/selectData1";
import { SelectData2 } from "./pages/programming/java/selectData2";
import { SettingMaven } from "./pages/programming/java/settingMaven";
import { UpdateData1 } from "./pages/programming/java/updateData1";
import { ProgrammingPHP } from "./pages/programming/PHP";
import { CreateContentPage } from "./pages/sample/createContentPage";
import { MasterLayout } from "./pages/_layout/masterLayout";

export const RoutesRoot = () => {
  return (
    <HashRouter>
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample/create-content-page" element={<CreateContentPage />} />

          <Route path="/database/postgresql" element={<DatabasePostgresql />} />
          <Route path="/database/postgresql/configPghba" element={<ConfigPghba />} />

          <Route path="/database/oracle" element={<DatabaseOracle />} />
          <Route path="/database/oracle/changeLanguageOracleSQLDeveloper" element={<ChangeLanguageOracleSQLDeveloper />} />
          <Route path="/database/oracle/importDumpOracle" element={<ImportDumpOracle />} />
          <Route path="/database/oracle/dumpFull" element={<DumpFull />} />
          <Route path="/database/oracle/listenerAndTnsnames" element={<ListenerAndTnsnames />} />
          <Route path="/database/oracle/sqltextSessionProcess" element={<SqltextSessionProcess />} />
          <Route path="/database/oracle/tips/string" element={<StringOracle />} />
          <Route path="/database/oracle/tips/system" element={<SystemOracle />} />
          <Route path="/database/oracle/tipsForOracleSQLDeveloper" element={<TipsForOracleSQLDeveloper />} />

          <Route path="/programming-csharp" element={<ProgrammingCSharp />} />
          <Route path="/programming-csharp/connectOracle" element={<ConnectOracleCSharp />} />
          <Route path="/programming-csharp/connectPostgresql" element={<ConnectPostgresqlCsharp />} />
          <Route path="/programming-csharp/EPPlus" element={<EPPlus />} />
          <Route path="/programming-csharp/getAllFileInFolder" element={<GetAllFileInFolder />} />
          <Route path="/programming-csharp/nameControlWinform" element={<NameControlWinform />} />
          <Route path="/programming-csharp/readFileExcel" element={<ReadFileExcel />} />
          
          <Route path="/programming-java" element={<ProgrammingJava />} />
          <Route path="/programming-java/deleteData1" element={<DeleteData1 />} />
          <Route path="/programming-java/insertData1" element={<InsertData1 />} />
          <Route path="/programming-java/selectData1" element={<SelectData1 />} />
          <Route path="/programming-java/selectData2" element={<SelectData2 />} /> 
          <Route path="/programming-java/settingMaven" element={<SettingMaven />} />
          <Route path="/programming-java/updateData1" element={<UpdateData1 />} />

          <Route path="/programming-php" element={<ProgrammingPHP />} />
          {/* <Route path="/programming-php/convertDatetime" element={<PHPConvertDatetime />} />
          <Route path="/programming-php/convertUnicode" element={<PHPConvertUnicode />} />
          <Route path="/programming-php/substringEllipses" element={<PHPSubstringEllipses />} />
          <Route path="/programming-php/phpDeleteFile" element={<PHPDeleteFile />} /> */}
        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};
