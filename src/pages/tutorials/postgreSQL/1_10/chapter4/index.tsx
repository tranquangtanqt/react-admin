import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/pageTitle";

export const TutorialPostgreSQLChapter4 = () => {
  return (
    <>
      <PageTitle title="4. SELECT"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>In this topic we will base on this table of users :</p>

          <div className="tab-1">
            <Code
              code={`CREATE TABLE sch_test.user_table
(
    id serial NOT NULL,
    username CHARACTER VARYING,
    pass CHARACTER VARYING,
    first_name CHARACTER varying(30),
    last_name CHARACTER varying(30),
    CONSTRAINT user_table_pkey PRIMARY KEY (id)
)

+----+------------+-----------+----------+------+
| id | first_name | last_name | username | pass |
+----+------------+-----------+----------+------+
| 1 | hello | world | hello | word |
+----+------------+-----------+----------+------+
| 2 | root | me | root | toor |
+----+------------+-----------+----------+------+`}
              language="sql"
            />
          </div>
          <b>Syntax</b>
          <div className="tab-1">
            <p>Select every thing:</p>
          </div>
          <div className="tab-1">
            <Code code={`SELECT * FROM schema_name.table_name WHERE <condition>;`} language="sql" />
          </div>
          <div className="tab-1">
            <p>Select some fields :</p>
          </div>
          <div className="tab-1">
            <Code code={`SELECT field1, field2 FROM schema_name.table_name WHERE <condition>;`} language="sql" />
          </div>
          <b>Examples</b>
          <div className="tab-1">
            <Code
              code={`-- SELECT every thing where id = 1
SELECT * FROM schema_name.table_name WHERE id = 1;

-- SELECT id where username = ? and pass = ?
SELECT id FROM schema_name.table_name WHERE username = 'root' AND pass = 'toor';

-- SELECT first_name where id not equal 1
SELECT first_name FROM schema_name.table_name WHERE id != 1;`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
