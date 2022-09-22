import { Col, Row, Divider } from "antd";
import Code from "../../../../components/modules/code";
import { naLesson3Data } from './data';

const NALesson3 = () => {

  return (
    <>
      <Divider orientation="left">Adding Entity Framework</Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>1. Add Entity User</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Create folder Entities</p>
          <p>- Create class AppUser</p>
          <Code code={naLesson3Data.user} language="csharp" />
        </Col>

        <Col span={24}>
          <h1>2. Adding a DBContext class</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Add folder: API\Data</p>
          <p>- Add class: DataContext</p>
          <Code code={naLesson3Data.dataContex} language="csharp" />
        </Col>

        <Col span={24}>
          <h1>3. Creating the connection string</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Editing appsettings.Development.json</p>
          <Code code={naLesson3Data.appsettings} language="json" />
          <p>- Startup.cs</p>
          <Code code={naLesson3Data.startUp} language="csharp" />
        </Col>
      </Row>
    </>
  );
};

export default NALesson3;
