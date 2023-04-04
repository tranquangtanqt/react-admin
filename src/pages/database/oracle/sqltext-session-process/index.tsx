import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/page-title";

export const OracleSqltextSessionProcess = () => {
  return (
    <>
      <PageTitle title="Sqltext Session Process"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code
            code={`select object_name, object_type from all_objects where object_name in ('V$SQLTEXT', 'V$SESSION', 'V$PROCESS');`}
            language="sql"
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-4">
          <div className="tab-1">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>OBJECT_NAME</th>
                  <th>OBJECT_TYPE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>V$PROCESS</td>
                  <td>SYNONYM</td>
                </tr>
                <tr>
                  <td>V$SESSION</td>
                  <td>SYNONYM</td>
                </tr>
                <tr>
                  <td>V$SQLTEXT</td>
                  <td>SYNONYM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code
            code={`select table_owner, table_name from all_synonyms where synonym_name in ('V$SQLTEXT', 'V$SESSION', 'V$PROCESS');`}
            language="sql"
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-4">
          <div className="tab-1">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>TABLE_OWNER</th>
                  <th>TABLE_NAME</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SYS</td>
                  <td>V_$PROCESS</td>
                </tr>
                <tr>
                  <td>SYS</td>
                  <td>V_$SESSION</td>
                </tr>
                <tr>
                  <td>SYS</td>
                  <td>V_$SQLTEXT</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code
            code={`grant select on V_$PROCESS to PROVIC;
grant select on V_$SQLTEXT to PROVIC;
grant select on V_$SESSION to PROVIC;`}
            language="sql"
          />
        </div>
      </div>
    </>
  );
};
