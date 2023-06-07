import { PageTitle } from 'components/modules/page-title';
import { useParams } from 'react-router-dom';
import { chapter1 } from './chapter-1';
import IContent from 'utils/interface';
import { PageContent } from 'components/modules/page-content';

export const EbookVietnameseCleanCode = () => {
  const params = useParams();
  let data: IContent[] = [];
  if (params.chapter === '1') {
    data = chapter1;
  }

  return (
    <>
      <PageTitle title="Chương 1: Code sạch"></PageTitle>
      <PageContent content={data}></PageContent>
      <div className="tab-1">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </>
  );
};
