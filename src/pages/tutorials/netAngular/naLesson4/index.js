import { Col, Row, Divider, Image } from "antd";
import Code from "../../../../components/modules/code";

const NALesson4 = () => {
  const sql = `INSERT INTO Users (Id, UserName)
VALUES (1, "Bob");
INSERT INTO Users (Id, UserName)
VALUES (2, "Tom");
INSERT INTO Users (Id, UserName)
VALUES (3, "Jane");`;

  return (
    <>
      <Divider orientation="left">Setting donet-ef</Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>1. Setting donet-ef</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Access nuget.org</p>
          <p>- Search: dotnet-ef</p>
          <p>- Select version</p>
          <p>- Run command: dotnet tool install --global dotnet-ef --version 5.0.14</p>
          <Image
            src={require("../../../../resources/img/tutorials/netAngular/Net_Angular_5.jpg")}
          />
          <br />
          <p>- Run command: dotnet ef migrations add InitialCreate -o Data/Migrations</p>
          <p>- Run command: dotnet ef database update</p>
        </Col>

        <Col span={24}>
          <h1>2. Insert Data</h1>
          <Code code={sql} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default NALesson4;
