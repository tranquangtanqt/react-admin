import { useState } from 'react';
import { PageTitle } from 'components/modules/page-title';

export const UtilitiesTextFindDifferentTwoList1 = () => {
  const [input1, setInput1] = useState(`1
2
3
4
5`);
  const [input2, setInput2] = useState(`5
2
1
6`);
  const [output1, setOutput1] = useState('');
  const [output2, setOutput2] = useState('');
  const [output3, setOutput3] = useState('');
  const [indexList, setIndexList] = useState('');
  const [difference1List, setDifference1List] = useState('');
  const [difference2List, setDifference2List] = useState('');

  const findText = () => {
    let outputStr1 = '';
    let outputStr2 = '';
    let outputStr3 = '';
    let indexStr = '';
    let difference1 = '';
    let difference2 = '';

    let input1Arr = input1.split('\n');
    input1Arr = input1Arr.map((x) => x.trim());
    let input2Arr = input2.split('\n');
    input2Arr = input2Arr.map((x) => x.trim());

    outputStr1 = input1Arr.filter((x) => !input2Arr.includes(x)).join('\n');
    outputStr2 = input2Arr.filter((x) => !input1Arr.includes(x)).join('\n');
    outputStr3 = input1Arr.filter((x) => input2Arr.includes(x)).join('\n');
    const len1 = input1Arr.length;
    const len2 = input2Arr.length;

    if (len1 >= len2) {
      for (let i = 0; i < len1; i++) {
        if (i < len2) {
          if (input1Arr[i] !== input2Arr[i]) {
            indexStr += i + '\n';
            difference1 += input1Arr[i] + '\n';
            difference2 += input2Arr[i] + '\n';
          }
        } else {
          indexStr += i + '\n';
          difference1 += input1Arr[i] + '\n';
        }
      }
    } else {
      for (let i = 0; i < len2; i++) {
        if (i < len1) {
          if (input2Arr[i] !== input1Arr[i]) {
            indexStr += i + '\n';
            difference1 += input1Arr[i] + '\n';
            difference2 += input2Arr[i] + '\n';
          }
        } else {
          indexStr += i + '\n';
          difference2 += input2Arr[i] + '\n';
        }
      }
    }

    setOutput1(outputStr1);
    setOutput2(outputStr2);
    setOutput3(outputStr3);
    setIndexList(indexStr);
    setDifference1List(difference1);
    setDifference2List(difference2);
  };

  return (
    <>
      <PageTitle title="Finding the Differences Between Two List"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-4 col-md-4">
          <label htmlFor="list1" className="form-label">
            List 1
          </label>
          <textarea
            id="list1"
            className="form-control"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            style={{ height: 400, width: '100%' }}
          />
        </div>
        <div className="col-12 col-sm-4 col-md-4">
          <label htmlFor="list2" className="form-label">
            List 2
          </label>
          <textarea
            id="list2"
            className="form-control"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            style={{ height: 400, width: '100%' }}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button
            type="submit"
            className="btn btn-primary btn-sm"
            onClick={() => findText()}
          >
            Find
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-4 col-md-4">
          <label htmlFor="same" className="form-label">
            Same
          </label>
          <textarea
            id="same"
            className="form-control"
            value={output3}
            onChange={(e) => setOutput3(e.target.value)}
            style={{ height: 400, width: '100%' }}
          />
        </div>
        <div className="col-12 col-sm-4 col-md-4">
          <label htmlFor="difference1" className="form-label">
            Difference 1
          </label>
          <textarea
            id="difference1"
            className="form-control"
            value={output1}
            onChange={(e) => setOutput1(e.target.value)}
            style={{ height: 400, width: '100%' }}
          />
        </div>
        <div className="col-12 col-sm-4 col-md-4">
          <label htmlFor="difference2" className="form-label">
            Difference 2
          </label>
          <textarea
            id="difference2"
            className="form-control"
            value={output2}
            onChange={(e) => setOutput1(e.target.value)}
            style={{ height: 400, width: '100%' }}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-2 col-sm-1 col-md-1">
          <label htmlFor="index" className="form-label">
            Index
          </label>
          <textarea
            id="index"
            className="form-control"
            value={indexList}
            onChange={(e) => setIndexList(e.target.value)}
            style={{ height: 400, width: '100%' }}
          />
        </div>
        <div className="col-4 col-sm-3 col-md-3">
          <label htmlFor="difference-list-1" className="form-label">
            Difference List 1
          </label>
          <textarea
            id="difference-list-1"
            className="form-control"
            value={difference1List}
            onChange={(e) => setDifference1List(e.target.value)}
            style={{ height: 400, width: '100%' }}
          />
        </div>
        <div className="col-4 col-sm-3 col-md-3">
          <label htmlFor="difference-list-2" className="form-label">
            Difference List 2
          </label>
          <textarea
            id="difference-list-2"
            className="form-control"
            value={difference2List}
            onChange={(e) => setDifference2List(e.target.value)}
            style={{ height: 400, width: '100%' }}
          />
        </div>
      </div>
    </>
  );
};
