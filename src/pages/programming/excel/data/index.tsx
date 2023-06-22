import { ProgramExcelVBA001 } from '../content/VBA/1-10/lession1';
import { ProgramExcelCharactersInExcel } from '../content/characters-in-excel';
import { ProgramExcelColorColumnHoliday } from '../content/color-column-holiday';
import { ProgramExcelColorRowOfTable } from '../content/color-row-of-table';
import { ProgramExcelConvertDayOfBirthToAge } from '../content/convert-day-of-birth-to-age';
import { ProgramExcelFilter1 } from '../content/sort-and-filter/filter1';
import { ProgramExcelSwapDataTwoCell } from '../content/swap-datat-to-cell';
import { ProgramExcelTimekeepingCalendar } from '../content/time-keeping-calendar';

export const mapContent = new Map();
mapContent.set('characters-in-excel', <ProgramExcelCharactersInExcel />);
mapContent.set('filter1', <ProgramExcelFilter1 />);
mapContent.set('swap-data-two-cell', <ProgramExcelSwapDataTwoCell />);
mapContent.set('color-row-of-table', <ProgramExcelColorRowOfTable />);
mapContent.set('timekeeping-calendar', <ProgramExcelTimekeepingCalendar />);
mapContent.set('color-column-holiday', <ProgramExcelColorColumnHoliday />);
mapContent.set(
  'convert-day-of-birth-to-age',
  <ProgramExcelConvertDayOfBirthToAge />,
);
mapContent.set('001', <ProgramExcelVBA001 />);

export const cardData = [
  {
    title: 'Title',
    links: [
      {
        text: 'Characters in Excel',
        path: '/programming/excel/characters-in-excel',
      },
    ],
  },
  {
    title: 'Sort và Filter',
    links: [
      {
        text: 'Filter 1',
        path: '/programming/excel/filter1',
      },
    ],
  },
  {
    title: 'Tips',
    links: [
      {
        text: 'Hoán đổi dữ liệu 2 ô',
        path: '/programming/excel/tips/swap-data-two-cell',
      },
      {
        text: 'Tô màu dòng xen kẽ',
        path: '/programming/excel/tips/color-row-of-table',
      },
      {
        text: 'Làm lịch chấm công',
        path: '/programming/excel/tips/timekeeping-calendar',
      },
      {
        text: 'Tô màu ngày nghỉ tự động',
        path: '/programming/excel/tips/color-column-holiday',
      },
      {
        text: 'Chuyển đổi ngày sinh sang tuổi',
        path: '/programming/excel/tips/convert-day-of-birth-to-age',
      },
    ],
  },
  {
    title: 'VBA',
    links: [
      {
        text: '001. Tạo hyperlink đến toàn bộ các sheet của workbook',
        path: '/programming/excel/vba/001',
      },
    ],
  },
];
