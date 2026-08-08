import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ColumnVisibilityToggle,
  useColumnVisibility,
} from 'components/modules/column-visibility-toggle';
import { PageSizeToggle } from 'components/modules/page-size-toggle';
import { RADICALS } from '../data';
import { KanjiCategoryDto, RadicalDto } from '../dto';
import { loadMistakes } from '../mistakes';

const PAGE_SIZE_OPTIONS = [10, 20, 30, 50];
const DEFAULT_PAGE_SIZE = 20;
const PAGE_SIZE_STORAGE_KEY = 'japan-radical-detail-page-size';

function loadPageSize(): number {
  const raw = localStorage.getItem(PAGE_SIZE_STORAGE_KEY);
  const parsed = raw ? Number(raw) : NaN;
  return PAGE_SIZE_OPTIONS.includes(parsed) ? parsed : DEFAULT_PAGE_SIZE;
}

const COLUMNS = [
  { key: 'number', label: 'Số bộ' },
  { key: 'char', label: 'Bộ thủ' },
  { key: 'hanViet', label: 'Hán Việt' },
  { key: 'meaning', label: 'Ý nghĩa' },
  { key: 'strokes', label: 'Số nét' },
];

type Props = {
  category: KanjiCategoryDto;
};

export const RadicalDetail = ({ category }: Props) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState('');
  const [commonOnly, setCommonOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(loadPageSize);
  const [selectedRadical, setSelectedRadical] = useState<RadicalDto | null>(
    null,
  );
  const columnVisibility = useColumnVisibility('japan-radical-detail-columns');

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    const source = commonOnly
      ? RADICALS.filter((item) => item.common)
      : RADICALS;
    if (kw === '') return source;
    return source.filter(
      (item) =>
        item.char.includes(kw) ||
        item.hanViet.toLowerCase().includes(kw) ||
        item.meaning.toLowerCase().includes(kw) ||
        String(item.number) === kw,
    );
  }, [keyword, commonOnly]);

  const mistakeCount = loadMistakes(category.id).length;

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

  const handleToggleCommon = (value: boolean) => {
    setCommonOnly(value);
    setPage(1);
  };

  const handlePageSizeChange = (value: number) => {
    setPageSize(value);
    localStorage.setItem(PAGE_SIZE_STORAGE_KEY, String(value));
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
              navigate(
                `/utilities/japan/kanji/${category.id}/quiz${
                  commonOnly ? '?scope=common' : ''
                }`,
              )
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
                `/utilities/japan/kanji/${category.id}/quiz?mode=mistakes`,
              )
            }
          >
            Ôn lại câu sai ({mistakeCount})
          </button>
        </div>
        <div className="col-6 col-sm-3 col-md-2 mt-2">
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={() =>
              navigate(`/utilities/japan/kanji/${category.id}/writing`)
            }
          >
            Tập viết bộ thủ
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="btn-group" role="group">
            <button
              type="button"
              className={`btn btn-sm ${
                !commonOnly ? 'btn-secondary' : 'btn-outline-secondary'
              }`}
              onClick={() => handleToggleCommon(false)}
            >
              Tất cả ({RADICALS.length})
            </button>
            <button
              type="button"
              className={`btn btn-sm ${
                commonOnly ? 'btn-secondary' : 'btn-outline-secondary'
              }`}
              onClick={() => handleToggleCommon(true)}
            >
              Thường gặp ({RADICALS.filter((r) => r.common).length})
            </button>
          </div>
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
                  {columnVisibility.isVisible('number') && <th>Số bộ</th>}
                  {columnVisibility.isVisible('char') && <th>Bộ thủ</th>}
                  {columnVisibility.isVisible('hanViet') && <th>Hán Việt</th>}
                  {columnVisibility.isVisible('meaning') && <th>Ý nghĩa</th>}
                  {columnVisibility.isVisible('strokes') && <th>Số nét</th>}
                </tr>
              </thead>
              <tbody>
                {pageItems.map((item) => (
                  <tr
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedRadical(item)}
                  >
                    {columnVisibility.isVisible('number') && (
                      <td className="text-center">{item.number}</td>
                    )}
                    {columnVisibility.isVisible('char') && (
                      <td className="font-size-24 text-center">{item.char}</td>
                    )}
                    {columnVisibility.isVisible('hanViet') && (
                      <td>{item.hanViet}</td>
                    )}
                    {columnVisibility.isVisible('meaning') && (
                      <td>
                        {item.meaning}
                        {!item.standalone && (
                          <span className="text-muted font-size-13">
                            {' '}
                            (chỉ dùng làm bộ thủ)
                          </span>
                        )}
                      </td>
                    )}
                    {columnVisibility.isVisible('strokes') && (
                      <td className="text-center">{item.strokes}</td>
                    )}
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
              <div className="d-flex gap-2 flex-wrap">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    navigate(`/utilities/japan/kanji/${category.id}/quiz`)
                  }
                >
                  Trắc nghiệm nhóm này
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() =>
                    navigate(
                      `/utilities/japan/kanji/${
                        category.id
                      }/writing?char=${encodeURIComponent(
                        selectedRadical.char,
                      )}`,
                    )
                  }
                >
                  Tập viết bộ thủ này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
