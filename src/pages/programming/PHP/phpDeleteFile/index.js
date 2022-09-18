import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import { PHPDeleteFileData } from "./data";

const PHPDeleteFile = () => {
  return (
    <>
      <h1>Cắt chuỗi với dấu chấm lửng (ellipses)</h1>
      <Row justify="start">
        <Col span={24}>
         <Code code={PHPDeleteFileData.one} language="php" />
        </Col>
      </Row>
    </>
  );
};

export default PHPDeleteFile;
