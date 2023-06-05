import Code from '../../../../../components/modules/code';
import { PageTitle } from '../../../../../components/modules/page-title';

export const TutorialJavaLesson6 = () => {
  return (
    <>
      <PageTitle title="6. Command line Argument Processing"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <table className="table table-striped table-hover table-bordered table-sm">
            <thead>
              <tr className="table-dark">
                <th>Parameter</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>args</td>
                <td>
                  The command line arguments. Assuming that the main method is invoked by the Java launcher, args will
                  be non-null, and will have no null elements.
                </td>
              </tr>
            </tbody>
          </table>
          <b>1. Argument processing using GWT ToolBase</b>
          <div className="tab-1">
            <p>
              If you want to parse more complex command-line arguments, e.g. with optional parameters, than the best is
              to use google's GWT approach. All classes are public available at:
            </p>
            <p>
              <a
                href="https://gwt.googlesource.com/gwt/+/2.8.0-beta1/dev/core/src/com/google/gwt/util/tools/ToolBase.java"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://gwt.googlesource.com/gwt/+/2.8.0-beta1/dev/core/src/com/google/gwt/util/tools/ToolBase.java
              </a>
            </p>
            <p>An example for handling the command-line myprogram -dir "~/Documents" -port 8888 is:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`public class MyProgramHandler extends ToolBase {
    protected File dir;
    protected int port;

    // getters for dir and port
    ...
    public MyProgramHandler() {
        this.registerHandler(new ArgHandlerDir() {
            @Override
            public void setDir(File dir) {
                this.dir = dir;
            }
        });
    
        this.registerHandler(new ArgHandlerInt() {
            @Override
            public String[] getTagArgs() {
                return new String[]{"port"};
            }

            @Override
            public void setInt(int value) {
                this.port = value;
            }
        });
    }

    public static void main(String[] args) {
        MyProgramHandler myShell = new MyProgramHandler();
        if (myShell.processArgs(args)) {
            // main program operation
            System.out.println(String.format("port: %d; dir: %s",
            myShell.getPort(), myShell.getDir()));
        }
        
        System.exit(1);
    }
}`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              ArgHandler also has a method isRequired() which can be overwritten to say that the command-line argument
              is required (default return is false so that the argument is optional.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Processing arguments by hand</b>
          <div className="tab-1">
            <p>
              When the command-line syntax for an application is simple, it is reasonable to do the command argument
              processing entirely in custom code.
            </p>
            <p>
              In this example, we will present a series of simple case studies. In each case, the code will produce
              error messages if the arguments are unacceptable, and then call System.exit(1) to tell the shell that the
              command has failed. (We will assume in each case that the Java code is invoked using a wrapper whose name
              is "myapp".)
            </p>
          </div>
          <div className="tab-1">
            <b>A command with no arguments</b>
          </div>
          <div className="tab-1">
            <p>
              In this case-study, the command requires no arguments. The code illustrates that args.length gives us the
              number of command line arguments.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`public class Main {
    public static void main(String[] args) {
        if (args.length > 0) {
            System.err.println("usage: myapp");
            System.exit(1);
        }
        
        // Run the application
        System.out.println("It worked");
    }
}`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <b>A command with two arguments</b>
          </div>
          <div className="tab-1">
            <p>In this case-study, the command requires at precisely two arguments</p>
          </div>
          <div className="tab-2">
            <Code
              code={`public class Main {
    public static void main(String[] args) {
        if (args.length != 2) {
            System.err.println("usage: myapp <arg1> <arg2>");
            System.exit(1);
        }
        
        // Run the application
        System.out.println("It worked: " + args[0] + ", " + args[1]);
    }
}`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              Note that if we neglected to check args.length, the command would crash if the user ran it with too few
              command-line arguments.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`public class Main {
    public static void main(String[] args) {
        if (args.length != 2) {
            System.err.println("usage: myapp <arg1> <arg2>");
            System.exit(1);
        }
        
        // Run the application
        System.out.println("It worked: " + args[0] + ", " + args[1]);
    }
}`}
              language="java"
            />
          </div>
        </div>
      </div>
    </>
  );
};
