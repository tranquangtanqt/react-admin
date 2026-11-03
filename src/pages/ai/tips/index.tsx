import { useMemo, useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import {
  AI_SHEET_NAME,
  cell,
  GetSheetRows,
  useAiSheetData,
} from '../use-ai-sheet-data';
import { AiDataSource } from '../ai-data-source';
import { AI_TIP_CATEGORIES, AI_TIPS } from './data';
import { AiTipCategoryDto, AiTipDto } from './dto';

const FALLBACK = { categories: AI_TIP_CATEGORIES, tips: AI_TIPS };

const parseSheet = (getRows: GetSheetRows) => ({
  categories: getRows(AI_SHEET_NAME.TIP_CATEGORIES).map(
    (row): AiTipCategoryDto => ({
      id: cell(row, 'id'),
      name: cell(row, 'name'),
    }),
  ),
  tips: getRows(AI_SHEET_NAME.TIPS).map(
    (row): AiTipDto => ({
      id: +cell(row, 'id'),
      categoryId: cell(row, 'category_id'),
      title: cell(row, 'title'),
      content: cell(row, 'content'),
      prompt: cell(row, 'prompt') || undefined,
    }),
  ),
});

export const AiTips = () => {
  const [keyword, setKeyword] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const { data, loading, fromSheet } = useAiSheetData(parseSheet, FALLBACK);
  const { categories, tips } = data;

  const filteredTips = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return tips.filter(
      (tip) =>
        (!categoryId || tip.categoryId === categoryId) &&
        (!kw ||
          tip.title.toLowerCase().includes(kw) ||
          tip.content.toLowerCase().includes(kw) ||
          tip.prompt?.toLowerCase().includes(kw)),
    );
  }, [tips, keyword, categoryId]);

  const copyPrompt = async (id: number, prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      // clipboard bị chặn (http, quyền trình duyệt) thì bỏ qua
    }
  };

  return (
    <>
      <PageTitle title="AI - Thủ thuật"></PageTitle>
      <AiDataSource loading={loading} fromSheet={fromSheet} />
      <div className="row mt-2">
        <div className="col-12 col-md-6 mt-1">
          <input
            type="text"
            className="form-control"
            placeholder="Tìm kiếm..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-6 mt-1">
          <button
            type="button"
            className={`btn btn-sm me-1 mb-1 ${
              categoryId === '' ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => setCategoryId('')}
          >
            Tất cả
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`btn btn-sm me-1 mb-1 ${
                categoryId === category.id
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              }`}
              onClick={() => setCategoryId(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {categories.map((category) => {
        const categoryTips = filteredTips.filter(
          (tip) => tip.categoryId === category.id,
        );
        if (categoryTips.length === 0) return null;
        return (
          <div key={category.id} className="row mt-3">
            <h5 className="font-weight-700">{category.name}</h5>
            {categoryTips.map((tip) => (
              <div key={tip.id} className="col-12 col-md-6 mt-2">
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="card-title">
                      <b>{tip.title}</b>
                    </h6>
                    <p className="card-text">{tip.content}</p>
                    {tip.prompt !== undefined && (
                      <>
                        <pre
                          className="bg-light border rounded p-2 mb-1"
                          style={{ whiteSpace: 'pre-wrap' }}
                        >
                          {tip.prompt}
                        </pre>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => copyPrompt(tip.id, tip.prompt ?? '')}
                        >
                          {copiedId === tip.id ? 'Đã copy' : 'Copy prompt'}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}

      {loading ? (
        <p className="text-muted mt-3">Đang tải...</p>
      ) : (
        filteredTips.length === 0 && (
          <p className="text-muted mt-3">Không tìm thấy thủ thuật phù hợp.</p>
        )
      )}
    </>
  );
};
