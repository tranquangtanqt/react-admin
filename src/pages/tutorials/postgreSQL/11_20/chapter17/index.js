import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter17Data } from "./data";

const PostgreSQLChapter17 = () => {
  return (
    <>
      <Divider orientation="left">17. Triggers and Trigger Functions</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <p>
            The trigger will be associated with the specified table or view and
            will execute the specified function function_name when certain
            events occur.
          </p>
          <h1>1. Type of triggers</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>Trigger can be specified to fire:</p>
          <ul>
            <li>
              BEFORE the operation is attempted on a row - insert, update or
              delete;
            </li>
            <li>
              AFTER the operation has completed - insert, update or delete;
            </li>
            <li>
              INSTEAD OF the operation in the case of inserts, updates or
              deletes on a view.
            </li>
          </ul>
          <p>Trigger that is marked:</p>
          <ul>
            <li>
              FOR EACH ROW is called once for every row that the operation
              modifies;
            </li>
            <li>FOR EACH STATEMENT is called onde for any given operation.</li>
          </ul>
          <p>Preparing to execute examples</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter17Data.one} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <b>Single insert trigger</b>
        </Col>
        <Col span={22} offset={2}>
          <p>Step 1: create your function</p>
          <Code code={PostgreSQLChapter17Data.two} language="sql" />
        </Col>
        <Col span={22} offset={2}>
          <p>Step 2: create your trigger</p>
          <Code code={PostgreSQLChapter17Data.three} language="sql" />
        </Col>
        <Col span={22} offset={2}>
          <p>Step 3: test it</p>
          <Code code={PostgreSQLChapter17Data.four} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <b>Trigger for multiple purpose</b>
        </Col>
        <Col span={22} offset={2}>
          <p>Step 1: create your function</p>
          <Code code={PostgreSQLChapter17Data.five} language="sql" />
        </Col>
        <Col span={22} offset={2}>
          <p>Step 2: create your trigger</p>
          <Code code={PostgreSQLChapter17Data.six} language="sql" />
        </Col>
        <Col span={22} offset={2}>
          <p>Step 3: test it</p>
          <Code code={PostgreSQLChapter17Data.seven} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>2. Basic PL/pgSQL Trigger Function</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>This is a simple trigger function.</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter17Data.eight} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>Adding this trigger function to the users table.</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter17Data.nine} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter17;
