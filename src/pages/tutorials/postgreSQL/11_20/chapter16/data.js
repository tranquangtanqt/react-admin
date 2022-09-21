export const PostgreSQLChapter16Data = {
    one: `COPY (SELECT oid,relname FROM pg_class LIMIT 5) TO STDOUT;`,

    two: `COPY products(is_public, title, discount) TO 'D:\\csv_backup\\products_db.csv' DELIMITER ',' CSV HEADER; 
COPY categories(NAME) TO 'D:\\csv_backup\\categories_db.csv' DELIMITER ',' CSV HEADER;`,

    three: `COPY products TO 'D:\\csv_backup\\products_db.csv' DELIMITER ',' CSV HEADER; 
COPY categories TO 'D:\\csv_backup\\categories_db.csv' DELIMITER ',' CSV HEADER;
`
}