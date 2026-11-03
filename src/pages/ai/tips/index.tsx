import { useMemo, useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import { AI_TIP_CATEGORIES, AI_TIPS } from './data';

export const AiTips = () => {
  const [keyword, setKeyword] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredTips = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return AI_TIPS.filter(
      (tip) =>
        (!categoryId || tip.categoryId === categoryId) &&
        (!kw ||
          tip.title.toLowerCase().includes(kw) ||
          tip.content.toLowerCase().includes(kw) ||
          tip.prompt?.toLowerCase().includes(kw)),
    );
  }, [keyword, categoryId]);

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
          {AI_TIP_CATEGORIES.map((category) => (
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

      {AI_TIP_CATEGORIES.map((category) => {
        const tips = filteredTips.filter(
          (tip) => tip.categoryId === category.id,
        );
        if (tips.length === 0) return null;
        return (
          <div key={category.id} className="row mt-3">
            <h5 className="font-weight-700">{category.name}</h5>
            {tips.map((tip) => (
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

      {filteredTips.length === 0 && (
        <p className="text-muted mt-3">Không tìm thấy thủ thuật phù hợp.</p>
      )}
    </>
  );
};
