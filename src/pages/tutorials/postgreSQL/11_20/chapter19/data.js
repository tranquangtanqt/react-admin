export const PostgreSQLChapter19Data = {
    one: `CREATE ROLE niceusername WITH PASSWORD 'very-strong-password' LOGIN;`,

    two: `CREATE ROLE niceusername WITH LOGIN;
\\PASSWORD niceusername`,

    three: `--ACCESS DB
REVOKE CONNECT ON DATABASE nova FROM PUBLIC;
GRANT CONNECT ON DATABASE nova TO USER;`,

    four: `--ACCESS SCHEMA
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT USAGE ON SCHEMA public TO USER;`,
    five: `--ACCESS TABLES
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM PUBLIC ;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO read_only ;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO read_write ;
GRANT ALL ON ALL TABLES IN SCHEMA public TO ADMIN ;
--ACCESS SEQUENCES
REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM PUBLIC;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO read_only; -- allows the use of CURRVAL
GRANT UPDATE ON ALL SEQUENCES IN SCHEMA public TO read_write; -- allows the use of NEXTVAL and SETVAL
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO read_write; -- allows the use of CURRVAL and NEXTVAL
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO ADMIN;`,
    six: `$ CREATEUSER -P blogger
Enter PASSWORD FOR the NEW ROLE: ********
Enter it again: ********
$ CREATEDB -O blogger blogger`,
    seven: `# TYPE     DATABASE     USER     ADDRESS     METHOD
host       sameuser     ALL      localhost   md5
LOCAL      sameuser     ALL                  md5`,
    eight: `postgres=# \\c postgres user1
You are now connected TO DATABASE "postgres" AS USER "user1".
postgres=> SHOW search_path;
 search_path
----------------
"$user",public
(1 ROW)`,
    nine: `postgres=> \\c postgres postgres
You are now connected TO DATABASE "postgres" AS USER "postgres".
postgres=# ALTER USER user1 SET search_path='my_schema, "$user", public';
ALTER ROLE`,
    ten: `postgres=# \\c postgres user1
PASSWORD FOR USER user1:
You are now connected TO DATABASE "postgres" AS USER "user1".
postgres=> SHOW search_path;
 search_path
-------------
 my_schema, "$user", public
(1 ROW)
`,
    eleven: `postgres=# SET ROLE user1;
postgres=# SHOW search_path;
 search_path
-------------
 my_schema, "$user", public
(1 ROW)`,
    twelve: `CREATE USER readonly WITH ENCRYPTED PASSWORD 'yourpassword';
GRANT CONNECT ON DATABASE <database_name> TO readonly;
GRANT USAGE ON SCHEMA public TO readonly;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
`,
    thirteen: `ALTER DEFAULT PRIVILEGES IN SCHEMA myschema GRANT SELECT ON TABLES TO read_only;
ALTER DEFAULT PRIVILEGES IN SCHEMA myschema GRANT SELECT,INSERT,DELETE,UPDATE ON TABLES TO read_write;
ALTER DEFAULT PRIVILEGES IN SCHEMA myschema GRANT ALL ON TABLES TO ADMIN;`,
    fourteen: `ALTER DEFAULT PRIVILEGES FOR ROLE ADMIN GRANT SELECT ON TABLES TO read_only;`,
}