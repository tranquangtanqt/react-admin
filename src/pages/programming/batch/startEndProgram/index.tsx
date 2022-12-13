import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const BatchStartEndProgram = () => {
  return (
    <>
      <PageTitle title="Start - End program"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>Start</b>
          <div className="tab-1">
            <Code
              code={`setlocal
start "" "C:\\Users\\tantq\\AppData\\Local\\Microsoft\\Teams\\Update.exe" --processStart "Teams.exe"
start "" "C:\\Program Files (x86)\\QTranslate\\QTranslate.exe"
start "" "services.msc"
start "" "C:\\Program Files (x86)\\Microsoft\\Skype for Desktop\\Skype.exe"
start "" "C:\\Program Files\\Notepad++\\notepad++.exe"
start "" "C:\\Users\\tantq\\AppData\\Local\\DBeaver\\dbeaver.exe"
start "" "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
endlocal
exit`}
              language="sql"
            />
          </div>
          <b>End</b>
          <div className="tab-1">
            <Code
              code={`setlocal
cd "D:\\Soft\\A5\\a5m2_2.14.5_x64"
taskkill /IM A5M2.exe /F

cd "C:\\Program Files\\Google\\Chrome\\Application"
taskkill /IM chrome.exe /F

cd "C:\\Program Files (x86)\\QTranslate"
taskkill /IM QTranslate.exe /F

cd "C:\\Program Files (x86)\\Microsoft\\Skype for Desktop"
taskkill /IM Skype.exe /F

cd "C:\\Program Files\\Notepad++"
taskkill /IM notepad++.exe /F

cd "C:\\Users\\tantq\\AppData\\Local\\DBeaver"
taskkill /IM dbeaver.exe /F

cd "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs"
taskkill /IM dbeaver.exe /F

endlocal
exit`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
