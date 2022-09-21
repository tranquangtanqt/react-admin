import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter8Data } from "./data";

const PostgreSQLChapter8 = () => {
  return (
    <>
      <Divider orientation="left"> 8. UPDATE</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Updating a table based on joining another table</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            You can also update data in a table based on data from another
            table:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter8Data.one} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Here we are joining the person city column to the cities city column
            in order to get the city's state code. This is then used to update
            the state_code column in the person table.
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>2. Update all rows in a table</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            You update all rows in table by simply providing a column_name =
            VALUE:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter8Data.two} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>3. Update all rows meeting a condition</h1>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter8Data.three} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>4. Updating multiple columns in table</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            You can update multiple columns in a table in the same statement,
            separating col=val pairs with commas:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter8Data.four} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter8;
