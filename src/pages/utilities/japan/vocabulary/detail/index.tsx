import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import {
  VOCABULARY_CATEGORIES,
  VocabularyRow,
  getUnitsByLevel,
  getVocabularyByLevel,
} from '../data';

const PAGE_SIZE = 20;

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
  const [selectedItem, setSelectedItem] = useState<VocabularyRow | null>(null);

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

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleSearch = (value: string) => {
    setKeyword(value);
    setPage(1);
  };

  const handleFilterUnit = (value: string) => {
    setUnitFilter(value);
    setPage(1);
  };

  if (!category) {
    return null;
  }

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
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead>
                <tr>
                  <th>Hiragana</th>
                  <th>Kanji</th>
                  <th>Nghĩa</th>
                  <th>Bài</th>
                </tr>
              </thead>
              <tbody>
                {pageItems.map((item) => (
                  <tr
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <td>{item.hiragana}</td>
                    <td>{item.kanji}</td>
                    <td>{item.translate}</td>
                    <td>{item.unitName}</td>
                  </tr>
                ))}
                {pageItems.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center text-muted">
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
                <h1 className="mb-0 font-size-30">{selectedItem.hiragana}</h1>
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
