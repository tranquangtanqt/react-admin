import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const ProgrammBatchGetAllFolder = () => {
  return (
    <>
      <PageTitle title="If...Else..."></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code code={`dir /a:d /b > list.txt`} language="sql" />
        </div>
      </div>
    </>
  );
};
