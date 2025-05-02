import { useEffect, useState } from 'react';
import StringUtils from 'utils/string-utils';
import { PageTitle } from 'components/modules/page-title';
import replaceData from './data.json';

export const UtilitiesTextReplace1 = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [languageOption, setLanguageOption] = useState('javascript'); // Default value
  const [findText, setFindText] = useState(``);
  const [replaceWith, setReplaceWith] = useState(``);
  const [subSystem, setSubSystem] = useState(``);

  const JAVA = 'java';
  const JAVASCRIPT = 'javascript';

  useEffect(() => {
    const _language = localStorage.getItem('language');
    if (_language) {
      setLanguageOption(_language);
    }

    const _subSystem = localStorage.getItem('subSystem');
    if (_subSystem) {
      setSubSystem(_subSystem);
    }
  }, []);

  const renderText = () => {
    let outputStr = '';

    console.log(languageOption);
    const arrFindText = replaceData.vb6;
    let arrReplaceWith: String[] = [];

    if (languageOption == JAVASCRIPT) {
      arrReplaceWith = replaceData.javascript;
    } else if (languageOption == JAVA) {
      arrReplaceWith = replaceData.java;
    }

    let strAddComment = input;
    const regex = /^(\s*)/gm;
    strAddComment = strAddComment.replace(regex, '$1//');

    //Thay thế giá trị trong mảng data.json
    for (let i = 0; i < arrFindText.length; i++) {
      if (arrFindText[i] === '') {
        continue;
      }
      strAddComment = StringUtils.replaceAll(
        strAddComment,
        arrFindText[i],
        arrReplaceWith[i],
      );
    }

    const lineArr = strAddComment.split('\n');
    for (let index = 0; index < lineArr.length; index++) {
      const line = lineArr[index];

      let str = '';
      let letter = '';

      //spread set value
      if (line.indexOf('.SetText') !== -1) {
        letter = '//.SetText';
      } else if (line.indexOf('.SetFloat') !== -1) {
        letter = '//.SetFloat';
      } else if (line.indexOf('.SetInteger') !== -1) {
        letter = '//.SetInteger';
      }

      // console.log(line.split(/\+s/));
      if (letter !== '') {
        const arr = line.split(',');
        console.log(arr);
        str += arr[0].substring(0, line.indexOf(letter));
        str += 'setCellValue(spd_Data,';
        str += arr[1] + ', ';
        str += arr[0].split(' ')[arr[0].split(' ').length - 1] + ',';
        for (let j = 2; j < arr.length; j++) {
          str += arr[j];
        }
        str += ');';

        str = str.replace('Me_', 'FMTM10.CONSTANT.Me_');
      } else {
        //Khai báo giá trị
        if (line.indexOf('//Dim ') !== -1) {
          let arrLine = line.split(/\s+/);
          arrLine = arrLine.filter((item) => item !== '');
          console.log(arrLine);
          if (languageOption == JAVASCRIPT) {
            str += '    let ' + arrLine[1] + ';';
          } else if (languageOption == JAVA) {
            str += `    ${arrLine[3]} ${arrLine[1]};`;
          }
        } else {
          str = line;
        }
      }

      if (line.indexOf('switch') !== -1) {
        str = line + ') {';
      }

      if (line.indexOf(' case ') !== -1) {
        str = line + ':';
      }

      if (line.indexOf('case Else') !== -1) {
        str = line.replace('case Else', 'default:');
      }
      console.log(subSystem);
      if (languageOption == JAVASCRIPT && subSystem !== '') {
        str = line.replace('FMTM10', subSystem);
      }
      str += '\n';
      outputStr += str;
    }

    outputStr = StringUtils.replaceAll(
      outputStr,
      'spd_Data.MaxRows',
      'spd_Data_MaxRows',
    );

    outputStr = StringUtils.replaceAll(
      outputStr,
      ' .MaxRows',
      'spd_Data_MaxRows',
    );

    setOutput(outputStr);
  };

  const handleLanguageChange = (e: any) => {
    setLanguageOption(e.target.value);
    localStorage.setItem('language', e.target.value);
  };

  const handleChangeSubSystem = (e: any) => {
    setSubSystem(e.target.value);
    localStorage.setItem('subSystem', e.target.value);
  };

  return (
    <>
      <PageTitle title="Replace"></PageTitle>
      <div className="row mt-2">
        <div className="col-6">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="language"
              id="javascript"
              checked={languageOption === 'javascript'}
              onChange={handleLanguageChange}
              value={'javascript'}
            />
            <label className="form-check-label" htmlFor="javascript">
              JavaScript
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="language"
              id="java"
              checked={languageOption === 'java'}
              onChange={handleLanguageChange}
              value={'java'}
            />
            <label className="form-check-label" htmlFor="java">
              Java
            </label>
          </div>
        </div>

        <div className="col-2">
          <label htmlFor="end" className="form-label">
            Phân hệ
          </label>
          <input
            type="text"
            className="form-control"
            id="subSystem"
            value={subSystem}
            onChange={handleChangeSubSystem}
          ></input>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="input" className="form-label">
            Input
          </label>
          <textarea
            id="input"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ height: 200, width: '100%' }}
          />
        </div>
      </div>
      <div className="row mt-2 d-none">
        <div className="col-12 col-sm-6 col-md-6">
          <label htmlFor="find-text" className="form-label">
            Find text
          </label>
          <textarea
            id="find-text"
            className="form-control"
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
            style={{ height: 150, width: '100%' }}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-6">
          <label htmlFor="replace-with" className="form-label">
            Replace with
          </label>
          <textarea
            id="replace-with"
            className="form-control"
            value={replaceWith}
            onChange={(e) => setReplaceWith(e.target.value)}
            style={{ height: 150, width: '100%' }}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => renderText()}
          >
            Render text
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="output" className="form-label">
            Result
          </label>
          <textarea
            id="output"
            className="form-control"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            style={{ height: 200, width: '100%' }}
          />
        </div>
      </div>
    </>
  );
};
