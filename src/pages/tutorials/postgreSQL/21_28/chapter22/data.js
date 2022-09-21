export const PostgreSQLChapter22Data = {
    one: `pg_dump -Fc -f DATABASE.pgsql DATABASE`,

    two: `pg_dump -f DATABASE.sql DATABASE`,

    three: `pg_dump DATABASE > DATABASE.sql`,

    four: `psql < backup.sql`,

    five: `psql -1f backup.sql`,

    six: `pg_restore -d DATABASE DATABASE.pgsql`,

    seven: `pg_restore backup.pgsql > backup.sql`,

    eight: `$ pg_dumpall -f backup.sql`,

    nine: `$ postgres-backup-$(DATE +%Y-%m-%d).sql`,

    ten: `postgres=# SELECT pg_start_backup('my-backup');
postgres=# SELECT pg_stop_backup();
`,

    elevent: `psql -p \\<port> -U \\<username> -d \\<DATABASE> -A -F<DELIMITER> -c\\<sql TO EXECUTE> \\> \\<output filename WITH path>
psql -p 5432 -U postgres -d test_database -A -F, -c "select * from user" > /home/USER/user_data.CSV`, 

    twelve: `COPY <tablename> FROM '<filename with path>';`,

    thirteen: `COPY USER FROM '/home/user/user_data.csv';`,

    fourteen: `COPY USER FROM '/home/user/user_data' WITH DELIMITER '|';`,

    fifteen: `COPY USER FROM '/home/user/user_data' WITH DELIMITER '|' HEADER;`,

    sixteen: `COPY <tablename> TO STDOUT (DELIMITER '|');`,

    seventeen: `COPY USER TO STDOUT (DELIMITER '|'); To Copy table to file
COPY USER FROM '/home/user/user_data' WITH DELIMITER '|'; To Copy the output of SQL statement to file
COPY (sql STATEMENT) TO '<filename with path>'; COPY (SELECT * FROM USER WHERE user_name LIKE 'A%')
TO '/home/user/user_data'; To Copy into a compressed file
COPY USER TO PROGRAM 'gzip > /home/user/user_data.gz';
`,

}