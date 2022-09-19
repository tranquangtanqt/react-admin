import { Button, Col, Divider, Input, notification, Row } from "antd";
import React, { useState } from "react";
import StringUtils from "../../../../utils/StringUtils";
import { CopyToClipboard } from "react-copy-to-clipboard";

const RandomMultiInsertSQL = () => {
  const [tableName, setTableName] = useState("DEMO");
  const [column, setColumn] =
    useState(`"column_1" VARCHAR2(2 CHAR) NOT NULL ENABLE, 
"column_2" CHAR(1 BYTE) DEFAULT '0' NOT NULL ENABLE,
"column_3" TIMESTAMP (3),  
"column_4" NUMBER(21,8),
"column_5" DATE NOT NULL ENABLE`);
  const [output, setOutput] = useState("");
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(2);

  const openNotification = () => {
    notification.open({
      message: "",
      description: "Copied",
    });
  };

  const renderText = () => {
    let outputStr = "";

    if (!isNaN(end)) {
      for (let i = start; i <= end; i++) {
        outputStr += "INSERT INTO " + tableName + " (";
        let columnArr = column.split("\n");

        for (let j = 0; j < columnArr.length; j++) {
          let arr = columnArr[j].trim().split(" ");
          let columnName = StringUtils.replaceAll(arr[0], `"`, "");
          outputStr += columnName + ",";
        }

        // remove "," last
        outputStr = outputStr.slice(0, -1);
        outputStr += ") VALUES \n (";

        for (let j = 0; j < columnArr.length; j++) {
          columnArr[j] = columnArr[j].trim();
          if (columnArr[j][0] === ",") {
            columnArr[j][0] = columnArr[j][0].substring(1);
          } else if (columnArr[j][columnArr[j].length - 1] === ",") {
            columnArr[j] = columnArr[j].substring(0, columnArr[j].length - 1);
          }
          let arr = columnArr[j].trim().split(" ");
          let columnName = StringUtils.replaceAll(arr[0], `"`, "");

          if (columnArr[j] !== "") {
            let value = "";

            if (columnArr[j].toLowerCase().includes("default")) {
              let lowerArr = arr.map((val) => {
                return val.toLowerCase();
              });
              value = arr[lowerArr.indexOf("default") + 1];
              outputStr += "" + value + ", ";
            } else if (columnArr[j].toLowerCase().includes("char")) {
              let start = columnArr[j].indexOf("(");
              let end = columnArr[j].indexOf(")");

              let charLimitStr = columnArr[j].substring(start + 1, end);
              let charLimit = charLimitStr.match(/\d+/g)[0];
              if (charLimit >= 20) {
                charLimit = 20;
              }

              value = columnName.substring(0, charLimit);

              let countZero = charLimit - value.length;
              if (countZero > 0) {
                value = value + StringUtils.padZero(i, countZero);
              }
              outputStr += "'" + value + "', ";
            } else if (columnArr[j].toLowerCase().includes("timestamp")) {
              let start = columnArr[j].indexOf("(");
              let end = columnArr[j].indexOf(")");
              let charLimitStr = columnArr[j].substring(start + 1, end);
              let charLimit = charLimitStr.match(/\d+/g)[0];

              value = new Date().getTime();
              outputStr += "current_timestamp (" + charLimit + "), ";
            } else if (columnArr[j].toLowerCase().includes("number")) {
              let start = columnArr[j].indexOf("(");
              let end = columnArr[j].indexOf(")");
              let charLimitStr = columnArr[j].substring(start + 1, end);

              let charLimitArr = charLimitStr.split(",");
              if (charLimitArr.length > 1) {
                let natural = Math.floor(
                  Math.random() *
                    Math.pow(10, charLimitArr[0] - charLimitArr[1])
                );
                let decimal = Math.floor(
                  Math.random() * Math.pow(10, charLimitArr[1])
                );

                value = natural + "." + decimal;
                outputStr += "" + value + ", ";
              } else if (charLimitArr.length > 0) {
                let natural = Math.floor(
                  Math.random() * Math.pow(10, charLimitArr[0])
                );
                outputStr += "" + natural + ", ";
              }
            } else if (columnArr[j].toLowerCase().includes("date")) {
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
          <CopyToClipboard text={output} onCopy={() => {openNotification()}}>
            <Button type="success" style={{ background: "#fffb8f"}}>Copy to clipboard</Button>
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
    </>
  );
};

export default RandomMultiInsertSQL;
