import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter19Data } from "./data";

const PostgreSQLChapter19 = () => {
  return (
    <>
      <Divider orientation="left">19. Role Management</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Create a user with a password</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            Generally you should avoid using the default database role (often
            postgres) in your application. You should instead create a user with
            lower levels of privileges. Here we make one called niceusername and
            give it a password verystrong-PASSWORD
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.one} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            The problem with that is that queries typed into the psql console
            get saved in a history file .psql_history in the user's home
            directory and may as well be logged to the PostgreSQL database
            server log, thus exposing the password.
          </p>
          <p>
            To avoid this, use the \PASSWORD command to set the user password.
            If the user issuing the command is a superuser, the current password
            will not be asked. (Must be superuser to alter passwords of
            superusers)
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.two} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>2. Grant and Revoke Privileges</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>Suppose, that we have three users :</p>
          <ol>
            <li>The Administrator of the database {">"} admin</li>
            <li>
              The application with a full access for her data {">"} read_write
            </li>
            <li>The read only access {">"} read_only</li>
          </ol>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.three} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            With the above queries, untrusted users can no longer connect to the
            database.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.four} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            The next set of queries revoke all privileges from unauthenticated
            users and provide limited set of privileges for the read_write user.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.five} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>3. Create Role and matching database</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            To support a given application, you often create a new role and
            database to match.
          </p>
          <p>The shell commands to run would be these:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.six} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            This assumes that pg_hba.conf has been properly configured, which
            probably looks like this:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.seven} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>4. Alter default search_path of user</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>With the below commands, user's default search_path can be set.</p>
          <p>a. Check search path before set default schema.</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.eight} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            b. Set search_path with ALTER USER command to append a new schema
            my_schema
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.nine} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>c. Check result after execution.</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.ten} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>Alternative:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.eleven} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>5. Create Read Only User</h1>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.twelve} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>6. Grant access privileges on objects created in the future</h1>
          <p>Suppose, that we have three users :</p>
          <ol>
            <li>The Administrator of the database {">"} ADMIN</li>
            <li>The application with a full access for her data {">"} read_write</li>
            <li>The read only access {">"} read_only</li>
          </ol>
          <p>With below queries, you can set access privileges on objects created in the future in specified schema.</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.thirteen} language="sql" />
        </Col>
        <Col span={24}>
          <p>Or, you can set access privileges on objects created in the future by specified user.</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter19Data.fourteen} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter19;
