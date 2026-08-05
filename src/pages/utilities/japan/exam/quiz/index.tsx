import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import NumberUtils from 'utils/number-utils';
import { EXAM_CATEGORIES, getQuestionsByLesson } from '../data';
import { ExamQuestionDto, ExamQuestionType } from '../dto';
import { loadMistakes, recordAnswer } from '../mistakes';

const TYPE_OPTIONS: { value: ExamQuestionType; label: string }[] = [
  { value: 'vocabulary', label: 'Từ vựng' },
  { value: 'grammar', label: 'Ngữ pháp' },
  { value: 'kanji', label: 'Kanji' },
  { value: 'reading', label: 'Đọc hiểu' },
  { value: 'dialogue', label: 'Hội thoại' },
];

const QUESTION_COUNT_OPTIONS = [10, 20, 30];

interface QuizQuestion {
  source: ExamQuestionDto;
  options: string[];
  answerIndex: number;
}

function speak(text: string) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  window.speechSynthesis.speak(utterance);
}

function shuffle<T>(list: T[]): T[] {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = NumberUtils.getRandomInt(i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function buildQuestion(source: ExamQuestionDto): QuizQuestion {
  const correctText = source.options[source.answer];
  const shuffledOptions = shuffle(source.options);
  return {
    source,
    options: shuffledOptions,
    answerIndex: shuffledOptions.indexOf(correctText),
  };
}

function buildQuestions(
  pool: ExamQuestionDto[],
  count: number,
): QuizQuestion[] {
  const targets = shuffle(pool).slice(0, Math.min(count, pool.length));
  return targets.map(buildQuestion);
}

function progressStorageKey(lesson: number) {
  return `japan-exam-progress-${lesson}`;
}

function loadProgress(lesson: number) {
  const raw = localStorage.getItem(progressStorageKey(lesson));
  if (!raw) return { correct: 0, total: 0 };
  try {
    return JSON.parse(raw);
  } catch {
    return { correct: 0, total: 0 };
  }
}

function saveProgress(lesson: number, correct: number, total: number) {
  localStorage.setItem(
    progressStorageKey(lesson),
    JSON.stringify({ correct, total }),
  );
}

function clearProgress(lesson: number) {
  localStorage.removeItem(progressStorageKey(lesson));
}

const FREQUENCY_LABEL: Record<string, string> = {
  high: 'Thường gặp',
  medium: 'Trung bình',
  low: 'Ít gặp',
};

const DIFFICULTY_LABEL: Record<string, string> = {
  easy: 'Dễ',
  normal: 'Trung bình',
  hard: 'Khó',
};

export const UtilitiesJapanExamQuiz = () => {
  const navigate = useNavigate();
  const { lesson: lessonParam } = useParams();
  const [searchParams] = useSearchParams();
  const isMistakeMode = searchParams.get('mode') === 'mistakes';
  const lesson = Number(lessonParam);

  const category = EXAM_CATEGORIES.find(
    (c) => c.lesson === lesson && !c.disabled,
  );

  const allQuestions = useMemo(
    () => (category ? getQuestionsByLesson(lesson) : []),
    [category, lesson],
  );

  useEffect(() => {
    if (!category || allQuestions.length < 2) {
      navigate('/utilities/japan/exam');
    }
    // eslint-disable-next-line
  }, [lesson, navigate]);

  const [hasStarted, setHasStarted] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<ExamQuestionType[]>(
    TYPE_OPTIONS.map((t) => t.value),
  );
  const [questionCount, setQuestionCount] = useState(20);
  const [pool, setPool] = useState<ExamQuestionDto[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [allTimeProgress, setAllTimeProgress] = useState(() =>
    category ? loadProgress(lesson) : { correct: 0, total: 0 },
  );
  const [mistakeIds, setMistakeIds] = useState<number[]>(() =>
    category ? loadMistakes(lesson) : [],
  );

  const currentQuestion = questions[currentIndex];

  const handleToggleType = (type: ExamQuestionType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const finishAnswer = (correct: boolean) => {
    setIsAnswered(true);
    setIsCorrect(correct);
    setCorrectCount((value) => (correct ? value + 1 : value));
    setWrongCount((value) => (correct ? value : value + 1));

    if (category) {
      const updated = {
        correct: allTimeProgress.correct + (correct ? 1 : 0),
        total: allTimeProgress.total + 1,
      };
      setAllTimeProgress(updated);
      saveProgress(lesson, updated.correct, updated.total);

      if (currentQuestion) {
        setMistakeIds(recordAnswer(lesson, currentQuestion.source.id, correct));
      }
    }
  };

  const submitAnswer = (optionIndex: number) => {
    if (isAnswered || !currentQuestion) return;
    setSelectedOption(optionIndex);
    finishAnswer(optionIndex === currentQuestion.answerIndex);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= questions.length) {
      setQuestions(buildQuestions(pool, questionCount));
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setIsAnswered(false);
    setIsCorrect(false);
    setSelectedOption(null);
  };

  const handleClearProgress = () => {
    if (!category) return;
    if (!window.confirm('Xoá toàn bộ tiến độ đã lưu của bài này?')) return;
    clearProgress(lesson);
    setAllTimeProgress({ correct: 0, total: 0 });
  };

  const handleStartQuiz = () => {
    if (selectedTypes.length === 0) return;
    const filteredPool = allQuestions.filter((q) =>
      selectedTypes.includes(q.type),
    );
    setPool(filteredPool);
    setQuestions(buildQuestions(filteredPool, questionCount));
    setCurrentIndex(0);
    setIsAnswered(false);
    setIsCorrect(false);
    setSelectedOption(null);
    setCorrectCount(0);
    setWrongCount(0);
    setHasStarted(true);
  };

  useEffect(() => {
    if (!isMistakeMode || hasStarted || allQuestions.length === 0) return;

    const filteredPool = allQuestions.filter((q) => mistakeIds.includes(q.id));
    if (filteredPool.length < 2) {
      alert('Chưa có đủ câu sai để ôn tập (cần ít nhất 2 câu).');
      navigate(`/utilities/japan/exam`);
      return;
    }
    setPool(filteredPool);
    setQuestions(buildQuestions(filteredPool, filteredPool.length));
    setHasStarted(true);
    // eslint-disable-next-line
  }, [isMistakeMode, allQuestions, hasStarted]);

  if (!category) {
    return null;
  }

  if (!hasStarted && !isMistakeMode) {
    return (
      <>
        <PageTitle title={`Đề thi thử - ${category.name}`}></PageTitle>

        <div className="row mt-2">
          <div className="col-12">
            <p className="text-muted mb-1">Chọn loại đề:</p>
          </div>
        </div>
        <div className="row">
          {TYPE_OPTIONS.map((t) => (
            <div key={t.value} className="col-6 col-sm-4 col-md-2">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`type-${t.value}`}
                  checked={selectedTypes.includes(t.value)}
                  onChange={() => handleToggleType(t.value)}
                />
                <label className="form-check-label" htmlFor={`type-${t.value}`}>
                  {t.label}
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-3 align-items-center">
          <div className="col-6 col-sm-4 col-md-3">
            <label className="text-muted font-size-14 mb-0">Số câu:</label>
            <select
              className="form-select form-select-sm"
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
            >
              {QUESTION_COUNT_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              disabled={selectedTypes.length === 0}
              onClick={handleStartQuiz}
            >
              Bắt đầu làm bài
            </button>
          </div>
        </div>
      </>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  const { source } = currentQuestion;

  return (
    <>
      <PageTitle
        title={`Đề thi thử - ${category.name}${
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
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <span className="badge bg-secondary me-1">{source.jlpt_section}</span>
          {source.topic && (
            <span className="badge bg-info text-dark me-1">{source.topic}</span>
          )}
          <span className="badge bg-light text-dark me-1 border">
            {FREQUENCY_LABEL[source.frequency] ?? source.frequency}
          </span>
          <span className="badge bg-light text-dark border">
            {DIFFICULTY_LABEL[source.difficulty] ?? source.difficulty}
          </span>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              {source.passage && (
                <p
                  className="card-text mb-2"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {source.passage}
                </p>
              )}
              <p className="card-text mb-0">
                <b>{source.question}</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {currentQuestion.options.map((option, index) => {
          const isTarget = index === currentQuestion.answerIndex;
          const isSelected = index === selectedOption;
          let cardClass = 'card cursor-pointer mb-2';
          if (isAnswered && isTarget) cardClass += ' bg-success text-white';
          else if (isAnswered && isSelected)
            cardClass += ' bg-danger text-white';

          return (
            <div key={index} className="col-12 col-md-6">
              <div className={cardClass} onClick={() => submitAnswer(index)}>
                <div className="card-body">
                  <p className="mb-0">{option}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isAnswered && (
        <div className="row mt-2">
          <div className="col-12">
            <div
              className={`card text-white ${
                isCorrect ? 'bg-success' : 'bg-danger'
              } mb-2`}
            >
              <div className="card-body">
                <p className="card-text mb-1">
                  {isCorrect ? 'Chính xác!' : 'Chưa đúng.'} Đáp án:{' '}
                  <b>{source.options[source.answer]}</b>{' '}
                  <button
                    type="button"
                    className="btn btn-sm btn-light py-0 px-1 ms-1"
                    title="Nghe phát âm"
                    onClick={() => speak(source.options[source.answer])}
                  >
                    🔊
                  </button>
                </p>
                <p className="card-text mb-0 font-size-14">
                  {source.explanation}
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
