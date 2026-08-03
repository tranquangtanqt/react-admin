import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import NumberUtils from 'utils/number-utils';
import { KANJI_CATEGORIES, RADICALS, getKanjiByCategory } from '../data';
import { getAcceptableReadings, normalizeReading } from '../reading-utils';
import { loadMistakes, recordAnswer } from '../mistakes';

type QuestionType = 'char-to-meaning' | 'meaning-to-char' | 'char-to-reading';

interface QuizItem {
  id: number;
  char: string;
  meaning: string;
  hanViet: string;
  readingDisplay?: string;
  readingText?: string;
  lesson?: number;
}

type ReadingAnswerMode = 'type' | 'choice' | 'none';

interface QuizQuestion {
  type: QuestionType;
  target: QuizItem;
  choices: QuizItem[];
}

const CHOICE_TYPES: QuestionType[] = ['char-to-meaning', 'meaning-to-char'];
const ALL_TYPES: QuestionType[] = [...CHOICE_TYPES, 'char-to-reading'];

function getAllowedTypes(
  isRadicals: boolean,
  readingAnswerMode: ReadingAnswerMode,
): QuestionType[] {
  return isRadicals || readingAnswerMode === 'none' ? CHOICE_TYPES : ALL_TYPES;
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

function buildQuestions(
  pool: QuizItem[],
  allowedTypes: QuestionType[],
  choiceCount: number,
  readingAnswerMode: ReadingAnswerMode,
): QuizQuestion[] {
  const targets = shuffle(pool).slice(0, Math.min(QUIZ_LENGTH, pool.length));

  return targets.map((target) => {
    const type = allowedTypes[NumberUtils.getRandomInt(allowedTypes.length)];
    if (type === 'char-to-reading' && readingAnswerMode === 'type') {
      return { type, target, choices: [] };
    }
    const distractors = shuffle(pool.filter((k) => k.id !== target.id)).slice(
      0,
      Math.max(0, choiceCount - 1),
    );
    return { type, target, choices: shuffle([target, ...distractors]) };
  });
}

function progressStorageKey(categoryId: string) {
  return `japan-kanji-progress-${categoryId}`;
}

function loadProgress(categoryId: string) {
  const raw = localStorage.getItem(progressStorageKey(categoryId));
  if (!raw) return { correct: 0, total: 0 };
  try {
    return JSON.parse(raw);
  } catch {
    return { correct: 0, total: 0 };
  }
}

function saveProgress(categoryId: string, correct: number, total: number) {
  localStorage.setItem(
    progressStorageKey(categoryId),
    JSON.stringify({ correct, total }),
  );
}

function clearProgress(categoryId: string) {
  localStorage.removeItem(progressStorageKey(categoryId));
}

export const UtilitiesJapanKanjiQuiz = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const isMistakeMode = searchParams.get('mode') === 'mistakes';

  const category = KANJI_CATEGORIES.find(
    (c) => c.id === categoryId && !c.disabled,
  );

  const isRadicals = categoryId === 'radicals';

  const categoryPool: QuizItem[] = useMemo(() => {
    if (!categoryId) return [];
    if (isRadicals) {
      return RADICALS.map((r) => ({
        id: r.id,
        char: r.char,
        meaning: r.meaning,
        hanViet: r.hanViet,
      }));
    }
    return getKanjiByCategory(categoryId).map((k) => ({
      id: k.id,
      char: k.kanji,
      meaning: k.meaning,
      hanViet: k.hanViet,
      readingDisplay: `On: ${k.onyomi}, Kun: ${k.kunyomi}`,
      readingText: k.onyomi,
      lesson: k.lesson,
    }));
  }, [categoryId, isRadicals]);

  const lessonOptions = useMemo(() => {
    if (isRadicals) return [];
    const lessons = Array.from(
      new Set(
        categoryPool.map((item) => item.lesson).filter((l): l is number => !!l),
      ),
    );
    return lessons.sort((a, b) => a - b);
  }, [categoryPool, isRadicals]);

  const readingLookup = useMemo(() => {
    if (!categoryId || isRadicals) return new Map<number, string[]>();
    return new Map(
      getKanjiByCategory(categoryId).map((k) => [
        k.id,
        getAcceptableReadings(k),
      ]),
    );
  }, [categoryId, isRadicals]);

  useEffect(() => {
    if (!category || categoryPool.length < 2) {
      navigate('/utilities/japan/kanji');
    }
    // eslint-disable-next-line
  }, [categoryId, navigate]);

  const [hasStarted, setHasStarted] = useState(isRadicals && !isMistakeMode);
  const [selectedLessons, setSelectedLessons] = useState<number[]>([]);
  const [pool, setPool] = useState<QuizItem[]>(() =>
    isRadicals && !isMistakeMode ? categoryPool : [],
  );
  const [mistakeIds, setMistakeIds] = useState<number[]>(() =>
    categoryId ? loadMistakes(categoryId) : [],
  );

  const maxChoiceCount = Math.min(10, pool.length);
  const choiceCountOptions = CHOICE_COUNT_OPTIONS.filter(
    (n) => n <= maxChoiceCount,
  );

  const [choiceCount, setChoiceCount] = useState(DEFAULT_CHOICE_COUNT);
  const [readingAnswerMode, setReadingAnswerMode] =
    useState<ReadingAnswerMode>('none');

  const allowedTypes = getAllowedTypes(isRadicals, readingAnswerMode);

  const [questions, setQuestions] = useState<QuizQuestion[]>(() =>
    buildQuestions(pool, allowedTypes, DEFAULT_CHOICE_COUNT, 'type'),
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [readingInput, setReadingInput] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isShowChoices, setIsShowChoices] = useState(false);
  const [selectedChoiceId, setSelectedChoiceId] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [allTimeProgress, setAllTimeProgress] = useState(() =>
    categoryId ? loadProgress(categoryId) : { correct: 0, total: 0 },
  );

  const currentQuestion = questions[currentIndex];

  const finishAnswer = (correct: boolean) => {
    setIsAnswered(true);
    setIsCorrect(correct);
    setCorrectCount((value) => (correct ? value + 1 : value));
    setWrongCount((value) => (correct ? value : value + 1));

    if (categoryId) {
      const updated = {
        correct: allTimeProgress.correct + (correct ? 1 : 0),
        total: allTimeProgress.total + 1,
      };
      setAllTimeProgress(updated);
      saveProgress(categoryId, updated.correct, updated.total);

      if (currentQuestion) {
        setMistakeIds(
          recordAnswer(categoryId, currentQuestion.target.id, correct),
        );
      }
    }
  };

  const submitReadingAnswer = () => {
    if (isAnswered || !currentQuestion) return;
    const candidates = readingLookup.get(currentQuestion.target.id) ?? [];
    const normalizedInput = normalizeReading(readingInput);
    const correct =
      normalizedInput !== '' && candidates.includes(normalizedInput);
    finishAnswer(correct);
  };

  const submitChoiceAnswer = (choice: QuizItem) => {
    if (isAnswered || !currentQuestion) return;
    setSelectedChoiceId(choice.id);
    finishAnswer(choice.id === currentQuestion.target.id);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= questions.length) {
      setQuestions(
        buildQuestions(pool, allowedTypes, choiceCount, readingAnswerMode),
      );
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setIsAnswered(false);
    setIsCorrect(false);
    setIsShowChoices(false);
    setSelectedChoiceId(null);
    setReadingInput('');
  };

  const resetSession = (
    nextChoiceCount: number,
    nextReadingAnswerMode: ReadingAnswerMode,
  ) => {
    setQuestions(
      buildQuestions(
        pool,
        getAllowedTypes(isRadicals, nextReadingAnswerMode),
        nextChoiceCount,
        nextReadingAnswerMode,
      ),
    );
    setCurrentIndex(0);
    setIsAnswered(false);
    setIsCorrect(false);
    setIsShowChoices(false);
    setSelectedChoiceId(null);
    setReadingInput('');
    setCorrectCount(0);
    setWrongCount(0);
  };

  const handleChoiceCountChange = (value: number) => {
    setChoiceCount(value);
    resetSession(value, readingAnswerMode);
  };

  const handleReadingAnswerModeChange = (value: ReadingAnswerMode) => {
    setReadingAnswerMode(value);
    resetSession(choiceCount, value);
  };

  const handleClearProgress = () => {
    if (!categoryId) return;
    if (!window.confirm('Xoá toàn bộ tiến độ đã lưu của mục này?')) return;
    clearProgress(categoryId);
    setAllTimeProgress({ correct: 0, total: 0 });
  };

  const handleToggleLesson = (lesson: number) => {
    setSelectedLessons((prev) =>
      prev.includes(lesson)
        ? prev.filter((l) => l !== lesson)
        : [...prev, lesson],
    );
  };

  const handleStartQuiz = () => {
    if (selectedLessons.length === 0) return;
    const filteredPool = categoryPool.filter(
      (item) =>
        item.lesson !== undefined && selectedLessons.includes(item.lesson),
    );
    setPool(filteredPool);
    setQuestions(
      buildQuestions(
        filteredPool,
        allowedTypes,
        choiceCount,
        readingAnswerMode,
      ),
    );
    setCurrentIndex(0);
    setIsAnswered(false);
    setIsCorrect(false);
    setIsShowChoices(false);
    setSelectedChoiceId(null);
    setReadingInput('');
    setCorrectCount(0);
    setWrongCount(0);
    setHasStarted(true);
  };

  useEffect(() => {
    if (!isMistakeMode || hasStarted || categoryPool.length === 0) return;

    const filteredPool = categoryPool.filter((item) =>
      mistakeIds.includes(item.id),
    );
    if (filteredPool.length < 2) {
      alert('Chưa có đủ câu sai để ôn tập (cần ít nhất 2 câu).');
      navigate(`/utilities/japan/kanji/${categoryId}`);
      return;
    }
    setPool(filteredPool);
    setQuestions(
      buildQuestions(
        filteredPool,
        allowedTypes,
        choiceCount,
        readingAnswerMode,
      ),
    );
    setHasStarted(true);
    // eslint-disable-next-line
  }, [isMistakeMode, categoryPool, hasStarted]);

  if (!category) {
    return null;
  }

  if (!hasStarted && !isMistakeMode) {
    return (
      <>
        <PageTitle title={`Trắc nghiệm - ${category.name}`}></PageTitle>
        <div className="row mt-2">
          <div className="col-12">
            <p className="text-muted">
              Chọn các bài học muốn đưa vào bộ câu hỏi trắc nghiệm:
            </p>
          </div>
        </div>
        <div className="row">
          {lessonOptions.map((lesson) => (
            <div key={lesson} className="col-4 col-sm-3 col-md-2">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`lesson-${lesson}`}
                  checked={selectedLessons.includes(lesson)}
                  onChange={() => handleToggleLesson(lesson)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`lesson-${lesson}`}
                >
                  Bài {lesson}
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
              disabled={selectedLessons.length === 0}
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
        {!isRadicals && (
          <div className="col-6 col-md-4">
            <label className="text-muted font-size-14 mb-0">
              Dạng câu "nhập cách đọc":
            </label>
            <select
              className="form-select form-select-sm"
              value={readingAnswerMode}
              onChange={(e) =>
                handleReadingAnswerModeChange(
                  e.target.value as ReadingAnswerMode,
                )
              }
            >
              <option value="none">Không hỏi dạng này</option>
              <option value="type">Nhập cách đọc</option>
              <option value="choice">Chọn đáp án</option>
            </select>
          </div>
        )}
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="card text-white bg-dark mb-3">
            <div className="card-body text-center">
              {currentQuestion.type === 'meaning-to-char' ? (
                <p className="card-text mb-1">
                  Ký tự nào có nghĩa: <b>{currentQuestion.target.meaning}</b>{' '}
                  (Hán Việt: {currentQuestion.target.hanViet})?
                </p>
              ) : (
                <>
                  <p className="font-size-30 mb-1">
                    <b>{currentQuestion.target.char}</b>
                  </p>
                  {currentQuestion.type === 'char-to-meaning' && (
                    <p className="card-text mb-0">Ký tự này có nghĩa là gì?</p>
                  )}
                  {currentQuestion.type === 'char-to-reading' && (
                    <p className="card-text mb-0">
                      {readingAnswerMode === 'type'
                        ? 'Nhập cách đọc (âm On hoặc âm Kun) của Kanji này'
                        : 'Chọn cách đọc đúng của Kanji này'}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {currentQuestion.type === 'char-to-reading' &&
      readingAnswerMode === 'type' ? (
        <div className="row">
          <div className="col-12 col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập cách đọc bằng hiragana/katakana"
              value={readingInput}
              disabled={isAnswered}
              onChange={(e) => setReadingInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') submitReadingAnswer();
              }}
            />
          </div>
          <div className="col-12 col-md-3 mt-2 mt-md-0">
            <button
              type="button"
              className="btn btn-primary"
              disabled={isAnswered || readingInput.trim() === ''}
              onClick={submitReadingAnswer}
            >
              Kiểm tra
            </button>
          </div>
        </div>
      ) : !isShowChoices ? (
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
                    {currentQuestion.type === 'meaning-to-char' ? (
                      <p className="font-size-24 mb-0">{choice.char}</p>
                    ) : currentQuestion.type === 'char-to-reading' ? (
                      <p className="mb-0">{choice.readingText}</p>
                    ) : (
                      <>
                        <p className="mb-0">{choice.meaning}</p>
                        <p className="mb-0 text-muted font-size-13">
                          Hán Việt: {choice.hanViet}
                        </p>
                      </>
                    )}
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
                  <b>{currentQuestion.target.char}</b> -{' '}
                  {currentQuestion.target.meaning} (Hán Việt:{' '}
                  {currentQuestion.target.hanViet})
                  {currentQuestion.target.readingDisplay
                    ? `, ${currentQuestion.target.readingDisplay}`
                    : ''}
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
