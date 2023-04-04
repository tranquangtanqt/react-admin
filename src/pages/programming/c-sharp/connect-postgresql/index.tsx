import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/page-title";

export const CSharpConnectPostgresql = () => {
  return (
    <>
      <PageTitle title="Connect and Select Postgresql"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>Function1</b>
          <div className="tab-1">
            <Code
              code={`public static void SelectDataFromTablePostgresql1()
{
    var cs = "Host=localhost;Username=postgres;Password=654321;Database=database_name";
    var con = new NpgsqlConnection(cs);
    con.Open();

    string sql = "SELECT * FROM table_name";

    var cmd = new NpgsqlCommand(sql, con);
    NpgsqlDataReader rdr = cmd.ExecuteReader();
    StringBuilder builder = new StringBuilder();

    while (rdr.Read())
    {
        builder.Append(rdr.GetInt32(0) + "---" + rdr.GetString(1));
        builder.Append("\\r\\n");
    }

    con.Close();
    File.WriteAllText(@"D:\\Export\\output.txt", builder.ToString());
}`}
              language="csharp"
            />
          </div>
          <b>Function2</b>
          <div className="tab-1">
            <Code
              code={`NpgsqlCommand cmd = new NpgsqlCommand(sql, con);
cmd.Parameters.AddWithValue(":jp", lines[i].Trim().ToString());
NpgsqlDataAdapter ad = new NpgsqlDataAdapter(cmd);
DataTable dt = new DataTable();

ad.Fill(dt);
foreach (DataRow row in dt.Rows)
{

}`}
              language="csharp"
            />
          </div>
        </div>
      </div>
    </>
  );
};
