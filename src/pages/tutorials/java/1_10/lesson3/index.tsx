import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/page-title";

export const TutorialJavaLesson3 = () => {
  return (
    <>
      <PageTitle title="3. Reference Data Types"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Dereferencing</b>
          <div className="tab-1">
            <p>Dereferencing happens with the . operator:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`Object obj = new Object();
String text = obj.toString(); // 'obj' is dereferenced.`}
              language="java"
            />
          </div>

          <div className="tab-1">
            <p>
              Dereferencing follows the memory address stored in a reference, to the place in memory where the actual object resides. When an object
              has been found, the requested method is called (toString in this case).
            </p>
            <p>When a reference has the value null, dereferencing results in a NullPointerException:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`Object obj = null;
obj.toString(); // Throws a NullpointerException when this statement is executed.`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              null indicates the absence of a value, i.e. following the memory address leads nowhere. So there is no object on which the requested
              method can be called.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="text-indent-1">
            <b>2. Instantiating a reference type</b>
          </div>
          <div className="tab-2">
            <Code code={`Object obj = new Object(); // Note the 'new' keyword`} language="javascript" />
          </div>
          <div className="tab-1">
            <p>Where:</p>
          </div>
          <div className="tab-2">
            <ul>
              <li>Object is a reference type.</li>
              <li>obj is the variable in which to store the new reference.</li>
              <li>Object() is the call to a constructor of Object.</li>
            </ul>
          </div>
          <div className="tab-1">
            <p>What happens:</p>
          </div>
          <div className="tab-2">
            <ul>
              <li>Space in memory is allocated for the object.</li>
              <li>The constructor Object() is called to initialize that memory space.</li>
              <li>The memory address is stored in obj, so that it references the newly created object.</li>
            </ul>
          </div>
          <div className="tab-1">
            <p>This is different from primitives:</p>
          </div>
          <div className="tab-2">
            <Code code={`int i = 10;`} language="javascript" />
          </div>
          <div className="tab-1">
            <p>Where the actual value 10 is stored in i.</p>
          </div>
        </div>
      </div>
    </>
  );
};
