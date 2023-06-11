import { PageTitle } from 'components/modules/page-title';
import { useParams } from 'react-router-dom';
import IContent from 'utils/interface';
import { PageContent } from 'components/modules/page-content';
import headFirstDesignPatternsChapter from './_chapter';
import { chapter1 } from './chapter-1';
// import { chapter2 } from './chapter-2';
// import { chapter3 } from './chapter-3';
// import { chapter4 } from './chapter-4';
// import { chapter5 } from './chapter-5';
// import { chapter6 } from './chapter-6';
// import { chapter7 } from './chapter-7';
// import { chapter8 } from './chapter-8';
// import { chapter9 } from './chapter-9';
// import { chapter10 } from './chapter-10';
// import { chapter11 } from './chapter-11';

export const EbookVietnameseHeadFirstDesignPatterns = () => {
  const params = useParams();
  let data: IContent[] = [];
  const title: string =
    headFirstDesignPatternsChapter[Number(params.chapter) - 1].text;

  switch (params.chapter) {
    case '1':
      data = chapter1;
      break;
    // case '2':
    //   data = chapter2;
    //   break;
    // case '3':
    //   data = chapter3;
    //   break;
    // case '4':
    //   data = chapter4;
    //   break;
    // case '5':
    //   data = chapter5;
    //   break;
    // case '6':
    //   data = chapter6;
    //   break;
    // case '7':
    //   data = chapter7;
    //   break;
    // case '8':
    //   data = chapter8;
    //   break;
    // case '9':
    //   data = chapter9;
    //   break;
    // case '10':
    //   data = chapter10;
    //   break;
    // case '11':
    //   data = chapter11;
    // break;
  }

  return (
    <>
      <PageTitle title={title}></PageTitle>
      <PageContent content={data}></PageContent>
      <div className="tab-1">
        <p></p>

        <p></p>
      </div>
    </>
  );
};
