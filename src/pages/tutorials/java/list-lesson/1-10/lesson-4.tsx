import Code from 'components/modules/code';

export const TutorialJavaLesson4 = () => {
  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>4. Java Compiler - 'javac'</b>
          <div className="tab-1">
            <b>Simple example</b>
          </div>
          <div className="tab-1">
            <p>
              Assuming that the "HelloWorld.java" contains the following Java
              source:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              (For an explanation of the above code, please refer to Getting
              started with Java Language .)
            </p>
            <p>We can compile the above file using this command:</p>
          </div>
          <div className="tab-2">
            <Code code={`$ javac HelloWorld.java`} language="sql" />
          </div>
          <div className="tab-1">
            <p>
              This produces a file called "HelloWorld.class", which we can then
              run as follows:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`$ java HelloWorld
Hello world!`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>The key points to note from this example are:</p>
          </div>
          <div className="tab-2">
            <ol>
              <li>
                The source filename "HelloWorld.java" must match the class name
                in the source file ... which is HelloWorld. If they don't match,
                you will get a compilation error
              </li>
              <li>
                The bytecode filename "HelloWorld.class" corresponds to the
                classname. If you were to rename the "HelloWorld.class", you
                would get an error when your tried to run it.
              </li>
              <li>
                When running a Java application using java, you supply the
                classname NOT the bytecode filename.
              </li>
            </ol>
          </div>
          <div className="tab-1">
            <b>Example with packages</b>
          </div>
          <div className="tab-1">
            <p>
              Most practical Java code uses packages to organize the namespace
              for classes and reduce the risk of accidental class name
              collision.
            </p>
            <p>
              If we wanted to declare the HelloWorld class in a package call
              com.example, the "HelloWorld.java" would contain the following
              Java source:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`package com.example;
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello world!");
    }
}`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              This source code file needs to stored in a directory tree whose
              structure corresponds to the package naming
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`. # the current directory (for this example)
|
 ----com
    |
    ----example
        |
        ----HelloWorld.java`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>We can compile the above file using this command:</p>
          </div>
          <div className="tab-2">
            <Code code={`$ javac com/example/HelloWorld.java`} language="sql" />
          </div>
          <div className="tab-1">
            <p>
              This produces a file called "com/example/HelloWorld.class"; i.e.
              after compilation, the file structure should look like this:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`. # the current directory (for this example)
|
----com
    |
    ----example
        |
        ----HelloWorld.java
        ----HelloWorld.class`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>We can then run the application as follows:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`$ java com.example.HelloWorld
Hello world!`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Additional points to note from this example are:</p>
          </div>
        </div>
        <div className="tab-2">
          <ol>
            <li>
              The directory structure must match the package name structure.
            </li>
            <li>
              When you run the class, the full class name must be supplied; i.e.
              "com.example.HelloWorld" not "HelloWorld"
            </li>
            <li>
              You don't have to compile and run Java code out of the current
              directory. We are just doing it here for illustration
            </li>
          </ol>
        </div>
        <div className="tab-1">
          <b>Compiling multiple files at once with 'javac'.</b>
        </div>
        <div className="tab-1">
          <p>
            If your application consists of multiple source code files (and most
            do!) you can compile them one at a time. Alternatively, you can
            compile multiple files at the same time by listing the pathnames:
          </p>
        </div>
        <div className="tab-2">
          <Code code={`$ javac Foo.java Bar.java`} language="sql" />
        </div>
        <div className="tab-1">
          <p>
            or using your command shell's filename wildcard functionality ....
          </p>
        </div>
        <div className="tab-2">
          <Code
            code={`$ javac *.java
$ javac com/example/*.java
$ javac */**/*.java #Only works on Zsh or with globstar enabled on your shell`}
            language="sql"
          />
        </div>
        <div className="tab-1">
          <p>
            This will compile all Java source files in the current directory, in
            the "com/example" directory, and recursively in child directories
            respectively. A third alternative is to supply a list of source
            filenames (and compiler options) as a file. For example:
          </p>
        </div>
        <div className="tab-2">
          <Code code={`$ javac @sourcefiles`} language="sql" />
        </div>
        <div className="tab-1">
          <p>where the sourcefiles file contains:</p>
        </div>
        <div className="tab-2">
          <Code
            code={`Foo.java
Bar.java
com/example/HelloWorld.java`}
            language="sql"
          />
        </div>
        <div className="tab-1">
          <p>
            Note: compiling code like this is appropriate for small one-person
            projects, and for once-off programs. Beyond that, it is advisable to
            select and use a Java build tool. Alternatively, most programmers
            use a Java IDE (e.g. NetBeans, eclipse, IntelliJ IDEA) which offers
            an embedded compiler and incremental building of "projects".
          </p>
        </div>
        <div className="tab-1">
          <b>Commonly used 'javac' options</b>
        </div>
        <div className="tab-1">
          <p>
            Here are a few options for the javac command that are likely to be
            useful to you
          </p>
        </div>
        <div className="tab-2">
          <ul>
            <li>
              The -d option sets a destination directory for writing the
              ".class" files.
            </li>
            <li>The -sourcepath option sets a source code search path.</li>
            <li>
              The -cp or -classpath option sets the search path for finding
              external and previously compiled classes. For more information on
              the classpath and how to specify it, refer to the The Classpath
              Topic.
            </li>
            <li>
              The -version option prints the compiler's version information.
            </li>
          </ul>
        </div>
        <div className="tab-1">
          <p>
            A more complete list of compiler options will be described in a
            separate example.
          </p>
        </div>
        <div className="tab-1">
          <b>References</b>
        </div>
        <div className="tab-1">
          <p>
            The definitive reference for the javac command is the{' '}
            <a
              href="https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javac.html"
              target={'_blank'}
              rel="noreferrer"
            >
              Oracle manual page for javac
            </a>
          </p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Compiling for a dierent version of Java</b>
          <div className="tab-1">
            <p>
              The Java programming language (and its runtime) has undergone
              numerous changes since its release since its initial public
              release. These changes include:
            </p>
          </div>
          <div className="tab-2">
            <ul>
              <li>
                Changes in the Java programming language syntax and semantics
              </li>
              <li>
                Changes in the APIs provided by the Java standard class
                libraries.
              </li>
              <li>
                Changes in the Java (bytecode) instruction set and classfile
                format.
              </li>
            </ul>
          </div>
          <div className="tab-1">
            <p>
              With very few exceptions (for example the enum keyword, changes to
              some "internal" classes, etc), these changes are backwards
              compatible.
            </p>
          </div>
          <div className="tab-2">
            <ul>
              <li>
                A Java program that was compiled using an older version of the
                Java toolchain will run on a newer version Java platform without
                recompilation.
              </li>
              <li>
                A Java program that was written in an older version of Java will
                compile successfully with a new Java compiler.
              </li>
            </ul>
          </div>
          <div className="tab-1">
            <b>Compiling old Java with a newer compiler</b>
          </div>
          <div className="tab-1">
            <p>
              If you need to (re-)compile older Java code on a newer Java
              platform to run on the newer platform, you generally don't need to
              give any special compilation flags. In a few cases (e.g. if you
              had used enum as an identifier) you could use the -source option
              to disable the new syntax. For example, given the following class:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`public class OldSyntax {
    private static int enum; // invalid in Java 5 or later
}`}
              language="java"
            />
          </div>
          <div className="tab-1">
            <p>
              the following is required to compile the class using a Java 5
              compiler (or later):
            </p>
          </div>
          <div className="tab-2">
            <Code code={`$ javac -source 1.4 OldSyntax.java`} language="sql" />
          </div>
          <div className="tab-1">
            <b>Compiling for an older execution platform</b>
          </div>
          <div className="tab-1">
            <p>
              If you need to compile Java to run on an older Java platforms, the
              simplest approach is to install a JDK for the oldest version you
              need to support, and use that JDK's compiler in your builds.
            </p>
            <p>
              You can also compile with a newer Java compiler, but there are
              complicated. First of all, there some important preconditions that
              must be satisfied:
            </p>
          </div>
          <div className="tab-2">
            <ul>
              <li>
                The code you are compiling must not use Java language constructs
                that were not available in the version of Java that you are
                targeting.
              </li>
              <li>
                The code must not depend on standard Java classes, fields,
                methods and so on that were not available in the older
                platforms.
              </li>
              <li>
                Third party libraries that the code depends must also be built
                for the older platform and available at compiletime and
                run-time.
              </li>
            </ul>
          </div>
          <div className="tab-1">
            <p>
              Given the preconditions are met, you can recompile code for an
              older platform using the -target option. For example
            </p>
          </div>
          <div className="tab-2">
            <Code code={`$ javac -target 1.4 SomeClass.java`} language="sql" />
          </div>
          <div className="tab-1">
            <p>
              will compile the above class to produce bytecodes that are
              compatible with Java 1.4 or later JVM. (In fact, the - source
              option implies a compatible -target, so javac -source 1.4 ...
              would have the same effect. The relationship between -source and
              -target is described in the Oracle documentation.)
            </p>
            <p>
              Having said that, if you simply use -target or -source, you will
              still be compiling against the standard class libraries provided
              by the compiler's JDK. If you are not careful, you can end up with
              classes with the correct bytecode version, but with dependencies
              on APIs that are not available. The solution is to use the
              -bootclasspath option. For example:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`$ javac -target 1.4 --bootclasspath path/to/java1.4/rt.jar SomeClass.java`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              will compile against an alternative set of runtime libraries. If
              the class being compiled has (accidental) dependencies on newer
              libraries, this will give you compilation errors.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
