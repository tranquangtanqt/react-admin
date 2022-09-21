import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter25Data } from "./data";

const PostgreSQLChapter25 = () => {
  return (
    <>
      <Divider orientation="left">25. Connect to PostgreSQL from Java</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <p>The API to use a relational database from Java is JDBC.</p>
          <p>This API is implemented by a JDBC driver.</p>
          <p>
            To use it, put the JAR-file with the driver on the JAVA class path.
          </p>
          <p>
            This documentation shows samples how to use the JDBC driver to
            connect to a database
          </p>
          <h1>1. Connecting with java.sql.DriverManager</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>This is the simplest way to connect.</p>
          <p>
            First, the driver has to be registered with java.sql.DriverManager
            so that it knows which class to use. This is done by loading the
            driver class, typically with java.lang.CLASS.forname(;driver class
            name{">"}).
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter25Data.one} language="javascript" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Not that user and password can also be included in the JDBC URL, in
            which case you don't have to specify them in the getConnection
            method call.
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>2. Connecting with java.sql.DriverManager and Properties</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            Instead of specifying connection parameters like user and password
            (see a complete list here) in the URL or a separate parameters, you
            can pack them into a java.util.Properties object:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter25Data.two} language="javascript" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>
            3. Connecting with javax.sql.DataSource using a connection pool
          </h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            It is common to use javax.sql.DataSource with JNDI in application
            server containers, where you register a data source under a name and
            look it up whenever you need a connection.
          </p>
          <p>This is code that demonstrates how data sources work:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter25Data.three} language="javascript" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Once you have created a data source by calling this function, you
            would use it like this:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter25Data.four} language="javascript" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter25;
