import { PageTitle } from "../../../../../components/modules/pageTitle";

export const TutorialNetAngularLesson1 = () => {
  return (
    <>
      <PageTitle title="1. Creating the .Net API Project using the dotnet CLI"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>Command line</b>
          <div className="tab-1">
            <ul>
              <li>dotnet --info</li>
              <li>dotnet -h</li>
              <li>dotnet new -h</li>
              <li>dotnet new sln: create new solution</li>
              <li>dotnet new webapi -o API: create folder and project API</li>
              <li>dotnet sln add API: Add folder API to solution</li>
            </ul>
          </div>

          <b>Nuget install</b>
          <div className="tab-1">
            <ul>
              <li>System.IdentityModel.Tokens.Jwt</li>
              <li>Microsoft.AspNetCore.Authentication.JwtBearer</li>
              <li>Microsoft.Entityframeworkcore.Sqlite</li>
            </ul>
          </div>
          <b>Run command line</b>
          <div className="tab-1">
            <ul>
              <li>cd API</li>
              <li>donet run</li>
            </ul>
          </div>
          <b>Visual Studio Code</b>
          <div className="tab-1">
            <ul>
              <li>C#</li>
              <li>C# Extensions</li>
              <li>Material Icon Theme</li>
              <li>Nuget Gallery</li>
              <li>Auto-using</li>
              <li>SQLite</li>
              <li>C# Genenate Constructor</li>
              <li>Auto save for VS Code</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require("../../../../../resources/img/tutorials/netAngular/Net_Angular_1.jpg")}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <ul>
              <li>Hidden folder in menu left</li>
            </ul>
          </div>
          <div className="tab-2">
            <input
              type="image"
              src={require("../../../../../resources/img/tutorials/netAngular/Net_Angular_2.jpg")}
              className="img-thumbnail"
              alt=""
            />
          </div>
          <div className="tab-2">
            <input
              type="image"
              src={require("../../../../../resources/img/tutorials/netAngular/Net_Angular_3.jpg")}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};