export const PostgreSQLChapter13Data = {
    one: `WITH RECURSIVE t(n) AS (
    VALUES (1)
    UNION ALL
    SELECT n+1 FROM t WHERE n < 100
)
SELECT SUM(n) FROM t;`
}