import { PageTitle } from 'components/modules/page-title';

export const SoftwareNotepadRecordMacro = () => {
  return (
    <>
      <PageTitle title="Record Macro - Multi replace"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>Click Macro-{'>'}Start Recording</p>
            <p>Press CTRL(STRG)+h</p>
            <p>Fill in what you are searching for</p>
            <p>and with what it needs to be replaced.</p>
            <p>Replace dialog should be still open, press ALT+A</p>
            <p>now put in what needs to be searched and replaced next.</p>
            <p>Press ALT+A again, do this until it’s done.</p>
            <p>
              Close Replace dialog window and click Menu-{'>'}Stop Recording.
            </p>
            <p>
              To see if the macro really works press CTRL(STRG)+Z as many times
              as need to
            </p>
            <p>
              get the initial version of the document then click Macro-{'>'}
              Playback.
            </p>
            <p>
              If it results in what you want Click-{'>'}Macro-{'>'}
              SaveCurrentRecordedMacro and give it a meaningful name.
            </p>
            <p>From now on, it should appear in the Macro Menu.</p>
          </div>
        </div>
      </div>
    </>
  );
};
