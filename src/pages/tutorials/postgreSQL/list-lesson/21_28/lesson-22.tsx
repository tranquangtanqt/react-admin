import Code from 'components/modules/code';

// 22. Backup and Restore
export const TutorialPostgreSQLLesson22 = () => {
  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Backing up one database</b>
          <div className="tab-2">
            <Code
              code={`pg_dump -Fc -f DATABASE.pgsql DATABASE`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              The -Fc selects the "custom backup format" which gives you more
              power than raw SQL; see pg_restore for more details. If you want a
              vanilla SQL file, you can do this instead:
            </p>
          </div>
          <div className="tab-2">
            <Code code={`pg_dump -f DATABASE.sql DATABASE`} language="sql" />
          </div>
          <div className="tab-1">
            <p>or even</p>
          </div>
          <div className="tab-2">
            <Code code={`pg_dump DATABASE > DATABASE.sql`} language="sql" />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Restoring backups</b>
          <div className="tab-2">
            <Code code={`psql < backup.sql`} language="sql" />
          </div>
          <div className="tab-1">
            <p>
              A safer alternative uses -1 to wrap the restore in a transaction.
              The -f specifies the filename rather than using shell redirection.
            </p>
          </div>
          <div className="tab-2">
            <Code code={`psql -1f backup.sql`} language="sql" />
          </div>
          <div className="tab-1">
            <p>
              Custom format files must be restored using pg_restore with the -d
              option to specify the database:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`pg_restore -d DATABASE DATABASE.pgsql`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>The custom format can also be converted back to SQL:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`pg_restore backup.pgsql > backup.sql`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Usage of the custom format is recommended because you can choose
              which things to restore and optionally enable parallel processing.
            </p>
            <p>
              You may need to do a pg_dump followed by a pg_restore if you
              upgrade from one postgresql release to a newer one.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Backing up the whole cluster. Backing up one database</b>
          <div className="tab-2">
            <Code code={`$ pg_dumpall -f backup.sql`} language="sql" />
          </div>
          <div className="tab-1">
            <p>
              This works behind the scenes by making multiple connections to the
              server once for each database and executing pg_dump on it.
            </p>
            <p>
              Sometimes, you might be tempted to set this up as a cron job, so
              you want to see the date the backup was taken as part of the
              filename:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`$ postgres-backup-$(DATE +%Y-%m-%d).sql`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              However, please note that this could produce large files on a
              daily basis. Postgresql has a much better mechanism for regular
              backups -
              <a
                href=" https://www.postgresql.org/docs/9.2/continuous-archiving.html"
                target={'_blank'}
                rel="noreferrer"
              >
                WAL archives
              </a>{' '}
            </p>
            <p>
              The output from pg_dumpall is sufficient to restore to an
              identically-configured Postgres instance, but the configuration
              files in $PGDATA (pg_hba.conf and postgresql.conf) are not part of
              the backup, so you'll have to back them up separately.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`postgres=# SELECT pg_start_backup('my-backup');
postgres=# SELECT pg_stop_backup();`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              To take a filesystem backup, you must use these functions to help
              ensure that Postgres is in a consistent state while the backup is
              prepared
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>4. Using psql to export data</b>
          <div className="tab-1">
            <p>
              Data can be exported using copy command or by taking use of
              command line options of psql command.
            </p>
          </div>

          <div className="tab-1">
            <p>To Export csv data from table user to csv file:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`psql -p \\<port> -U \\<username> -d \\<DATABASE> -A -F<DELIMITER> -c\\<sql TO EXECUTE> \\> \\<output filename WITH path>
psql -p 5432 -U postgres -d test_database -A -F, -c "select * from user" > /home/USER/user_data.CSV`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Here combination of -A and -F does the trick.</p>
          </div>
          <div className="tab-2">
            <ul>
              <li>-F is to specify delimiter</li>
              <li>-A OR --no-align</li>
            </ul>
          </div>
          <div className="tab-1">
            <p>
              Switches to unaligned output mode. (The default output mode is
              otherwise aligned.)
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>5. Using Copy to import</b>
          <div className="tab-1">
            <p>To Copy Data from a CSV file to a table</p>
          </div>
          <div className="tab-2">
            <Code
              code={`COPY <tablename> FROM '<filename with path>';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              To insert into table USER from a file named user_data.CSV placed
              inside /home/USER/:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`COPY USER FROM '/home/user/user_data.csv';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>To Copy data from pipe separated file to table</p>
          </div>
          <div className="tab-2">
            <Code
              code={`COPY USER FROM '/home/user/user_data' WITH DELIMITER '|';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Note: In absence of the option WITH DELIMITER, the default
              delimiter is comma ,
            </p>
            <p>To ignore header line while importing file</p>
            <p>Use the Header option:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`COPY USER FROM '/home/user/user_data' WITH DELIMITER '|' HEADER;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Note: If data is quoted, by default data quoting characters are
              double quote. If the data is quoted using any other character use
              the QUOTE option; however, this option is allowed only when using
              CSV format.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>6. Using Copy to export</b>
          <div className="tab-1">
            <p>To Copy table to standard o/p</p>
          </div>
          <div className="tab-2">
            <Code
              code={`COPY <tablename> TO STDOUT (DELIMITER '|');`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>To export table user to Standard output:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`COPY USER TO STDOUT (DELIMITER '|'); To Copy table to file
COPY USER FROM '/home/user/user_data' WITH DELIMITER '|'; To Copy the output of SQL statement to file
COPY (sql STATEMENT) TO '<filename with path>'; COPY (SELECT * FROM USER WHERE user_name LIKE 'A%')
TO '/home/user/user_data'; To Copy into a compressed file
COPY USER TO PROGRAM 'gzip > /home/user/user_data.gz';`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Here program gzip is executed to compress user table data.</p>
          </div>
        </div>
      </div>
    </>
  );
};
