import { useMonaco } from '@monaco-editor/react';
import { PageTitle } from 'components/modules/page-title';

export const SampleMonacoEditorPage = () => {
  const monaco = useMonaco();
  if (monaco) {
    const originalModel = monaco.editor.createModel(
      'heLLo world!',
      'text/plain',
    );

    const modifiedModel = monaco.editor.createModel(
      'hello orlando!',
      'text/plain',
    );

    const diffEditor = monaco.editor.createDiffEditor(
      document.getElementById('container-editor') as HTMLElement,
      {
        originalEditable: true, // for left pane
        readOnly: false, // for right pane
      },
    );

    diffEditor.setModel({
      original: originalModel,
      modified: modifiedModel,
    });

    if (diffEditor.getModel()) {
      monaco.editor.setModelLanguage(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        diffEditor.getModel()!.original,
        'javascript',
      );
    }
  }

  return (
    <>
      <PageTitle title="Monaco Editor Sample"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div id="container-editor" style={{ height: '90vh' }}></div>
        </div>
      </div>
    </>
  );
};
