import { useState } from 'react';
import StringUtils from 'utils/string-utils';
import { PageTitle } from 'components/modules/page-title';

export const UtilitiesTextReplace1 = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [findText, setFindText] = useState(`//If 
 Then
//End If
//Case 
//End Select
 = True)
 = False)
 = 0)
 = 1)
 <> 
 Or 
 And 
False
True
//Call 
//Else
  & 
Val(
.Tag
//Exit Sub
//Exit For
//Next
Me_Process.
ProcessMode =
Pe_ReadMode.
ProcessStep =`);
  const [replaceWith, setReplaceWith] = useState(`if (
) {
}
case 
}
=== true)
=== false)
=== 0)
=== 1)
 !== 
 || 
 && 
false
true
HOUSE_PRJ.ZAIMU.FMTK10.
} else {
 + 
Number(
_Tag
return;
break;
}
FMTK10.CONSTANT.Me_Process.
HOUSE_PRJ.ZAIMU.FMTK10.GetProcessMode() =
FMTK10.CONSTANT.Pe_ReadMode.
HOUSE_PRJ.ZAIMU.FMTK10.GetProcessStep() =`);

  const renderText = () => {
    const arrFindText = findText.split('\n');
    const arrReplaceWith = replaceWith.split('\n');

    let outputStr1 = input;
    const regex = /^(\s*)/gm;
    outputStr1 = outputStr1.replace(regex, '$1//');
    for (let i = 0; i < arrFindText.length; i++) {
      if (arrFindText[i] === '') {
        continue;
      }
      outputStr1 = StringUtils.replaceAll(
        outputStr1,
        arrFindText[i],
        arrReplaceWith[i],
      );
    }

    let outputStr = '';
    const lineArr = outputStr1.split('\n');
    for (let index = 0; index < lineArr.length; index++) {
      const line = lineArr[index];

      let str = '';

      let letter = '';

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
        if (line.indexOf('//Dim ') !== -1) {
          const arrLine = line.split(/\s+/);
          str += '    let ' + arrLine[2] + ';';
        } else {
          str = line;
        }
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

  return (
    <>
      <PageTitle title="Replace"></PageTitle>
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
