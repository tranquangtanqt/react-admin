import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter23Data } from "./data";

const PostgreSQLChapter23 = () => {
  return (
    <>
      <Divider orientation="left">
        23. Backup script for a production DB
      </Divider>
      <Row justify="start" className="m-t-20">
        <Col span={23} offset={1}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>save_db</td>
                <td>The main backup directory</td>
              </tr>
              <tr>
                <td>dbProd</td>
                <td>The secondary backup directory</td>
              </tr>
              <tr>
                <td>DATE</td>
                <td>The date of the backup in the specified format</td>
              </tr>
              <tr>
                <td>dbprod</td>
                <td>The name of the database to be saved</td>
              </tr>
              <tr>
                <td>/opt/postgres/9.0/bin/pg_dump</td>
                <td>The path to the pg_dump binary</td>
              </tr>
              <tr>
                <td>-h</td>
                <td>
                  Specifies the host name of the machine on which the server is
                  running, Example : localhost
                </td>
              </tr>
              <tr>
                <td>-p</td>
                <td>
                  Specifies the TCP port or local Unix domain socket file
                  extension on which the server is listening for connections,
                  Example 5432
                </td>
              </tr>
              <tr>
                <td>-U</td>
                <td>User name to connect as</td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col span={24} className="m-t-20">
          <h1>1. saveProdDb.sh</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            In general, we tend to back up the DB with the pgAdmin client. The
            following is a sh script used to save the database (under linux) in
            two formats:
          </p>
          <ul>
            <li>
              SQL file: for a possible resume of data on any version of
              PostgreSQL.
            </li>
            <li>Dump file: for a higher version than the current version.</li>
          </ul>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter23Data.one} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter23;
