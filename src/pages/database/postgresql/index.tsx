import { Link } from "react-router-dom";
import { PageTitle } from "../../../components/modules/pageTitle";

export const DatabasePostgresql = () => {
  return (
    <>
      <PageTitle title="Database Postgresql"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-header font-size-16">
              <b>File</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <Link to={"/database/postgresql/configPghba"}>{"Configure PostgreSQL to accept all incoming connections"}</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
