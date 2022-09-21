import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter10Data } from "./data";

const PostgreSQLChapter10 = () => {
  return (
    <>
      <Divider orientation="left"> 10. Aggregate Functions</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Simple statistics: min(), max(), avg()</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            In order to determine some simple statistics of a value in a column
            of a table, you can use an aggregate function.
          </p>
          <p>If your individuals table is:</p>
        </Col>

        <Col span={4} offset={2}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Allie</td>
                <td>17</td>
              </tr>
              <tr>
                <td>Amanda</td>
                <td>14</td>
              </tr>
              <tr>
                <td>Alana</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={23} offset={1}>
          <p>
            You could write this statement to get the minimum, maximum and
            average value:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter10Data.one} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>Result:</p>
        </Col>

        <Col span={4} offset={2}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>min</th>
                <th>max</th>
                <th>avg</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14</td>
                <td>20</td>
                <td>17</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>
            2. regr_slope(Y, X) : slope of the least-squares-fit linear equation
            determined by the (X, Y) pairs
          </h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            To illustrate how to use regr_slope(Y,X), I applied it to a real
            world problem. In Java, if you don't clean up memory properly, the
            garbage can get stuck and fill up the memory. You dump statistics
            every hour about memory utilization of different classes and load it
            into a postgres database for analysis.
          </p>
          <p>
            All memory leak candidates will have a trend of consuming more
            memory as more time passes. If you plot this trend, you would
            imagine a line going up and to the left:
          </p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter10Data.two} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            Suppose you have a table containing heap dump histogram data (a
            mapping of classes to how much memory they consume):
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter10Data.three} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            To compute the slope for each class, we group by over the class. The
            HAVING clause {">"} 0 ensures that we get only candidates with a
            positive slop (a line going up and to the left). We sort by the
            slope descending so that we get the classes with the largest rate of
            memory increase at the top.
          </p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter10Data.four} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            From the output we see that java.util.ArrayList's memory consumption
            is increasing the fastest at 71.799 bytes per second and is
            potentially part of the memory leak.
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>3. string_agg(expression, delimiter)</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            You can concatenate strings separated by delimiter using the
            STRING_AGG() function.
          </p>
          <p>If your individuals table is:</p>
        </Col>

        <Col span={4} offset={2}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Allie</td>
                <td>15</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>Amanda</td>
                <td>14</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>Alana</td>
                <td>20</td>
                <td>Russia</td>
              </tr>
            </tbody>
          </table>
        </Col>

        <Col span={23} offset={1}>
          <p>
            You could write SELECT ... GROUP BY statement to get names from each
            country:
          </p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter10Data.five} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            Note that you need to use a GROUP BY clause because STRING_AGG() is
            an aggregate function.
          </p>
        </Col>

        <Col span={23} offset={1}>
          <b>Result:</b>
        </Col>

        <Col span={4} offset={2}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>Name</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Allie, Amanda</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>Alana</td>
                <td>Russia</td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col span={23} offset={1}>
          <br />
          <a
            href="https://www.postgresql.org/docs/devel/functions-aggregate.html"
            target={"_blank"}
            rel="noreferrer"
          >
            More PostgreSQL aggregate function described here
          </a>
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter10;
