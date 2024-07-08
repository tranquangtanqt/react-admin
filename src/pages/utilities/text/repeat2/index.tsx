import { useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import { STRING } from 'utils/constants';
import StringUtils from 'utils/string-utils';

export const UtilitiesTextRepeat2 = () => {
  const [input, setInput] = useState('##1## ##2##');
  const [output, setOutput] = useState('');
  const [keyRepeat, setKeyRepeat] = useState(`aaa,bbb
ccc,ddd`);
  const [sparator, setSparator] = useState(STRING.EMPTY);

  const generator = () => {
    let outputStr = '';
    let str;
    if (keyRepeat) {
      const keyRepeatArr = keyRepeat.split(STRING.NEW_LINE);
      for (let i = 0; i < keyRepeatArr.length; i++) {
        const element = keyRepeatArr[i];
        if (sparator === '') {
          str = StringUtils.replaceAll(input, '##1##', element) + '\r\n';
          outputStr += str;
        } else {
          const arr = element.split(sparator);
          str = input;
          for (let j = 0; j < arr.length; j++) {
            str = StringUtils.replaceAll(str, `##${j + 1}##`, arr[j]);
          }
          outputStr += str + '\r\n';
        }
      }
    }

    setOutput(outputStr);
  };

  return (
    <>
      <PageTitle title="Repeat"></PageTitle>
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
      <div className="row mt-2">
        <div className="col-10 col-sm-10 col-md-10">
          <label htmlFor="start" className="form-label">
            Key repeat
          </label>
          <textarea
            className="form-control"
            id="key-repeat"
            value={keyRepeat}
            onChange={(e) => setKeyRepeat(e.target.value)}
            style={{ height: 300, width: '100%' }}
          ></textarea>
        </div>
        <div className="col-2 col-sm-2 col-md-2">
          <label htmlFor="sparator" className="col-form-label">
            Ký tự phân tách
          </label>
          <select
            className="form-select form-select-sm"
            id="sparator"
            onChange={(e) => setSparator(e.target.value)}
            defaultValue={sparator}
          >
            <option value={STRING.EMPTY}></option>
            <option value={STRING.TAB}>Tab</option>
            <option value={STRING.COMMA}>Dấu phẩy</option>
          </select>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => generator()}
          >
            Generator
          </button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="output" className="form-label">
            Output
          </label>
          <textarea
            id="output"
            className="form-control"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            style={{ height: 400, width: '100%' }}
          />
        </div>
      </div>
    </>
  );
};
