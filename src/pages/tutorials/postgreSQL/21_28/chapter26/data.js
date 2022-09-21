export const PostgreSQLChapter26Data = {
    one: `CREATEUSER -U postgres replication -P -c 5 --replication
 + OPTION -P will prompt you FOR NEW PASSWORD
 + OPTION -c IS FOR maximum connections. 5 connections are enough FOR replication
 + -replication will GRANT replication PRIVILEGES TO the USER`,

    two: `mkdir $PGDATA/archive`,

    three: `
#hosttype  database_name    user_name      hostname/IP     method
host       replication      replication    <slave-IP>/32   md5
`,

    four: `wal_level = hot_standby`,

    five: `\`hot_standby\` logs what IS required TO accept READ ONLY queries ON slave SERVER.
\`streaming\` logs what IS required TO just apply the WAL's on slave.
\`archive\` which logs what is required for archiving.
archive_mode=ON`,

    six: `archive_command = 'test ! -f /path/to/archivedir/%f && cp %p /path/to/archivedir/%f'`,

    seven: `$ pg_basebackup -h <PRIMARY IP> -D /var/lib/postgresql/<VERSION>/main -U replication -v -P --xlog-method=stream`,

    eight: `\`primary_conninfo = 'host= port=5432 user=replication password='`,

    nine: `trigger_file = '/tmp/postgresql.trigger.5432'`,

    ten: ``,

    elevent: ``, 

    twelve: ``,

    thirteen: ``,

    fourteen: ``
}