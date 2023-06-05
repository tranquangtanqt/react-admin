import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const OracleDumpFull = () => {
  return (
    <>
      <PageTitle title="Import file dump Oracle Full"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code
            code={`conn sys/123456 as sysdba
alter session set "_ORACLE_SCRIPT"=true;

//Xóa User 
DROP USER DATABASE_NAME CASCADE;

//Tạo User
CREATE USER DATABASE_NAME IDENTIFIED BY _Password;

//Cấp quyền
GRANT DBA TO DATABASE_NAME;

GRANT EXP_FULL_DATABASE TO DATABASE_NAME;

GRANT IMP_FULL_DATABASE TO DATABASE_NAME;

GRANT CREATE ANY TABLE TO DATABASE_NAME;

GRANT DELETE ANY TABLE TO DATABASE_NAME;

GRANT DROP ANY TABLE TO DATABASE_NAME;

GRANT INSERT ANY TABLE TO DATABASE_NAME;

GRANT SELECT ANY SEQUENCE TO DATABASE_NAME;

GRANT SELECT ANY TABLE TO DATABASE_NAME;

GRANT UNLIMITED TABLESPACE TO DATABASE_NAME;

GRANT UPDATE ANY TABLE TO DATABASE_NAME;

//Tạo thư mục impport cho trường hợp dùng impdb
CREATE DIRECTORY NISSO_NSKS AS 'D:\\NISSO\\20151020';

//Command chạy ở máy server
CD D:\\app\\Administrator\\product\\11.2.0\\dbhome_1\\BIN
D:
impdp [UserName]/[Password]@[DataBaseID]:[Port]/[ORACLE_SID] DUMPFILE=[FILENAME(NOT FILEPATH)] DIRECTORY=[FOLDERID] log=[LOGFILENAME]
impdp NSMST/NSNSMST_1@192.168.136.72:1521/SIG4ORCL DUMPFILE='HON06_NSMST_EXPDP.DMP' DIRECTORY=NISSO_20151111 log='20151111_NSMST_DATABASE_NAME.log'

//Example---------------------------
//Export
expdp NSKP/NSKP DIRECTORY=NISSO_20160823 DUMPFILE= NSKP10.dmp SCHEMAS=NSKP LOGFILE=NSKP10.log
//Import
impdp NSKB/NSKB@192.168.136.72:1521/SIG4ORCL DUMPFILE='NSKP10.DMP' DIRECTORY=NISSO_20160823 REMAP_SCHEMA=NSKP:N
SKB log='20160823_NSKB.log'
//---------------------------NSKS AS 'D:\\NISSO\\20151020';

//Command chạy ở máy server
CD D:\\app\\Administrator\\product\\11.2.0\\dbhome_1\\BIN
D:
impdp [UserName]/[Password]@[DataBaseID]:[Port]/[ORACLE_SID] DUMPFILE=[FILENAME(NOT FILEPATH)] DIRECTORY=[FOLDERID] log=[LOGFILENAME]
impdp NSMST/NSNSMST_1@192.168.136.72:1521/SIG4ORCL DUMPFILE='HON06_NSMST_EXPDP.DMP' DIRECTORY=NISSO_20151111 log='20151111_NSMST_NSHM.log'

//Example---------------------------
//Export
expdp NSKP/NSKP DIRECTORY=NISSO_20160823 DUMPFILE= NSKP10.dmp SCHEMAS=NSKP LOGFILE=NSKP10.log
//Import
impdp NSKB/NSKB@192.168.136.72:1521/SIG4ORCL DUMPFILE='NSKP10.DMP' DIRECTORY=NISSO_20160823 REMAP_SCHEMA=NSKP:N
SKB log='20160823_NSKB.log'
//---------------------------`}
            language="sql"
          />
        </div>
      </div>
    </>
  );
};
