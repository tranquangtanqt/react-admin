import { PageTitle } from 'components/modules/page-title';
import { CardList } from 'components/modules/card-list';

export const ProgrammingJava = () => {
  const cardData = [
    {
      title: 'CRUD: Spring Boot, Hibernate, H2 Database',
      links: [
        {
          text: 'Cài đặt maven và tạo project',
          path: '/programming-java/spring-boot/crud/setting-maven',
        },
        {
          text: 'Select dữ liệu',
          path: '/programming-java/spring-boot/crud/select-data-1',
        },
        {
          text: 'Insert dữ liệu',
          path: '/programming-java/spring-boot/crud/insert-data-1',
        },
        {
          text: 'Update dữ liệu',
          path: '/programming-java/spring-boot/crud/update-data-1',
        },
        {
          text: 'Delete dữ liệu',
          path: '/programming-java/spring-boot/crud/delete-data-1',
        },
        {
          text: 'Select dữ liệu',
          path: '/programming-java/spring-boot/crud/select-data-2',
        },
      ],
    },
    {
      title: 'Array',
      links: [
        {
          text: 'Arbitrary Number of Arguments (Số đối số tùy ý)',
          path: '/programming-java/array/arbitrary-number-of-arguments',
        },
      ],
    },
  ];
  return (
    <>
      <PageTitle title="Java"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};
