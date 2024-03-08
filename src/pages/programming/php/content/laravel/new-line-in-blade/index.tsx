import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const ProgramPHPLaravelNewLineInBlade = () => {
  return (
    <>
      <PageTitle title="Xuống dòng trong Blade"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <div className="col-12 col-sm-12 col-md-12">
              <Code code={`{!! nl2br(e($conten)) !!}`} language="php" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
