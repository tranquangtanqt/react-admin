export const PostgreSQLChapter12Data = {
    one: `CREATE TABLE wf_example(i INT, t TEXT,ts timestamptz,b BOOLEAN);
INSERT INTO wf_example SELECT 1,'a','1970.01.01',TRUE;
INSERT INTO wf_example SELECT 1,'a','1970.01.01',FALSE;
INSERT INTO wf_example SELECT 1,'b','1970.01.01',FALSE;
INSERT INTO wf_example SELECT 2,'b','1970.01.01',FALSE;
INSERT INTO wf_example SELECT 3,'b','1970.01.01',FALSE;
INSERT INTO wf_example SELECT 4,'b','1970.02.01',FALSE;
INSERT INTO wf_example SELECT 5,'b','1970.03.01',FALSE;
INSERT INTO wf_example SELECT 2,'c','1970.03.01',TRUE;`,

    two: `SELECT *
    , DENSE_RANK() OVER (ORDER BY i) dist_by_i
    , LAG(t) OVER () prev_t
    , NTH_VALUE(i, 6) OVER () nth
    , COUNT(TRUE) OVER (PARTITION BY i) num_by_i
    , COUNT(TRUE) OVER () num_all
    , NTILE(3) over() ntile
FROM wf_example
;`,

    three: `i | t | ts                     | b | dist_by_i | prev_t | nth | num_by_i | num_all | ntile
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
    `,

    four: `SELECT i
    , DENSE_RANK() OVER (ORDER BY i)
    , ROW_NUMBER() OVER ()
    , RANK() OVER (ORDER BY i)
FROM wf_example
   `,
    five: ` i | dense_rank | row_number | rank
---+------------+------------+------
1  | 1          | 1          | 1
1  | 1          | 2          | 1
1  | 1          | 3          | 1
2  | 2          | 4          | 4
2  | 2          | 5          | 4
3  | 3          | 6          | 6
4  | 4          | 7          | 7
5  | 5          | 8          | 8
`
}