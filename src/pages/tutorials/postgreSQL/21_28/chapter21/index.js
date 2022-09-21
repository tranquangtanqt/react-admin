import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter21Data } from "./data";

const PostgreSQLChapter21 = () => {
  return (
    <>
      <Divider orientation="left">21. Comments in PostgreSQL</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <p>
            COMMMENT main purpose is to define or change a comment on database
            object.
          </p>
          <p>
            Only a single comment(string) can be given on any database object.
            COMMENT will help us to know what for the particular database object
            has been defined whats its actual purpose is.
          </p>
          <p>
            The rule for COMMENT ON ROLE is that you must be superuser to
            comment on a superuser role, or have the CREATEROLE privilege to
            comment on non-superuser roles. Of course, a superuser can comment
            on anything
          </p>
          <h1>1. COMMENT on Table</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter21Data.one} language="sql" />
        </Col>
      </Row>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>2. Remove Comment</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter21Data.two} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter21;
