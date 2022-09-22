import { Col, Row, Divider, Image } from "antd";

const NALesson6 = () => {
  return (
    <>
      <Divider orientation="left">Creating the Angular application</Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>1. Creating project</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Create project: ng new client --strict false</p>
          <p>
            - Add bootstrap: ngx-bootstrap{" "}
            <a
              href="https://valor-software.com/ngx-bootstrap/#/documentation"
              target={"_blank"}
              rel="noreferrer"
            >
              https://valor-software.com/ngx-bootstrap/#/documentation
            </a>
          </p>
          <p>- Add font-awesome: npm install font-awesome</p>
          <p>- Run: ng serve</p>
        </Col>

        <Col span={24}>
          <h1>2. Adding VS Code extensions to work with Angular</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Angular Snippets (Version 12)</p>
          <p>- Angular Language Service</p>
          <p>- Bracket Pair Colorizer 2</p>
        </Col>

        <Col span={24}>
          <h1>3. Fix error</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/tutorials/netAngular/Net_Angular_6.jpg")}
          />
          <br />
          <br />
          <p>
            - Run this command on your project folder: Set-ExecutionPolicy
            -ExecutionPolicy RemoteSigned -Scope CurrentUser
          </p>
          <Image
            src={require("../../../../resources/img/tutorials/netAngular/Net_Angular_7.jpg")}
          />
        </Col>
      </Row>
    </>
  );
};

export default NALesson6;
