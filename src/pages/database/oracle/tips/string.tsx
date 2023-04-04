import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/page-title";

export const OracleString = () => {
  return (
    <>
      <PageTitle title="Tips String"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code code={`Select LPAD('12H89', 10, '0') FROM DUAL; --0000012H89`} language="sql" />
        </div>
      </div>
    </>
  );
};
