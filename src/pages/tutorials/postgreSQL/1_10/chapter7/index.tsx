import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const TutorialPostgreSQLChapter7 = () => {
  return (
    <>
      <PageTitle title="7. INSERT"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.1 Insert data using COPY</b>
          <div className="tab-1">
            <p>
              COPY is PostgreSQL's bulk-insert mechanism. It's a convenient way
              to transfer data between files and tables, but it's also far
              faster than INSERT when adding more than a few thousand rows at a
              time.
            </p>
            <p>Let's begin by creating sample data file</p>
          </div>
          <div className="tab-2">
            <Code
              code={`cat > samplet_data.csv
1,Yogesh
2,Raunak
3,Varun
4,Kamal
5,Hari
6,Amit`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              And we need a two column table into which this data can be
              imported into.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE copy_test(id INT, NAME varchar(8));`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Now the actual copy operation, this will create six records in the
              table.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`COPY copy_test FROM '/path/to/file/sample_data.csv' DELIMITER ',';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Instead of using a file on disk, can insert data from STDIN</p>
          </div>
          <div className="tab-2">
            <Code
              code={`COPY copy_test FROM STDIN DELIMITER ',';
Enter DATA TO be copied followed BY a newline.
END WITH a backslash AND a period ON a line BY itself.
>> 7,Amol
>> 8,Amar
>> \\.
TIME: 85254.306 ms`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT * FROM copy_test ;

id | name
----+--------
1 | Yogesh
3 | Varun
5 | Hari
7 | Amol
2 | Raunak
4 | Kamal
6 | Amit
8 | Amar`}
              language="sql"
            />
          </div>

          <div className="tab-1">
            <p>Also you can copy data from a table to file as below:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`COPY copy_test TO 'path/to/file/sample_data.csv' DELIMITER ',';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              For more details on COPY you can check{' '}
              <a
                href="https://www.postgresql.org/docs/9.2/sql-copy.html"
                target={'_blank'}
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.2 Inserting multiple rows</b>
          <div className="tab-1">
            <p>
              You can insert multiple rows in the database at the same time:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`INSERT INTO person (NAME, age) VALUES
 ('john doe', 25),
 ('jane doe', 20);`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.3 INSERT data and RETURING values</b>
          <div className="tab-1">
            <p>
              If you are inserting data into a table with an auto increment
              column and if you want to get the value of the auto increment
              column
            </p>
          </div>
          <div className="tab-1">
            <p>Say you have a table called my_table:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE my_table (
    id serial NOT NULL, -- serial data type is auto incrementing four-byte integer
    NAME CHARACTER VARYING,
    contact_number INTEGER,
    CONSTRAINT my_table_pkey PRIMARY KEY (id)
);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              If you want to insert data into my_table and get the id of that
              row:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`INSERT INTO my_table(NAME, contact_number) VALUES ( 'USER', 8542621) RETURNING id;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Above query will return the id of the row where the new record was
              inserted.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.4 Basic INSERT</b>
          <div className="tab-1">
            <p>Let's say we have a simple table called person:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE person (
    person_id BIGINT,
    NAME VARCHAR(255).
    age INT,
    city VARCHAR(255)
);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              The most basic insert involves inserting all values in the table:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`INSERT INTO person VALUES (1, 'john doe', 25, 'new york');`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              If you want to insert only specific columns, you need to
              explicitly indicate which columns:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`INSERT INTO person (NAME, age) VALUES ('john doe', 25);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Note that if any constraints exist on the table , such as NOT
              NULL, you will be required to include those columns in either
              case.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.5 Insert from select</b>
          <div className="tab-1">
            <p>
              You can insert data in a table as the result of a select
              statement:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`INSERT INTO person (NAME, age) VALUES
 ('john doe', 25),
 ('jane doe', 20);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Note that the projection of the select must match the columns
              required for the insert. In this case, the tmp_person table has
              the same columns as person.:
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.6 UPSERT - INSERT ... ON CONFLICT DO UPDATE..</b>
          <div className="tab-1">
            <p>
              Since version 9.5 postgres offers UPSERT functionality with INSERT
              statement.
            </p>
            <p>
              Say you have a table called my_table, created in several previous
              examples. We insert a row, returning PK value of inserted row:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`b=# INSERT INTO my_table (name,contact_number) values ('one',333) RETURNING id;
 id
----
 2`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Now if we try to insert row with existing unique key it will raise
              an exception:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`b=# INSERT INTO my_table VALUES (2,'one',333);
ERROR: duplicate KEY VALUE violates UNIQUE CONSTRAINT "my_table_pkey"
DETAIL: KEY (id)=(2) already EXISTS.`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Upsert functionality offers ability to insert it anyway, solving
              the conflict:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`b=# INSERT INTO my_table values (2,'one',333) ON CONFLICT (id) DO 
UPDATE SET name = my_table.name||' changed to: "two" at '||now() returning *;

id | name | contact_number
----+---------------------------------------------------------------------------------------------
--------------+----------------
2 | one changed to: "two" at 2016-11-23 08:32:17.105179+00 | 333
SQL
`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.7 SELECT data into file</b>
          <div className="tab-1">
            <p>You can COPY table and paste it into a file.</p>
          </div>
          <div className="tab-2">
            <Code
              code={`postgres=# select * from my_table;

c1 | c2 | c3
----+----+----
1 | 1 | 1
2 | 2 | 2
3 | 3 | 3
4 | 4 | 4
5 | 5 |
(5 rows)

postgres=# copy my_table to '/home/postgres/my_table.txt' using delimiters '|' with null as
'null_string' csv header;
COPY 5

postgres=# \\! cat my_table.txt

c1|c2|c3
1|1|1
2|2|2
3|3|3
4|4|4
5|5|null_string`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
