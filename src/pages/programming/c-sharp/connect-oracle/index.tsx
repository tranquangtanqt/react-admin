import Code from '../../../../components/modules/code';
import { PageTitle } from '../../../../components/modules/page-title';

export const CSharpConnectOracle = () => {
  return (
    <>
      <PageTitle title="Connect and Select from database Oracle"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>Install Nuget: Oracle.ManagedDataAccess</p>
        </div>
      </div>

      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input
              type="image"
              src={require('../../../../resources/img/programming/csharp/CSharp1.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>Using</p>
          <div className="tab-1">
            <Code
              code={`using Oracle.ManagedDataAccess.Client;`}
              language="csharp"
            />
          </div>
          <p>Function</p>
          <div className="tab-1">
            <Code
              code={`var oradb = "Data Source=(DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(HOST=localhost)(PORT=1523))(CONNECT_DATA=(SERVICE_NAME=AL32UTF8)));User Id=user_name;Password=password;";
OracleConnection conn = new OracleConnection(oradb);
conn.Open();
OracleCommand cmd = new OracleCommand("select * from user_tab_comments", conn);
OracleDataReader reader = cmd.ExecuteReader();
DataTable dt = new DataTable();
dt.Load(reader);
conn.Close();
conn.Dispose();`}
              language="csharp"
            />
          </div>
        </div>
      </div>
    </>
  );
};
