import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const SoftwareNotepadRemoveTextAfterCharacter = () => {
  return (
    <>
      <PageTitle title="Remove Text After Character"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <Code code={`character.*`} language="sql" />
          </div>
          <div className="tab-1">
            <p>Example: 111222233 ={'>'} 111</p>
          </div>
          <div className="tab-1">
            <input
              type="image"
              src={require('resources/img/soffware/notepad/2024-03-08 16 22 02.png')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
