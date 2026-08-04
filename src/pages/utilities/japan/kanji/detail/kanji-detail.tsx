import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ColumnVisibilityToggle,
  useColumnVisibility,
} from 'components/modules/column-visibility-toggle';
import { getKanjiByCategory } from '../data';
import { KanjiCategoryDto, KanjiDto } from '../dto';
import { loadMistakes } from '../mistakes';

const PAGE_SIZE = 20;

const COLUMNS = [
  { key: 'kanji', label: 'Kanji' },
  { key: 'onyomi', label: 'Âm On' },
  { key: 'kunyomi', label: 'Âm Kun' },
  { key: 'hanViet', label: 'Hán Việt' },
  { key: 'meaning', label: 'Nghĩa' },
  { key: 'example', label: 'Ví dụ' },
  { key: 'jlpt', label: 'JLPT' },
  { key: 'lesson', label: 'Bài' },
];

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
  const [lessonFilter, setLessonFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [selectedKanji, setSelectedKanji] = useState<KanjiDto | null>(null);
  const columnVisibility = useColumnVisibility('japan-kanji-detail-columns');

  const lessonOptions = useMemo(() => {
    const lessons = Array.from(new Set(allKanji.map((item) => item.lesson)));
    return lessons.sort((a, b) => a - b);
  }, [allKanji]);

  const mistakeCount = loadMistakes(category.id).length;

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
      const matchLesson =
        lessonFilter === 'all' || item.lesson === Number(lessonFilter);
      return matchKeyword && matchJlpt && matchLesson;
    });
  }, [allKanji, keyword, jlptFilter, lessonFilter]);

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

  const handleFilterLesson = (value: string) => {
    setLessonFilter(value);
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
        <div className="col-6 col-sm-3 col-md-2 mt-2">
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
        {lessonOptions.length > 0 && (
          <div className="col-6 col-sm-3 col-md-2 mt-2">
            <select
              className="form-select form-select-sm"
              value={lessonFilter}
              onChange={(e) => handleFilterLesson(e.target.value)}
            >
              <option value="all">Tất cả bài</option>
              {lessonOptions.map((lesson) => (
                <option key={lesson} value={lesson}>
                  Bài {lesson}
                </option>
              ))}
            </select>
          </div>
        )}
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
      </div>

      <div className="row mt-2">
        <div className="col-12 d-flex justify-content-end">
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
                  {columnVisibility.isVisible('kanji') && <th>Kanji</th>}
                  {columnVisibility.isVisible('onyomi') && <th>Âm On</th>}
                  {columnVisibility.isVisible('kunyomi') && <th>Âm Kun</th>}
                  {columnVisibility.isVisible('hanViet') && <th>Hán Việt</th>}
                  {columnVisibility.isVisible('meaning') && <th>Nghĩa</th>}
                  {columnVisibility.isVisible('example') && <th>Ví dụ</th>}
                  {columnVisibility.isVisible('jlpt') && <th>JLPT</th>}
                  {columnVisibility.isVisible('lesson') && <th>Bài</th>}
                </tr>
              </thead>
              <tbody>
                {pageItems.map((item) => (
                  <tr
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedKanji(item)}
                  >
                    {columnVisibility.isVisible('kanji') && (
                      <td className="font-size-24 text-center">{item.kanji}</td>
                    )}
                    {columnVisibility.isVisible('onyomi') && (
                      <td>{item.onyomi}</td>
                    )}
                    {columnVisibility.isVisible('kunyomi') && (
                      <td>{item.kunyomi}</td>
                    )}
                    {columnVisibility.isVisible('hanViet') && (
                      <td>{item.hanViet}</td>
                    )}
                    {columnVisibility.isVisible('meaning') && (
                      <td>{item.meaning}</td>
                    )}
                    {columnVisibility.isVisible('example') && (
                      <td>{item.example}</td>
                    )}
                    {columnVisibility.isVisible('jlpt') && <td>{item.jlpt}</td>}
                    {columnVisibility.isVisible('lesson') && (
                      <td className="text-center">
                        {item.lesson > 0 ? item.lesson : '-'}
                      </td>
                    )}
                  </tr>
                ))}
                {pageItems.length === 0 && (
                  <tr>
                    <td colSpan={8} className="text-center text-muted">
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
              <p className="mb-1">
                <b>JLPT:</b> {selectedKanji.jlpt}
              </p>
              {selectedKanji.lesson > 0 && (
                <p className="mb-3">
                  <b>Bài học:</b> Bài {selectedKanji.lesson} (Minna no Nihongo
                  Sơ cấp I)
                </p>
              )}
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
