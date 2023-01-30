import { CardList } from "../../../components/modules/cardList";
import { PageTitle } from "../../../components/modules/pageTitle";

export const TutorialJapan = () => {
  const cardData = [
    {
      title: "Từ vựng Nihongo 1 - 15",
      links: [
        {
          text: "Bài 1",
          path: "/tutorial/japan/vocabulary/lesson1",
        },
        {
          text: "Bài 2",
          path: "/tutorial/japan/vocabulary/lesson2",
        },
        {
          text: "Bài 3",
          path: "/tutorial/japan/vocabulary/lesson3",
        },
        {
          text: "Bài 4",
          path: "/tutorial/japan/vocabulary/lesson4",
        },
        {
          text: "Bài 5",
          path: "/tutorial/japan/vocabulary/lesson5",
        },
        {
          text: "Bài 6",
          path: "/tutorial/japan/vocabulary/lesson6",
        },
        {
          text: "Bài 7",
          path: "/tutorial/japan/vocabulary/lesson7",
        },
        {
          text: "Bài 8",
          path: "/tutorial/japan/vocabulary/lesson8",
        },
        {
          text: "Bài 9",
          path: "/tutorial/japan/vocabulary/lesson9",
        },
        {
          text: "Bài 10",
          path: "/tutorial/japan/vocabulary/lesson10",
        },
        {
          text: "Bài 11",
          path: "/tutorial/japan/vocabulary/lesson11",
        },
        {
          text: "Bài 12",
          path: "/tutorial/japan/vocabulary/lesson12",
        },
        {
          text: "Bài 13",
          path: "/tutorial/japan/vocabulary/lesson13",
        },
        {
          text: "Bài 14",
          path: "/tutorial/japan/vocabulary/lesson14",
        },
        {
          text: "Bài 15",
          path: "/tutorial/japan/vocabulary/lesson15",
        },
      ],
    },
    {
      title: "Từ vựng Nihongo 16 - 25",
      links: [
        {
          text: "Bài 16",
          path: "/tutorial/japan/vocabulary/lesson16",
        },
        {
          text: "Bài 17",
          path: "/tutorial/japan/vocabulary/lesson17",
        },
        {
          text: "Bài 18",
          path: "/tutorial/japan/vocabulary/lesson18",
        },
        {
          text: "Bài 19",
          path: "/tutorial/japan/vocabulary/lesson19",
        },
        {
          text: "Bài 20",
          path: "/tutorial/japan/vocabulary/lesson20",
        },
        {
          text: "Bài 21",
          path: "/tutorial/japan/vocabulary/lesson21",
        },
        {
          text: "Bài 22",
          path: "/tutorial/japan/vocabulary/lesson22",
        },
        {
          text: "Bài 23",
          path: "/tutorial/japan/vocabulary/lesson23",
        },
        {
          text: "Bài 24",
          path: "/tutorial/japan/vocabulary/lesson24",
        },
        {
          text: "Bài 25",
          path: "/tutorial/japan/vocabulary/lesson25",
        },
      ],
    },
    {
      title: "Từ vựng Nihongo chung",
      links: [
        {
          text: "Chung",
          path: "/tutorial/japan/vocabulary/lesson-common",
        },
        {
          text: "Chuyên môn",
          path: "/tutorial/japan/vocabulary/lesson-specialize",
        },
        {
          text: "Nghề nghiệp",
          path: "/tutorial/japan/vocabulary/lesson-job",
        },
        {
          text: "Thức ăn",
          path: "/tutorial/japan/vocabulary/lesson-food",
        },
        {
          text: "Món ăn",
          path: "/tutorial/japan/vocabulary/lesson-food1",
        },
        {
          text: "Gia vị",
          path: "/tutorial/japan/vocabulary/lesson-spice",
        },
        {
          text: "Thân thể",
          path: "/tutorial/japan/vocabulary/lesson-body",
        },
      ],
    },
    {
      title: "Từ vựng Kanji",
      links: [
        {
          text: "N5 - 01",
          path: "/tutorial/japan/vocabulary/kanji/N5-01",
        },
      ],
    },
  ];

  return (
    <>
      <PageTitle title="PostgreSQL"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};
