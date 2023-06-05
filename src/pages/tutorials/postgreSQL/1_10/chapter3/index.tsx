import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const TutorialPostgreSQLChapter3 = () => {
  return (
    <>
      <PageTitle title="3. Table Creation"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.1 Show table definition</b>
          <div className="tab-1">
            <p>
              Open the psql command line tool connected to the database where
              your table is. Then type the following command:
            </p>
          </div>
          <div className="tab-2">
            <Code code={`\\d tablename`} language="sql" />
          </div>
          <div className="tab-1">
            <p>To get extended information type</p>
          </div>
          <div className="tab-2">
            <Code code={`\\d+ tablename`} language="sql" />
          </div>
          <div className="tab-1">
            <p>
              If you have forgotten the name of the table, just type \d into
              psql to obtain a list of tables and views in the current database.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.2 Create table from select</b>
          <div className="tab-1">
            <p>Let's say you have a table called person:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE person (
    person_id BIGINT NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    age INT NOT NULL,
    PRIMARY KEY (person_id)
); `}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>You can create a new table of people over 30 like this:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE people_over_30 AS SELECT * FROM person WHERE age > 30;
SQL
`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.3 Create unlogged table</b>
          <div className="tab-1">
            <p>
              You can create unlogged tables so that you can make the tables
              considerably faster. Unlogged table skips writing WRITE-ahead log
              which means it's not crash-safe and unable to replicate.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE UNLOGGED TABLE person (
    person_id BIGINT NOT NULL PRIMARY KEY, 
    last_name VARCHAR(255) NOT NULL, 
    first_name VARCHAR(255), 
    address VARCHAR(255), 
    city VARCHAR(255)
);`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.4 Table creation with Primary Key</b>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE person (
    person_id BIGINT NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    PRIMARY KEY (person_id)
);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Alternatively, you can place the PRIMARY KEY constraint directly
              in the column definition:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE person (
    person_id BIGINT NOT NULL PRIMARY KEY,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255)
);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              It is recommended that you use lower case names for the table and
              as well as all the columns. If you use upper case names such as
              Person you would have to wrap that name in double quotes
              ("Person") in each and every query because PostgreSQL enforces
              case folding.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.5 Create a table that references other table</b>
          <div className="tab-1">
            <p>
              In this example, User Table will have a column that references the
              Agency table.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE agencies ( -- first create the agency table
    id SERIAL PRIMARY KEY,
    NAME TEXT NOT NULL
)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    agency_id NOT NULL INTEGER REFERENCES agencies(id) DEFERRABLE INITIALLY DEFERRED -- this is going
    to references your agency table.
)`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
