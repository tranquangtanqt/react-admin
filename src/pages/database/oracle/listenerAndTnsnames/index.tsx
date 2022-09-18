import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const ListenerAndTnsnames = () => {
  return (
    <>
      <PageTitle title="Listener And Tnsnames"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. listener.ora original</b>
          <div className="tab-1">
            <Code
              code={`SID_LIST_LISTENER =
    (SID_LIST =
        (SID_DESC =
            (SID_NAME = CLRExtProc)
            (ORACLE_HOME = D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1)
            (PROGRAM = extproc)
            (ENVS = "EXTPROC_DLLS=ONLY:D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1\\bin\\oraclr12.dll")
        )
    )

LISTENER =
    (DESCRIPTION_LIST =
        (DESCRIPTION =
            (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))
            (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
        )
    )`}
              language="javascript"
            />
          </div>
          <b>2. tnsnames.ora original</b>

          <div className="tab-1">
            <Code
              code={`LISTENER_ORCL =
    (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))
  
  
ORACLR_CONNECTION_DATA =
    (DESCRIPTION =
        (ADDRESS_LIST =
            (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
        )
        (CONNECT_DATA =
            (SID = CLRExtProc)
        (PRESENTATION = RO)
    )
)
  
ORCL =
    (DESCRIPTION =
        (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))
        (CONNECT_DATA =
            (SERVER = DEDICATED)
            (SERVICE_NAME = orcl.aureole.local)
        )
    )`}
              language="javascript"
            />
          </div>
          <b>3. listener.ora remote</b>
          <div className="tab-1">
            <Code
              code={`SID_LIST_LISTENER =
  (SID_LIST =
    (SID_DESC =
      (SID_NAME = CLRExtProc)
      (ORACLE_HOME = D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1)
      (PROGRAM = extproc)
      (ENVS = "EXTPROC_DLLS=ONLY:D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1\\bin\\oraclr12.dll")
    )
    (SID_DESC =
      (GLOBAL_DBNAME = ORCL)
      (ORACLE_HOME = D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1)
      (SID_NAME = ORCL)
    )
  )

LISTENER =
  (DESCRIPTION_LIST =
    (DESCRIPTION =
      (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
    )
    (DESCRIPTION =
      (ADDRESS = (PROTOCOL = TCP)(HOST = 0.0.0.0)(PORT = 1521))
    )
  )

ADR_BASE_LISTENER = D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1\\log`}
              language="javascript"
            />
          </div>
          <b>4. tnsnames.ora remote</b>
          <div className="tab-1">
            <Code
              code={`LISTENER_ORCL =
  (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.145.101)(PORT = 1521))

ORACLR_CONNECTION_DATA =
  (DESCRIPTION =
    (ADDRESS_LIST =
      (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
    )
    (CONNECT_DATA =
      (SID = CLRExtProc)
      (PRESENTATION = RO)
    )
  )

ORCL =
  (DESCRIPTION =
    (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.145.101)(PORT = 1521))
    (CONNECT_DATA =
      (SERVER = DEDICATED)
      (SERVICE_NAME = ORCL)
    )
  )`}
              language="javascript"
            />
          </div>
        </div>
      </div>
      {/* <Row justify="start">
        <Col span={24}>
          <h1>1. listener.ora original</h1>
        </Col>

        <Col span={23} offset={1}>
          <Code code={ListenerAndTnsnamesData.listener} language="javascript" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>2. tnsnames.ora original</h1>
        </Col>

        <Col span={23} offset={1}>
          <Code code={ListenerAndTnsnamesData.tnsnames} language="javascript" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>3. listener.ora remote</h1>
        </Col>

        <Col span={23} offset={1}>
          <Code
            code={ListenerAndTnsnamesData.listenerRemote}
            language="javascript"
          />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>4. tnsnames.ora remote</h1>
        </Col>

        <Col span={23} offset={1}>
          <Code
            code={ListenerAndTnsnamesData.tnsnamesRemote}
            language="javascript"
          />
        </Col>
      </Row> */}
    </>
  );
};
