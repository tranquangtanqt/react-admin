import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const BatchIfElse = () => {
  return (
    <>
      <PageTitle title="If...Else..."></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code
            code={`PUSHD %~dp0
set CURRENT_DIR=%~dp0
set vDATE=%DATE:/=%
set vTIME=%TIME:~0,8%
set vTIME=%vTIME::=%
set vTIME=%vTIME: =0%
set TIME_STAMP=%vDATE%%vTIME%`}
            language="sql"
          />
          <Code
            code={`EQU: Equal
GEQ: Greater
cls: Clear screen
color 0a: set color`}
            language="sql"
          />
          <Code
            code={`@ECHO OFF

:choice
set /P c=Are you sure you want to continue[Y/N]?
if /I "%c%" EQU "Y" goto :somewhere
if /I "%c%" EQU "N" goto :somewhere_else
goto :choice

:somewhere
echo "I am here because you typed Y"
pause
exit

:somewhere_else
echo "I am here because you typed N"
pause
exit`}
            language="sql"
          />
          <Code
            code={`@echo off
color 0a
echo press 1 for option 1
echo press 2 for option 2
echo press 3 for option 3

choice /c 123 /n
if %errorlevel% EQU 1 goto 1
if %errorlevel% EQU 2 goto 2
if %errorlevel% EQU 3 goto 3

:1
echo option 1 
goto exit

:2
echo option 2 
goto exit

:3
echo option 3 
goto exit

:exit
pause
exit`}
            language="sql"
          />
        </div>
      </div>
    </>
  );
};
