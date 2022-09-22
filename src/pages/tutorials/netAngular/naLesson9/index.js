import { Col, Row, Divider, Image } from "antd";
import Code from "../../../../components/modules/code";
import { naLesson3Data } from "./data";

const NALesson9 = () => {
  return (
    <>
      <Divider orientation="left">
        Updating the user entity and Creating a base API controller
      </Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>1. Updating the user entity</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Update entity: AppUser</p>
          <Code code={naLesson3Data.appUser} language="csharp" />
          <br />
          <p>- Update migrate: <i>dotnet ef migrations add UserPasswordAdded</i></p>
          <Image
            src={require("../../../../resources/img/tutorials/netAngular/Net_Angular_8.jpg")}
          />
          <br />
          <br />
          <p>-  Update database: <i>dotnet ef database update</i></p>
          <Image
            src={require("../../../../resources/img/tutorials/netAngular/Net_Angular_9.jpg")}
          />
          <br />
          <br />
        </Col>

        <Col span={24}>
          <h1>2. Creating a base API controller</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Create API.Controllers.BaseApiController</p>
          <Code code={naLesson3Data.baseApiController} language="csharp" />
          <br />
          <p>- Change UsersController: remove ApiController and [Route("api/[controller]")]</p>
          <Code code={naLesson3Data.usersController} language="csharp" />
        </Col>

        
      </Row>
    </>
  );
};

export default NALesson9;
