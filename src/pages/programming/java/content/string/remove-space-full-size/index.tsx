import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const ProgramJavaStringRemoveSpaceFullSize = () => {
  return (
    <>
      <PageTitle title="Remove space full-size"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code code={`s = s.replaceAll("\\\\p{Z}", "");`} language="java" />
        </div>
      </div>
    </>
  );
};
