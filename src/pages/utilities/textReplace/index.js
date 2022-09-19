import { Button, Col, Divider, Row } from "antd";
import React, { useState } from "react";
import StringUtils from "../../../utils/StringUtils";

const ReplaceText = () => {
  
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceWith, setReplaceWith] = useState("");

  const renderText = () => {
    console.log(findText.split("\n"));

    let arrFindText = findText.split("\n");
    let arrReplaceWith = replaceWith.split("\n");

    let outputStr = input;
    for (let i = 0; i < arrFindText.length; i++) {
        if(arrFindText[i] === ""){
            continue;
        }
        outputStr = StringUtils.replaceAll(outputStr, arrFindText[i], arrReplaceWith[i]);
      }
    setOutput(outputStr);
  };

  return (
    <>
      <Divider orientation="left">Input</Divider>
      <Row justify="start">
        <Col span={24}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={"Enter input"}
            style={{ height: 200, width: "100%" }}
          />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={12}>
        <Divider orientation="left">Find text</Divider>
          <textarea
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
            style={{ height: 200, width: "98%" }}
            placeholder={"Enter find text"}
          />
        </Col>
        <Col span={12}>
        <Divider orientation="left">Replace with</Divider>
          <textarea
            value={replaceWith}
            onChange={(e) => setReplaceWith(e.target.value)}
            style={{ height: 200, width: "100%" }}
            placeholder={"Enter replace text"}
          />
        </Col>
      </Row>

      <Divider orientation="left">
        <Button type="primary" onClick={renderText}>
          Render text
        </Button>
      </Divider>

      <Row justify="start">
        <Col span={24}>
          <textarea
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            style={{ height: 200, width: "100%" }}
            placeholder={"Result"}
          />
        </Col>
      </Row>
    </>
  );
};

export default ReplaceText;
