export const PostgreSQLChapter27Data = {
    one: `CREATE EXTENSION postgres_fdw;`,

    two: `CREATE SERVER name_srv FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'hostname', dbname 'bd_name', port '5432');`,

    three: `CREATE USER MAPPING FOR postgres SERVER name_srv OPTIONS(USER 'postgres', PASSWORD 'password');`,

    four: `CREATE FOREIGN TABLE table_foreign (id INTEGER, code CHARACTER VARYING)
SERVER name_srv OPTIONS(schema_name 'schema', table_name 'table');
`,

    five: `SELECT * FROM table_foreign;`,

    six: `CREATE EXTENSION postgres_fdw;`,

    seven: `CREATE SERVER server_name FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'host_ip',
    dbname 'db_name', port 'port_number');
   `,

    eight: `CREATE USER MAPPING FOR CURRENT_USER
SERVER server_name
OPTIONS (USER 'user_name', PASSWORD 'password');`,

    nine: `CREATE SCHEMA schema_name;`,

    ten: `IMPORT FOREIGN SCHEMA schema_name_to_import_from_remote_db
FROM SERVER server_name
INTO schema_name;`,

    elevent: `SELECT * FROM schema_name.table_name;`, 

    twelve: `CREATE EXTENSION dblink;`,

    thirteen: `SELECT * FROM
dblink ('dbname = bd_distance port = 5432 host = 10.6.6.6 user = username
password = passw@rd', 'SELECT id, code FROM schema.table')
AS newTable(id INTEGER, code CHARACTER VARYING);`
}