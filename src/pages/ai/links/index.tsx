import { useMemo, useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import { AiLinkPricing } from './dto';
import { AI_LINK_CATEGORIES, AI_LINK_PRICING_LABEL, AI_LINKS } from './data';

const PRICING_BADGE_CLASS: Record<AiLinkPricing, string> = {
  free: 'bg-success',
  freemium: 'bg-info text-dark',
  paid: 'bg-warning text-dark',
};

export const AiLinks = () => {
  const [keyword, setKeyword] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const filteredLinks = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return AI_LINKS.filter(
      (link) =>
        (!categoryId || link.categoryId === categoryId) &&
        (!kw ||
          link.name.toLowerCase().includes(kw) ||
          link.description.toLowerCase().includes(kw) ||
          link.url.toLowerCase().includes(kw)),
    );
  }, [keyword, categoryId]);

  return (
    <>
      <PageTitle title="AI - Links"></PageTitle>
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
          <select
            className="form-select"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Tất cả nhóm</option>
            {AI_LINK_CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        {AI_LINK_CATEGORIES.map((category) => {
          const links = filteredLinks.filter(
            (link) => link.categoryId === category.id,
          );
          if (links.length === 0) return null;
          return (
            <div key={category.id} className="col-12 col-md-6 col-xl-4 mt-3">
              <div className="card h-100">
                <div className="card-header font-size-16">
                  <b>{category.name}</b>
                </div>
                <ul className="list-group list-group-flush">
                  {links.map((link) => (
                    <li key={link.id} className="list-group-item">
                      <a href={link.url} target="_blank" rel="noreferrer">
                        <b>{link.name}</b>
                      </a>
                      <span
                        className={`badge ms-2 ${
                          PRICING_BADGE_CLASS[link.pricing]
                        }`}
                      >
                        {AI_LINK_PRICING_LABEL[link.pricing]}
                      </span>
                      <div className="text-muted small">{link.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {filteredLinks.length === 0 && (
        <p className="text-muted mt-3">Không tìm thấy link phù hợp.</p>
      )}
    </>
  );
};
