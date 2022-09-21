import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter18Data } from "./data";

const PostgreSQLChapter18 = () => {
  return (
    <>
      <Divider orientation="left">18. Event Triggers</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <p>
            Event Triggers will be fired whenever event associated with them
            occurs in database.
          </p>
          <h1>1. Logging DDL Command Start Events</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>Event Type</p>
          <ul>
            <li>DDL_COMMAND_START</li>
            <li>DDL_COMMAND_END</li>
            <li>SQL_DROP</li>
          </ul>
          <p>This is example for creating an Event Trigger and logging DDL_COMMAND_START events</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter18Data.one} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter18;
