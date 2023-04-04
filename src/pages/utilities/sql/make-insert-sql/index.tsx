import { useState } from "react";
import StringUtils from "../../../../utils/string-utils";
import { PageTitle } from "../../../../components/modules/page-title";

export const UtilitiesMakeInsertSQL = () => {
  const [tableName, setTableName] = useState("DEMO");
  const [inputSql, setInputSql] = useState(`"column_1" VARCHAR2(2 CHAR) NOT NULL ENABLE, 
"column_2" CHAR(1 BYTE) DEFAULT '0' NOT NULL ENABLE,
"column_3" TIMESTAMP (3),  
"column_4" NUMBER(21,8),
"column_5" DATE NOT NULL ENABLE`);
  const [output, setOutput] = useState("");
  const [start, setStart] = useState("1");
  const [end, setEnd] = useState("2");

  const getAllColumn = () => {
    let result = "";
    let columnArr = inputSql.split("\n");

    for (let j = 0; j < columnArr.length; j++) {
      let arr = columnArr[j].trim().split(" ");
      let columnName = StringUtils.replaceAll(arr[0], `"`, "");
      result += columnName + ",";
    }

    // remove "," last
    result = result.slice(0, -1);
    return result;
  };

  const renderText = () => {
    let outputStr = "";

    if (Number(end)) {
      for (let i = Number(start); i <= Number(end); i++) {
        outputStr += "INSERT INTO " + tableName + " (";
        let row = inputSql.split("\n"); //columnArr

        outputStr += getAllColumn();

        outputStr += ") VALUES \n (";

        for (let j = 0; j < row.length; j++) {
          let rowArr = Array.from(row[j].trim());

          // remove , at first and end string
          if (rowArr[0] === ",") {
            rowArr = rowArr.slice(0, 1);
          } else if (rowArr[rowArr.length - 1] === ",") {
            rowArr = rowArr.slice(0, -1);
          }

          // join row array to string
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
              outputStr += "" + value + ", ";
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
                value = value + StringUtils.padZero(i, countZero, null);
              }
              outputStr += "'" + value + "', ";
            } else if (rowString.toLowerCase().includes("timestamp")) {
              let left = rowString.indexOf("(");
              let right = rowString.indexOf(")");
              let charLimitStr = rowString.substring(left + 1, right);
              let charLimit = charLimitStr.match(/\d/g) || [];
              value = new Date().getTime().toString();
              outputStr += "current_timestamp (" + charLimit + "), ";
            } else if (rowString.toLowerCase().includes("number")) {
              let left = rowString.indexOf("(");
              let right = rowString.indexOf(")");
              let limit = rowString.substring(left + 1, right);
              let limitArr = limit.split(",");
              if (limitArr.length > 1) {
                let natural = Math.floor(Math.random() * Math.pow(10, Number(limitArr[0]) - Number(limitArr[1])));
                let decimal = Math.floor(Math.random() * Math.pow(10, Number(limitArr[1])));
                value = natural + "." + decimal;
                outputStr += "" + value + ", ";
              } else if (limitArr.length > 0) {
                let natural = Math.floor(Math.random() * Math.pow(10, Number(limitArr[0])));
                outputStr += "" + natural + ", ";
              }
            } else if (rowString.toLowerCase().includes("date")) {
              outputStr += "current_date, ";
            }
          }
        }

        // remove "," last
        outputStr = outputStr.slice(0, -2);
        outputStr += "); \n";
      }
    }

    setOutput(outputStr);
  };
  return (
    <>
      <PageTitle title="Make insert sql"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="table-name" className="form-label">
            Table name
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
    </>
  );
};
