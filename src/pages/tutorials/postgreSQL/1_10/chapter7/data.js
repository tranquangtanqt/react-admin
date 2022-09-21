export const PostgreSQLChapter7Data = {
    one: `cat > samplet_data.csv
1,Yogesh
2,Raunak
3,Varun
4,Kamal
5,Hari
6,Amit`,

    two: `CREATE TABLE copy_test(id INT, NAME varchar(8));`,

    three: `COPY copy_test FROM '/path/to/file/sample_data.csv' DELIMITER ',';`,

    four: `COPY copy_test FROM STDIN DELIMITER ',';
Enter DATA TO be copied followed BY a newline.
END WITH a backslash AND a period ON a line BY itself.
>> 7,Amol
>> 8,Amar
>> \\.
TIME: 85254.306 ms`,

    five: `SELECT * FROM copy_test ;

id | name
----+--------
1 | Yogesh
3 | Varun
5 | Hari
7 | Amol
2 | Raunak
4 | Kamal
6 | Amit
8 | Amar`,

    six: `COPY copy_test TO 'path/to/file/sample_data.csv' DELIMITER ',';`,

    seven: `INSERT INTO person (NAME, age) VALUES
 ('john doe', 25),
 ('jane doe', 20);`,

    eight: `CREATE TABLE my_table (
    id serial NOT NULL, -- serial data type is auto incrementing four-byte integer
    NAME CHARACTER VARYING,
    contact_number INTEGER,
    CONSTRAINT my_table_pkey PRIMARY KEY (id)
);`,

    nine: `INSERT INTO my_table(NAME, contact_number) VALUES ( 'USER', 8542621) RETURNING id;`,

    ten: `CREATE TABLE person (
    person_id BIGINT,
    NAME VARCHAR(255).
    age INT,
    city VARCHAR(255)
);
`,

    eleven: `INSERT INTO person VALUES (1, 'john doe', 25, 'new york');`,
    twelve: `INSERT INTO person (NAME, age) VALUES ('john doe', 25);`,
    thirteen: `INSERT INTO person SELECT * FROM tmp_person WHERE age < 30`,
    fourteen: `b=# INSERT INTO my_table (name,contact_number) values ('one',333) RETURNING id;
 id
----
 2`,
    fifteen: `b=# INSERT INTO my_table VALUES (2,'one',333);
ERROR: duplicate KEY VALUE violates UNIQUE CONSTRAINT "my_table_pkey"
DETAIL: KEY (id)=(2) already EXISTS.`,

    sixteen: `b=# INSERT INTO my_table values (2,'one',333) ON CONFLICT (id) DO 
UPDATE SET name = my_table.name||' changed to: "two" at '||now() returning *;

id | name | contact_number
----+---------------------------------------------------------------------------------------------
--------------+----------------
2 | one changed to: "two" at 2016-11-23 08:32:17.105179+00 | 333`,

    seventeen: `postgres=# select * from my_table;

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
5|5|null_string`
}