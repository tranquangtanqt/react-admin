import { PageTitle } from "../../../components/modules/pageTitle";
import { CardList } from "../../../components/modules/cardList";

export const ProgrammingJava = () => {
  const cardData = [
    {
      title: "Spring Boot, Hibernate, H2 Database",
      links: [
        {
          text: "Cài đặt maven và tạo project",
          path: "/programming-java/settingMaven",
        },
        {
          text: "Select dữ liệu",
          path: "/programming-java/selectData1",
        },
        {
          text: "Insert dữ liệu",
          path: "/programming-java/insertData1",
        },
        {
          text: "Update dữ liệu",
          path: "/programming-java/updateData1",
        },
        {
          text: "Delete dữ liệu",
          path: "/programming-java/deleteData1",
        },
        {
          text: "Select dữ liệu",
          path: "/programming-java/selectData2",
        }       
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