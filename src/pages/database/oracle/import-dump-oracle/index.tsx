import Code from '../../../../components/modules/code';
import { PageTitle } from '../../../../components/modules/page-title';

export const OracleImportDump = () => {
  return (
    <>
      <PageTitle title="Import file dump Oracle"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Chuẩn bị</b>
          <div className="tab-1">
            <Code
              code={`sqlplus / AS SYSDBA
DROP USER PROVIC CASCADE;
DROP TABLESPACE MCDATA_OT including contents;`}
              language="sql"
            />
          </div>
          <b>2.</b>
          <div className="tab-1">
            <Code
              code={`ALTER SESSION SET "_ORACLE_SCRIPT"=true;`}
              language="sql"
            />
          </div>
          <b>3.</b>
          <div className="tab-1">
            <Code
              code={`CREATE TABLESPACE MCDATA_OT DATAFILE 'MCDATA_OT.df' SIZE 10M REUSE AUTOEXTEND ON NEXT 10M MAXSIZE 20M;
ALTER DATABASE DATAFILE 'MCDATA_OT.DF' AUTOEXTEND ON MAXSIZE UNLIMITED; `}
              language="sql"
            />
          </div>
          <b>4.</b>
          <div className="tab-1">
            <Code
              code={`CREATE USER PROVIC IDENTIFIED BY PROVIC DEFAULT TABLESPACE MCDATA_OT QUOTA UNLIMITED ON MCDATA_OT;
--CREATE USER PROVIC  IDENTIFIED BY PROVIC DEFAULT TABLESPACE USERS TEMPORARY TABLESPACE TEMP PROFILE DEFAULT QUOTA UNLIMITED ON USERS;`}
              language="sql"
            />
          </div>
          <b>5.</b>
          <div className="tab-1">
            <Code
              code={`GRANT ALL PRIVILEGES TO PROVIC;
/*
GRANT EXECUTE ANY PROCEDURE TO PROVIC;
GRANT UNLIMITED TABLESPACE TO PROVIC;
GRANT imp_full_database TO PROVIC;
GRANT DBA TO PROVIC;

GRANT ALTER SESSION TO PROVIC;
GRANT CREATE PROCEDURE TO PROVIC;
GRANT CREATE SEQUENCE TO PROVIC;
GRANT CREATE SESSION TO PROVIC;
GRANT CREATE SYNONYM TO PROVIC;
GRANT CREATE TABLE TO PROVIC;
GRANT CREATE TRIGGER TO PROVIC;
GRANT CREATE VIEW TO PROVIC;
GRANT SELECT ON SYS.V_$SESSION TO PROVIC;
GRANT SELECT ON SYS.V_$PROCESS TO PROVIC;
GRANT SELECT ON SYS.GV_$SESSION TO PROVIC;
GRANT ALTER SYSTEM TO PROVIC;
GRANT EXECUTE ON DBMS_CRYPTO TO PROVIC;
GRANT CREATE JOB TO PROVIC;
*/`}
              language="sql"
            />
          </div>
          <b>6. Tạo DIRECTORY</b>
          <div className="tab-1">
            <Code
              code={`CREATE OR REPLACE DIRECTORY alias AS 'pathname'
--Thay thế alias và pathname với pathname là đường dẫn đến file DUMP
--Ví dụ: CREATE OR REPLACE DIRECTORY IMPDIR AS 'D:\\DEMO'
--DROP: DROP DIRECTORY IMPDIR;`}
              language="sql"
            />
          </div>
          <b>7. Mở CMD mới</b>
          <div className="tab-1">
            <Code
              code={`cd D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1\\bin
impdp PROVIC/PROVIC directory=IMPDIR dumpfile=dump_file.dmp logfile=log_file.log tablespaces=users,MCDATA_OT`}
              language="sql"
            />
          </div>
          <i>
            Thư mục lưu file tablespace:
            D:\app\tantq\virtual\product\12.2.0\dbhome_1\database
          </i>
        </div>
      </div>
    </>
  );
};
