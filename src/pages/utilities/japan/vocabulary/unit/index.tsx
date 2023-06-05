import { Fragment, useEffect, useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import NumberUtils from 'utils/number-utils';
import { useNavigate } from 'react-router-dom';
import dataN5 from 'pages/utilities/japan/vocabulary/dataN5';
import './unit.css';

export const UtilitiesJapanVocabularyUnit = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (units === null) {
      navigate('/utilities/japan/vocabulary');
    }
    // eslint-disable-next-line
  }, [navigate]);

  /**
   * Mang chua toan bo cac bai hoc
   */
  const [units] = useState(() => initUnit());
  function initUnit() {
    const localValue = localStorage.getItem('japan-unit');
    let updateUnit = null;
    if (localValue !== null) {
      updateUnit = JSON.parse(localValue);
    }
    localStorage.removeItem('japan-unit');

    return updateUnit;
  }

  /**
   * Cap do
   */
  const [level] = useState(() => initLevel());
  function initLevel() {
    const result = localStorage.getItem('japan-level');
    localStorage.removeItem('japan-level');
    return result;
  }

  /**
   * Tong so cau hoi
   */
  const [questionTotal] = useState(() => initQuestionTotal());
  function initQuestionTotal() {
    const total = localStorage.getItem('japan-question-total');
    localStorage.removeItem('japan-question-total');
    return Number(total);
  }

  /**
   * Chi so dap an chinh xac trong mang chua cau tra loi (questions)
   */
  const [answerCorrect, setAnswerCorrect] = useState(() => initAnswerCorrect());
  function initAnswerCorrect() {
    return NumberUtils.getRandomInt(questionTotal);
  }

  /**
   * Mang chua tat ca cac tu vung
   */
  function initVocabulary() {
    const arr: any = [];
    if (level === 'N5') {
      for (const unitName of units) {
        const unit = dataN5.get(unitName);
        unit.forEach((item: any) => {
          arr.push(item);
        });
      }
      return arr;
    }
  }

  /**
   * Mang chua cau tra loi
   */
  const [questions, setQuestions] = useState(() => initQuestion());
  function initQuestion() {
    const vocabulary = initVocabulary();
    const result = [];
    for (let i = 0; i < questionTotal; i++) {
      const length = vocabulary.length;
      const rd = NumberUtils.getRandomInt(length);
      result.push(vocabulary[rd]);
      vocabulary.splice(rd, 1);
    }
    return result;
  }

  /**
   * Hien thi mau nen cho dap an (Dung: xanh la, sai: do)
   */
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  /**
   * Hien thi cau tra loi (khi nguoi dung chon dap an)
   */
  const [isShowAnswer, setIsShowAnswer] = useState(false);

  /**
   * Tong so cau dung
   */
  const [correctNumber, setCorrectNumber] = useState(0);

  /**
   * Tong so cau sai
   */
  const [wrongNumber, setWrongNumber] = useState(0);

  /**
   * khi da chon cau tra loi => khong cho click tiep dap an
   */
  const [isEnableClick, setIsEnableClick] = useState(true);

  /**
   * Thay doi mau nen khi chon dap an
   */
  const [backgroundColor, setBackgroundColor] = useState(() =>
    initBackgroundColor(),
  );
  function initBackgroundColor() {
    return ['', '', '', '', '', ''];
  }

  /**
   * onclick: chon cau tra loi
   */
  const answer = (index: number) => {
    if (!isEnableClick) return;
    setIsShowAnswer(true);
    if (index === answerCorrect) {
      setIsAnswerCorrect(true);
      setCorrectNumber(correctNumber + 1);
    } else {
      setIsAnswerCorrect(false);
      setWrongNumber(wrongNumber + 1);
    }
    setIsEnableClick(false);
    const updateBackgroundColor = [...backgroundColor];
    updateBackgroundColor[index] = 'choose-answer';
    setBackgroundColor(updateBackgroundColor);
  };

  /**
   * onclick: chon cau hoi tiep theo
   */
  const nextQuestion = () => {
    setIsLoading(true);
    setIsEnableClick(true);
    setIsShowAnswer(false);
    setQuestions(initQuestion());
    setBackgroundColor(initBackgroundColor());
    setAnswerCorrect(initAnswerCorrect());
    setIsLoading(false);
    if (isEnableClick) {
      setWrongNumber(wrongNumber + 1);
    }
  };
  return (
    <>
      <PageTitle title="Từ vựng"></PageTitle>
      <div className={isLoading ? 'row mt-2' : 'row mt-2 d-none'}>
        <div style={{ minHeight: '30vh' }}>
          <div className="loading-spinner"></div>
        </div>
      </div>

      <div className={!isLoading ? 'row mt-2' : 'row mt-2 d-none'}>
        <div className="col-12 col-sm-8 col-md-8">
          <div className="row">
            <div className="col-md-12">
              <div className="card text-white bg-dark mb-2">
                <div className="card-body padding-custom">
                  <p className="card-text text-center">
                    {questions
                      ?.slice(answerCorrect, answerCorrect + 1)
                      .map((item: any, key: any) => (
                        <b key={key}>{item.translate}</b>
                      ))}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {[...Array(questionTotal / 2)].map((value: any, index: any) => (
            <Fragment key={index}>
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="card cursor-pointer mb-2">
                    <div
                      className={`card-body padding-custom ${
                        backgroundColor[index * 2]
                      }`}
                      onClick={() => answer(index * 2)}
                    >
                      <p className="card-text text-center">
                        {questions
                          ?.slice(index * 2, index * 2 + 1)
                          .map((item: any, key: any) =>
                            item.kanji !== '' ? (
                              <b key={key}>
                                {item.hiragana} ({item.kanji})
                              </b>
                            ) : (
                              <b key={key}>{item.hiragana}</b>
                            ),
                          )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="card cursor-pointer mb-2">
                    <div
                      className={`card-body padding-custom ${
                        backgroundColor[index * 2 + 1]
                      }`}
                      onClick={() => answer(index * 2 + 1)}
                    >
                      <p className="card-text text-center">
                        {questions
                          ?.slice(index * 2 + 1, index * 2 + 2)
                          .map((item: any, key: any) =>
                            item.kanji !== '' ? (
                              <b key={key}>
                                {item.hiragana} ({item.kanji})
                              </b>
                            ) : (
                              <b key={key}>{item.hiragana}</b>
                            ),
                          )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}

          <div className="row">
            {isShowAnswer && (
              <Fragment>
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  <div
                    className={`card text-white ${
                      isAnswerCorrect ? 'bg-success' : 'bg-danger'
                    } mb-3`}
                  >
                    <div className="card-body padding-custom">
                      <p className="card-text text-center">
                        {questions
                          ?.slice(answerCorrect, answerCorrect + 1)
                          .map((item: any, key: any) =>
                            item.kanji !== '' ? (
                              <b key={key}>
                                {item.hiragana} ({item.kanji})
                              </b>
                            ) : (
                              <b key={key}>{item.hiragana}</b>
                            ),
                          )}
                      </p>
                    </div>
                  </div>
                </div>
              </Fragment>
            )}
            <div className="col-4 offset-4 col-md-4 offset-md-4 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">
              <div
                className="card text-white bg-info cursor-pointer mb-3"
                onClick={() => nextQuestion()}
              >
                <div className="card-body padding-custom">
                  <p className="card-text text-center">
                    <b>Next</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-4 col-xl-4">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xl-4 col-4">
              <div className="card text-white bg-success mb-3">
                <div className="card-body padding-custom">
                  <p className="card-text text-center">
                    <b>{correctNumber}</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 col-4">
              <div className="card text-white bg-danger mb-3">
                <div className="card-body padding-custom">
                  <p className="card-text text-center">
                    <b>{wrongNumber}</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 col-4">
              <div className="card text-white bg-info mb-3">
                <div className="card-body padding-custom">
                  <p className="card-text text-center">
                    <b>
                      {correctNumber + wrongNumber > 0
                        ? Math.round(
                            (correctNumber / (correctNumber + wrongNumber)) *
                              100 *
                              100,
                          ) / 100
                        : 0}
                      %
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-none d-sm-block">
            <div className="col-md-12 col-lg-12 col-xl-12">
              {isShowAnswer && isAnswerCorrect && (
                <Fragment>
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className="checkmark__circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className="checkmark__check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                </Fragment>
              )}

              {isShowAnswer && !isAnswerCorrect && (
                <Fragment>
                  <div className="swal2-icon swal2-error swal2-animate-error-icon d-flex">
                    <span className="swal2-x-mark">
                      <span className="swal2-x-mark-line-left"></span>
                      <span className="swal2-x-mark-line-right"></span>
                    </span>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
