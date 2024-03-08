import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const ProgramPHPRegexDateFormatYYYYMMDD = () => {
  return (
    <>
      <PageTitle title="Biểu thức chính quy kiểm tra định dạng yyyymmdd"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <div className="col-12 col-sm-12 col-md-12">
              <Code
                code={`preg_match("/^[0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/", $date)`}
                language="php"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
