// import RandomMultiInsertSQL from "./randomMultiInsertSQL";
// import RandomProcedureInsertSQL from "./randomProcedureInsertSQL";

export const UtilitiesRandomInsertSQL = () => {
  return (
    <>
      {/* <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="INSERT" key="1">
          <RandomMultiInsertSQL />
        </TabPane>
        <TabPane tab="PROCEDURE" key="2">
          <RandomProcedureInsertSQL />
        </TabPane>
      </Tabs> */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          ...
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          ...
        </div>
      </div>
    </>
  );
};
