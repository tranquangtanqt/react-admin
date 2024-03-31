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
import {
  thing11,
  thing12,
  thing13,
  thing14,
  thing15,
  thing16,
  thing17,
  thing18,
  thing19,
  thing20,
} from './data/11-20';
import {
  thing21,
  thing22,
  thing23,
  thing24,
  thing25,
  thing26,
  thing27,
  thing28,
  thing29,
  thing30,
} from './data/21-30';
import {
  thing31,
  thing32,
  thing33,
  thing34,
  thing35,
  thing36,
  thing37,
  thing38,
  thing39,
  thing40,
} from './data/31-40';
import {
  thing41,
  thing42,
  thing43,
  thing44,
  thing45,
  thing46,
  thing47,
  thing48,
  thing49,
  thing50,
} from './data/41-50';
import {
  thing51,
  thing52,
  thing53,
  thing54,
  thing55,
  thing56,
  thing57,
  thing58,
  thing59,
  thing60,
} from './data/51-60';
import {
  thing61,
  thing62,
  thing63,
  thing64,
  thing65,
  thing66,
  thing67,
  thing68,
  thing69,
  thing70,
} from './data/61-70';
import {
  thing71,
  thing72,
  thing73,
  thing74,
  thing75,
  thing76,
  thing77,
  thing78,
  thing79,
  thing80,
} from './data/71-80';
import {
  thing81,
  thing82,
  thing83,
  thing84,
  thing85,
  thing86,
  thing87,
  thing88,
  thing89,
  thing90,
} from './data/81-90';
import {
  thing91,
  thing92,
  thing93,
  thing94,
  thing95,
  thing96,
  thing97,
} from './data/91-97';

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
    case '11':
      data = thing11;
      break;
    case '12':
      data = thing12;
      break;
    case '13':
      data = thing13;
      break;
    case '14':
      data = thing14;
      break;
    case '15':
      data = thing15;
      break;
    case '16':
      data = thing16;
      break;
    case '17':
      data = thing17;
      break;
    case '18':
      data = thing18;
      break;
    case '19':
      data = thing19;
      break;
    case '20':
      data = thing20;
      break;
    case '21':
      data = thing21;
      break;
    case '22':
      data = thing22;
      break;
    case '23':
      data = thing23;
      break;
    case '24':
      data = thing24;
      break;
    case '25':
      data = thing25;
      break;
    case '26':
      data = thing26;
      break;
    case '27':
      data = thing27;
      break;
    case '28':
      data = thing28;
      break;
    case '29':
      data = thing29;
      break;
    case '30':
      data = thing30;
      break;
    case '31':
      data = thing31;
      break;
    case '32':
      data = thing32;
      break;
    case '33':
      data = thing33;
      break;
    case '34':
      data = thing34;
      break;
    case '35':
      data = thing35;
      break;
    case '36':
      data = thing36;
      break;
    case '37':
      data = thing37;
      break;
    case '38':
      data = thing38;
      break;
    case '39':
      data = thing39;
      break;
    case '40':
      data = thing40;
      break;
    case '41':
      data = thing41;
      break;
    case '42':
      data = thing42;
      break;
    case '43':
      data = thing43;
      break;
    case '44':
      data = thing44;
      break;
    case '45':
      data = thing45;
      break;
    case '46':
      data = thing46;
      break;
    case '47':
      data = thing47;
      break;
    case '48':
      data = thing48;
      break;
    case '49':
      data = thing49;
      break;
    case '50':
      data = thing50;
      break;
    case '51':
      data = thing51;
      break;
    case '52':
      data = thing52;
      break;
    case '53':
      data = thing53;
      break;
    case '54':
      data = thing54;
      break;
    case '55':
      data = thing55;
      break;
    case '56':
      data = thing56;
      break;
    case '57':
      data = thing57;
      break;
    case '58':
      data = thing58;
      break;
    case '59':
      data = thing59;
      break;
    case '60':
      data = thing60;
      break;
    case '61':
      data = thing61;
      break;
    case '62':
      data = thing62;
      break;
    case '63':
      data = thing63;
      break;
    case '64':
      data = thing64;
      break;
    case '65':
      data = thing65;
      break;
    case '66':
      data = thing66;
      break;
    case '67':
      data = thing67;
      break;
    case '68':
      data = thing68;
      break;
    case '69':
      data = thing69;
      break;
    case '70':
      data = thing70;
      break;
    case '71':
      data = thing71;
      break;
    case '72':
      data = thing72;
      break;
    case '73':
      data = thing73;
      break;
    case '74':
      data = thing74;
      break;
    case '75':
      data = thing75;
      break;
    case '76':
      data = thing76;
      break;
    case '77':
      data = thing77;
      break;
    case '78':
      data = thing78;
      break;
    case '79':
      data = thing79;
      break;
    case '80':
      data = thing80;
      break;
    case '81':
      data = thing81;
      break;
    case '82':
      data = thing82;
      break;
    case '83':
      data = thing83;
      break;
    case '84':
      data = thing84;
      break;
    case '85':
      data = thing85;
      break;
    case '86':
      data = thing86;
      break;
    case '87':
      data = thing87;
      break;
    case '88':
      data = thing88;
      break;
    case '89':
      data = thing89;
      break;
    case '90':
      data = thing90;
      break;
    case '91':
      data = thing91;
      break;
    case '92':
      data = thing92;
      break;
    case '93':
      data = thing93;
      break;
    case '94':
      data = thing94;
      break;
    case '95':
      data = thing95;
      break;
    case '96':
      data = thing96;
      break;
    case '97':
      data = thing97;
      break;
  }

  return (
    <>
      <PageTitle title={title}></PageTitle>
      <PageContent content={data}></PageContent>
    </>
  );
};
