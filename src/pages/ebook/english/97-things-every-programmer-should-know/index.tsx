import { PageTitle } from 'components/modules/page-title';
import { useParams } from 'react-router-dom';
import IContent from 'utils/interface';
import { PageContent } from 'components/modules/page-content';
import cleanCodeChapter from './data/_chapter';
import {
  thing1,
  thing10,
  thing2,
  thing3,
  thing4,
  thing5,
  thing6,
  thing7,
  thing8,
  thing9,
} from './data/1-10';

export const EbookEnglish97ThingYouKnow = () => {
  const params = useParams();
  let data: IContent[] = [];
  const title: string = cleanCodeChapter[Number(params.thing_number) - 1].text;

  switch (params.thing_number) {
    case '1':
      data = thing1;
      break;
    case '2':
      data = thing2;
      break;
    case '3':
      data = thing3;
      break;
    case '4':
      data = thing4;
      break;
    case '5':
      data = thing5;
      break;
    case '6':
      data = thing6;
      break;
    case '7':
      data = thing7;
      break;
    case '8':
      data = thing8;
      break;
    case '9':
      data = thing9;
      break;
    case '10':
      data = thing10;
      break;
    // case '11':
    //   data = thing11;
    //   break;
  }

  return (
    <>
      <PageTitle title={title}></PageTitle>
      <PageContent content={data}></PageContent>
      <div className="tab-1">
        <p></p>
      </div>
    </>
  );
};
