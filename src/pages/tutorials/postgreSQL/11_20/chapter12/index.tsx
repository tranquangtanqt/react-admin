import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const TutorialPostgreSQLChapter12 = () => {
  return (
    <>
      <PageTitle title="12. Window Functions"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Generic example</b>
          <div className="tab-1">
            <p>Preparing data:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE wf_example(i INT, t TEXT,ts timestamptz,b BOOLEAN);
INSERT INTO wf_example SELECT 1,'a','1970.01.01',TRUE;
INSERT INTO wf_example SELECT 1,'a','1970.01.01',FALSE;
INSERT INTO wf_example SELECT 1,'b','1970.01.01',FALSE;
INSERT INTO wf_example SELECT 2,'b','1970.01.01',FALSE;
INSERT INTO wf_example SELECT 3,'b','1970.01.01',FALSE;
INSERT INTO wf_example SELECT 4,'b','1970.02.01',FALSE;
INSERT INTO wf_example SELECT 5,'b','1970.03.01',FALSE;
INSERT INTO wf_example SELECT 2,'c','1970.03.01',TRUE;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Running:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT *
    , DENSE_RANK() OVER (ORDER BY i) dist_by_i
    , LAG(t) OVER () prev_t
    , NTH_VALUE(i, 6) OVER () nth
    , COUNT(TRUE) OVER (PARTITION BY i) num_by_i
    , COUNT(TRUE) OVER () num_all
    , NTILE(3) over() ntile
FROM wf_example;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Result:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`i | t | ts                     | b | dist_by_i | prev_t | nth | num_by_i | num_all | ntile
---+---+------------------------+---+-----------+--------+-----+----------+---------+-------
1 | a | 1970-01-01 00:00:00+01 | f | 1         |        | 3   | 3        | 8       | 1
1 | a | 1970-01-01 00:00:00+01 | t | 1         | a      | 3   | 3        | 8       | 1
1 | b | 1970-01-01 00:00:00+01 | f | 1         | a      | 3   | 3        | 8       | 1
2 | c | 1970-03-01 00:00:00+01 | t | 2         | b      | 3   | 2        | 8       | 2
2 | b | 1970-01-01 00:00:00+01 | f | 2         | c      | 3   | 2        | 8       | 2
3 | b | 1970-01-01 00:00:00+01 | f | 3         | b      | 3   | 1        | 8       | 2
4 | b | 1970-02-01 00:00:00+01 | f | 4         | b      | 3   | 1        | 8       | 3
5 | b | 1970-03-01 00:00:00+01 | f | 5         | b      | 3   | 1        | 8       | 3
(8 rows)
    `}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Explanation:</p>
          </div>
          <div className="tab-2">
            <ul>
              <li>
                dist_by_i: DENSE_RANK() OVER (ORDER BY i) is like a row_number
                per distinct values. Can be used for the number of distinct
                values of i (COUNT(DISTINCT i) wold not work). Just use the
                maximum value.
              </li>
              <li>
                prev_t: LAG(t) OVER () is a previous value of t over the whole
                window. mind that it is null for the first row
              </li>
              <li>
                nth: NTH_VALUE(i, 6) OVER () is the value of sixth rows column i
                over the whole window
              </li>
              <li>
                num_by_i: COUNT(TRUE) OVER (PARTITION BY i) is an amount of rows
                for each value of i
              </li>
              <li>
                num_all: COUNT(TRUE) OVER () is an amount of rows over a whole
                window
              </li>
              <li>
                ntile: NTILE(3) over() splits the whole window to 3 (as much as
                possible) equal in quantity parts
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Column values vs dense_rank vs rank vs row_number</b>
          <div className="tab-1">
            <p>
              <a
                href="https://www.postgresql.org/docs/current/functions-window.html"
                target={'_blank'}
                rel="noreferrer"
              >
                here{' '}
              </a>{' '}
              you can find the functions
            </p>
            <p>With the table wf_example created in previous example, run:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT i
    , DENSE_RANK() OVER (ORDER BY i)
    , ROW_NUMBER() OVER ()
    , RANK() OVER (ORDER BY i)
FROM wf_example`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <ul>
              <li>
                dense_rank orders VALUES of i by appearance in window. i=1
                appears, so first row has dense_rank, next and third i value
                does not change, so it is dense_rank shows 1 - FIRST value not
                changed. fourth row i=2, it is second value of i met, so
                dense_rank shows 2, andso for the next row. Then it meets value
                i=3 at 6th row, so it show 3. Same for the rest two values of i.
                So the last value of dense_rank is the number of distinct values
                of i
              </li>
              <li>row_number orders ROWS as they are listed</li>
              <li>
                rank Not to confuse with dense_rank this function orders ROW
                NUMBER of i values. So it starts same with three ones, but has
                next value 4, which means i=2 (new value) was met at row 4. Same
                i=3 was met at row 6. Etc..
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
