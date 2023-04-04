import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/page-title";

export const TutorialPostgreSQLChapter15 = () => {
  return (
    <>
      <PageTitle title="15. Inheritance"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Creating children tables</b>
          <div className="tab-1">
            <Code
              code={`CREATE TABLE users (username TEXT, email TEXT);
CREATE TABLE simple_users () INHERITS (users);
CREATE TABLE users_with_password (PASSWORD TEXT) INHERITS (users);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Our three tables look like this:</p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-4 col-md-4">
          <div className="tab-1">
            <p>users</p>
          </div>
          <div className="tab-1">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>Column</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>username</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>email</td>
                  <td>text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-12 col-sm-4 col-md-4">
          <div className="tab-1">
            <p>simple_users</p>
          </div>
          <div className="tab-1">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>Column</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>username</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>email</td>
                  <td>text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12 col-sm-4 col-md-4">
          <div className="tab-1">
            <p>users_with_password</p>
          </div>
          <div className="tab-1">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>Column</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>username</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>email</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>password</td>
                  <td>text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
