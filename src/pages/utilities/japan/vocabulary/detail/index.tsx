import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import {
  ColumnVisibilityToggle,
  useColumnVisibility,
} from 'components/modules/column-visibility-toggle';
import { PageSizeToggle } from 'components/modules/page-size-toggle';
import {
  VOCABULARY_CATEGORIES,
  VocabularyRow,
  getUnitsByLevel,
  getVocabularyByLevel,
} from '../data';
import { loadMistakes } from '../mistakes';

function speak(text: string) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  window.speechSynthesis.speak(utterance);
}

const PAGE_SIZE_OPTIONS = [10, 20, 30, 50];
const DEFAULT_PAGE_SIZE = 20;
const PAGE_SIZE_STORAGE_KEY = 'japan-vocabulary-detail-page-size';

function loadPageSize(): number {
  const raw = localStorage.getItem(PAGE_SIZE_STORAGE_KEY);
  const parsed = raw ? Number(raw) : NaN;
  return PAGE_SIZE_OPTIONS.includes(parsed) ? parsed : DEFAULT_PAGE_SIZE;
}

const COLUMNS = [
  { key: 'hiragana', label: 'Hiragana' },
  { key: 'kanji', label: 'Kanji' },
  { key: 'translate', label: 'Nghĩa' },
  { key: 'listen', label: 'Nghe' },
  { key: 'unitName', label: 'Bài' },
];

export const UtilitiesJapanVocabularyDetail = () => {
  const navigate = useNavigate();
  const { level } = useParams();

  const category = VOCABULARY_CATEGORIES.find(
    (c) => c.id === level && !c.disabled,
  );

  useEffect(() => {
    if (!category) {
      navigate('/utilities/japan/vocabulary');
    }
    // eslint-disable-next-line
  }, [level, navigate]);

  const allVocabulary = useMemo(
    () => (level ? getVocabularyByLevel(level) : []),
    [level],
  );

  const unitOptions = useMemo(
    () => (level ? getUnitsByLevel(level) : []),
    [level],
  );

  const [keyword, setKeyword] = useState('');
  const [unitFilter, setUnitFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(loadPageSize);
  const [selectedItem, setSelectedItem] = useState<VocabularyRow | null>(null);
  const columnVisibility = useColumnVisibility(
    'japan-vocabulary-detail-columns',
  );

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return allVocabulary.filter((item) => {
      const matchKeyword =
        kw === '' ||
        item.hiragana.toLowerCase().includes(kw) ||
        item.kanji.toLowerCase().includes(kw) ||
        item.translate.toLowerCase().includes(kw);
      const matchUnit = unitFilter === 'all' || item.unit === unitFilter;
      return matchKeyword && matchUnit;
    });
  }, [allVocabulary, keyword, unitFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const handleSearch = (value: string) => {
    setKeyword(value);
    setPage(1);
  };

  const handleFilterUnit = (value: string) => {
    setUnitFilter(value);
    setPage(1);
  };

  const handlePageSizeChange = (value: number) => {
    setPageSize(value);
    localStorage.setItem(PAGE_SIZE_STORAGE_KEY, String(value));
    setPage(1);
  };

  if (!category) {
    return null;
  }

  const mistakeCount = loadMistakes(category.id).length;

  return (
    <>
      <PageTitle title={category.name}></PageTitle>

      <div className="row mt-2 align-items-center">
        <div className="col-12 col-sm-6 col-md-4 mt-2">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Tìm kiếm hiragana, kanji, nghĩa..."
            value={keyword}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="col-6 col-sm-3 col-md-3 mt-2">
          <select
            className="form-select form-select-sm"
            value={unitFilter}
            onChange={(e) => handleFilterUnit(e.target.value)}
          >
            <option value="all">Tất cả bài</option>
            {unitOptions.map((u) => (
              <option key={u.unit} value={u.unit}>
                {u.unitName}
              </option>
            ))}
          </select>
        </div>
        <div className="col-6 col-sm-3 col-md-3 mt-2">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            disabled={allVocabulary.length === 0}
            onClick={() =>
              navigate(`/utilities/japan/vocabulary/${category.id}/quiz`)
            }
          >
            Trắc nghiệm
          </button>
        </div>
        <div className="col-6 col-sm-3 col-md-3 mt-2">
          <button
            type="button"
            className="btn btn-outline-warning btn-sm"
            disabled={mistakeCount === 0}
            onClick={() =>
              navigate(
                `/utilities/japan/vocabulary/${category.id}/quiz?mode=mistakes`,
              )
            }
          >
            Ôn lại câu sai ({mistakeCount})
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 d-flex justify-content-end gap-2">
          <PageSizeToggle
            options={PAGE_SIZE_OPTIONS}
            value={pageSize}
            onChange={handlePageSizeChange}
          />
          <ColumnVisibilityToggle
            columns={COLUMNS}
            visible={columnVisibility.visible}
            onChange={columnVisibility.onChange}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead>
                <tr>
                  {columnVisibility.isVisible('hiragana') && <th>Hiragana</th>}
                  {columnVisibility.isVisible('kanji') && <th>Kanji</th>}
                  {columnVisibility.isVisible('translate') && <th>Nghĩa</th>}
                  {columnVisibility.isVisible('listen') && <th>Nghe</th>}
                  {columnVisibility.isVisible('unitName') && <th>Bài</th>}
                </tr>
              </thead>
              <tbody>
                {pageItems.map((item) => (
                  <tr
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    {columnVisibility.isVisible('hiragana') && (
                      <td>{item.hiragana}</td>
                    )}
                    {columnVisibility.isVisible('kanji') && (
                      <td>{item.kanji}</td>
                    )}
                    {columnVisibility.isVisible('translate') && (
                      <td>{item.translate}</td>
                    )}
                    {columnVisibility.isVisible('listen') && (
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-light py-0 px-1"
                          title="Nghe phát âm"
                          onClick={(e) => {
                            e.stopPropagation();
                            speak(item.hiragana);
                          }}
                        >
                          🔊
                        </button>
                      </td>
                    )}
                    {columnVisibility.isVisible('unitName') && (
                      <td>{item.unitName}</td>
                    )}
                  </tr>
                ))}
                {pageItems.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center text-muted">
                      Không tìm thấy từ vựng phù hợp
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="row mt-2">
          <div className="col-12 d-flex justify-content-center align-items-center gap-2">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              disabled={currentPage === 1}
              onClick={() => setPage(currentPage - 1)}
            >
              Trước
            </button>
            <span>
              Trang {currentPage}/{totalPages}
            </span>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              disabled={currentPage === totalPages}
              onClick={() => setPage(currentPage + 1)}
            >
              Sau
            </button>
          </div>
        </div>
      )}

      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1050,
          }}
        >
          <div
            className="card"
            onClick={(e) => e.stopPropagation()}
            style={{ minWidth: 320, maxWidth: '90vw' }}
          >
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <h1 className="mb-0 font-size-30">
                  {selectedItem.hiragana}
                  <button
                    type="button"
                    className="btn btn-sm btn-light py-0 px-1 ms-2 align-middle"
                    title="Nghe phát âm"
                    onClick={() => speak(selectedItem.hiragana)}
                  >
                    🔊
                  </button>
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Đóng"
                  onClick={() => setSelectedItem(null)}
                ></button>
              </div>
              <p className="mt-2 mb-1">
                <b>Kanji:</b> {selectedItem.kanji || '-'}
              </p>
              <p className="mb-1">
                <b>Nghĩa:</b> {selectedItem.translate}
              </p>
              <p className="mb-3">
                <b>Bài:</b> {selectedItem.unitName}
              </p>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() =>
                  navigate(`/utilities/japan/vocabulary/${category.id}/quiz`)
                }
              >
                Trắc nghiệm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
