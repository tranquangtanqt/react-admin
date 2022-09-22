import { Col, Row, Divider, Image } from "antd";

const NALesson1 = () => {
  return (
    <>
      <Divider orientation="left">
        Creating the .Net API Project using the dotnet CLI
      </Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>Command line</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>+ dotnet --info</p>
          <p>+ dotnet -h</p>
          <p>+ dotnet new -h</p>
          <p>+ dotnet new sln: create new solution</p>
          <p>+ dotnet new webapi -o API: create folder and project API</p>
          <p>+ dotnet sln add API: Add folder API to solution</p>
        </Col>

        <Col span={24}>
          <h1>Nuget install</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>+ System.IdentityModel.Tokens.Jwt</p>
          <p>+ Microsoft.AspNetCore.Authentication.JwtBearer</p>
          <p>+ Microsoft.Entityframeworkcore.Sqlite</p>
        </Col>

        <Col span={24}>
          <h1>Run command line</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>+ cd API</p>
          <p>+ donet run</p>
        </Col>

        <Col span={24}>
          <h1>Visual Studio Code</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>+ C#</p>
          <p>+ C# Extensions</p>
          <p>+ Material Icon Theme</p>
          <p>+ Nuget Gallery</p>
          <p>+ Auto-using</p>
          <p>+ SQLite</p>
          <p>+ C# Genenate Constructor</p>
          <p>+ Auto save for VS Code</p>
          <Image
            src={require("../../../../resources/img/tutorials/netAngular/Net_Angular_1.jpg")}
          />
          <p>+ Hidden folder in menu left</p>
          <Image
            src={require("../../../../resources/img/tutorials/netAngular/Net_Angular_2.jpg")}
          />
          <br />
          <br />
          <Image
            src={require("../../../../resources/img/tutorials/netAngular/Net_Angular_3.jpg")}
          />
        </Col>
      </Row>
    </>
  );
};

export default NALesson1;
