import { useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import { STRING } from 'utils/constants';
import parse from 'html-react-parser';

export const UtilitiesTextToHTMLTableGenerator = () => {
  const [input, setInput] = useState('');
  const [sparator, setSparator] = useState('2');
  const [isFirstRowIsHeader, setIsFirstRowIsHeader] = useState(false);
  const [output, setOutput] = useState('');

  const convertToHTMLTable = () => {
    const inputArr = input.split('\n');
    let outputStr = STRING.EMPTY;
    let lineArr: string[] = [];

    outputStr += `<table className="table table-hover table-bordered table-sm">${STRING.NEW_LINE}`;
    if (isFirstRowIsHeader) {
      outputStr += `<thead>${STRING.NEW_LINE}`;
      outputStr += `<tr>`;
      if ('1' === sparator) {
        lineArr = inputArr[0].split(STRING.TAB);
      } else if ('2' === sparator) {
        lineArr = inputArr[0].split(STRING.COMMA);
      }
      for (let j = 0; j < lineArr.length; j++) {
        outputStr += `<th>`;
        outputStr += lineArr[j].trim();
        outputStr += `</th>`;
      }

      outputStr += `</tr>${STRING.NEW_LINE}`;
      outputStr += `</thead>${STRING.NEW_LINE}`;
    }
    outputStr += `<tbody>${STRING.NEW_LINE}`;

    let i = 0;
    if (isFirstRowIsHeader) {
      i = 1;
    } else {
      i = 0;
    }

    for (; i < inputArr.length; i++) {
      outputStr += `<tr>`;

      console.log(sparator);
      if ('1' === sparator) {
        lineArr = inputArr[i].split(STRING.TAB);
      } else if ('2' === sparator) {
        lineArr = inputArr[i].split(STRING.COMMA);
      }
      for (let j = 0; j < lineArr.length; j++) {
        outputStr += `<td>`;
        outputStr += lineArr[j].trim();
        outputStr += `</td>`;
      }

      outputStr += `</tr>${STRING.NEW_LINE}`;
    }

    outputStr += `</tbody>${STRING.NEW_LINE}`;
    outputStr += `</table>`;
    setOutput(outputStr);
  };

  const handleIsFirstRowIsHeader = () => {
    setIsFirstRowIsHeader(!isFirstRowIsHeader);
  };

  return (
    <>
      <PageTitle title="Chuyển đổi text thành HTML Table"></PageTitle>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="row g-4 align-items-center">
            <div className="col-auto">
              <label htmlFor="sparator" className="col-form-label">
                Ký tự phân tách
              </label>
            </div>
            <div className="col-auto">
              <select
                className="form-select form-select-sm"
                id="sparator"
                onChange={(e) => setSparator(e.target.value)}
              >
                <option value="1" selected>
                  Tab
                </option>
                <option value="2">Dấu phẩy</option>
              </select>
            </div>
            <div className="col-auto ps-5">
              <label htmlFor="is-header" className="col-form-label">
                Dòng đầu tiên là header
              </label>
            </div>
            <div className="col-auto">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="is-header"
                onChange={handleIsFirstRowIsHeader}
                checked={isFirstRowIsHeader}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <hr />
          <label htmlFor="input" className="form-label">
            Input
          </label>
          <textarea
            id="input"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ height: 300, width: '100%' }}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => convertToHTMLTable()}
          >
            Chuyển đổi
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="output" className="form-label">
            HTML
          </label>
          <textarea
            id="output"
            className="form-control"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            style={{ height: 300, width: '100%' }}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 col-sm-12 col-md-12">
          <b>Xem trước</b>
          <div>{parse(output)}</div>
        </div>
      </div>
    </>
  );
};
