import { useNavigate } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import { EXAM_CATEGORIES, getQuestionsByLesson } from './data';

export const UtilitiesJapanExam = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageTitle title="Đề thi thử JLPT N5"></PageTitle>
      <div className="row mt-2">
        {EXAM_CATEGORIES.map((category) => (
          <div key={category.id} className="col-6 col-sm-4 col-md-3 mt-2">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  {category.name}
                  {category.disabled && (
                    <span className="badge bg-secondary ms-2">Sắp có</span>
                  )}
                </h5>
                <p className="card-text text-muted mb-1 flex-grow-1">
                  {category.disabled
                    ? 'Chưa có đề'
                    : `${getQuestionsByLesson(category.lesson).length} câu hỏi`}
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm align-self-start"
                  disabled={category.disabled}
                  onClick={() =>
                    navigate(`/utilities/japan/exam/${category.id}/quiz`)
                  }
                >
                  Làm bài
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
