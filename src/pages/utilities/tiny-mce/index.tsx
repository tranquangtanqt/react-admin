import { useRef, useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

export const UtilitiesTinyMCE = () => {
  const [textareaVal, settextareaVal] = useState('');
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const getValue = () => {
    if (editorRef.current) {
      settextareaVal(editorRef.current.getContent());
    }
  };

  return (
    <>
      <PageTitle title="TinyMCE"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Editor
            onInit={(evt, editor) =>
              editorRef ? (editorRef.current = editor) : null
            }
            initialValue=""
            init={{
              height: 300,
              menubar: false,
              toolbar:
                'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => getValue()}
          >
            GET CONTENT
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="output" className="form-label">
            Result
          </label>
          <textarea
            id="output"
            className="form-control"
            value={textareaVal}
            onChange={(e) => settextareaVal(e.target.value)}
            style={{ height: 200, width: '100%' }}
          />
        </div>
      </div>
    </>
  );
};
