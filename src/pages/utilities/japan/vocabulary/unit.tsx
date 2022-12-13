import { useState } from "react";
import { PageTitle } from "../../../../components/modules/pageTitle";
import unit from "../../../../resources/json/japan/JapanUnit.json";

export const UtilitiesJapanVocabularyUnit = () => {
  const [unitReceive, setUnitReceive] = useState(() => {
    var storedUnits = JSON.parse(localStorage.getItem("japan-unit") || "");
    localStorage.removeItem("japan-unit");
    console.log(storedUnits);
    return storedUnits;
  });

  return (
    <>
      <PageTitle title="Từ vựng UtilitiesJapanVocabularyUnit"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
        </div>
      </div>
    </>
  );
};
