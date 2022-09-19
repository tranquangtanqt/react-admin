import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const VisualStudioCodeExtention = () => {
  return (
    <>
      <PageTitle title="Extention"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Extention - Tip</b>
          <div className="tab-1">
            <ul>
              <li>Auto Import</li>
              <li>Git history</li>
              <li>Git lens</li>
              <li>Live server</li>
              <li>One Monokai themes</li>
              <li>Prettier</li>
              <li>Auto Close Tag</li>
              <li>Bookmarks</li>
              <li>Javascript (ES6)</li>
            </ul>
          </div>
          <b>2. Setting max character for Prettier</b>
          <div className="tab-1">
            <Code
              code={`//setting.json
"prettier.printWidth": 120`}
              language="json"
            />
          </div>
        </div>
      </div>
    </>
  );
};
