import { useEffect, useState } from "react";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const TipsForOracleSQLDeveloper = () => {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoading = () => {
    setShowLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <>
      <div className={showLoading ? "container-fluid" : "container-fluid d-none"}>
        <div className="row">
          <div className="min-height-30vh">
            <div className="loading-spinner"></div>
          </div>
        </div>
      </div>

      <div className={!showLoading ? "container-fluid" : "container-fluid d-none"}>
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
      </div>

      {/* <Row>
        <Col span={24}>
          <h1>3. Block selection</h1>
        </Col>

        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_1.jpg")}
          />
          <br />
          <br />
          <p>Select Shift and click multiple lines</p>
          <Image
            src={require("../../../../resources/img/database/Trich_2.jpg")}
          />
        </Col>

        <Col span={24}>
          <br />
          <br />
          <h1>4. Export Data With Output Hints</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_3.jpg")}
          />
        </Col>

        <Col span={24}>
          <br />
          <br />
          <h1>5. Split Windows</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_4.jpg")}
          />
        </Col>

        <Col span={24}>
          <br />
          <br />
          <h1>6. Color-code connection</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_5.jpg")}
          />
          <br />
          <br />
          <Image
            src={require("../../../../resources/img/database/Trich_6.jpg")}
          />
        </Col>

        <Col span={24}>
          <br />
          <br />
          <h1>7. Disable Single-click Object</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_7.jpg")}
          />
        </Col>

        <Col span={24}>
          <br />
          <br />
          <h1>8. Fillter navigate tree</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_8.jpg")}
          />
        </Col>

        <Col span={24}>
          <br />
          <br />
          <h1>9. Use Schema Brower</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_9.jpg")}
          />
        </Col>
      </Row> */}
    </>
  );
};
