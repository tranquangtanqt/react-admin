import Code from 'components/modules/code';

// 4. Setting donet-ef
export const TutorialNetAngularLesson4 = () => {
  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Setting donet-ef</b>
          <div className="tab-1">
            <p>- Access nuget.org</p>
            <p>- Search: dotnet-ef</p>
            <p>- Select version</p>
            <p>
              - Run command: dotnet tool install --global dotnet-ef --version
              5.0.14
            </p>
          </div>
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/tutorials/netAngular/Net_Angular_5.jpg')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Insert Data</b>
          <div className="tab-1">
            <Code
              code={`INSERT INTO Users (Id, UserName)
VALUES (1, "Bob");
INSERT INTO Users (Id, UserName)
VALUES (2, "Tom");
INSERT INTO Users (Id, UserName)
VALUES (3, "Jane");`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
