import { Button, Col, Divider, Input, notification, Row } from "antd";
import React, { useState } from "react";
import StringUtils from "../../../../utils/StringUtils";
import { CopyToClipboard } from "react-copy-to-clipboard";

const RandomProcedureInsertSQL = () => {
  const [procedureName, setProcedureName] = useState("P_INSERT");
  const [tableName, setTableName] = useState("DEMO");
  const [column, setColumn] =
    useState(`"column_1" VARCHAR2(20 CHAR) NOT NULL ENABLE, 
"column_2" CHAR(1 BYTE) DEFAULT '0' NOT NULL ENABLE,
"column_3" TIMESTAMP (3),  
"column_4" NUMBER(21,8),
"column_5" DATE NOT NULL ENABLE`);
  const [output, setOutput] = useState("");
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(2);
  const [call, setCall] = useState("");

  const openNotification = () => {
    notification.open({
      message: "",
      description: "Copied",
    });
  };

  const renderText = () => {
    let outputStr = "";
    outputStr +=
      "CREATE OR REPLACE PROCEDURE " +
      procedureName +
      " (startStep NUMBER, endStep NUMBER)";
    outputStr += "\n IS \n";
    outputStr += "\t i integer :=0; \n";
    outputStr += "BEGIN \n";
    outputStr += "\t FOR i IN startStep..endStep LOOP \n";
    outputStr += "\t\t INSERT INTO " + tableName + " (";

    let columnArr = column.split("\n");
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
      columnArr[i] = columnArr[i].trim();
      // remove ,
      if (columnArr[i][0] === ",") {
        columnArr[i][0] = columnArr[i][0].substring(1);
      } else if (columnArr[i][columnArr[i].length - 1] === ",") {
        columnArr[i] = columnArr[i].substring(0, columnArr[i].length - 1);
      }

      let arr = columnArr[i].trim().split(" ");
      let columnName = StringUtils.replaceAll(arr[0], `"`, "");

      if (columnArr[i] !== "") {
        let value = "";
        if (columnArr[i].toLowerCase().includes("default")) {
          let lowerArr = arr.map((val) => {
            return val.toLowerCase();
          });
          value = arr[lowerArr.indexOf("default") + 1];
          value = "\t\t\t" + value + ", \n";
          outputStr += value;
          console.log(i + "----- " + value);
        } else if (columnArr[i].toLowerCase().includes("char")) {
          let start = columnArr[i].indexOf("(");
          let end = columnArr[i].indexOf(")");
          let charLimitStr = columnArr[i].substring(start + 1, end);
          let charLimit = charLimitStr.match(/\d+/g)[0];
          if (charLimit >= 20) {
            charLimit = 20;
          }

          value = columnName.substring(0, charLimit);

          let countZero = charLimit - value.length;

          if (countZero > 0) {
            // CONCAT('CA', SUBSTR(LPAD('1', 4, '0'), LENGTH('CA') + 1))
            value =
              "\t\t\tCONCAT('" +
              value +
              "', SUBSTR(LPAD(i, " +
              charLimit +
              ", '0'), LENGTH('" +
              value +
              "') + 1)), \n";
            outputStr += value;
          } else {
            value = "\t\t\t'" + value + "', \n";
            outputStr += value;
          }
          console.log(i + "----- " + value);
        } else if (columnArr[i].toLowerCase().includes("timestamp")) {
          let start = columnArr[i].indexOf("(");
          let end = columnArr[i].indexOf(")");
          let charLimitStr = columnArr[i].substring(start + 1, end);
          let charLimit = charLimitStr.match(/\d+/g)[0];
          value = "\t\t\tcurrent_timestamp (" + charLimit + "), \n";
          outputStr += value;
          console.log(i + "----- " + value);
        } else if (columnArr[i].toLowerCase().includes("date")) {
          value = "\t\t\tcurrent_date, \n";
          outputStr += value;
          console.log(i + "----- " + value);
        } else if (columnArr[i].toLowerCase().includes("number")) {
          let start = columnArr[i].indexOf("(");
          let end = columnArr[i].indexOf(")");
          let charLimitStr = columnArr[i].substring(start + 1, end);
          let charLimitArr = charLimitStr.split(",");

          if (charLimitArr.length > 1) {
            let maxNaturalStr = "";
            for (let j = 0; j < charLimitArr[0] - charLimitArr[1]; j++) {
              maxNaturalStr += "9";
            }

            let natural = Number(maxNaturalStr);
            let decimal = charLimitArr[1];
            let value =
              "\t\t\t ROUND(dbms_random.value(0, " +
              natural +
              "), " +
              decimal +
              "), \n";
            outputStr += value;
            console.log(i + "----- " + value);
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
      <Divider orientation="left">Procedure name</Divider>
      <Input
        placeholder="Enter procedure name"
        value={procedureName}
        onChange={(e) => setProcedureName(e.target.value)}
      />

      <Divider orientation="left">Table name</Divider>
      <Input
        placeholder="Enter table name"
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
      />

      <Divider orientation="left">Input</Divider>
      <Row justify="start">
        <Col span={24}>
          <textarea
            value={column}
            onChange={(e) => setColumn(e.target.value)}
            style={{ height: 200, width: "100%" }}
            placeholder={"Enter name and type of column"}
          />
        </Col>
      </Row>

      <Divider orientation="left">Start</Divider>
      <Input
        placeholder="Enter start"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />

      <Divider orientation="left">End</Divider>
      <Input
        placeholder="Enter end"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />

      <Row>
        <Col span={18}>
          <Divider orientation="left">
            <Button type="primary" onClick={renderText}>
              Render Insert SQL
            </Button>
          </Divider>
        </Col>
        <Col span={6}>
          <CopyToClipboard
            text={output}
            onCopy={() => {
              openNotification();
            }}
          >
            <Button type="success" style={{ background: "#fffb8f" }}>
              Copy to clipboard
            </Button>
          </CopyToClipboard>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <textarea
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            style={{ height: 200, width: "100%" }}
          />
        </Col>
      </Row>

      <Divider orientation="left">CALL</Divider>
      <Input
        placeholder="Enter call"
        value={call}
        onChange={(e) => setCall(e.target.value)}
      />
    </>
  );
};

export default RandomProcedureInsertSQL;
