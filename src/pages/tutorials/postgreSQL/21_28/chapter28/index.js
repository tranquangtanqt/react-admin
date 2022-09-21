import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter28Data } from "./data";

const PostgreSQLChapter28 = () => {
  return (
    <>
      <Divider orientation="left">28. Postgres Tip and Tricks</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. DATEADD alternative in Postgres</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter28Data.one} language="sql" />
        </Col>

        <Col span={24}>
          <h1>2. Comma separated values of a column</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter28Data.two} language="sql" />
        </Col>

        <Col span={24}>
          <h1>3. Delete duplicate records from postgres table</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter28Data.three} language="sql" />
        </Col>

        <Col span={24}>
          <h1>
            4. Update query with join between two tables alternative since
            Postresql does not support join in update query
          </h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter28Data.four} language="sql" />
        </Col>

        <Col span={24}>
          <h1>
            5 Difference between two date timestamps month wise and year wise
          </h1>
          <p>Monthwise difference between two dates(timestamp)</p>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter28Data.five} language="sql" />
        </Col>

        <Col span={24}>
          <p>Yearwise difference between two dates(timestamp)(timestamp)</p>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter28Data.six} language="sql" />
        </Col>

        <Col span={24}>
          <h1>
            6. Query to Copy/Move/Transafer table data from one database to other
            database table with same schema
          </h1>
          <p>First Execute</p>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter28Data.seven} language="sql" />
        </Col>
        <Col span={24}>
          <p>Then
</p>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter28Data.eight} language="sql" />
        </Col>

       
      </Row>
    </>
  );
};

export default PostgreSQLChapter28;
