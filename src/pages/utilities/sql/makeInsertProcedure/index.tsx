import { useState } from "react";
import StringUtils from "../../../../utils/StringUtils";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const UtilitiesMakeInsertSQLFromProcedure = () => {
  const [procedureName, setProcedureName] = useState("P_INSERT");
  const [tableName, setTableName] = useState("DEMO");
  const [inputSql, setInputSql] = useState(`"column_1" VARCHAR2(20 CHAR) NOT NULL ENABLE, 
"column_2" CHAR(1 BYTE) DEFAULT '0' NOT NULL ENABLE,
"column_3" TIMESTAMP (3),  
"column_4" NUMBER(21,8),
"column_5" DATE NOT NULL ENABLE`);
  const [output, setOutput] = useState("");
  const [start, setStart] = useState("1");
  const [end, setEnd] = useState("2");
  const [call, setCall] = useState("");

  const renderText = () => {
    let outputStr = "";
    outputStr += "CREATE OR REPLACE PROCEDURE " + procedureName + " (startStep NUMBER, endStep NUMBER)";
    outputStr += "\n IS \n";
    outputStr += "\t i integer :=0; \n";
    outputStr += "BEGIN \n";
    outputStr += "\t FOR i IN startStep..endStep LOOP \n";
    outputStr += "\t\t INSERT INTO " + tableName + " (";

    let columnArr = inputSql.split("\n");
    for (let i = 0; i < columnArr.length; i++) {
      let arr = columnArr[i].trim().split(" ");
      let columnName = StringUtils.replaceAll(arr[0], `"`, "");
      outputStr += columnName + ", ";
      console.log(i + "----- " + columnName);
    }

    // remove "," last
    outputStr = outputStr.slice(0, -2);
    outputStr += ") VALUES (\n ";

    for (let i = 0; i < columnArr.length; i++) {
      let rowArr = Array.from(columnArr[i].trim());

      // remove , at first and end string
      if (rowArr[0] === ",") {
        rowArr = rowArr.slice(0, 1);
      } else if (rowArr[rowArr.length - 1] === ",") {
        rowArr = rowArr.slice(0, -1);
      }

      let rowString = rowArr.join("");
      let arrSeparatorSpace = rowString.trim().split(" ");
      let columnName = StringUtils.replaceAll(arrSeparatorSpace[0], `"`, "");

      if (rowString !== "") {
        let value = "";
        if (rowString.toLowerCase().includes("default")) {
          let arrSeparatorSpaceLower = arrSeparatorSpace.map((val) => {
            return val.toLowerCase();
          });
          value = arrSeparatorSpace[arrSeparatorSpaceLower.indexOf("default") + 1];
          value = "\t\t\t" + value + ", \n";
          outputStr += value;
        } else if (rowString.toLowerCase().includes("char")) {
          let left = rowString.indexOf("(");
          let right = rowString.indexOf(")");
          // get value between "(" and ")"
          let stringInChar = rowString.substring(left + 1, right).trim();
          let maxCharArr = stringInChar.match(/\d/g) || [];
          let maxChar = maxCharArr.join("");
          if (Number(maxChar) >= 20) {
            maxChar = "20";
          }

          value = columnName.substring(0, Number(maxChar));
          let countZero = Number(maxChar) - value.length;

          if (countZero > 0) {
            // CONCAT('CA', SUBSTR(LPAD('1', 4, '0'), LENGTH('CA') + 1))
            value = "\t\t\tCONCAT('" + value + "', SUBSTR(LPAD(i, " + maxChar + ", '0'), LENGTH('" + value + "') + 1)), \n";
            outputStr += value;
          } else {
            value = "\t\t\t'" + value + "', \n";
            outputStr += value;
          }
        } else if (rowString.toLowerCase().includes("timestamp")) {
          let left = rowString.indexOf("(");
          let right = rowString.indexOf(")");

          let charLimitStr = rowString.substring(left + 1, right);
          let charLimit = charLimitStr.match(/\d/g) || [];

          value = "\t\t\tcurrent_timestamp (" + charLimit + "), \n";
          outputStr += value;
        } else if (rowString.toLowerCase().includes("date")) {
          value = "\t\t\tcurrent_date, \n";
          outputStr += value;
        } else if (rowString.toLowerCase().includes("number")) {
          let left = rowString.indexOf("(");
          let right = rowString.indexOf(")");

          let limit = rowString.substring(left + 1, right);
          let limitArr = limit.split(",");

          if (limitArr.length > 1) {
            let maxNaturalStr = "";
            for (let j = 0; j < Number(limitArr[0]) - Number(limitArr[1]); j++) {
              maxNaturalStr += "9";
            }

            let natural = Number(maxNaturalStr);
            let decimal = limitArr[1];
            let value = "\t\t\t ROUND(dbms_random.value(0, " + natural + "), " + decimal + "), \n";
            outputStr += value;
          }
        }
      }
    }

    // remove "," last
    outputStr = outputStr.slice(0, -3);
    outputStr += "\n\t\t ); \n";
    outputStr += "\t END LOOP; \n";
    outputStr += "END;";

    setOutput(outputStr);
    setCall("CALL " + procedureName + "(" + start + "," + end + ");");
  };

  return (
    <>
      <PageTitle title="Make insert sql from procudure"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="procedure-name" className="form-label">
            Procedure name
          </label>
          <input
            type="text"
            className="form-control"
            id="procedure-name"
            value={procedureName}
            onChange={(e) => setProcedureName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="table-name" className="form-label">
            Procedure name
          </label>
          <input type="text" className="form-control" id="table-name" value={tableName} onChange={(e) => setTableName(e.target.value)}></input>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="input-sql" className="form-label">
            Input
          </label>
          <textarea
            id="input-sql"
            className="form-control"
            value={inputSql}
            onChange={(e) => setInputSql(e.target.value)}
            style={{ height: 300, width: "100%" }}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="start" className="form-label">
            Start
          </label>
          <input type="text" className="form-control" id="start" value={start} onChange={(e) => setStart(e.target.value)}></input>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="end" className="form-label">
            End
          </label>
          <input type="text" className="form-control" id="end" value={end} onChange={(e) => setEnd(e.target.value)}></input>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button type="button" className="btn btn-primary btn-sm" onClick={() => renderText()}>
            Render Insert SQL
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

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="call" className="form-label">
            CALL
          </label>
          <input type="text" className="form-control" id="call" value={call} onChange={(e) => setCall(e.target.value)}></input>
        </div>
      </div>
    </>
  );
};
