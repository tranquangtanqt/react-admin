import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter27Data } from "./data";

const PostgreSQLChapter27 = () => {
  return (
    <>
      <Divider orientation="left">
        27. EXTENSION dblink and postgres_fdw
      </Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Extention FDW</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            FDW is an implimentation of dblink it is more helpful, so to use it:
          </p>
          <p>1. Create an extention:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>2. Create SERVER:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.two} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>3. Create user mapping for postgres server</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.three} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>4. Create foreign table:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.four} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>5. use this foreign table like it is in your database:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.five} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>2. Foreign Data Wrapper</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            To access complete schema of server db instead of single table.
            Follow below steps:
          </p>
          <p>1. Create EXTENSION</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.six} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>2. Create SERVER:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.seven} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>3. Create USER MAPPING:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.eight} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>4. Create new schema to access schema of server DB:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.nine} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>5. Import server schema:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.ten} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>6. Access any table of server schema:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.elevent} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>This can be used to access multiple schema of remote DB.</p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>3. Extention dblink</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            dblink EXTENSION is a technique to connect another database and make
            operation of this database so to do that you need:
          </p>
          <p>1-Create a dblink extention:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.twelve} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>2-Make your operation:</p>
          <p>
            For exemple Select some attribute from another table in another
            database:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.thirteen} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter27;
