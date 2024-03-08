import { ProgramPHPConvertDatetime } from '../content/php/convert-datetime';
import { ProgramPHPConvertUnicode } from '../content/php/convert-unicode';
import { ProgramPHPLaravelInstallFontDompdf } from '../content/laravel/install-font-dompdf';
import { ProgramPHPDeleteFile } from '../content/php/delete-file';
import { ProgramPHPSubstringEllipses } from '../content/php/substring-ellipses';

export const mapContent = new Map();
mapContent.set('convert-datetime', <ProgramPHPConvertDatetime />);
mapContent.set('convert-unicode', <ProgramPHPConvertUnicode />);
mapContent.set('substring-ellipses', <ProgramPHPSubstringEllipses />);
mapContent.set('delete-file', <ProgramPHPDeleteFile />);
mapContent.set('install-font-dompdf', <ProgramPHPLaravelInstallFontDompdf />);

export const cardData = [
  {
    title: 'Convert',
    links: [
      {
        text: 'Chuyển đổi Datetime',
        path: '/programming/php/convert-datetime',
      },
      {
        text: 'Chuyển chuỗi Unicode thành chuỗi không dấu',
        path: '/programming/php/convert-unicode',
      },
      {
        text: 'Cắt chuỗi với dấu ba chấm (ellipses)',
        path: '/programming/php/substring-ellipses',
      },
      {
        text: 'Xóa tệp',
        path: '/programming/php/delete-file',
      },
    ],
  },
  {
    title: 'Laravel',
    links: [
      {
        text: 'Cài đặt font cho dompdf',
        path: '/programming/php/install-font-dompdf',
      },
    ],
  },
];
