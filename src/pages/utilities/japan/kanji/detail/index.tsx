import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import { KANJI_CATEGORIES } from '../data';
import { KanjiDetail } from './kanji-detail';
import { RadicalDetail } from './radical-detail';

export const UtilitiesJapanKanjiDetail = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const category = KANJI_CATEGORIES.find(
    (c) => c.id === categoryId && !c.disabled,
  );

  useEffect(() => {
    if (!category) {
      navigate('/utilities/japan/kanji');
    }
    // eslint-disable-next-line
  }, [categoryId, navigate]);

  if (!category) {
    return null;
  }

  return (
    <>
      <PageTitle title={category.name}></PageTitle>
      {category.id === 'radicals' ? (
        <RadicalDetail category={category} />
      ) : (
        <KanjiDetail category={category} />
      )}
    </>
  );
};
