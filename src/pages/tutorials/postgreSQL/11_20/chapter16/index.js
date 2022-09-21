import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter16Data } from "./data";

const PostgreSQLChapter16 = () => {
  return (
    <>
      <Divider orientation="left">
        16. Export PostgreSQL database table header and data to CSV file
      </Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <p>
            From Adminer management tool it's has export to csv file option for
            mysql database But not available for postgresql database. Here I
            will show the command to export CSV for postgresql database.
          </p>
          <h1>1. Copy from query</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter16Data.one} language="sql" />
        </Col>
        <Col span={24}>
          <h1>
            2. Export PostgreSQL table to csv with header for some column(s)
          </h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter16Data.two} language="sql" />
        </Col>
        <Col span={24}>
          <h1>3. Full table backup to csv with header</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter16Data.three} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter16;
