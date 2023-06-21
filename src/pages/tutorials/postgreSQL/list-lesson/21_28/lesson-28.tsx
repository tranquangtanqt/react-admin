import Code from 'components/modules/code';

// 28. Postgres Tip and Tricks
export const TutorialPostgreSQLLesson28 = () => {
  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. DATEADD alternative in Postgres</b>
          <div className="tab-1">
            <Code
              code={`SELECT CURRENT_DATE + '1 day'::INTERVAL
SELECT '1999-12-11'::TIMESTAMP + '19 days'::INTERVAL
SELECT '1 month'::INTERVAL + '1 month 3 days'::INTERVAL`}
              language="sql"
            />
          </div>
          <b>2. Comma separated values of a column</b>
          <div className="tab-1">
            <Code
              code={`SELECT
    STRING_AGG(<TABLE_NAME>.<COLUMN_NAME>, ',')
FROM
    <SCHEMA_NAME>.<TABLE_NAME> T`}
              language="sql"
            />
          </div>
          <b>3. Delete duplicate records from postgres table</b>
          <div className="tab-1">
            <Code
              code={`DELETE
    FROM <SCHEMA_NAME>.<Table_NAME>
WHERE
    ctid NOT IN (
        SELECT
            MAX(ctid)
        FROM
            <SCHEMA_NAME>.<TABLE_NAME>
        GROUP BY
            <SCHEMA_NAME>.<TABLE_NAME>.*
    )
;`}
              language="sql"
            />
          </div>
          <b>
            4. Update query with join between two tables alternative since
            Postresql does not support join in update query
          </b>
          <div className="tab-1">
            <Code
              code={`UPDATE <SCHEMA_NAME>.<TABLE_NAME_1> AS A
    SET <COLUMN_1> = TRUE
FROM <SCHEMA_NAME>.<TABLE_NAME_2> AS B
WHERE
    A.<COLUMN_2> = B.<COLUMN_2> AND
    A.<COLUMN_3> = B.<COLUMN_3>`}
              language="sql"
            />
          </div>
          <b>
            5 Difference between two date timestamps month wise and year wise
          </b>
          <div className="tab-1">
            <p>Monthwise difference between two dates(timestamp)</p>
          </div>
          <div className="tab-1">
            <Code
              code={`SELECT
 (
    (DATE_PART('year', AgeonDate) - DATE_PART('year', tmpdate)) * 12
    +
    (DATE_PART('month', AgeonDate) - DATE_PART('month', tmpdate))
 )
FROM dbo."Table1"`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Yearwise difference between two dates(timestamp)(timestamp)</p>
          </div>
          <div className="tab-1">
            <Code
              code={`SELECT (DATE_PART('year', AgeonDate) - DATE_PART('year', tmpdate)) FROM dbo."Table1"`}
              language="sql"
            />
          </div>
          <b>
            6. Query to Copy/Move/Transafer table data from one database to
            other database table with same schema
          </b>
          <div className="tab-1">
            <p>First Execute</p>
          </div>
          <div className="tab-1">
            <Code code={`CREATE EXTENSION DBLINK;`} language="sql" />
          </div>
          <div className="tab-1">
            <p>Then</p>
          </div>
          <div className="tab-1">
            <Code
              code={`INSERT INTO
    <SCHEMA_NAME>.<TABLE_NAME_1>
SELECT *
FROM
    DBLINK(
    'HOST=<IP-ADDRESS> USER=<USERNAME> PASSWORD=<PASSWORD> DBNAME=<DATABASE>',
    'SELECT * FROM <SCHEMA_NAME>.<TABLE_NAME_2>')
    AS <TABLE_NAME>
    (
        <COLUMN_1> <DATATYPE_1>,
        <COLUMN_1> <DATATYPE_2>,
        <COLUMN_1> <DATATYPE_3>
    );`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
