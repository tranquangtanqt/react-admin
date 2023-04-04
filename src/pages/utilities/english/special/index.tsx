import { Fragment } from "react";
import { PageTitle } from "../../../../components/modules/page-title";

export const UtilitiesEnglishSpecial = () => {
  const tableData = [
    {
      en: `asterisk`,
      vn: `Dấu hoa thị`,
    },
    {
      en: `exclamation`,
      vn: `Dấu chấm than, cảm thán`,
    },
    {
      en: `slash`,
      vn: `Dấu gạch chéo`,
    },
    {
      en: `colon`,
      vn: `Dấu hai chấm`,
    },
    {
      en: `semicolon`,
      vn: `Dấu chấm phẩy`,
    },
  ];
  return (
    <>
      <PageTitle title="Text Special"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-6 col-md-6">
          <table className="table table-striped table-hover table-bordered table-sm">
            <thead>
              <tr>
                <th>EN</th>
                <th>VN</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((data, key) => (
                <Fragment key={key}>
                  <tr>
                    <td>{data.en}</td>
                    <td>{data.vn}</td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
