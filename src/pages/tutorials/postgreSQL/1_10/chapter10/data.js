export const PostgreSQLChapter10Data = {
    one: `SELECT MIN(age), MAX(age), AVG(age)
FROM individuals;
`,

    two: ` ^
|
s | Legend:
i | * - data point
z | -- - trend
e |
( |
b | *
y | --
t | --
e | * -- *
s | --
) | *-- *
| -- *
| -- *
--------------------------------------->
time`,

    three: `CREATE TABLE heap_histogram (
 -- when the heap histogram was taken
 histwhen TIMESTAMP WITHOUT TIME ZONE NOT NULL,
 -- the object type bytes are referring to
 -- ex: java.util.String
 CLASS CHARACTER VARYING NOT NULL,
 -- the size in bytes used by the above class
 bytes INTEGER NOT NULL
);
`,

    four: `-- epoch returns seconds
SELECT CLASS, REGR_SLOPE(bytes,EXTRACT(epoch FROM histwhen)) AS slope
 FROM public.heap_histogram
 GROUP BY CLASS
 HAVING REGR_SLOPE(bytes,EXTRACT(epoch FROM histwhen)) > 0
 ORDER BY slope DESC ;
 -------OUTPUT----------
 class | slope
---------------------------+----------------------
java.util.ArrayList       | 71.7993806279174
java.util.HashMap         | 49.0324576155785
java.lang.String          | 31.7770770326123
joe.schmoe.BusinessObject | 23.2036817108056
java.lang.ThreadLocal     | 20.9013528767851`,

    five: `SELECT STRING_AGG(NAME, ', ') AS NAMES, country
FROM individuals
GROUP BY country;`
}