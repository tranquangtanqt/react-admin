import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter15Data } from "./data";

const PostgreSQLChapter15 = () => {
  return (
    <>
      <Divider orientation="left">15. Inheritance</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Creating children tables</h1>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter15Data.one} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>Our three tables look like this:</p>
        </Col>
      </Row>
      <Row justify="start">
        <Col span={4} offset={2}>
          <b>users</b>
          <table className="table-custom">
            <thead>
              <tr>
                <th>Column</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>username</td>
                <td>text</td>
              </tr>
              <tr>
                <td>email</td>
                <td>text</td>
              </tr>
            </tbody>
          </table>
        </Col>

        <Col span={4} offset={2}>
          <b>simple_users</b>
          <table className="table-custom">
            <thead>
              <tr>
                <th>Column</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>username</td>
                <td>text</td>
              </tr>
              <tr>
                <td>email</td>
                <td>text</td>
              </tr>
            </tbody>
          </table>
        </Col>

        <Col span={4} offset={2}>
          <b>users_with_password</b>
          <table className="table-custom">
            <thead>
              <tr>
                <th>Column</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>username</td>
                <td>text</td>
              </tr>
              <tr>
                <td>email</td>
                <td>text</td>
              </tr>
              <tr>
                <td>password</td>
                <td>text</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter15;
