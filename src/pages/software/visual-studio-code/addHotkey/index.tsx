import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const VisualStudioCodeAddHotkey = () => {
  return (
    <>
      <PageTitle title="Add hotkey"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.</b>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input
              type="image"
              src={require('resources/img/soffware/soffware_1.jpg')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2.</b>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input
              type="image"
              src={require('resources/img/soffware/soffware_2.jpg')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3.</b>
          <div className="tab-1">
            <Code
              code={`// Place your key bindings in this file to override the defaults
[
    {
        "key": "ctrl+shift+l",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
          "snippet": "console.log(\${TM_SELECTED_TEXT}$1)$2;"
        }
    }
]`}
              language="json"
            />
          </div>
        </div>
      </div>
    </>
  );
};
