import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter6Data } from "./data";

const PostgreSQLChapter6 = () => {
  return (
    <>
      <Divider orientation="left"> 6. COALESCE</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <p>
            Coalesce returns the first none null argument from a set of
            arguments. Only the first non null argument is return, all
            subsequent arguments are ignored. The function will evaluate to null
            if all arguments are null.
          </p>
        </Col>
        <Col span={24}>
          <h1>1.1 Single non null argument</h1>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter6Data.one} language="sql" />
        </Col>

        <Col span={24}>
          <h1>1.2 Multiple non null arguments</h1>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter6Data.two} language="sql" />
        </Col>

        <Col span={24}>
          <h1>1.3 All null arguments</h1>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter6Data.three} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter6;
