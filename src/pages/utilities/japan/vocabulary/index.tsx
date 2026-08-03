import { useNavigate } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import { VOCABULARY_CATEGORIES, getCategoryItemCount } from './data';

export const UtilitiesJapanVocabulary = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageTitle title="Từ vựng"></PageTitle>
      <div className="row mt-2">
        {VOCABULARY_CATEGORIES.map((category) => (
          <div key={category.id} className="col-12 col-sm-6 col-md-4 mt-2">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  {category.name}
                  {category.disabled && (
                    <span className="badge bg-secondary ms-2">Sắp có</span>
                  )}
                </h5>
                <p className="card-text text-muted mb-1">
                  {getCategoryItemCount(category.id)} từ vựng
                </p>
                <p className="card-text flex-grow-1">{category.description}</p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm align-self-start"
                  disabled={category.disabled}
                  onClick={() =>
                    navigate(`/utilities/japan/vocabulary/${category.id}`)
                  }
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
