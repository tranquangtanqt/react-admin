import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const UtilitiesGeneralCommandLine = () => {
  return (
    <>
      <PageTitle title="Command Line"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>Show all size folder use CMD</b>
          <div className="tab-1">
            <Code
              code={`powershell -command "$fso = new-object -com Scripting.FileSystemObject; gci -Directory | select @{l='Size'; e={$fso.GetFolder($_.FullName).Size}},FullName | sort Size -Descending | ft @{l='Size [MB]'; e={'{0:N2}    ' -f ($_.Size / 1MB)}},FullName"`}
              language="sql"
            />
          </div>
          <b>Show all size folder use powershell</b>
          <div className="tab-1">
            <Code
              code={`$fso = new-object -com Scripting.FileSystemObject
gci -Directory \`
  | select @{l='Size'; e={$fso.GetFolder($_.FullName).Size}},FullName \`
  | sort Size -Descending \`
  | ft @{l='Size [MB]'; e={'{0:N2}    ' -f ($_.Size / 1MB)}},FullName`}
              language="sql"
            />
          </div>
          <b>Show all file in folder</b>
          <div className="tab-1">
            <Code
              code={`for /R "./" %G in (*.java *.xml *.properties *.xhtml) do @echo %G >> file.txt`}
              language="sql"
            />
          </div>
          <b>cd call</b>
          <div className="tab-1">
            <Code
              code={`cd %~dp0
set var=0001
call file.cmd %var%

cscript //NOLOGO vbsFile.vbs %var%`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
