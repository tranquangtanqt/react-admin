import { ProgramJavaArrayArgument } from '../array/argument';
import { ProgramJavaDeleteData1 } from '../content/spring-boot/_crud/delete-data1';
import { ProgramJavaInsertData1 } from '../content/spring-boot/_crud/insert-data1';
import { ProgramJavaSelectData1 } from '../content/spring-boot/_crud/select-data1';
import { ProgramJavaSelectData2 } from '../content/spring-boot/_crud/select-data2';
import { ProgramJavaSettingMaven } from '../content/spring-boot/_crud/setting-maven';
import { ProgramJavaUpdateData1 } from '../content/spring-boot/_crud/update-data1';

export const mapContent = new Map();
mapContent.set('setting-maven', <ProgramJavaSettingMaven />);
mapContent.set('select-data-1', <ProgramJavaSelectData1 />);
mapContent.set('insert-data-1', <ProgramJavaInsertData1 />);
mapContent.set('update-data-1', <ProgramJavaUpdateData1 />);
mapContent.set('delete-data-1', <ProgramJavaDeleteData1 />);
mapContent.set('select-data-2', <ProgramJavaSelectData2 />);
mapContent.set('arbitrary-number-of-arguments', <ProgramJavaArrayArgument />);

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
];
