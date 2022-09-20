import { useState } from "react";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const UtilitiesTextFindTextColumnJPEN = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [output, setOutput] = useState("");

  const findText = () => {
    let outputStr = "";
    let input1Arr = input1.split("\n");
    input1Arr = input1Arr.map((x) => x.trim());

    let input2Arr = input2.split("\n");
    input2Arr = input2Arr.map((x) => x.trim());

    for (let i = 0; i < input1Arr.length; i++) {
      if (input1Arr[i].trim().length > 0) {
        for (let j = 0; j < input2Arr.length; j++) {
          let row = input2Arr[j].split("\t");
          if (row.includes(input1Arr[i])) {
            outputStr += row[1] + "\n";
          }
        }
      }
    }

    setOutput(outputStr);
  };

  return (
    <>
      <PageTitle title="Find JP - EN"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-4 col-md-4">
          <label htmlFor="input1" className="form-label">
            List JP
          </label>
          <textarea
            id="input1"
            className="form-control"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </div>

        <div className="col-12 col-sm-8 col-md-8">
          <label htmlFor="input2" className="form-label">
            List JP-EN
          </label>
          <textarea
            id="input2"
            className="form-control"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button type="button" className="btn btn-primary btn-sm" onClick={() => findText()}>
            Find
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-4 col-md-4">
          <label htmlFor="output" className="form-label">
            List JP
          </label>
          <textarea
            id="output"
            className="form-control"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </div>
      </div>
    </>
  );
};
