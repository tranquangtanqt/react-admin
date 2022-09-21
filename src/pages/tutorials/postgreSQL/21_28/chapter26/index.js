import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter26Data } from "./data";

const PostgreSQLChapter26 = () => {
  return (
    <>
      <Divider orientation="left">26. PostgreSQL High Availability</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Replication in PostgreSQL</h1>
        </Col>
        <Col span={23} offset={1}>
          <b>a. Configuring the Primary Server</b>
          <ul>
            <li>
              Requirements:
              <ul>
                <li>Replication User for replication activities</li>
                <li>Directory to store the WAL archives</li>
              </ul>
            </li>
            <li>Create Replication user</li>
          </ul>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter26Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <ul>
            <li>Create a archive directory in data directory</li>
          </ul>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter26Data.two} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <ul>
            <li>Edit the pg_hba.conf file</li>
          </ul>
        </Col>
        <Col span={22} offset={2}>
          <p>
            This is host base authentication file, contains the setting for
            client autherntication. Add below entry:
          </p>
          <Code code={PostgreSQLChapter26Data.three} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <ul>
            <li>Edit the postgresql.conf file</li>
          </ul>
        </Col>
        <Col span={22} offset={2}>
          <p>This is the configuration file of PostgreSQL.</p>
          <Code code={PostgreSQLChapter26Data.four} language="sql" />
        </Col>
        <Col span={22} offset={2}>
          <p>This parameter decides the behavior of slave server.</p>
          <Code code={PostgreSQLChapter26Data.five} language="sql" />
        </Col>
        <Col span={22} offset={2}>
          <p>
            This parameters allows to send WAL segments to archive location
            using archive_command parameter.
          </p>
          <Code code={PostgreSQLChapter26Data.six} language="sql" />
          <p>
            Basically what above archive_command does is it copies the WAL
            segments to archive directory.
          </p>
          <p>wal_senders = 5 This is maximum number of WAL sender processes.</p>
          <p>Now restart the primary server</p>
        </Col>

        <Col span={23} offset={1}>
          <b>b. Backing up the primay server to the slave server</b>
          <p>Before making changes on the server stop the primary server</p>
          <p>
            Important: Don't start the service again until all configuration and
            backup steps are complete. You must bring up the standby server in a
            state where it is ready to be a backup server. This means that all
            configuration settings must be in place and the databases must be
            already synchronized. Otherwise, streaming replication will fail to
            start`
          </p>

          <b>c. Now run the pg_basebackup utility</b>
          <p>
            pg_basebackup utility copies the data from primary server data
            directory to slave data directory.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter26Data.seven} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>-D: This IS tells pg_basebackup WHERE TO the initial backup</p>
          <p>-h: Specifies the SYSTEM WHERE TO look FOR the PRIMARY SERVER</p>

          <p>
            -xlog-method=stream: This will FORCE the pg_basebackup TO open
            another CONNECTION AND stream enough xlog WHILE backup IS running.
            It ALSO ensures that fresh backup can be started WITHOUT failing
            back TO USING an archive.
          </p>
        </Col>

        <Col span={23} offset={1}>
          <b>d. Configuring the standby server</b>
          <p>
            To configure the standby server, you'll edit postgresql.conf and
            create a new configuration file named recovery.conf.
          </p>
          <p>hot_standby = ON</p>
          <p>
            This specifies whether you are allowed to run queries while
            recovering
          </p>
        </Col>

        <Col span={22} offset={2}>
          <b>Creating recovery.conf file</b>
          <p>standby_mode = ON</p>
          <p>
            Set the connection string to the primary server. Replace with the
            external IP address of the primary server. Replace with the password
            for the user named replication
          </p>
          <Code code={PostgreSQLChapter26Data.eight} language="sql" />
          <p>(Optional) Set the trigger file location</p>
          <Code code={PostgreSQLChapter26Data.nine} language="sql" />
          <p>
            The trigger_file path that you specify is the location where you can
            add a file when you want the system to fail over to the standby
            server. The presence of the file "triggers" the failover.
            Alternatively, you can use the pg_ctl promote command to trigger
            failover.
          </p>
        </Col>

        <Col span={23} offset={1}>
          <b>e. Start the standby server</b>
          <p>
            You now have everything in place and are ready to bring up the
            standby server
          </p>
          <b>Attribution</b>
          <p>This article is substantially derived from and attributed to How to Set Up PostgreSQL for High Availability and
Replication with Hot Standby, with minor changes in formatting and examples and some text deleted. The source
was published under the Creative Commons Public License 3.0, which is maintained here.</p>
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter26;
