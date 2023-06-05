import { PageTitle } from 'components/modules/page-title';

export const ExcelColorRowOfTable = () => {
  const data = [
    '2023-01-29 22 22 21.jpg',
    '2023-01-29 22 36 09.jpg',
    '2023-01-29 22 39 48.jpg',
    '2023-01-29 22 42 44.jpg',
    '2023-01-29 22 55 21.jpg',
    '2023-01-29 22 56 49.jpg',
    '2023-01-29 22 58 18.jpg',
  ];
  return (
    <>
      <PageTitle title="Tô màu dòng xen kẽ"></PageTitle>
      <div className="row mt-2">
        {data?.map((item: any, index: any) => (
          <div className="col-12 col-sm-4 col-md-4 mt-2" key={index}>
            <div className="tab-2">
              <h4>{index + 1}.</h4>
              <input
                type="image"
                src={require(`resources/img/programming/excel/${item}`)}
                className="img-thumbnail"
                alt=""
                style={{ width: '300px' }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
