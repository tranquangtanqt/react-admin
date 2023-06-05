import { PageTitle } from 'components/modules/page-title';

export const ExcelConvertDayOfBirthToAge = () => {
  const data = ['2023-01-30 22 53 28.jpg', '2023-01-30 22 53 45.jpg'];
  return (
    <>
      <PageTitle title="Chuyển đổi ngày sinh sang tuổi"></PageTitle>
      <div className="row mt-2">
        <b className="text-danger">=INT(YEARFRAC(A4, TODAY()))</b>
        {data?.map((item: any, index: any) => (
          <div className="col-12 col-sm-4 col-md-4 mt-2" key={index}>
            <div className="tab-2">
              <h4>{index + 1}.</h4>
              {/* <input
                type="image"
                src={require(`resources/img/programming/excel/${item}`)}
                className="img-thumbnail"
                alt=""
                style={{ width: "300px" }}
              /> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
