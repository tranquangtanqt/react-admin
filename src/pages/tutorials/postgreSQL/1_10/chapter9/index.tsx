import Code from '../../../../../components/modules/code';
import { PageTitle } from '../../../../../components/modules/page-title';

export const TutorialPostgreSQLChapter9 = () => {
  return (
    <>
      <PageTitle title="9. JSON Support"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>
            JSON - Java Script Object Notation , Postgresql support JSON Data
            type since 9.2 version. There are some predefined function and
            operators to access the JSON data. The -{'>'} operator returns the
            key of JSON column. The -{'>'} operator returns the value of JSON
            Column
          </p>

          <b>1. Using JSONb operators</b>
          <div className="tab-1">
            <p>Creating a DB and a Table</p>
          </div>
          <div className="tab-2">
            <Code
              code={`DROP DATABASE IF EXISTS books_db;
    
CREATE DATABASE books_db WITH ENCODING='UTF8' TEMPLATE template0;

DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    client TEXT NOT NULL,
    DATA JSONb NOT NULL
);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Populating the DB</p>
          </div>
          <div className="tab-2">
            <Code
              code={`INSERT INTO books(client, DATA) VALUES (
    'Joe',
    '{ "title": "Siddhartha", "author": { "first_name": "Herman", "last_name": "Hesse" } }'
),(
    'Jenny',
    '{ "title": "Dharma Bums", "author": { "first_name": "Jack", "last_name": "Kerouac" } }'
),(
    'Jenny',
    '{ "title": "100 años de soledad", "author": { "first_name": "Gabo", "last_name": "Marquéz" }
}'
);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Lets see everything inside the table books:</p>
          </div>
          <div className="tab-2">
            <Code code={`SELECT * FROM books;`} language="sql" />
          </div>
          <div className="tab-1">
            <p>Output</p>
          </div>
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>id</th>
                  <th>client</th>
                  <th>data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Joe</td>
                  <td>
                    {'{'}"title": "Siddhartha", "author": {'{'}"last_name":
                    "Hesse", "first_name": "Herman"{'}'}
                    {'}'}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jenny</td>
                  <td>
                    {'{'}"title": "Dharma Bums", "author": {'{'}"last_name":
                    "Kerouac", "first_name": "Jack"{'}'}
                    {'}'}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jenny</td>
                  <td>
                    {'{'}"title": "100 años de soledad", "author": {'{'}
                    "last_name": "Marquéz", "first_name": "Gabo"
                    {'}'}
                    {'}'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tab-1">
            <p>-{'>'} operator returns values out of JSON columns</p>
          </div>
          <div className="tab-1">
            <p>Selecting 1 column:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT client,
    DATA->'title' AS title
FROM books;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Output:</p>
          </div>
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>client</th>
                  <th>title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Joe</td>
                  <td>"Siddhartha"</td>
                </tr>
                <tr>
                  <td>Jenny</td>
                  <td>"Dharma Bums"</td>
                </tr>
                <tr>
                  <td>Jenny</td>
                  <td>"100 años de soledad"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tab-1">
            <p>Selecting 2 columns:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT client,
    DATA->'title' AS title, DATA->'author' AS author
FROM books;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Output:</p>
          </div>
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>client</th>
                  <th>title</th>
                  <th>author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Joe</td>
                  <td>"Siddhartha"</td>
                  <td>
                    {'{'}"last_name": "Hesse", "first_name": "Herman"{'}'}
                  </td>
                </tr>
                <tr>
                  <td>Jenny</td>
                  <td>"Dharma Bums"</td>
                  <td>
                    {'{'}"last_name": "Kerouac", "first_name": "Jack"{'}'}
                  </td>
                </tr>
                <tr>
                  <td>Jenny</td>
                  <td>"100 años de soledad"</td>
                  <td>
                    {'{'}"last_name": "Marquéz", "first_name": "Gabo"{'}'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tab-1">
            <p>
              -{'>'} vs -{'>'}
              {'>'}
            </p>
          </div>
          <div className="tab-1">
            <p>
              The -{'>'} operator returns the original JSON type (which might be
              an object), whereas -{'>'}
              {'>'} returns text.
            </p>
          </div>
          <div className="tab-1">
            <b>Return NESTED objects</b>
          </div>
          <div className="tab-1">
            <p>
              You can use the -{'>'} to return a nested object and thus chain
              the operators:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT client,
    DATA->'author'->'last_name' AS author
FROM books;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Output:</p>
          </div>
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>client</th>
                  <th>author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Joe</td>
                  <td>"Hesse"</td>
                </tr>
                <tr>
                  <td>Jenny</td>
                  <td>"Kerouac"</td>
                </tr>
                <tr>
                  <td>Jenny</td>
                  <td>"Marquéz"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tab-1">
            <b>Filtering</b>
          </div>
          <div className="tab-1">
            <p>Select rows based on a value inside your JSON:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT
    client,
    DATA->'title' AS title
FROM books
    WHERE DATA->'title' = '"Dharma Bums"';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Notice WHERE uses -{'>'} so we must compare to JSON '"Dharma
              Bums"'
            </p>
          </div>
          <div className="tab-1">
            <p>
              Or we could use -{'>'}
              {'>'} and compare to 'Dharma Bums'
            </p>
            <p>Output:</p>
          </div>
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>client</th>
                  <th>title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jenny</td>
                  <td>"Dharma Bums"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <b>Nested filtering</b>
          </div>
          <div className="tab-1">
            <p>Find rows based on the value of a nested JSON object:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT
    client,
    DATA->'title' AS title
FROM books
    WHERE DATA->'author'->>'last_name' = 'Kerouac';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Output:</p>
            <p></p>
            <p></p>
          </div>
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>client</th>
                  <th>title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jenny</td>
                  <td>"Dharma Bums"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <b>A real world example</b>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE events (
    NAME varchar(200),
    visitor_id varchar(200),
    properties json,
    browser json
);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              We’re going to store events in this table, like pageviews. Each
              event has properties, which could be anything (e.g. current page)
              and also sends information about the browser (like OS, screen
              resolution, etc). Both of these are completely free form and could
              change over time (as we think of extra stuff to track).
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`INSERT INTO events (NAME, visitor_id, properties, browser) VALUES
(
    'pageview', '1',
    { "page": "/" }',
    '{ "name": "Chrome", "os": "Mac", "resolution": { "x": 1440, "y": 900 } }'
),(
    'pageview', '2',
    '{ "page": "/" }',
    '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1920, "y": 1200 } }'
),(
    'pageview', '1',
    '{ "page": "/account" }',
    '{ "name": "Chrome", "os": "Mac", "resolution": { "x": 1440, "y": 900 } }'
),(
    'purchase', '5',
    '{ "amount": 10 }',
    '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1024, "y": 768 } }'
),(
    'purchase', '15',
    '{ "amount": 200 }',
    '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1280, "y": 800 } }'
),(
    'purchase', '15',
    '{ "amount": 500 }',
    '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1280, "y": 800 } }'
);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Now lets select everything</p>
          </div>
          <div className="tab-2">
            <Code code={`SELECT * FROM events`} language="sql" />
          </div>
          <div className="tab-1">
            <p>Output:</p>
          </div>
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>name</th>
                  <th>visitor_id</th>
                  <th>properties</th>
                  <th>browser</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>pageview</td>
                  <td>1</td>
                  <td>
                    {'{'} "page": "/" {'}'}
                  </td>
                  <td>
                    {'{'} "name": "Chrome", "os": "Mac", "resolution": {'{'}{' '}
                    "x": 1440, "y": 900 {'}'} {'}'}
                  </td>
                </tr>
                <tr>
                  <td>pageview</td>
                  <td>2</td>
                  <td>
                    {'{'} "page": "/" {'}'}
                  </td>
                  <td>
                    {'{'} "name": "Firefox", "os": "Windows", "resolution":{' '}
                    {'{'} "x": 1920, "y": 1200 {'}'} {'}'}
                  </td>
                </tr>
                <tr>
                  <td>pageview</td>
                  <td>1</td>
                  <td>
                    {'{'} "page": "/account" {'}'}
                  </td>
                  <td>
                    {'{'} "name": "Chrome", "os": "Mac", "resolution": {'{'}{' '}
                    "x": 1440, "y": 900 {'}'} {'}'}
                  </td>
                </tr>
                <tr>
                  <td>purchase</td>
                  <td>5</td>
                  <td>
                    {'{'} "amount": 10 {'}'}
                  </td>
                  <td>
                    {'{'} "name": "Firefox", "os": "Windows", "resolution":{' '}
                    {'{'} "x": 1024, "y": 768 {'}'} {'}'}
                  </td>
                </tr>
                <tr>
                  <td>purchase</td>
                  <td>15</td>
                  <td>
                    {'{'} "amount": 200 {'}'}
                  </td>
                  <td>
                    {'{'} "name": "Firefox", "os": "Windows", "resolution":{' '}
                    {'{'} "x": 1280, "y": 800 {'}'} {'}'}
                  </td>
                </tr>
                <tr>
                  <td>purchase</td>
                  <td>15</td>
                  <td>
                    {'{'} "amount": 500 {'}'}
                  </td>
                  <td>
                    {'{'} "name": "Firefox", "os": "Windows", "resolution":{' '}
                    {'{'} "x": 1280, "y": 800 {'}'} {'}'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <b>JSON operators + PostgreSQL aggregate functions</b>
          </div>
          <div className="tab-1">
            <p>
              Using the JSON operators, combined with traditional PostgreSQL
              aggregate functions, we can pull out whatever we want. You have
              the full might of an RDBMS at your disposal.
            </p>
            <p>Lets see browser usage:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT browser->>'name' AS browser,
    COUNT(browser)
FROM events
GROUP BY browser->>'name';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Output:</p>
            <p></p>
            <p></p>
          </div>
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>browser</th>
                  <th>count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chrome</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Firefox</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tab-1">
            <p>Total revenue per visitor:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT browser->>'name' AS browser,
    COUNT(browser)
FROM events
GROUP BY browser->>'name';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Output:</p>
          </div>
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>visitor_id</th>
                  <th>total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>700</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tab-1">
            <p>Average screen resolution</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT AVG(CAST(browser->'resolution'->>'x' AS INTEGER)) AS width,
    AVG(CAST(browser->'resolution'->>'y' AS INTEGER)) AS height
FROM events;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Output:</p>
          </div>
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>width</th>
                  <th>height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1397.3333333333333333</td>
                  <td>894.6666666666666667</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tab-1">
            <p>
              More examples and documentation:
              <br />
              <a
                href="https://schinckel.net/2014/05/25/querying-json-in-postgres/"
                target={'_blank'}
                rel="noreferrer"
              >
                https://schinckel.net/2014/05/25/querying-json-in-postgres/
              </a>{' '}
              <br />
              <a
                href="https://clarkdave.net/2013/06/what-can-you-do-with-postgresql-and-json/"
                target={'_blank'}
                rel="noreferrer"
              >
                https://clarkdave.net/2013/06/what-can-you-do-with-postgresql-and-json/
              </a>{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Querying complex JSON documents</b>
          <div className="tab-1">
            <p>Taking a complex JSON document in a table:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE mytable (DATA JSONB NOT NULL);
CREATE INDEX mytable_idx ON mytable USING gin (DATA jsonb_path_ops);
INSERT INTO mytable 
VALUES 
  (
    $$ { "name" : "Alice", "emails" : [ "alice1@test.com", 
    "alice2@test.com" ], "events" : [ { "type" : "birthday", 
    "date" : "1970-01-01" }, { "type" : "anniversary", 
    "date" : "2001-05-05" } ], "locations" : { "home" : { "city" : "London", 
    "country" : "United Kingdom" }, "work" : { "city" : "Edinburgh", 
    "country" : "United Kingdom" } } } $$
  );`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Query for a top-level element:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE INDEX mytable_idx ON mytable USING gin (DATA jsonb_path_ops);`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>Query for a simple item in an array:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT DATA->>'name' FROM mytable WHERE DATA @> '{"emails":["alice1@test.com"]}';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Query for an object in an array</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT DATA->>'name' FROM mytable WHERE DATA @> '{"events":[{"type":"anniversary"}]}';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Query for a nested object:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT DATA->>'name' FROM mytable WHERE DATA @> '{"locations":{"home":{"city":"London"}}}';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <b>
              Performance of @{'>'} compared to -{'>'} and -{'>'}
              {'>'}
            </b>
          </div>
          <div className="tab-1">
            <p>
              It is important to understand the performance difference between
              using @{'>'}, -{'>'} and -{'>'}
              {'>'} in the WHERE part of the query. Although these two queries
              appear to be broadly equivalent:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT DATA FROM mytable WHERE DATA @> '{"name":"Alice"}';
SELECT DATA FROM mytable WHERE DATA->'name' = '"Alice"';
SELECT DATA FROM mytable WHERE DATA->>'name' = 'Alice';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              the first statement will use the index created above whereas the
              latter two will not, requiring a complete table scan.
            </p>
            <p>
              It is still allowable to use the -{'>'} operator when obtaining
              resultant data, so the following queries will also use the index:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT DATA->'locations'->'work' FROM mytable WHERE DATA @> '{"name":"Alice"}';
SELECT DATA->'locations'->'work'->>'city' FROM mytable WHERE DATA @> '{"name":"Alice"}';`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Creating a pure JSON table</b>
          <div className="tab-1">
            <p>
              To create a pure JSON table you need to provide a single field
              with the type JSONB:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE mytable (DATA JSONB NOT NULL);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>You should also create a basic index:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE INDEX mytable_idx ON mytable USING gin (DATA jsonb_path_ops);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              At this point you can insert data in to the table and query it
              efficiently.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
