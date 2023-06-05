import { useState } from 'react';
import StringUtils from '../../../../utils/string-utils';
import { PageTitle } from '../../../../components/modules/page-title';

export const UtilitiesTextReplace = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [findText, setFindText] = useState('');
  const [replaceWith, setReplaceWith] = useState('');

  const renderText = () => {
    const arrFindText = findText.split('\n');
    const arrReplaceWith = replaceWith.split('\n');

    let outputStr = input;
    for (let i = 0; i < arrFindText.length; i++) {
      if (arrFindText[i] === '') {
        continue;
      }
      outputStr = StringUtils.replaceAll(
        outputStr,
        arrFindText[i],
        arrReplaceWith[i],
      );
    }
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
      <div className="row mt-2">
        <div className="col-12 col-sm-6 col-md-6">
          <label htmlFor="find-text" className="form-label">
            Find text
          </label>
          <textarea
            id="find-text"
            className="form-control"
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
            style={{ height: 200, width: '100%' }}
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
            style={{ height: 200, width: '100%' }}
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
