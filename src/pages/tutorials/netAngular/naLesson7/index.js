import { Col, Row, Divider } from "antd";
import Code from "../../../../components/modules/code";
import { naLesson7Data } from './data';

const NALesson7 = () => {

  return (
    <>
      <Divider orientation="left">Making HTTP requests in Angular</Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>1. app.module.ts</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={naLesson7Data.app_module} language="javascript" />
        </Col>

        <Col span={24}>
          <h1>2. Adding a DBContext class</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Add folder: API\Data</p>
          <p>- Add class: DataContext</p>
          <Code code={naLesson7Data.app_component} language="javascript" />
        </Col>
      </Row>
    </>
  );
};

export default NALesson7;
