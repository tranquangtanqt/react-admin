import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const ProgramPHPConvertShiftJisToUTF8 = () => {
  return (
    <>
      <PageTitle title="Chuyển đổi Shift-jis sang UTF8"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code
            code={`mb_convert_variables('UTF-8', 'SJIS', $row);`}
            language="php"
          />
        </div>
      </div>
    </>
  );
};
