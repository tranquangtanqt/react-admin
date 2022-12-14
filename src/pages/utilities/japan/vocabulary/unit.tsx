import { useState } from "react";
import { PageTitle } from "../../../../components/modules/pageTitle";
import unit from "../../../../resources/json/japan/JapanUnit.json";
import dataN5 from "./dataN5";

export const UtilitiesJapanVocabularyUnit = () => {
  const [unitReceive, setUnitReceive] = useState(() => {
    let localValue = localStorage.getItem("japan-unit");
    let updateUnit = null;
    if (localValue !== null) {
      updateUnit = JSON.parse(localValue);
    }
    localStorage.removeItem("japan-unit");

    return updateUnit;
  });

  const [levelReceive, setLevelReceive] = useState(() => {
    let result = localStorage.getItem("japan-level");
    localStorage.removeItem("japan-level");
    return result;
  });

  const [vocabularies, setVocabularies] = useState(() => {
    let arr: any = [];
    if (levelReceive === "N5") {
      for (let unitName of unitReceive) {
        let unit = dataN5.get(unitName);
        unit.forEach((item: any) => {
          arr.push(item);
        });
      }
      return arr;
    }
  });

  return (
    <>
      <PageTitle title="Từ vựng UtilitiesJapanVocabularyUnit"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
        {vocabularies?.map((item: any, key: any) => (
            <p key={key}>{item.hiragana}</p>
        ))}
        </div>
      </div>
    </>
  );
};
