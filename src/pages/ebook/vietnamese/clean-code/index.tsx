import { PageTitle } from 'components/modules/page-title';
import { useParams } from 'react-router-dom';
import IContent from 'utils/interface';
import { PageContent } from 'components/modules/page-content';
import cleanCodeChapter from './_chapter';
import { chapter1 } from './chapter-1';
import { chapter2 } from './chapter-2';
import { chapter3 } from './chapter-3';

export const EbookVietnameseCleanCode = () => {
  const params = useParams();
  let data: IContent[] = [];
  const title: string = cleanCodeChapter[Number(params.chapter) - 1].text;

  switch (params.chapter) {
    case '1':
      data = chapter1;
      break;
    case '2':
      data = chapter2;
      break;
    case '3':
      data = chapter3;
      break;
  }

  return (
    <>
      <PageTitle title={title}></PageTitle>
      <PageContent content={data}></PageContent>
      <div className="tab-1">
        <p></p>

        <p></p>

        <p></p>

        <p></p>

        <p></p>
      </div>
    </>
  );
};
