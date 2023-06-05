import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../../../../components/modules/page-title';
import unit from '../../../../resources/json/japan/JapanUnit.json';

export const UtilitiesJapanVocabulary = () => {
  const navigate = useNavigate();
  const [units, setUnits] = useState(() => {
    let unitN5 = unit;
    unitN5.forEach((item) => {
      if (item.level === 'N5') {
        item.isShow = 1;
      } else {
        item.isShow = 0;
      }
    });
    return unitN5;
  });
  const [checked, setChecked] = useState<string[]>([]);
  const [level, setLevel] = useState('N5');
  const [questionTotal, setQuestionTotal] = useState('4');

  /**
   * Add/Remove checked item from list
   */
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

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
    setLevel(value);
  };

  const openUnitPage = () => {
    localStorage.setItem('japan-unit', JSON.stringify(checked));
    localStorage.setItem('japan-level', level);
    localStorage.setItem('japan-question-total', questionTotal);
    navigate('/utilities/japan/vocabulary/unit');
  };

  const handleSelectQuestionTotal = (value: string) => {
    setQuestionTotal(value);
  };

  return (
    <>
      <PageTitle title="Từ vựng"></PageTitle>
      <div className="row mt-2">
        <div className="col-6 col-sm-6 col-md-6">
          <b>1. Chọn cấp độ</b>
          <select
            className="form-select form-select-sm"
            defaultValue={'N5'}
            onChange={(e) => handleSelectLevel(e.target.value)}
          >
            <option value="N5">N5</option>
            <option value="N4">N4</option>
            <option value="N3">N3</option>
          </select>
        </div>

        <div className="col-6 col-sm-6 col-md-6">
          <b>2. Chọn tổng số đáp án</b>
          <select
            className="form-select form-select-sm"
            defaultValue={'4'}
            onChange={(e) => handleSelectQuestionTotal(e.target.value)}
          >
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>

      <div className="row mt-2">
        {units.map(
          (item, index) =>
            item.isShow === 1 && (
              <div key={index} className="col-4 col-sm-4 col-md-4">
                <div className="form-check">
                  <input
                    value={item.unit}
                    type="checkbox"
                    className="form-check-input"
                    id={'checkbox-unit-' + index}
                    onChange={(e) => handleCheck(e)}
                  />
                  <label className="form-check-label" htmlFor={'checkbox-unit-' + index}>
                    {item.unitName}
                  </label>
                  <span></span>
                </div>
              </div>
            ),
        )}
        {/* </div> */}
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button type="button" className="btn btn-primary btn-sm" onClick={() => openUnitPage()}>
            Start
          </button>
        </div>
      </div>
    </>
  );
};
