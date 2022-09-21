import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter7Data } from "./data";

const PostgreSQLChapter7 = () => {
  return (
    <>
      <Divider orientation="left"> 7. INSERT</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.1 Insert data using COPY</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            COPY is PostgreSQL's bulk-insert mechanism. It's a convenient way to
            transfer data between files and tables, but it's also far faster
            than INSERT when adding more than a few thousand rows at a time.
          </p>
          <p>Let's begin by creating sample data file</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            And we need a two column table into which this data can be imported
            into.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.two} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            Now the actual copy operation, this will create six records in the
            table.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.three} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>Instead of using a file on disk, can insert data from STDIN</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.four} language="sql" />
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.five} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>Also you can copy data from a table to file as below:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.six} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            For more details on COPY you can check{" "}
            <a
              href="https://www.postgresql.org/docs/9.2/sql-copy.html"
              target={"_blank"}
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.2 Inserting multiple rows</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>You can insert multiple rows in the database at the same time:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.seven} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.3 INSERT data and RETURING values</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            If you are inserting data into a table with an auto increment column
            and if you want to get the value of the auto increment column
          </p>
          <p>Say you have a table called my_table:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.eight} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            If you want to insert data into my_table and get the id of that row:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.nine} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Above query will return the id of the row where the new record was
            inserted.
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.4 Basic INSERT</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>Let's say we have a simple table called person:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.ten} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            The most basic insert involves inserting all values in the table:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.eleven} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            If you want to insert only specific columns, you need to explicitly
            indicate which columns:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.twelve} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            Note that if any constraints exist on the table , such as NOT NULL,
            you will be required to include those columns in either case.
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.5 Insert from select</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            You can insert data in a table as the result of a select statement:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.seven} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Note that the projection of the select must match the columns
            required for the insert. In this case, the tmp_person table has the
            same columns as person.:
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.6 UPSERT - INSERT ... ON CONFLICT DO UPDATE..</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            Since version 9.5 postgres offers UPSERT functionality with INSERT
            statement.
          </p>
          <p>
            Say you have a table called my_table, created in several previous
            examples. We insert a row, returning PK value of inserted row:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.fourteen} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Now if we try to insert row with existing unique key it will raise
            an exception:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.fifteen} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Upsert functionality offers ability to insert it anyway, solving the
            conflict:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.sixteen} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.7 SELECT data into file</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>You can COPY table and paste it into a file.</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.seventeen} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter7;
