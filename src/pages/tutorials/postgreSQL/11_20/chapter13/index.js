import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter13Data } from "./data";

const PostgreSQLChapter13 = () => {
  return (
    <>
      <Divider orientation="left">13. Recursive queries</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Sum of Integers</h1>
        </Col>
        <Col span={22} offset={1}>
          <Code code={PostgreSQLChapter13Data.one} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <b>
            <a
              href="https://www.postgresql.org/docs/current/functions-window.html"
              target={"_blank"}
              rel="noreferrer"
            >
              Link to Documentation
            </a>
          </b>
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter13;
