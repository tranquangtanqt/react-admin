import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter22Data } from "./data";

const PostgreSQLChapter22 = () => {
  return (
    <>
      <Divider orientation="left">22. Backup and Restore</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Backing up one database</h1>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            The -Fc selects the "custom backup format" which gives you more
            power than raw SQL; see pg_restore for more details. If you want a
            vanilla SQL file, you can do this instead:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.two} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>or even</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.three} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>2. Restoring backups</h1>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.four} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            A safer alternative uses -1 to wrap the restore in a transaction.
            The -f specifies the filename rather than using shell redirection.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.five} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Custom format files must be restored using pg_restore with the -d
            option to specify the database:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.six} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>The custom format can also be converted back to SQL:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.six} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Usage of the custom format is recommended because you can choose
            which things to restore and optionally enable parallel processing.
          </p>
          <p>
            You may need to do a pg_dump followed by a pg_restore if you upgrade
            from one postgresql release to a newer one.
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>3. Backing up the whole cluster. Backing up one database</h1>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.eight} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            This works behind the scenes by making multiple connections to the
            server once for each database and executing pg_dump on it.
          </p>
          <p>
            Sometimes, you might be tempted to set this up as a cron job, so you
            want to see the date the backup was taken as part of the filename:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.nine} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            However, please note that this could produce large files on a daily
            basis. Postgresql has a much better mechanism for regular backups -
            <a
              href=" https://www.postgresql.org/docs/9.2/continuous-archiving.html"
              target={"_blank"}
              rel="noreferrer"
            >
              WAL archives
            </a>{" "}
          </p>
          <p>
            The output from pg_dumpall is sufficient to restore to an
            identically-configured Postgres instance, but the configuration
            files in $PGDATA (pg_hba.conf and postgresql.conf) are not part of
            the backup, so you'll have to back them up separately.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.ten} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            To take a filesystem backup, you must use these functions to help
            ensure that Postgres is in a consistent state while the backup is
            prepared
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>4. Using psql to export data</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            Data can be exported using copy command or by taking use of command
            line options of psql command.
          </p>
          <b>To Export csv data from table user to csv file:</b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.elevent} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>Here combination of -A and -F does the trick.</p>
          <ul>
            <li>-F is to specify delimiter</li>
            <li>-A OR --no-align</li>
          </ul>
          <p>
            Switches to unaligned output mode. (The default output mode is
            otherwise aligned.)
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>5. Using Copy to import</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>To Copy Data from a CSV file to a table</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.twelve} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            To insert into table USER from a file named user_data.CSV placed
            inside /home/USER/:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.thirteen} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>To Copy data from pipe separated file to table</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.fourteen} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            Note: In absence of the option WITH DELIMITER, the default delimiter
            is comma ,
          </p>
          <p>To ignore header line while importing file</p>
          <p>Use the Header option:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.fifteen} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Note: If data is quoted, by default data quoting characters are
            double quote. If the data is quoted using any other character use
            the QUOTE option; however, this option is allowed only when using
            CSV format.
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>6. Using Copy to export</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>To Copy table to standard o/p</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.sixteen} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>To export table user to Standard output:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter22Data.seventeen} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>Here program gzip is executed to compress user table data.</p>
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter22;
