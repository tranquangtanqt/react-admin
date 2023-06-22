import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const ProgramJavaArrayArgument = () => {
  return (
    <>
      <PageTitle title="Arbitrary Number of Arguments (Số đối số tùy ý)"></PageTitle>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b></b>
          <div className="tab-1">
            <Code
              code={`public void myMethod(String... strings) {
    // method body
}`}
              language="java"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b></b>
          <div className="tab-1">
            <Code
              code={`myMethod(); // Likely useless, but possible
myMethod("one", "two", "three");
myMethod("solo");
myMethod(new String[]{"a", "b", "c"});`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>
            <b>Important Note 1:</b> The argument(s) passed in this way is
            always an array - even if there's just one. Make sure you treat it
            that way in the method body.
          </p>
          <p>
            <b>Important Note 2: </b>The argument that gets the ... must be the
            last in the method signature. So, myMethod(int i, String... strings)
            is okay, but myMethod(String... strings, int i) is not okay.
          </p>
        </div>
      </div>
    </>
  );
};
