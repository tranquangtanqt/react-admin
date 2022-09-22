import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/pageTitle";

export const TutorialPostgreSQLChapter23 = () => {
  return (
    <>
      <PageTitle title="23. Backup script for a production DB"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <table className="table table-striped table-hover table-bordered table-sm">
            <thead>
              <tr className="table-dark">
                <th>Parameter</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>save_db</td>
                <td>The main backup directory</td>
              </tr>
              <tr>
                <td>dbProd</td>
                <td>The secondary backup directory</td>
              </tr>
              <tr>
                <td>DATE</td>
                <td>The date of the backup in the specified format</td>
              </tr>
              <tr>
                <td>dbprod</td>
                <td>The name of the database to be saved</td>
              </tr>
              <tr>
                <td>/opt/postgres/9.0/bin/pg_dump</td>
                <td>The path to the pg_dump binary</td>
              </tr>
              <tr>
                <td>-h</td>
                <td>Specifies the host name of the machine on which the server is running, Example : localhost</td>
              </tr>
              <tr>
                <td>-p</td>
                <td>
                  Specifies the TCP port or local Unix domain socket file extension on which the server is listening for connections, Example 5432
                </td>
              </tr>
              <tr>
                <td>-U</td>
                <td>User name to connect as</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. saveProdDb.sh</b>
          <div className="tab-1">
            <p>
              In general, we tend to back up the DB with the pgAdmin client. The following is a sh script used to save the database (under linux) in
              two formats:
            </p>
          </div>
          <div className="tab-2">
            <ul>
              <li>SQL file: for a possible resume of data on any version of PostgreSQL.</li>
              <li>Dump file: for a higher version than the current version.</li>
            </ul>
          </div>
          <div className="tab-2">
            <Code
              code={`#!/bin/sh
cd /save_db
#rm -R /save_db/*
DATE=$(date +%d-%m-%Y-%Hh%M)
echo -e "Sauvegarde de la base du \${DATE}"
mkdir prodDir\${DATE}
cd prodDir\${DATE}
#dump file
/opt/postgres/9.0/bin/pg_dump -i -h localhost -p 5432 -U postgres -F c -b -w -v -f
"dbprod\${DATE}.backup" dbprod
#SQL file
/opt/postgres/9.0/bin/pg_dump -i -h localhost -p 5432 -U postgres --format plain --verbose -f
"dbprod\${DATE}.sql" dbprod`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
