import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import { PHPSubstringEllipsesData } from "./data";

const PHPSubstringEllipses = () => {
  return (
    <>
      <h1>Cắt chuỗi với dấu chấm lửng (ellipses)</h1>
      <Row justify="start">
        <Col span={24}>
         <Code code={PHPSubstringEllipsesData.one} language="php" />
        </Col>
      </Row>
    </>
  );
};

export default PHPSubstringEllipses;
