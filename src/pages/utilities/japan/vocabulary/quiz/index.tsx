import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import NumberUtils from 'utils/number-utils';
import {
  VOCABULARY_CATEGORIES,
  VocabularyRow,
  getUnitsByLevel,
  getVocabularyByLevel,
} from '../data';
import { loadMistakes, recordAnswer } from '../mistakes';

type Direction = 'vi-ja' | 'ja-vi' | 'mixed';
type QuestionDirection = 'vi-ja' | 'ja-vi';

interface QuizItem {
  id: string;
  hiragana: string;
  kanji: string;
  translate: string;
}

interface QuizQuestion {
  target: QuizItem;
  choices: QuizItem[];
  direction: QuestionDirection;
}

const QUIZ_LENGTH = 10;
const DEFAULT_CHOICE_COUNT = 4;
const CHOICE_COUNT_OPTIONS = [2, 3, 4, 5, 6, 8, 10];

function shuffle<T>(list: T[]): T[] {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = NumberUtils.getRandomInt(i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function pickQuestionDirection(mode: Direction): QuestionDirection {
  if (mode === 'mixed') {
    return NumberUtils.getRandomInt(2) === 0 ? 'vi-ja' : 'ja-vi';
  }
  return mode;
}

function buildQuestions(
  pool: QuizItem[],
  choiceCount: number,
  mode: Direction,
): QuizQuestion[] {
  const targets = shuffle(pool).slice(0, Math.min(QUIZ_LENGTH, pool.length));

  return targets.map((target) => {
    const distractors = shuffle(pool.filter((k) => k.id !== target.id)).slice(
      0,
      Math.max(0, choiceCount - 1),
    );
    return {
      target,
      choices: shuffle([target, ...distractors]),
      direction: pickQuestionDirection(mode),
    };
  });
}

function renderJapanese(item: QuizItem) {
  return item.kanji !== '' ? `${item.hiragana} (${item.kanji})` : item.hiragana;
}

function progressStorageKey(level: string) {
  return `japan-vocabulary-progress-${level}`;
}

function loadProgress(level: string) {
  const raw = localStorage.getItem(progressStorageKey(level));
  if (!raw) return { correct: 0, total: 0 };
  try {
    return JSON.parse(raw);
  } catch {
    return { correct: 0, total: 0 };
  }
}

function saveProgress(level: string, correct: number, total: number) {
  localStorage.setItem(
    progressStorageKey(level),
    JSON.stringify({ correct, total }),
  );
}

function clearProgress(level: string) {
  localStorage.removeItem(progressStorageKey(level));
}

export const UtilitiesJapanVocabularyQuiz = () => {
  const navigate = useNavigate();
  const { level } = useParams();
  const [searchParams] = useSearchParams();
  const isMistakeMode = searchParams.get('mode') === 'mistakes';

  const category = VOCABULARY_CATEGORIES.find(
    (c) => c.id === level && !c.disabled,
  );

  const allVocabulary = level ? getVocabularyByLevel(level) : [];
  const unitOptions = level ? getUnitsByLevel(level) : [];

  useEffect(() => {
    if (!category || allVocabulary.length < 2) {
      navigate('/utilities/japan/vocabulary');
    }
    // eslint-disable-next-line
  }, [level, navigate]);

  const [hasStarted, setHasStarted] = useState(false);
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [choiceCount, setChoiceCount] = useState(DEFAULT_CHOICE_COUNT);
  const [direction, setDirection] = useState<Direction>('mixed');

  const [pool, setPool] = useState<QuizItem[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isShowChoices, setIsShowChoices] = useState(false);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [allTimeProgress, setAllTimeProgress] = useState(() =>
    level ? loadProgress(level) : { correct: 0, total: 0 },
  );
  const [mistakeIds, setMistakeIds] = useState<string[]>(() =>
    level ? loadMistakes(level) : [],
  );

  const maxChoiceCount = Math.min(10, pool.length);
  const choiceCountOptions = CHOICE_COUNT_OPTIONS.filter(
    (n) => n <= maxChoiceCount,
  );

  const currentQuestion = questions[currentIndex];

  const handleToggleUnit = (unit: string) => {
    setSelectedUnits((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit],
    );
  };

  const toQuizItem = (row: VocabularyRow): QuizItem => ({
    id: row.id,
    hiragana: row.hiragana,
    kanji: row.kanji,
    translate: row.translate,
  });

  const handleStartQuiz = () => {
    if (selectedUnits.length === 0) return;
    const filteredPool = allVocabulary
      .filter((item) => selectedUnits.includes(item.unit))
      .map(toQuizItem);
    setPool(filteredPool);
    setQuestions(buildQuestions(filteredPool, choiceCount, direction));
    setCurrentIndex(0);
    setIsAnswered(false);
    setIsCorrect(false);
    setIsShowChoices(false);
    setSelectedChoiceId(null);
    setCorrectCount(0);
    setWrongCount(0);
    setHasStarted(true);
  };

  const finishAnswer = (correct: boolean) => {
    setIsAnswered(true);
    setIsCorrect(correct);
    setCorrectCount((value) => (correct ? value + 1 : value));
    setWrongCount((value) => (correct ? value : value + 1));

    if (level) {
      const updated = {
        correct: allTimeProgress.correct + (correct ? 1 : 0),
        total: allTimeProgress.total + 1,
      };
      setAllTimeProgress(updated);
      saveProgress(level, updated.correct, updated.total);

      if (currentQuestion) {
        setMistakeIds(recordAnswer(level, currentQuestion.target.id, correct));
      }
    }
  };

  const submitChoiceAnswer = (choice: QuizItem) => {
    if (isAnswered || !currentQuestion) return;
    setSelectedChoiceId(choice.id);
    finishAnswer(choice.id === currentQuestion.target.id);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= questions.length) {
      setQuestions(buildQuestions(pool, choiceCount, direction));
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setIsAnswered(false);
    setIsCorrect(false);
    setIsShowChoices(false);
    setSelectedChoiceId(null);
  };

  const handleChoiceCountChange = (value: number) => {
    setChoiceCount(value);
    setQuestions(buildQuestions(pool, value, direction));
    setCurrentIndex(0);
    setIsAnswered(false);
    setIsCorrect(false);
    setIsShowChoices(false);
    setSelectedChoiceId(null);
    setCorrectCount(0);
    setWrongCount(0);
  };

  const handleClearProgress = () => {
    if (!level) return;
    if (!window.confirm('Xoá toàn bộ tiến độ đã lưu của mục này?')) return;
    clearProgress(level);
    setAllTimeProgress({ correct: 0, total: 0 });
  };

  useEffect(() => {
    if (!isMistakeMode || hasStarted || allVocabulary.length === 0) return;

    const filteredPool = allVocabulary
      .filter((item) => mistakeIds.includes(item.id))
      .map(toQuizItem);
    if (filteredPool.length < 2) {
      alert('Chưa có đủ câu sai để ôn tập (cần ít nhất 2 câu).');
      navigate(`/utilities/japan/vocabulary/${level}`);
      return;
    }
    setPool(filteredPool);
    setQuestions(buildQuestions(filteredPool, choiceCount, direction));
    setHasStarted(true);
    // eslint-disable-next-line
  }, [isMistakeMode, allVocabulary, hasStarted]);

  if (!category) {
    return null;
  }

  if (!hasStarted && !isMistakeMode) {
    return (
      <>
        <PageTitle title={`Trắc nghiệm - ${category.name}`}></PageTitle>
        <div className="row mt-2">
          <div className="col-6 col-sm-6 col-md-4">
            <label className="text-muted font-size-14 mb-0">
              Số lượng đáp án:
            </label>
            <select
              className="form-select form-select-sm"
              value={choiceCount}
              onChange={(e) => setChoiceCount(Number(e.target.value))}
            >
              {CHOICE_COUNT_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 col-sm-6 col-md-4">
            <label className="text-muted font-size-14 mb-0">
              Hình thức trắc nghiệm:
            </label>
            <select
              className="form-select form-select-sm"
              value={direction}
              onChange={(e) => setDirection(e.target.value as Direction)}
            >
              <option value="mixed">Trộn lẫn VN và Nhật</option>
              <option value="vi-ja">Câu hỏi VN - Đáp án Nhật</option>
              <option value="ja-vi">Câu hỏi Nhật - Đáp án VN</option>
            </select>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12">
            <p className="text-muted">Chọn các bài học muốn ôn tập:</p>
          </div>
        </div>
        <div className="row">
          {unitOptions.map((u) => (
            <div key={u.unit} className="col-4 col-sm-3 col-md-2">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`unit-${u.unit}`}
                  checked={selectedUnits.includes(u.unit)}
                  onChange={() => handleToggleUnit(u.unit)}
                />
                <label className="form-check-label" htmlFor={`unit-${u.unit}`}>
                  {u.unitName}
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              disabled={selectedUnits.length === 0}
              onClick={handleStartQuiz}
            >
              Start
            </button>
          </div>
        </div>
      </>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  const questionText =
    currentQuestion.direction === 'ja-vi'
      ? renderJapanese(currentQuestion.target)
      : currentQuestion.target.translate;

  return (
    <>
      <PageTitle
        title={`Trắc nghiệm - ${category.name}${
          isMistakeMode ? ' (Ôn lại câu sai)' : ''
        }`}
      ></PageTitle>

      <div className="row mt-2 align-items-center">
        <div className="col-12 col-md-8">
          <p className="text-muted mb-1">
            Câu {currentIndex + 1}/{questions.length} · Đúng: {correctCount} ·
            Sai: {wrongCount}
          </p>
        </div>
        <div className="col-12 col-md-4 text-md-end">
          <p className="text-muted mb-1">
            Tiến độ đã lưu: {allTimeProgress.correct}/{allTimeProgress.total}{' '}
            câu đúng{' '}
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              disabled={allTimeProgress.total === 0}
              onClick={handleClearProgress}
            >
              Xoá tiến độ
            </button>
          </p>
        </div>
        <div className="col-6 col-md-4">
          <label className="text-muted font-size-14 mb-0">
            Số lượng đáp án:
          </label>
          <select
            className="form-select form-select-sm"
            value={choiceCount}
            onChange={(e) => handleChoiceCountChange(Number(e.target.value))}
          >
            {choiceCountOptions.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="card text-white bg-dark mb-3">
            <div className="card-body text-center">
              <p className="card-text mb-0">
                <b>{questionText}</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      {!isShowChoices ? (
        <div className="row">
          <div className="col-4 offset-4 col-md-4 offset-md-4">
            <button
              type="button"
              className="btn btn-info w-100"
              onClick={() => setIsShowChoices(true)}
            >
              Hiển thị đáp án
            </button>
          </div>
        </div>
      ) : (
        <div className="row">
          {currentQuestion.choices.map((choice) => {
            const isTarget = choice.id === currentQuestion.target.id;
            const isSelected = choice.id === selectedChoiceId;
            let cardClass = 'card cursor-pointer mb-2';
            if (isAnswered && isTarget) cardClass += ' bg-success text-white';
            else if (isAnswered && isSelected)
              cardClass += ' bg-danger text-white';

            return (
              <div key={choice.id} className="col-6 col-md-3">
                <div
                  className={cardClass}
                  onClick={() => submitChoiceAnswer(choice)}
                >
                  <div className="card-body text-center padding-custom">
                    <p className="mb-0">
                      {currentQuestion.direction === 'ja-vi'
                        ? choice.translate
                        : renderJapanese(choice)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {isAnswered && (
        <div className="row mt-2">
          <div className="col-12">
            <div
              className={`card text-white ${
                isCorrect ? 'bg-success' : 'bg-danger'
              } mb-2`}
            >
              <div className="card-body">
                <p className="card-text mb-0">
                  {isCorrect ? 'Chính xác!' : 'Chưa đúng.'} Đáp án:{' '}
                  <b>{renderJapanese(currentQuestion.target)}</b> -{' '}
                  {currentQuestion.target.translate}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row mt-2">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-info"
            disabled={!isAnswered}
            onClick={nextQuestion}
          >
            Câu hỏi tiếp theo
          </button>
        </div>
      </div>
    </>
  );
};
