import { PageTitle } from "../../../../components/modules/page-title";

export const OracleTipsSQLDeveloper = () => {
  return (
    <>
      <PageTitle title="Tips For Oracle SQL Developer"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Hotkey</b>
          <div className="tab-1">
            <p>New Worksheet Shortcut: ALT + F10</p>
            <p>Format code: CTRL + F7</p>
            <p>Navigate Tab: CTRL + TAB</p>
            <p>Run statement: CTRL + ENTER</p>
          </div>
          <b>2. Change language</b>
          <div className="tab-1">
            <p>
              Open: <i>%APPDATA%\sqldeveloper\[version]\product.conf</i>
            </p>
            <p>Add line: AddVMOption -Duser.language=en</p>
          </div>
          <b>3. Block selection</b>
        </div>
      </div>

      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/database/Trich_1.jpg")} className="img-thumbnail" alt="description image" />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>Select Shift and click multiple lines</p>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/database/Trich_2.jpg")} className="img-thumbnail" alt="description image" />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <b>4. Export Data With Output Hints</b>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/database/Trich_3.jpg")} className="img-thumbnail" alt="description image" />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <b>5. Split Windows</b>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/database/Trich_4.jpg")} className="img-thumbnail" alt="description image" />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <b>6. Color-code connection</b>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/database/Trich_5.jpg")} className="img-thumbnail" alt="description image" />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/database/Trich_6.jpg")} className="img-thumbnail" alt="description image" />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <b>7. Disable Single-click Object</b>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/database/Trich_7.jpg")} className="img-thumbnail" alt="description image" />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <b>8. Fillter navigate tree</b>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/database/Trich_8.jpg")} className="img-thumbnail" alt="description image" />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <b>9. Use Schema Brower</b>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input type="image" src={require("../../../../resources/img/database/Trich_9.jpg")} className="img-thumbnail" alt="description image" />
          </div>
        </div>
      </div>
    </>
  );
};
