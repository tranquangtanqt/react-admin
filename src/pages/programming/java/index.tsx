import { PageTitle } from '../../../components/modules/page-title';
import { CardList } from '../../../components/modules/card-list';

export const ProgrammingJava = () => {
  const cardData = [
    {
      title: 'Spring Boot, Hibernate, H2 Database',
      links: [
        {
          text: 'Cài đặt maven và tạo project',
          path: '/programming-java/setting-maven',
        },
        {
          text: 'Select dữ liệu',
          path: '/programming-java/select-data-1',
        },
        {
          text: 'Insert dữ liệu',
          path: '/programming-java/insert-data-1',
        },
        {
          text: 'Update dữ liệu',
          path: '/programming-java/update-data-1',
        },
        {
          text: 'Delete dữ liệu',
          path: '/programming-java/delete-data-1',
        },
        {
          text: 'Select dữ liệu',
          path: '/programming-java/select-data-2',
        },
      ],
    },
  ];
  return (
    <>
      <PageTitle title="C Sharp"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};
