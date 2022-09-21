import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter14Data } from "./data";

const PostgreSQLChapter14 = () => {
  return (
    <>
      <Divider orientation="left">14. Programming with PL/pgSQL</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Basic PL/pgSQL Function</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>A simple PL/pgSQL function:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter14Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            This could have been achieved with just the SQL statement but
            demonstrates the basic structure of a function.
          </p>
          <p>To execute the function do:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter14Data.two} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>2. Custom exceptions</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>Creating custom exception 'P2222':</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter14Data.three} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>creating custom exception not assigning errm:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter14Data.four} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>Calling:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter14Data.five} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            here custom P0001 processed, and P2222, not, aborting the execution.
          </p>
          <p>
            Also it makes huge sense to keep a table of exceptions, like here:{" "}
            <a
              href=" http://stackoverflow.com/a/2700312/5315974"
              target={"_blank"}
              rel="noreferrer"
            >
              http://stackoverflow.com/a/2700312/5315974
            </a>{" "}
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>3. PL/pgSQL Syntax</h1>
        </Col>
        <Col span={22} offset={1}>
          <Code code={PostgreSQLChapter14Data.six} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>4. RETURNS Block</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>Options for returning in a PL/pgSQL function:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter14Data.seven} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter14;
