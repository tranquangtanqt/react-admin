import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getKanjiByCategory } from '../data';
import { KanjiCategoryDto, KanjiDto } from '../dto';

const PAGE_SIZE = 10;

type Props = {
  category: KanjiCategoryDto;
};

export const KanjiDetail = ({ category }: Props) => {
  const navigate = useNavigate();

  const allKanji = useMemo(
    () => getKanjiByCategory(category.id),
    [category.id],
  );

  const [keyword, setKeyword] = useState('');
  const [jlptFilter, setJlptFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [selectedKanji, setSelectedKanji] = useState<KanjiDto | null>(null);

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return allKanji.filter((item) => {
      const matchKeyword =
        kw === '' ||
        item.kanji.includes(kw) ||
        item.onyomi.toLowerCase().includes(kw) ||
        item.kunyomi.toLowerCase().includes(kw) ||
        item.hanViet.toLowerCase().includes(kw) ||
        item.meaning.toLowerCase().includes(kw);
      const matchJlpt = jlptFilter === 'all' || item.jlpt === jlptFilter;
      return matchKeyword && matchJlpt;
    });
  }, [allKanji, keyword, jlptFilter]);

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

  const handleFilterJlpt = (value: string) => {
    setJlptFilter(value);
    setPage(1);
  };

  return (
    <>
      <div className="row mt-2 align-items-center">
        <div className="col-12 col-sm-6 col-md-4 mt-2">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Tìm kiếm Kanji, âm đọc, Hán Việt, nghĩa..."
            value={keyword}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="col-6 col-sm-3 col-md-3 mt-2">
          <select
            className="form-select form-select-sm"
            value={jlptFilter}
            onChange={(e) => handleFilterJlpt(e.target.value)}
          >
            <option value="all">Tất cả JLPT</option>
            <option value="N5">N5</option>
            <option value="N4">N4</option>
          </select>
        </div>
        <div className="col-6 col-sm-3 col-md-3 mt-2">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            disabled={allKanji.length === 0}
            onClick={() =>
              navigate(`/utilities/japan/kanji/${category.id}/quiz`)
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
                  <th>Kanji</th>
                  <th>Âm On</th>
                  <th>Âm Kun</th>
                  <th>Hán Việt</th>
                  <th>Nghĩa</th>
                  <th>Ví dụ</th>
                  <th>JLPT</th>
                </tr>
              </thead>
              <tbody>
                {pageItems.map((item) => (
                  <tr
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedKanji(item)}
                  >
                    <td className="font-size-24 text-center">{item.kanji}</td>
                    <td>{item.onyomi}</td>
                    <td>{item.kunyomi}</td>
                    <td>{item.hanViet}</td>
                    <td>{item.meaning}</td>
                    <td>{item.example}</td>
                    <td>{item.jlpt}</td>
                  </tr>
                ))}
                {pageItems.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center text-muted">
                      Không tìm thấy Kanji phù hợp
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

      {selectedKanji && (
        <div
          onClick={() => setSelectedKanji(null)}
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
                <h1 className="mb-0">{selectedKanji.kanji}</h1>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Đóng"
                  onClick={() => setSelectedKanji(null)}
                ></button>
              </div>
              <p className="mt-2 mb-1">
                <b>Âm On:</b> {selectedKanji.onyomi}
              </p>
              <p className="mb-1">
                <b>Âm Kun:</b> {selectedKanji.kunyomi}
              </p>
              <p className="mb-1">
                <b>Hán Việt:</b> {selectedKanji.hanViet}
              </p>
              <p className="mb-1">
                <b>Nghĩa:</b> {selectedKanji.meaning}
              </p>
              <p className="mb-1">
                <b>Ví dụ:</b> {selectedKanji.example}
              </p>
              <p className="mb-3">
                <b>JLPT:</b> {selectedKanji.jlpt}
              </p>
              <p className="text-muted font-size-14">
                Tập viết Kanji (thứ tự nét): sắp ra mắt.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() =>
                  navigate(`/utilities/japan/kanji/${category.id}/quiz`)
                }
              >
                Trắc nghiệm nhóm này
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
