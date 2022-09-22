import { Col, Row, Divider } from "antd";
import Code from "../../../../components/modules/code";
import { naLesson8Data } from './data';

const NALesson8 = () => {

  return (
    <>
      <Divider orientation="left">Adding CORS support in the API</Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>1. Startup.cs</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Create folder Entities</p>
          <p>- Create class AppUser</p>
          <Code code={naLesson8Data.startup} language="csharp" />
        </Col>

        <Col span={24}>
          <h1>2. app.component.html</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Add folder: API\Data</p>
          <p>- Add class: DataContext</p>
          <Code code={naLesson8Data.app_component} language="html" />
        </Col>
      </Row>
    </>
  );
};

export default NALesson8;
