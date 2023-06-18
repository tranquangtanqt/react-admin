import { PageTitle } from 'components/modules/page-title';
import { useParams } from 'react-router-dom';
import IContent from 'utils/interface';
import { PageContent } from 'components/modules/page-content';
import headFirstDesignPatternsChapter from './data/_chapter';
import { chapter1 } from './data/chapter-1';
import { chapter2 } from './data/chapter-2';
import { chapter3 } from './data/chapter-3';
import { chapter4_1 } from './data/chapter-4-1';
import { chapter4_2 } from './data/chapter-4-2';
import { chapter5 } from './data/chapter-5';
import { chapter6 } from './data/chapter-6';
import { chapter7_1 } from './data/chapter-7-1';
import { chapter7_2 } from './data/chapter-7-2';
import { chapter8 } from './data/chapter-8';
import { chapter9_1 } from './data/chapter-9-1';
import { chapter9_2 } from './data/chapter-9_2';
import { chapter10 } from './data/chapter-10';
import { chapter11_1 } from './data/chapter-11-1';
import { chapter11_2 } from './data/chapter-11-2';
import { chapter12_1 } from './data/chapter-12-1';
import { chapter12_2 } from './data/chapter-12-2';

export const EbookVietnameseHeadFirstDesignPatterns = () => {
  const params = useParams();
  let data: IContent[] = [];
  const title: string =
    headFirstDesignPatternsChapter[Number(params.chapter) - 1].text;

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
    case '4':
      data = chapter4_1;
      break;
    case '5':
      data = chapter4_2;
      break;
    case '6':
      data = chapter5;
      break;
    case '7':
      data = chapter6;
      break;
    case '8':
      data = chapter7_1;
      break;
    case '9':
      data = chapter7_2;
      break;
    case '10':
      data = chapter8;
      break;
    case '11':
      data = chapter9_1;
      break;
    case '12':
      data = chapter9_2;
      break;
    case '13':
      data = chapter10;
      break;
    case '14':
      data = chapter11_1;
      break;
    case '15':
      data = chapter11_2;
      break;
    case '16':
      data = chapter12_1;
      break;
    case '17':
      data = chapter12_2;
      break;
  }

  return (
    <>
      <PageTitle title={title}></PageTitle>
      <PageContent content={data}></PageContent>
      <div className="tab-1"></div>
    </>
  );
};
