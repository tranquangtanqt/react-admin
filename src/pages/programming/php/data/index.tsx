import { ProgramPHPConvertDatetime } from '../content/php/convert-datetime';
import { ProgramPHPConvertUnicode } from '../content/php/convert-unicode';
import { ProgramPHPLaravelInstallFontDompdf } from '../content/laravel/install-font-dompdf';
import { ProgramPHPDeleteFile } from '../content/php/delete-file';
import { ProgramPHPSubstringEllipses } from '../content/php/substring-ellipses';
import { ProgramPHPLaravelNewLineInBlade } from '../content/laravel/new-line-in-blade';
import { ProgramPHPRegexDateFormatYYYYMMDD } from '../content/php/regex-check-date-format-yyyymmdd';
import { ProgramPHPLaravelCallApi } from '../content/laravel/call-api';
import { ProgramPHPNumberFormat } from '../content/php/number-format';
import { ProgramPHPLaravelPaginationBootstrap } from '../content/laravel/pagination-bootstrap';
import { ProgramPHPConvertShiftJisToUTF8 } from '../content/php/convert-shift-jis-to-utf8';

export const mapContent = new Map();
mapContent.set('php-convert-datetime', <ProgramPHPConvertDatetime />);
mapContent.set('php-convert-unicode', <ProgramPHPConvertUnicode />);
mapContent.set('php-substring-ellipses', <ProgramPHPSubstringEllipses />);
mapContent.set('php-delete-file', <ProgramPHPDeleteFile />);
mapContent.set(
  'php-regex-check-date-format-yyyymmdd',
  <ProgramPHPRegexDateFormatYYYYMMDD />,
);
mapContent.set('php-number-format', <ProgramPHPNumberFormat />);
mapContent.set('php-shift-jis-to-utf8', <ProgramPHPConvertShiftJisToUTF8 />);

mapContent.set(
  'laravel-install-font-dompdf',
  <ProgramPHPLaravelInstallFontDompdf />,
);
mapContent.set(
  'laravel-new-line-in-blade',
  <ProgramPHPLaravelNewLineInBlade />,
);
mapContent.set('laravel-call-api', <ProgramPHPLaravelCallApi />);
mapContent.set(
  'laravel-pagination-bootstrap',
  <ProgramPHPLaravelPaginationBootstrap />,
);

export const cardData = [
  {
    title: 'PHP',
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
      {
        text: 'Biểu thức chính quy kiểm tra định dạng yyyymmdd',
        path: '/programming/php/php-regex-check-date-format-yyyymmdd',
      },
      {
        text: 'Hàm number_format() trong PHP',
        path: '/programming/php/php-number-format',
      },
      {
        text: 'Chuyển đổi Shift-Jis sang UTF8',
        path: '/programming/php/php-shift-jis-to-utf8',
      },
    ],
  },
  {
    title: 'Laravel',
    links: [
      {
        text: 'Cài đặt font cho dompdf',
        path: '/programming/php/laravel-install-font-dompdf',
      },
      {
        text: 'Xuống dòng trong Blade',
        path: '/programming/php/laravel-new-line-in-blade',
      },
      {
        text: 'Gọi API',
        path: '/programming/php/laravel-call-api',
      },
      {
        text: 'Phân trang bootstrap',
        path: '/programming/php/laravel-pagination-bootstrap',
      },
    ],
  },
];
