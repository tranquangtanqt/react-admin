import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter9Data } from "./data";

const PostgreSQLChapter9 = () => {
  return (
    <>
      <Divider orientation="left"> 9. JSON Support</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <p>
            JSON - Java Script Object Notation , Postgresql support JSON Data
            type since 9.2 version. There are some predefined function and
            operators to access the JSON data. The {"->"} operator returns the
            key of JSON column. The {"->"} operator returns the value of JSON
            Column
          </p>
        </Col>
        <Col span={24}>
          <h1>1. Using JSONb operators</h1>
        </Col>
        <Col span={23} offset={1}>
          <b>Creating a DB and a Table</b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.one} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <b>Populating the DB</b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.two} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>Lets see everything inside the table books:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.three} language="sql" />
        </Col>
      </Row>
      <Row justify="start">
        <Col span={2} offset={1}>
          <p>Output: </p>
        </Col>
        <Col span={18}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>id</th>
                <th>client</th>
                <th>data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Joe</td>
                <td>
                  {"{"}"title": "Siddhartha", "author": {"{"}"last_name":
                  "Hesse", "first_name": "Herman"{"}}"}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jenny</td>
                <td>
                  {"{"}"title": "Dharma Bums", "author": {"{"}"last_name":
                  "Kerouac", "first_name": "Jack"{"}}"}
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jenny</td>
                <td>
                  {"{"}"title": "100 años de soledad", "author": {"{"}
                  "last_name": "Marquéz", "first_name": "Gabo"{"}}"}
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <b>{"->"} operator returns values out of JSON columns</b>
          <p className="m-t-15">Selecting 1 column:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.four} language="sql" />
        </Col>
      </Row>
      <Row justify="start">
        <Col span={2} offset={1}>
          <p>Output: </p>
        </Col>
        <Col span={7}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>client</th>
                <th>title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Joe</td>
                <td>"Siddhartha"</td>
              </tr>
              <tr>
                <td>Jenny</td>
                <td>"Dharma Bums"</td>
              </tr>
              <tr>
                <td>Jenny</td>
                <td>"100 años de soledad"</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row justify="start" className="m-t-20">
        <Col span={23} offset={1}>
          <p className="m-t-15">Selecting 2 columns:</p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.five} language="sql" />
        </Col>
      </Row>
      <Row justify="start">
        <Col span={2} offset={1}>
          <p>Output: </p>
        </Col>
        <Col span={15}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>client</th>
                <th>title</th>
                <th>author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Joe</td>
                <td>"Siddhartha"</td>
                <td>
                  {"{"}"last_name": "Hesse", "first_name": "Herman"{"}"}
                </td>
              </tr>
              <tr>
                <td>Jenny</td>
                <td>"Dharma Bums"</td>
                <td>
                  {"{"}"last_name": "Kerouac", "first_name": "Jack"{"}"}
                </td>
              </tr>
              <tr>
                <td>Jenny</td>
                <td>"100 años de soledad"</td>
                <td>
                  {"{"}"last_name": "Marquéz", "first_name": "Gabo"{"}"}
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row justify="start">
        <Col span={23} offset={1}>
          <p className="m-t-15">
            -{">"} vs -{">"}
            {">"}
          </p>
          <p>
            The -{">"} operator returns the original JSON type (which might be
            an object), whereas -{">"}
            {">"} returns text.
          </p>
        </Col>

        <Col span={23} offset={1}>
          <b>Return NESTED objects</b>
          <p>
            You can use the -{">"} to return a nested object and thus chain the
            operators:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.six} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={2} offset={1}>
          <p>Output: </p>
        </Col>
        <Col span={5}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>client</th>
                <th>author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Joe</td>
                <td>"Hesse"</td>
              </tr>
              <tr>
                <td>Jenny</td>
                <td>"Kerouac"</td>
              </tr>
              <tr>
                <td>Jenny</td>
                <td>"Marquéz"</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <b>Filtering</b>
          <p>Select rows based on a value inside your JSON:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.seven} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Notice WHERE uses -{">"} so we must compare to JSON '"Dharma Bums"'
          </p>
          <p>
            Or we could use -{">"}
            {">"} and compare to 'Dharma Bums'
          </p>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={2} offset={1}>
          <p>Output:</p>
        </Col>
        <Col span={5}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>client</th>
                <th>title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jenny</td>
                <td>"Dharma Bums"</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <b>Nested filtering</b>
          <p>Find rows based on the value of a nested JSON object:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.eight} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={2} offset={1}>
          <p>Output:</p>
        </Col>
        <Col span={5}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>client</th>
                <th>title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jenny</td>
                <td>"Dharma Bums"</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={23} offset={1}>
          <b>A real world example</b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.nine} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            We’re going to store events in this table, like pageviews. Each
            event has properties, which could be anything (e.g. current page)
            and also sends information about the browser (like OS, screen
            resolution, etc). Both of these are completely free form and could
            change over time (as we think of extra stuff to track).
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.ten} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>Now lets select everything</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.eleven} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={2} offset={1}>
          <p>Output:</p>
        </Col>
        <Col span={21}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>name</th>
                <th>visitor_id</th>
                <th>properties</th>
                <th>browser</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>pageview</td>
                <td>1</td>
                <td>
                  {"{"} "page": "/" {"}"}
                </td>
                <td>
                  {"{"} "name": "Chrome", "os": "Mac", "resolution": {"{"} "x":
                  1440, "y": 900{" } }"}
                </td>
              </tr>
              <tr>
                <td>pageview</td>
                <td>2</td>
                <td>
                  {"{"} "page": "/" {"}"}
                </td>
                <td>
                  {"{"} "name": "Firefox", "os": "Windows", "resolution": {"{"}{" "}
                  "x": 1920, "y": 1200{" } }"}
                </td>
              </tr>
              <tr>
                <td>pageview</td>
                <td>1</td>
                <td>
                  {"{"} "page": "/account" {"}"}
                </td>
                <td>
                  {"{"} "name": "Chrome", "os": "Mac", "resolution": {"{"} "x":
                  1440, "y": 900{" } }"}
                </td>
              </tr>
              <tr>
                <td>purchase</td>
                <td>5</td>
                <td>
                  {"{"} "amount": 10 {"}"}
                </td>
                <td>
                  {"{"} "name": "Firefox", "os": "Windows", "resolution": {"{"}{" "}
                  "x": 1024, "y": 768{" } }"}
                </td>
              </tr>
              <tr>
                <td>purchase</td>
                <td>15</td>
                <td>
                  {"{"} "amount": 200 {"}"}
                </td>
                <td>
                  {"{"} "name": "Firefox", "os": "Windows", "resolution": {"{"}{" "}
                  "x": 1280, "y": 800{" } }"}
                </td>
              </tr>
              <tr>
                <td>purchase</td>
                <td>15</td>
                <td>
                  {"{"} "amount": 500 {"}"}
                </td>
                <td>
                  {"{"} "name": "Firefox", "os": "Windows", "resolution": {"{"}{" "}
                  "x": 1280, "y": 800{" } }"}
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={23} offset={1}>
          <b>JSON operators + PostgreSQL aggregate functions</b>
          <p>
            Using the JSON operators, combined with traditional PostgreSQL
            aggregate functions, we can pull out whatever we want. You have the
            full might of an RDBMS at your disposal.
          </p>
          <p>Lets see browser usage:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.twelve} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={2} offset={1}>
          <p>Output:</p>
        </Col>
        <Col span={5}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>browser</th>
                <th>count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chrome</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Firefox</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={23} offset={1}>
          <p>Total revenue per visitor:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.twelve} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={2} offset={1}>
          <p>Output:</p>
        </Col>
        <Col span={5}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>visitor_id</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5</td>
                <td>10</td>
              </tr>
              <tr>
                <td>15</td>
                <td>700</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={23} offset={1}>
          <p>Average screen resolution</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.fourteen} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={2} offset={1}>
          <p>Output:</p>
        </Col>
        <Col span={5}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>width</th>
                <th>height</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1397.3333333333333333</td>
                <td>894.6666666666666667</td>
              </tr>
            </tbody>
          </table>
        </Col>

        <Col span={23} offset={1}>
          <p className="m-t-15">
            More examples and documentation{": "}
            <br />
            <a
              href="https://schinckel.net/2014/05/25/querying-json-in-postgres/"
              target={"_blank"}
              rel="noreferrer"
            >
              https://schinckel.net/2014/05/25/querying-json-in-postgres/
            </a>{" "}
            <br />
            <a
              href="https://clarkdave.net/2013/06/what-can-you-do-with-postgresql-and-json/"
              target={"_blank"}
              rel="noreferrer"
            >
              https://clarkdave.net/2013/06/what-can-you-do-with-postgresql-and-json/
            </a>{" "}
            .
          </p>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>2. Querying complex JSON documents</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>Taking a complex JSON document in a table:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.fifteen} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <p>Query for a top-level element:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.sixteen} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <p>Query for a simple item in an array:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.seventeen} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <p>Query for an object in an array</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.eighteen} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <p>Query for a nested object:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.nineteen} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <b>
            Performance of @{">"} compared to -{">"} and -{">"}
            {">"}
          </b>
          <p>
            It is important to understand the performance difference between
            using @{">"}, -{">"} and -{">"}
            {">"} in the WHERE part of the query. Although these two queries
            appear to be broadly equivalent:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.twenty} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            the first statement will use the index created above whereas the
            latter two will not, requiring a complete table scan.
          </p>
          <p>
            It is still allowable to use the -{">"} operator when obtaining
            resultant data, so the following queries will also use the index:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.twentyOne} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>3. Creating a pure JSON table</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            To create a pure JSON table you need to provide a single field with
            the type JSONB:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.twentyTwo} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <p>You should also create a basic index:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter9Data.twentyThree} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            At this point you can insert data in to the table and query it
            efficiently.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter9;
