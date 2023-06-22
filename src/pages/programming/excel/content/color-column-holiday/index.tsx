import { PageTitle } from 'components/modules/page-title';

export const ProgramExcelColorColumnHoliday = () => {
  const data = [
    '2023-01-30 22 32 58.jpg',
    '2023-01-30 22 22 12.jpg',
    '2023-01-30 22 27 26.jpg',
    '2023-01-30 22 29 18.jpg',
    '2023-01-30 22 30 36.jpg',
    '2023-01-30 22 31 25.jpg',
    '2023-01-30 22 34 28.jpg',
    '2023-01-30 22 32 11.jpg',
  ];
  return (
    <>
      <PageTitle title="Tô màu ngày nghỉ tự động trong bảng chấm công"></PageTitle>
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
