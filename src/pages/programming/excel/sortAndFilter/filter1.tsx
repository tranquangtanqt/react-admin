import { PageTitle } from "../../../../components/modules/pageTitle";

export const ExcelFilter1 = () => {
  return (
    <>
      <PageTitle title="Filter"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Chọn vùng văn bản và nhấn tổ hợp phím CTRT + T</b>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/programming/excel/excel_1.png")} className="img-thumbnail" alt="" />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/programming/excel/excel_2.png")} className="img-thumbnail" alt="" />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/programming/excel/excel_3.png")} className="img-thumbnail" alt="" />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/programming/excel/excel_4.png")} className="img-thumbnail" alt="" />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/programming/excel/excel_5.png")} className="img-thumbnail" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
