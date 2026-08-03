import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import unit from 'resources/json/japan/JapanUnit.json';

export const UtilitiesJapanVocabulary = () => {
  const navigate = useNavigate();
  const [units, setUnits] = useState(() => {
    const unitN5 = unit;
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
  const [direction, setDirection] = useState('vi-ja');

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
    const unitTemp = [...units];
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
    if (checked.length === 0) {
      alert('Vui lòng chọn ít nhất 1 bài học!');
      return;
    }
    localStorage.setItem('japan-unit', JSON.stringify(checked));
    localStorage.setItem('japan-level', level);
    localStorage.setItem('japan-question-total', questionTotal);
    localStorage.setItem('japan-direction', direction);
    navigate('/utilities/japan/vocabulary/unit');
  };

  const handleSelectQuestionTotal = (value: string) => {
    setQuestionTotal(value);
  };

  const handleSelectDirection = (value: string) => {
    setDirection(value);
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
            <option value="N4" disabled>
              N4 (sắp có)
            </option>
            <option value="N3" disabled>
              N3 (sắp có)
            </option>
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
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Chọn hình thức trắc nghiệm</b>
          <select
            className="form-select form-select-sm"
            defaultValue={'vi-ja'}
            onChange={(e) => handleSelectDirection(e.target.value)}
          >
            <option value="vi-ja">
              Câu hỏi tiếng Việt - Đáp án tiếng Nhật
            </option>
            <option value="ja-vi">
              Câu hỏi tiếng Nhật - Đáp án tiếng Việt
            </option>
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
                  <label
                    className="form-check-label"
                    htmlFor={'checkbox-unit-' + index}
                  >
                    {item.unitName}
                  </label>
                  <span></span>
                </div>
              </div>
            ),
        )}
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            disabled={checked.length === 0}
            onClick={() => openUnitPage()}
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
};
