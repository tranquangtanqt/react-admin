import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import HanziWriter from 'hanzi-writer';
import { PageTitle } from 'components/modules/page-title';
import { KANJI_CATEGORIES, RADICALS, getKanjiByCategory } from '../data';

const WRITER_SIZE = 300;

type QuizResult = {
  totalMistakes: number;
  totalStrokes: number;
  scorePercent: number;
  mistakeStrokes: number[];
};

type WritingItem = {
  id: number;
  kanji: string;
  hanViet: string;
  meaning: string;
};

export const UtilitiesJapanKanjiWriting = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const kanjiParam = searchParams.get('char') || '';
  const isRandom = searchParams.get('random') === '1';

  const category = KANJI_CATEGORIES.find(
    (c) => c.id === categoryId && !c.disabled,
  );

  const allKanji: WritingItem[] = useMemo(() => {
    if (!category) return [];
    if (category.id === 'radicals') {
      return RADICALS.map((r) => ({
        id: r.id,
        kanji: r.char,
        hanViet: r.hanViet,
        meaning: r.meaning,
      }));
    }
    return getKanjiByCategory(category.id);
  }, [category]);

  const [keyword, setKeyword] = useState('');
  const filteredKanji = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    if (!kw) return allKanji;
    return allKanji.filter(
      (item) =>
        item.kanji.includes(kw) ||
        item.hanViet.toLowerCase().includes(kw) ||
        item.meaning.toLowerCase().includes(kw),
    );
  }, [allKanji, keyword]);

  const selected: WritingItem | undefined = allKanji.find(
    (item) => item.kanji === kanjiParam,
  );

  useEffect(() => {
    if (!category) {
      navigate('/utilities/japan/kanji');
    }
    // eslint-disable-next-line
  }, [categoryId, navigate]);

  if (!category) {
    return null;
  }

  const isRadicalCategory = category.id === 'radicals';

  const selectKanji = (kanji: string) => {
    setSearchParams({ char: kanji });
  };

  const selectRandomKanji = (exclude?: string) => {
    const pool = exclude
      ? allKanji.filter((item) => item.kanji !== exclude)
      : allKanji;
    if (pool.length === 0) return;
    const item = pool[Math.floor(Math.random() * pool.length)];
    setSearchParams({ char: item.kanji, random: '1' });
  };

  const goBackToPicker = () => {
    setSearchParams({});
  };

  return (
    <>
      <PageTitle
        title={
          isRadicalCategory
            ? 'Tập viết bộ thủ'
            : `Tập viết Kanji - ${category.name}`
        }
      ></PageTitle>

      {!selected ? (
        <>
          <div className="row mt-2 align-items-center">
            <div className="col-12 col-sm-6 col-md-4">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder={
                  isRadicalCategory
                    ? 'Tìm bộ thủ, Hán Việt, nghĩa...'
                    : 'Tìm Kanji, Hán Việt, nghĩa...'
                }
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-2 mt-sm-0">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                disabled={allKanji.length === 0}
                onClick={() => selectRandomKanji()}
              >
                Luyện viết ngẫu nhiên
              </button>
            </div>
          </div>
          <div className="row mt-2">
            {filteredKanji.map((item) => (
              <div key={item.id} className="col-4 col-sm-3 col-md-2 mt-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100 h-100 py-3"
                  onClick={() => selectKanji(item.kanji)}
                  title={`${item.hanViet} - ${item.meaning}`}
                >
                  <div className="font-size-24">{item.kanji}</div>
                  <div className="font-size-12 text-muted">{item.hanViet}</div>
                </button>
              </div>
            ))}
            {filteredKanji.length === 0 && (
              <div className="col-12 text-center text-muted mt-3">
                {isRadicalCategory
                  ? 'Không tìm thấy bộ thủ phù hợp'
                  : 'Không tìm thấy Kanji phù hợp'}
              </div>
            )}
          </div>
        </>
      ) : (
        <WritingPractice
          key={selected.kanji}
          kanji={selected}
          allKanji={allKanji}
          isRandom={isRandom}
          onBack={goBackToPicker}
          onPickKanji={selectKanji}
          onPickRandomKanji={selectRandomKanji}
        />
      )}
    </>
  );
};

type PracticeProps = {
  kanji: WritingItem;
  allKanji: WritingItem[];
  isRandom: boolean;
  onBack: () => void;
  onPickKanji: (kanji: string) => void;
  onPickRandomKanji: (exclude?: string) => void;
};

const WritingPractice = ({
  kanji,
  allKanji,
  isRandom,
  onBack,
  onPickKanji,
  onPickRandomKanji,
}: PracticeProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  const [isQuizzing, setIsQuizzing] = useState(false);
  const [displayMode, setDisplayMode] = useState<'full' | 'outline' | 'hidden'>(
    'full',
  );
  const [result, setResult] = useState<QuizResult | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [hasRadicalData, setHasRadicalData] = useState(false);
  const [radicalColorOn, setRadicalColorOn] = useState(false);

  const currentIndex = allKanji.findIndex((item) => item.kanji === kanji.kanji);
  const nextKanji =
    currentIndex >= 0 && currentIndex < allKanji.length - 1
      ? allKanji[currentIndex + 1]
      : undefined;

  useEffect(() => {
    if (!targetRef.current) return;

    setResult(null);
    setIsQuizzing(false);
    setDisplayMode('hidden');
    setLoadError(false);
    setHasRadicalData(false);
    setRadicalColorOn(false);

    const writer = HanziWriter.create(targetRef.current, kanji.kanji, {
      width: WRITER_SIZE,
      height: WRITER_SIZE,
      padding: 8,
      showOutline: false,
      showCharacter: false,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 300,
      strokeColor: '#212529',
      radicalColor: null,
      outlineColor: '#dee2e6',
      drawingColor: '#0d6efd',
    });
    writerRef.current = writer;

    HanziWriter.loadCharacterData(kanji.kanji)
      .then((data: any) => {
        setHasRadicalData(Boolean(data?.radStrokes?.length));
      })
      .catch(() => {
        setLoadError(true);
      });

    return () => {
      writerRef.current = null;
    };
    // eslint-disable-next-line
  }, [kanji.kanji]);

  const handleShow = () => {
    writerRef.current?.showOutline();
    writerRef.current?.showCharacter();
    setDisplayMode('full');
  };

  const handleHide = () => {
    writerRef.current?.showOutline();
    writerRef.current?.hideCharacter();
    setDisplayMode('outline');
  };

  const handleHideCompletely = () => {
    writerRef.current?.hideCharacter();
    writerRef.current?.hideOutline();
    setDisplayMode('hidden');
  };

  const handleAnimate = () => {
    setDisplayMode('full');
    writerRef.current?.showOutline();
    writerRef.current?.showCharacter();
    writerRef.current?.animateCharacter();
  };

  const handleToggleRadicalColor = () => {
    const nextOn = !radicalColorOn;
    writerRef.current?.updateColor('radicalColor', nextOn ? '#e8590c' : null);
    setRadicalColorOn(nextOn);
  };

  const handleStartQuiz = (mode: 'full' | 'outline') => {
    const writer = writerRef.current;
    if (!writer) return;

    setResult(null);
    setIsQuizzing(true);
    writer.hideCharacter();
    if (mode === 'outline') {
      writer.showOutline();
      setDisplayMode('outline');
    } else {
      writer.hideOutline();
      setDisplayMode('hidden');
    }

    const mistakeStrokes = new Set<number>();

    writer.quiz({
      showHintAfterMisses: 3,
      onMistake: (strokeData) => {
        mistakeStrokes.add(strokeData.strokeNum + 1);
      },
      onComplete: (summary) => {
        HanziWriter.loadCharacterData(kanji.kanji)
          .then((data: any) => {
            const totalStrokes = data.strokes.length;
            const scorePercent = Math.max(
              0,
              Math.round(
                ((totalStrokes - summary.totalMistakes) / totalStrokes) * 100,
              ),
            );
            setResult({
              totalMistakes: summary.totalMistakes,
              totalStrokes,
              scorePercent,
              mistakeStrokes: Array.from(mistakeStrokes).sort((a, b) => a - b),
            });
            setIsQuizzing(false);
          })
          .catch(() => {
            setResult({
              totalMistakes: summary.totalMistakes,
              totalStrokes: 0,
              scorePercent: summary.totalMistakes === 0 ? 100 : 0,
              mistakeStrokes: Array.from(mistakeStrokes).sort((a, b) => a - b),
            });
            setIsQuizzing(false);
          });
      },
    });
  };

  const handleRetry = () => {
    setResult(null);
    setDisplayMode('full');
    writerRef.current?.cancelQuiz();
    writerRef.current?.showOutline();
    writerRef.current?.showCharacter();
    setIsQuizzing(false);
  };

  return (
    <div className="row mt-2">
      <div className="col-12 d-flex flex-wrap gap-2 align-items-center mb-2">
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={onBack}
        >
          &larr; Chọn Kanji khác
        </button>
        <span className="font-size-14 text-muted">
          {kanji.hanViet} - {kanji.meaning}
        </span>
      </div>

      <div className="col-12 col-md-6">
        <div className="card">
          <div className="card-body d-flex flex-column align-items-center">
            <div
              ref={targetRef}
              style={{ width: WRITER_SIZE, height: WRITER_SIZE }}
              className="border rounded"
            ></div>
            {loadError && (
              <p className="text-danger font-size-13 mt-2">
                Không tải được dữ liệu nét viết cho chữ này (cần kết nối mạng).
              </p>
            )}
            <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                disabled={isQuizzing || displayMode === 'full'}
                onClick={handleShow}
              >
                Hiện chữ mẫu
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                disabled={isQuizzing || displayMode === 'outline'}
                onClick={handleHide}
              >
                Ẩn chữ mẫu
              </button>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm"
                disabled={isQuizzing || displayMode === 'hidden'}
                onClick={handleHideCompletely}
              >
                Ẩn hoàn toàn
              </button>
              <button
                type="button"
                className="btn btn-outline-info btn-sm"
                disabled={isQuizzing}
                onClick={handleAnimate}
              >
                Phát animation
              </button>
              <button
                type="button"
                className={`btn btn-sm ${
                  radicalColorOn ? 'btn-warning' : 'btn-outline-warning'
                }`}
                disabled={isQuizzing || !hasRadicalData}
                title={
                  hasRadicalData
                    ? undefined
                    : 'Chữ này chưa có dữ liệu tách bộ thủ'
                }
                onClick={handleToggleRadicalColor}
              >
                Tô màu bộ thủ
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-3 mt-md-0">
        <div className="card h-100">
          <div className="card-body d-flex flex-column">
            <h6>Khu vực luyện viết</h6>
            <p className="text-muted font-size-13">
              Bấm &quot;Bắt đầu luyện viết&quot; rồi dùng chuột hoặc ngón tay để
              viết từng nét lên đúng vị trí ô vuông bên trái. Hệ thống sẽ tự
              nhận diện và báo sai ngay khi bạn viết nhầm nét.
            </p>
            {!isQuizzing && !result && (
              <div className="d-flex flex-wrap gap-2 mt-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleStartQuiz('full')}
                >
                  Bắt đầu (ẩn hoàn toàn)
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => handleStartQuiz('outline')}
                >
                  Bắt đầu (ẩn một phần)
                </button>
              </div>
            )}
            {isQuizzing && (
              <div className="alert alert-info mt-2 mb-0">
                Đang luyện viết... hãy viết từng nét theo đúng thứ tự.
              </div>
            )}
            {result && (
              <div className="mt-2">
                <div
                  className={`alert ${
                    result.scorePercent >= 80
                      ? 'alert-success'
                      : result.scorePercent >= 50
                      ? 'alert-warning'
                      : 'alert-danger'
                  }`}
                >
                  <p className="mb-1">
                    <b>Kết quả:</b>{' '}
                    {result.scorePercent >= 80 ? 'Đúng' : 'Cần luyện thêm'} -{' '}
                    {result.scorePercent}%
                  </p>
                  <p className="mb-1">
                    Tổng số lần viết sai nét: {result.totalMistakes}
                  </p>
                  {result.mistakeStrokes.length > 0 && (
                    <p className="mb-0">
                      Sai nhiều nhất ở nét số:{' '}
                      {result.mistakeStrokes.join(', ')}. Hãy xem lại animation
                      và viết lại các nét này.
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleRetry}
                >
                  Viết lại
                </button>
              </div>
            )}
            {isQuizzing && (
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm mt-2 align-self-start"
                onClick={handleRetry}
              >
                Huỷ, viết lại từ đầu
              </button>
            )}

            <div className="mt-auto pt-3 d-flex gap-2">
              {isRandom ? (
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  disabled={allKanji.length <= 1}
                  onClick={() => onPickRandomKanji(kanji.kanji)}
                >
                  Kanji ngẫu nhiên tiếp theo &rarr;
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  disabled={!nextKanji}
                  onClick={() => nextKanji && onPickKanji(nextKanji.kanji)}
                >
                  Kanji tiếp theo &rarr;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
