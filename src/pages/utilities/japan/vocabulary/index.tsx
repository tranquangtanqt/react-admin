import { useState } from "react";
import { PageTitle } from "../../../../components/modules/pageTitle";
import unit from "../../../../resources/json/japan/JapanUnit.json";

export const UtilitiesJapanVocabulary = () => {
  const [units, setUnits] = useState(() => {
    let unitN5 = unit;
    unitN5.forEach((item) => {
      if (item.level === "N5") {
        item.isShow = 1;
      } else {
        item.isShow = 0;
      }
    });
    return unitN5;
  });

  const handleCheck = () => {};

  const handleSelectLevel = (value: string) => {
    let unitTemp = [...units];
    unitTemp.forEach((item) => {
      if (item.level === value) {
        item.isShow = 1;
      } else {
        item.isShow = 0;
      }
    });
    setUnits(unitTemp);
  };

  return (
    <>
      <PageTitle title="Từ vựng"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Chọn cấp độ</b>
          <select
            className="form-select form-select-sm"
            defaultValue={"N5"}
            onChange={(e) => handleSelectLevel(e.target.value)}
          >
            <option value="N5">N5</option>
            <option value="N4">N4</option>
            <option value="N3">N3</option>
          </select>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          {units.map(
            (item, index) =>
              item.isShow === 1 && (
                <div key={index} className="form-check">
                  <input
                    value={item.unit}
                    type="checkbox"
                    className="form-check-input"
                    id={"checkbox-unit-" + index}
                    onChange={handleCheck}
                  />
                  <label className="form-check-label" htmlFor={"checkbox-unit-" + index}>
                    {item.unitName} - {item.level}
                  </label>
                  <span></span>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};
