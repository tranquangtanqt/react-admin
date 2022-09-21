import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter20Data } from "./data";

const PostgreSQLChapter20 = () => {
  return (
    <>
      <Divider orientation="left">20. Postgres cryptographic functions</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <p>
            In Postgres, cryptographic functions can be unlocked by using
            pgcrypto module. CREATE EXTENSION pgcrypto;
          </p>
          <h1>1. Digest</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            DIGEST() functions generate a binary hash of the given data. This
            can be used to create a random hash.
          </p>
          <p>Usage:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter20Data.one} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p> Or:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter20Data.two} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>Examples:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter20Data.three} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter20;
