import { ProgramJavaArrayArgument } from '../array/argument';
import { ProgramJavaDeleteData1 } from '../content/spring-boot/_crud/delete-data1';
import { ProgramJavaInsertData1 } from '../content/spring-boot/_crud/insert-data1';
import { ProgramJavaSelectData1 } from '../content/spring-boot/_crud/select-data1';
import { ProgramJavaSelectData2 } from '../content/spring-boot/_crud/select-data2';
import { ProgramJavaSettingMaven } from '../content/spring-boot/_crud/setting-maven';
import { ProgramJavaUpdateData1 } from '../content/spring-boot/_crud/update-data1';
import { ProgramJavaStringRemoveSpaceFullSize } from '../content/string/remove-space-full-size';
import { ProgramJavaStringWriteFileTxt } from '../content/string/wirte-file-txt';
import { ProgramJavaOther } from '../other';
import { ProgramJavaTip30ForBeginners } from '../tips/30-tips-for-beginners';
import { ProgramJavaTipCodingConventionsAdditionalSuggestions } from '../tips/coding-conventions-additional-suggestions';
import { ProgramJavaTipUsingRegex } from '../tips/regex';

export const mapContent = new Map();
mapContent.set('setting-maven', <ProgramJavaSettingMaven />);
mapContent.set('select-data-1', <ProgramJavaSelectData1 />);
mapContent.set('insert-data-1', <ProgramJavaInsertData1 />);
mapContent.set('update-data-1', <ProgramJavaUpdateData1 />);
mapContent.set('delete-data-1', <ProgramJavaDeleteData1 />);
mapContent.set('select-data-2', <ProgramJavaSelectData2 />);
mapContent.set('arbitrary-number-of-arguments', <ProgramJavaArrayArgument />);

mapContent.set('string-write-file-txt', <ProgramJavaStringWriteFileTxt />);
mapContent.set(
  'string-remove-space-full-size',
  <ProgramJavaStringRemoveSpaceFullSize />,
);

mapContent.set('using-regex', <ProgramJavaTipUsingRegex />);
mapContent.set(
  'coding-conventions-additional-suggestions',
  <ProgramJavaTipCodingConventionsAdditionalSuggestions />,
);
mapContent.set(
  '30-best-practices-for-beginners',
  <ProgramJavaTip30ForBeginners />,
);
mapContent.set('other', <ProgramJavaOther />);

export const cardData = [
  {
    title: 'CRUD: Spring Boot, Hibernate, H2 Database',
    links: [
      {
        text: 'Cài đặt maven và tạo project',
        path: '/programming/java/spring-boot/crud/setting-maven',
      },
      {
        text: 'Select dữ liệu',
        path: '/programming/java/spring-boot/crud/select-data-1',
      },
      {
        text: 'Insert dữ liệu',
        path: '/programming/java/spring-boot/crud/insert-data-1',
      },
      {
        text: 'Update dữ liệu',
        path: '/programming/java/spring-boot/crud/update-data-1',
      },
      {
        text: 'Delete dữ liệu',
        path: '/programming/java/spring-boot/crud/delete-data-1',
      },
      {
        text: 'Select dữ liệu',
        path: '/programming/java/spring-boot/crud/select-data-2',
      },
    ],
  },
  {
    title: 'Array',
    links: [
      {
        text: 'Arbitrary Number of Arguments (Số đối số tùy ý)',
        path: '/programming/java/array/arbitrary-number-of-arguments',
      },
    ],
  },
  {
    title: 'String',
    links: [
      {
        text: 'Remove space full-size',
        path: '/programming/java/string/string-remove-space-full-size',
      },
      {
        text: 'Write file TXT',
        path: '/programming/java/string/string-write-file-txt',
      },
    ],
  },
  {
    title: 'Tips & Tricks',
    links: [
      {
        text: 'Using regex',
        path: '/programming/java/tips-and-tricks/using-regex',
      },
      {
        text: 'Coding conventions additional suggestions',
        path: '/programming/java/tips-and-tricks/coding-conventions-additional-suggestions',
      },
      {
        text: '30 Java Programming Tips and Best Practices for Beginners',
        path: '/programming/java/tips-and-tricks/30-best-practices-for-beginners',
      },
    ],
  },
  {
    title: 'Other',
    links: [
      {
        text: 'Other',
        path: '/programming/java/other',
      },
    ],
  },
];
