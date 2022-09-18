import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import { PHPConvertDatetimeData } from "./data";

const PHPConvertDatetime = () => {
  return (
    <>
      <h1>Convert Datetime</h1>
      <Row justify="start">
        <Col span={24}>
         <Code code={PHPConvertDatetimeData.one} language="php" />
        </Col>
      </Row>
    </>
  );
};

export default PHPConvertDatetime;
