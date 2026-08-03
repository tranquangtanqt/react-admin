import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RADICALS } from '../data';
import { KanjiCategoryDto, RadicalDto } from '../dto';

const PAGE_SIZE = 20;

type Props = {
  category: KanjiCategoryDto;
};

export const RadicalDetail = ({ category }: Props) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [selectedRadical, setSelectedRadical] = useState<RadicalDto | null>(
    null,
  );

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    if (kw === '') return RADICALS;
    return RADICALS.filter(
      (item) =>
        item.char.includes(kw) ||
        item.hanViet.toLowerCase().includes(kw) ||
        item.meaning.toLowerCase().includes(kw) ||
        String(item.number) === kw,
    );
  }, [keyword]);

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

  return (
    <>
      <div className="row mt-2 align-items-center">
        <div className="col-12 col-sm-6 col-md-4 mt-2">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Tìm kiếm bộ thủ, số bộ, Hán Việt, nghĩa..."
            value={keyword}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="col-6 col-sm-3 col-md-3 mt-2">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
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
                  <th>Số bộ</th>
                  <th>Bộ thủ</th>
                  <th>Hán Việt</th>
                  <th>Ý nghĩa</th>
                  <th>Số nét</th>
                </tr>
              </thead>
              <tbody>
                {pageItems.map((item) => (
                  <tr
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedRadical(item)}
                  >
                    <td className="text-center">{item.number}</td>
                    <td className="font-size-24 text-center">{item.char}</td>
                    <td>{item.hanViet}</td>
                    <td>
                      {item.meaning}
                      {!item.standalone && (
                        <span className="text-muted font-size-13">
                          {' '}
                          (chỉ dùng làm bộ thủ)
                        </span>
                      )}
                    </td>
                    <td className="text-center">{item.strokes}</td>
                  </tr>
                ))}
                {pageItems.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center text-muted">
                      Không tìm thấy bộ thủ phù hợp
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

      {selectedRadical && (
        <div
          onClick={() => setSelectedRadical(null)}
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
                <h1 className="mb-0">{selectedRadical.char}</h1>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Đóng"
                  onClick={() => setSelectedRadical(null)}
                ></button>
              </div>
              <p className="mt-2 mb-1">
                <b>Số bộ:</b> {selectedRadical.number}
              </p>
              <p className="mb-1">
                <b>Số nét:</b> {selectedRadical.strokes}
              </p>
              <p className="mb-1">
                <b>Hán Việt:</b> {selectedRadical.hanViet}
              </p>
              {selectedRadical.standalone ? (
                <p className="mb-3">
                  <b>Ý nghĩa:</b> {selectedRadical.meaning}
                </p>
              ) : (
                <p className="mb-3 text-muted">
                  <b>Ghi chú:</b> Mô tả hình dạng "{selectedRadical.meaning}" -
                  chỉ dùng làm bộ thủ, không phải chữ độc lập trong tiếng Nhật
                  hiện đại.
                </p>
              )}
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
