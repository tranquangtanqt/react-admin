import { PageTitle } from "../../../../../components/modules/pageTitle";

export const TutorialJapanVocabularyKanjiN501 = () => {
  let data = ["2023-01-30 23 23 29.jpg",
              "2023-01-30 23 34 50.jpg",
              "2023-01-30 23 28 43.jpg",
              "2023-01-30 23 26 09.jpg",
              "2023-01-30 23 27 19.jpg",
              "2023-01-30 23 27 58.jpg",
              "2023-01-30 23 30 52.jpg",
              "2023-01-30 23 26 48.jpg",
              "2023-01-30 23 31 14.jpg",
              "2023-01-30 23 31 37.jpg",

              "2023-01-30 23 33 28.jpg",
              "2023-01-30 23 33 48.jpg",
              "2023-01-30 23 28 24.jpg",
              "2023-01-30 23 29 07.jpg",
              "2023-01-30 23 29 33.jpg",
              "2023-01-30 23 29 55.jpg",
              "2023-01-30 23 32 01.jpg",
              "2023-01-30 23 32 22.jpg",
              "2023-01-30 23 32 39.jpg",
              "2023-01-30 23 34 31.jpg",

              "2023-01-30 23 34 11.jpg",
              "2023-01-30 23 30 27.jpg",
              "2023-01-30 23 35 11.jpg",
              "2023-01-30 23 35 30.jpg",
              "2023-01-30 23 33 02.jpg",
              "2023-01-30 23 35 50.jpg",
              "2023-01-30 23 37 16.jpg",
              "2023-01-30 23 36 34.jpg",
              "2023-01-30 23 36 56.jpg",
              "2023-01-30 23 38 19.jpg",
              
              "2023-01-30 23 36 13.jpg",
              "2023-01-30 23 37 58.jpg",
              "2023-01-30 23 37 36.jpg",
            ];
  return (
    <>
      <PageTitle title="1. Từ vựng N5 - 01"></PageTitle>
      <div className="row mt-2">
        {data?.map((item: any, index: any) => (
          <div className="col-12 col-sm-6 col-md-6 mt-2" key={index}>
            <div className="tab-2">
              <h4>{ index + 1 }.</h4>
              <input
                type="image"
                src={require(`../../../../../resources/img/tutorials/japan/kanji/N5_01/${item}`)}
                className="img-thumbnail"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
