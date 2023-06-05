import Code from '../../../../../components/modules/code';
import { PageTitle } from '../../../../../components/modules/page-title';

export const TutorialPostgreSQLChapter26 = () => {
  return (
    <>
      <PageTitle title="26. PostgreSQL High Availability"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Replication in PostgreSQL</b>
          <div className="tab-1">
            <b>a. Configuring the Primary Server</b>
          </div>
          <div className="tab-1">
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
          </div>
          <div className="tab-2">
            <Code
              code={`CREATEUSER -U postgres replication -P -c 5 --replication
 + OPTION -P will prompt you FOR NEW PASSWORD
 + OPTION -c IS FOR maximum connections. 5 connections are enough FOR replication
 + -replication will GRANT replication PRIVILEGES TO the USER`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <ul>
              <li>Create a archive directory in data directory</li>
            </ul>
          </div>
          <div className="tab-2">
            <Code code={`mkdir $PGDATA/archive`} language="sql" />
          </div>
          <div className="tab-1">
            <ul>
              <li>Edit the pg_hba.conf file</li>
            </ul>
          </div>
          <div className="tab-2">
            <p>
              This is host base authentication file, contains the setting for client autherntication. Add below entry:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`#hosttype  database_name    user_name      hostname/IP     method
host       replication      replication    <slave-IP>/32   md5`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <ul>
              <li>Edit the postgresql.conf file</li>
            </ul>
          </div>
          <div className="tab-2">
            <p>Edit the postgresql.conf file</p>
            <p>This is the configuration file of PostgreSQL.</p>
          </div>
          <div className="tab-2">
            <Code code={`wal_level = hot_standby`} language="sql" />
          </div>
          <div className="tab-2">
            <p>This parameter decides the behavior of slave server.</p>
          </div>
          <div className="tab-2">
            <Code
              code={`\`hot_standby\` logs what IS required TO accept READ ONLY queries ON slave SERVER.
\`streaming\` logs what IS required TO just apply the WAL's on slave.
\`archive\` which logs what is required for archiving.
archive_mode=ON`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>This parameters allows to send WAL segments to archive location using archive_command parameter.</p>
          </div>
          <div className="tab-2">
            <Code
              code={`archive_command = 'test ! -f /path/to/archivedir/%f && cp %p /path/to/archivedir/%f'`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>Basically what above archive_command does is it copies the WAL segments to archive directory.</p>
            <p>wal_senders = 5 This is maximum number of WAL sender processes.</p>
            <p>Now restart the primary server</p>
          </div>
          <div className="tab-1">
            <b>b. Backing up the primay server to the slave server</b>
          </div>
          <div className="tab-2">
            <p>Before making changes on the server stop the primary server</p>
            <p>
              Important: Don't start the service again until all configuration and backup steps are complete. You must
              bring up the standby server in a state where it is ready to be a backup server. This means that all
              configuration settings must be in place and the databases must be already synchronized. Otherwise,
              streaming replication will fail to start`
            </p>
          </div>
          <div className="tab-1">
            <b>c. Now run the pg_basebackup utility</b>
          </div>
          <div className="tab-2">
            <p>pg_basebackup utility copies the data from primary server data directory to slave data directory.</p>
          </div>
          <div className="tab-2">
            <Code
              code={`$ pg_basebackup -h <PRIMARY IP> -D /var/lib/postgresql/<VERSION>/main -U replication -v -P --xlog-method=stream`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>-D: This IS tells pg_basebackup WHERE TO the initial backup</p>
            <p>-h: Specifies the SYSTEM WHERE TO look FOR the PRIMARY SERVER</p>
            <p>
              -xlog-method=stream: This will FORCE the pg_basebackup TO open another CONNECTION AND stream enough xlog
              WHILE backup IS running. It ALSO ensures that fresh backup can be started WITHOUT failing back TO USING an
              archive.
            </p>
          </div>
          <div className="tab-1">
            <b>d. Configuring the standby server</b>
          </div>
          <div className="tab-2">
            <p>
              To configure the standby server, you'll edit postgresql.conf and create a new configuration file named
              recovery.conf.
            </p>
            <p>hot_standby = ON</p>
            <p>This specifies whether you are allowed to run queries while recovering</p>
          </div>
          <div className="tab-2">
            <b>Creating recovery.conf file</b>
          </div>
          <div className="tab-2">
            <p>standby_mode = ON</p>
            <p>
              Set the connection string to the primary server. Replace with the external IP address of the primary
              server. Replace with the password for the user named replication
            </p>
          </div>
          <div className="tab-2">
            <Code code={`\`primary_conninfo = 'host= port=5432 user=replication password='`} language="sql" />
          </div>
          <div className="tab-2">
            <p>(Optional) Set the trigger file location</p>
          </div>
          <div className="tab-2">
            <Code code={`trigger_file = '/tmp/postgresql.trigger.5432'`} language="sql" />
          </div>
          <div className="tab-2">
            <p>
              The trigger_file path that you specify is the location where you can add a file when you want the system
              to fail over to the standby server. The presence of the file "triggers" the failover. Alternatively, you
              can use the pg_ctl promote command to trigger failover.
            </p>
          </div>
          <div className="tab-1">
            <b>e. Start the standby server</b>
          </div>
          <div className="tab-2">
            <p>You now have everything in place and are ready to bring up the standby server</p>
          </div>
          <div className="tab-2">
            <b>Attribution</b>
          </div>
          <div className="tab-2">
            <p>
              This article is substantially derived from and attributed to How to Set Up PostgreSQL for High
              Availability and Replication with Hot Standby, with minor changes in formatting and examples and some text
              deleted. The source was published under the Creative Commons Public License 3.0, which is maintained here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
