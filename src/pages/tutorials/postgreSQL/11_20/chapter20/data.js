export const PostgreSQLChapter20Data = {
    one: `digest(DATA TEXT, TYPE TEXT) RETURNS BYTEA`,

    two: ` digest(DATA BYTEA, TYPE TEXT) RETURNS BYTEA`,

    three: `SELECT DIGEST('1', 'sha1')
SELECT DIGEST(CONCAT(CAST(CURRENT_TIMESTAMP AS TEXT), RANDOM()::TEXT), 'sha1')`,
}