import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/pageTitle";

export const TutorialJavaLesson2 = () => {
  return (
    <>
      <PageTitle title=""></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>This article discusses getters and setters; the standard way to provide access to data in Java classes</p>

          <b>1. Using a setter or getter to implement a constraint</b>
          <div className="tab-1">
            <p>
              Setters and Getters allow for an object to contain private variables which can be accessed and changed with restrictions. For example
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`public class Person {
    private String name;
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        if(name!=null && name.length()>2)
        this.name = name;
    } 
}`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              In this Person class, there is a single variable: name. This variable can be accessed using the getName() method and changed using the
              setName(String) method, however, setting a name requires the new name to have a length greater than 2 characters and to not be null.
              Using a setter method rather than making the variable name public allows others to set the value of name with certain restrictions. The
              same can be applied to the getter method:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`public String getName(){
    if(name.length()>16)
        return "Name is too large!";
    else
        return name;
}`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              In the modified getName() method above, the name is returned only if its length is less than or equal to 16. Otherwise, "Name is too
              large" is returned. This allows the programmer to create variables that are reachable and modifiable however they wish, preventing
              client classes from editing the variables unwantedly.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Why Use Getters and Setters?</b>
          <div className="tab-1">
            <p>Consider a basic class containing an object with getters and setters in Java:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`public class CountHolder {
    private int count = 0;

    public int getCount() { return count; }
    public void setCount(int c) { count = c; }
}`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              We can't access the count variable because it's private. But we can access the getCount() and the setCount(int) methods because they are
              public. To some, this might raise the question; why introduce the middleman? Why not just simply make they count public?
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`public class CountHolder {
    public int count = 0;
}`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              For all intents and purposes, these two are exactly the same, functionality-wise. The difference between them is the extensibility.
              Consider what each class says:
            </p>
          </div>
          <div className="tab-2">
            <ul>
              <li>First: "I have a method that will give you an int value, and a method that will set that value to another int".</li>
              <li>Second: "I have an int that you can set and get as you please."</li>
            </ul>
          </div>
          <div className="tab-1">
            <p>
              These might sound similar, but the first is actually much more guarded in its nature; it only lets you interact with its internal nature
              as it dictates. This leaves the ball in its court; it gets to choose how the internal interactions occur. The second has exposed its
              internal implementation externally, and is now not only prone to external users, but, in the case of an API, committed to maintaining
              that implementation (or otherwise releasing a non-backwardcompatible API).
            </p>
            <p>Lets consider if we want to synchronize access to modifying and accessing the count. In the first, this is simple:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`public class CountHolder {
    private int count = 0;

    public synchronized int getCount() { return count; }
    public synchronized void setCount(int c) { count = c; }
}`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              but in the second example, this is now nearly impossible without going through and modifying each place where the count variable is
              referenced. Worse still, if this is an item that you're providing in a library to be consumed by others, you do not have a way of
              performing that modification, and are forced to make the hard choice mentioned above.
            </p>
            <p>So it begs the question; are public variables ever a good thing (or, at least, not evil)?</p>
            <p>
              I'm unsure. On one hand, you can see examples of public variables that have stood the test of time (IE: the out variable referenced in
              System.out). On the other, providing a public variable gives no benefit outside of extremely minimal overhead and potential reduction in
              wordiness. My guideline here would be that, if you're planning on making a variable public, you should judge it against these criteria
              with extreme prejudice:
            </p>
          </div>
          <div className="tab-2">
            <ol>
              <li>
                The variable should have no conceivable reason to ever change in its implementation. This is something that's extremely easy to screw
                up (and, even if you do get it right, requirements can change), which is why getters/setters are the common approach. If you're going
                to have a public variable, this really needs to be thought through, especially if released in a library/framework/API.
              </li>
              <li>
                The variable needs to be referenced frequently enough that the minimal gains from reducing verbosity warrants it. I don't even think
                the overhead for using a method versus directly referencing should be considered here. It's far too negligible for what I'd
                conservatively estimate to be 99.9% of applications.
              </li>
            </ol>
          </div>
          <div className="tab-1">
            <p>There's probably more than I haven't considered off the top of my head. If you're ever in doubt, always use getters/setters.</p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Adding Getters and Setters</b>
          <div className="tab-1">
            <p>
              Encapsulation is a basic concept in OOP. It is about wrapping data and code as a single unit. In this case, it is a good practice to
              declare the variables as private and then access them through Getters and Setters to view and/or modify them.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`public class Sample {
    private String name;
    private int age;
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getName() {
        return name;
    }  
    public void setName(String name) {
        this.name = name;
    }
}`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              These private variables cannot be accessed directly from outside the class. Hence they are protected from unauthorized access. But if
              you want to view or modify them, you can use Getters and Setters.
            </p>
            <p>getXxx() method will return the current value of the variable xxx, while you can set the value of the variable xxx using setXxx().</p>
            <p>The naming convention of the methods are (in example variable is called variableName):</p>
          </div>
          <div className="tab-2">
            <p>All non boolean variables</p>
          </div>
          <div className="tab-2">
            <Code
              code={`getVariableName() //Getter, The variable name should start with uppercase
setVariableName(..) //Setter, The variable name should start with uppercase`}
              language="java"
            />
          </div>
          <div className="tab-2">
            <p>boolean variables</p>
          </div>
          <div className="tab-2">
            <Code
              code={`isVariableName() //Getter, The variable name should start with uppercase
setVariableName(...) //Setter, The variable name should start with uppercase`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              Public Getters and Setters are part of the{" "}
              <a href="https://docs.oracle.com/javase/tutorial/javabeans/writing/properties.html" target={"_blank"} rel="noreferrer">
                Property
              </a>{" "}
              definition of a Java Bean.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};