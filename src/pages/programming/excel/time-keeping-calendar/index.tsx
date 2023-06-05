import { PageTitle } from 'components/modules/page-title';

export const ExcelTimekeepingCalendar = () => {
  const data = ['2023-01-30 22 41 26.jpg', '2023-01-30 22 42 00.jpg'];
  return (
    <>
      <PageTitle title="Làm lịch chấm công"></PageTitle>
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
