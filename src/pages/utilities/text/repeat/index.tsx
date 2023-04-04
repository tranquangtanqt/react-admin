import { useState } from "react";
import StringUtils from "../../../../utils/string-utils";
import { PageTitle } from "../../../../components/modules/page-title";

export const UtilitiesTextRepeat = () => {
  const [input, setInput] = useState("###repeat###");
  const [output, setOutput] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const renderText = () => {
    let outputStr = "";
    if (!Number(start)) {
      let startNumber = start.charCodeAt(0);
      let endNumber = end.charCodeAt(0);
      for (let i = startNumber; i <= endNumber; i++) {
        let str = StringUtils.replaceAll(input, "###repeat###", String.fromCharCode(i));

        outputStr += str;
        outputStr += "\r\n";
      }
    } else {
      // number
      for (let i = parseInt(start); i <= parseInt(end); i++) {
        let str = StringUtils.replaceAll(input, "###repeat###", i);
        outputStr += str;
        outputStr += "\r\n";
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
            style={{ height: 300, width: "100%" }}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-6 col-md-6">
          <label htmlFor="start" className="form-label">
            Start
          </label>
          <input type="text" className="form-control" id="start" value={start} onChange={(e) => setStart(e.target.value)}></input>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-6 col-md-6">
          <label htmlFor="end" className="form-label">
          End
          </label>
          <input type="text" className="form-control" id="end" value={end} onChange={(e) => setEnd(e.target.value)}></input>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button type="button" className="btn btn-primary btn-sm" onClick={() => renderText()}>
          Render text
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
            style={{ height: 400, width: "100%" }}
          />
        </div>
      </div>
    </>
  );
};
