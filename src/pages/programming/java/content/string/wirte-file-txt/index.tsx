import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const ProgramJavaStringWriteFileTxt = () => {
  return (
    <>
      <PageTitle title="Write file TXT"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code
            code={`public static void main(String[] args) throws IOException {
  FileOutputStream outputStream = null;
  OutputStreamWriter outputStreamWriter = null;
  try {
      BufferedWriter bw = new BufferedWriter (new OutputStreamWriter (
          new FileOutputStream ("D:/sample.txt", false), "Shift_JIS"));
      bw.write ("２バイト");
      bw.close ();
  } catch (Exception ex) {
      throw ex;
  } finally {
      if (outputStreamWriter != null) {
          try {
              outputStreamWriter.close ();
              outputStream.close ();
          } catch (IOException ioe) {
              ioe.printStackTrace ();
              throw ioe;
          }
      }
  }
}`}
            language="java"
          />
        </div>
      </div>
    </>
  );
};
