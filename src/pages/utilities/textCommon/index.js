import { Col, Divider, Row } from "antd";
import React, { useState } from "react";
import StringUtils from "../../../utils/StringUtils";

const TextCommon = () => {
  const [input, setInput] = useState("");
  const [upper, setUpper] = useState("");
  const [lower, setLower] = useState("");
  const [upperUnderscore, setUpperUnderscore] = useState("");
  const [lowerUnderscore, setLowerUnderscore] = useState("");
  const [camel, setCamel] = useState("");
  const [numberVNToJP, setNumberVNToJP] = useState("");

  const renderText = (e) => {
    let inputVal = e.target.value;
    setInput(inputVal);
    setUpper(inputVal.toUpperCase());
    setLower(inputVal.toLowerCase());
    setUpperUnderscore(inputVal.toUpperCase().trim().replace(/ /g, "_"));
    setLowerUnderscore(inputVal.toLowerCase().trim().replace(/ /g, "_"));
    setCamel(StringUtils.camelize(inputVal));
    setNumberVNToJP(StringUtils.numberVNToJP(inputVal));
  };

  return (
    <>
      <Divider orientation="left">Input</Divider>
      <Row justify="start">
        <Col span={24}>
          <textarea
            value={input}
            onChange={(e) => renderText(e)}
            placeholder={"Enter input"}
            style={{ height: 100, width: "100%" }}
          />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={12}>
          <Divider orientation="left">Uppercase</Divider>
          <textarea
            value={upper}
            onChange={(e) => setUpper(e.target.value)}
            style={{ height: 100, width: "100%" }}
            placeholder={"uppercase"}
          />
        </Col>
        <Col span={12}>
          <Divider orientation="left">Lowercase</Divider>
          <textarea
            value={lower}
            onChange={(e) => setLower(e.target.value)}
            style={{ height: 100, width: "100%" }}
            placeholder={"lowercase"}
          />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={12}>
          <Divider orientation="left">Uppercase Underscore</Divider>
          <textarea
            value={upperUnderscore}
            onChange={(e) => setUpperUnderscore(e.target.value)}
            style={{ height: 100, width: "100%" }}
            placeholder={"uppercase Underscore"}
          />
        </Col>

        <Col span={12}>
          <Divider orientation="left">Lowercase Underscore</Divider>
          <textarea
            value={lowerUnderscore}
            onChange={(e) => setLowerUnderscore(e.target.value)}
            style={{ height: 100, width: "100%" }}
            placeholder={"lowercase Underscore"}
          />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={12}>
          <Divider orientation="left">Camel</Divider>
          <textarea
            value={camel}
            onChange={(e) => setCamel(e.target.value)}
            style={{ height: 100, width: "100%" }}
            placeholder={"camel"}
          />
        </Col>
        <Col span={12}>
          <Divider orientation="left">Number VN To JP</Divider>
          <textarea
            value={numberVNToJP}
            onChange={(e) => setNumberVNToJP(e.target.value)}
            style={{ height: 100, width: "100%" }}
            placeholder={"number VN To JP"}
          />
        </Col>
      </Row>
    </>
  );
};

export default TextCommon;
