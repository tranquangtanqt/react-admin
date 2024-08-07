import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';
import { useRef } from 'react';

export const ProgrammingJavaCheatSheet = () => {
  const toStringRef = useRef<null | HTMLDivElement>(null);
  const toArrayRef = useRef<null | HTMLDivElement>(null);
  const toConditionalsRef = useRef<null | HTMLDivElement>(null);
  const toLoopRef = useRef<null | HTMLDivElement>(null);

  const executeScrollToString = () => {
    if (toStringRef.current !== null) {
      toStringRef.current.scrollIntoView();
    }
  };

  const executeScrollToArray = () => {
    if (toArrayRef.current !== null) {
      toArrayRef.current.scrollIntoView();
    }
  };

  const executeScrollToConditionals = () => {
    if (toConditionalsRef.current !== null) {
      toConditionalsRef.current.scrollIntoView();
    }
  };

  const executeScrollToLoop = () => {
    if (toConditionalsRef.current !== null) {
      toConditionalsRef.current.scrollIntoView();
    }
  };
  return (
    <>
      <PageTitle title="Java cheatsheet"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12" id="getting-started">
          <h4>#Getting Started</h4>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Hello.java</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`public class Hello {
  // main method
  public static void main(String[] args)
  {
    // Output: Hello, world!
    System.out.println("Hello, world!");
  }
}`}
                  language="java"
                />
              </p>
            </div>
            <div className="card-header">Compiling and running</div>
            <div className="card-body">
              <p className="card-text">
                <Code
                  code={`$ javac Hello.java
$ java Hello
Hello, world!`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Variables</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int num = 5;
float floatNum = 5.99f;
char letter = 'D';
boolean bool = true;
String site = "variables";`}
                  language="java"
                />
              </p>
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Strings</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`String first = "John";
String last = "Doe";
String name = first + " " + last;
System.out.println(name);`}
                  language="java"
                />
              </p>
            </div>
            <div className="card-header">
              See:{' '}
              <a href="javascript:void(0)" onClick={executeScrollToString}>
                Strings
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">
                  Primitive Data Types
                </div>
              </h6>
              <table className="table table-hover table-bordered table-sm">
                <thead>
                  <tr>
                    <th>Data Type</th>
                    <th>Size</th>
                    <th>Default</th>
                    <th>Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>byte</code>
                    </td>
                    <td>1 byte</td>
                    <td>0</td>
                    <td>
                      -128 <sup>to</sup> 127
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>short</code>
                    </td>
                    <td>2 byte</td>
                    <td>0</td>
                    <td>
                      -2<sup>15</sup> <sup>to</sup> 2<sup>15</sup>-1
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>int</code>
                    </td>
                    <td>4 byte</td>
                    <td>0</td>
                    <td>
                      -2<sup>31</sup> <sup>to</sup> 2<sup>31</sup>-1
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>long</code>
                    </td>
                    <td>8 byte</td>
                    <td>0</td>
                    <td>
                      -2<sup>63</sup> <sup>to</sup> 2<sup>63</sup>-1
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>float</code>
                    </td>
                    <td>4 byte</td>
                    <td>0.0f</td>
                    <td>
                      <em>N/A</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>double</code>
                    </td>
                    <td>8 byte</td>
                    <td>0.0d</td>
                    <td>
                      <em>N/A</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>char</code>
                    </td>
                    <td>2 byte</td>
                    <td>\u0000</td>
                    <td>
                      0 <sup>to</sup> 65535
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>boolean</code>
                    </td>
                    <td>
                      <em>N/A</em>
                    </td>
                    <td>false</td>
                    <td>true / false</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Loops</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`String word = "QuickRef";
for (char c: word.toCharArray()) {
  System.out.print(c + "-");
}
// Outputs: Q-u-i-c-k-R-e-f-


`}
                  language="java"
                />
              </p>
            </div>
            <div className="card-header">
              See:
              <a href="javascript:void(0)" onClick={executeScrollToLoop}>
                Loops
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Arrays</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`char[] chars = new char[10];
chars[0] = 'a'
chars[1] = 'b'

String[] letters = {"A", "B", "C"};
int[] mylist = {100, 200};
boolean[] answers = {true, false};`}
                  language="java"
                />
              </p>
            </div>
            <div className="card-header">
              See:{' '}
              <a href="javascript:void(0)" onClick={executeScrollToArray}>
                Arrays
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Swap</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int a = 1;
int b = 2;
System.out.println(a + " " + b); // 1 2

int temp = a;
a = b;
b = temp;
System.out.println(a + " " + b); // 2 1

`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Type Casting</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`// Widening
// byte<short<int<long<float<double
int i = 10;
long l = i;               // 10

// Narrowing 
double d = 10.02;
long l = (long)d;         // 10

String.valueOf(10);       // "10"
Integer.parseInt("10");   // 10
Double.parseDouble("10"); // 10.0`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Conditionals</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int j = 10;

if (j == 10) {
  System.out.println("I get printed");
} else if (j > 10) {
  System.out.println("I don't");
} else {
  System.out.println("I also don't");
}

`}
                  language="java"
                />
              </p>
            </div>
            <div className="card-header">
              See:{' '}
              <a
                href="javascript:void(0)"
                onClick={executeScrollToConditionals}
              >
                Conditionals
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">User Input</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`Scanner in = new Scanner(System.in);
String str = in.nextLine();
System.out.println(str);

int num = in.nextInt();
System.out.println(num);






`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-12" ref={toStringRef}>
          <h4>#Java Strings</h4>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Basic</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`String str1 = "value"; 
String str2 = new String("value");
String str3 = String.valueOf(123);



`}
                  language="java"
                />
              </p>
            </div>
          </div>

          <div className="card mt-2">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Comparison</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`String s1 = new String("QuickRef"); 
String s2 = new String("QuickRef"); 

s1 == s2          // false
s1.equals(s2)     // true

"AB".equalsIgnoreCase("ab")  // true


`}
                  language="java"
                />
              </p>
            </div>
          </div>

          <div className="card mt-2">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Information</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`String str = "abcd";

str.charAt(2);       // c
str.indexOf("a")     // 0
str.indexOf("z")     // -1
str.length();        // 4
str.toString();      // abcd
str.substring(2);    // cd
str.substring(2,3);  // c
str.contains("c");   // true
str.endsWith("d");   // true
str.startsWith("a"); // true
str.isEmpty();       // false`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Concatenation</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`String s = 3 + "str" + 3;     // 3str3
String s = 3 + 3 + "str";     // 6str
String s = "3" + 3 + "str";   // 33str
String s = "3" + "3" + "23";  // 3323
String s = "" + 3 + 3 + "23"; // 3323
String s = 3 + 3 + 23;        // 29`}
                  language="java"
                />
              </p>
            </div>
          </div>

          <div className="card mt-2">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Manipulation</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`String str = "Abcd";

str.toUpperCase();     // ABCD
str.toLowerCase();     // abcd
str.concat("#");       // Abcd#
str.replace("b", "-"); // A-cd

"  abc ".trim();       // abc
"ab".toCharArray();    // {'a', 'b'}`}
                  language="java"
                />
              </p>
            </div>
          </div>

          <div className="card mt-2">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Immutable</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`String str = "hello";
str.concat("world");

// Outputs: hello
System.out.println(str);

String str = "hello";
String concat = str.concat("world");

// Outputs: helloworld
System.out.println(concat);`}
                  language="java"
                />
              </p>
            </div>
            <div className="card-header">
              Once created cannot be modified, any modification creates a new
              String
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">StringBuilder</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`StringBuilder sb = new StringBuilder(10);
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
|   |   |   |   |   |   |   |   |   |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9

sb.append("QuickRef");
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
| Q | u | i | c | k | R | e | f |   |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9

sb.delete(5, 9);
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
| Q | u | i | c | k |   |   |   |   |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9

sb.insert(0, "My ");
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
| M | y |   | Q | u | i | c | k |   |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9

sb.append("!");
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
| M | y |   | Q | u | i | c | k | ! |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div
          className="col-12 col-sm-12 col-md-12"
          id="java-strings"
          ref={toArrayRef}
        >
          <h4>#Java Arrays</h4>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Declare</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int[] a1;
int[] a2 = {1, 2, 3};
int[] a3 = new int[]{1, 2, 3};

int[] a4 = new int[3];
a4[0] = 1;
a4[2] = 2;
a4[3] = 3;`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Modify</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int[] a = {1, 2, 3};
System.out.println(a[0]); // 1

a[0] = 9;
System.out.println(a[0]); // 9

System.out.println(a.length); // 3

`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">
                  Loop (Read & Modify)
                </div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int[] arr = {1, 2, 3};
for (int i=0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
    System.out.print(arr[i] + " ");
}
// Outputs: 2 4 6


`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Loop (Read)</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`String[] arr = {"a", "b", "c"};
for (int a: arr) {
    System.out.print(a + " ");
}
// Outputs: a b c 







`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">
                  Multidimensional Arrays
                </div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int[][] matrix = { {1, 2, 3}, {4, 5} };

int x = matrix[1][0];  // 4
// [[1, 2, 3], [4, 5]]
Arrays.deepToString(matrix)

for (int i = 0; i < a.length; ++i) {
  for(int j = 0; j < a[i].length; ++j) {
    System.out.println(a[i][j]);
  }
}
// Outputs: 1 2 3 4 5 6 7 `}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Sort</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`char[] chars = {'b', 'a', 'c'};
Arrays.sort(chars);

// [a, b, c]
Arrays.toString(chars);







`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div
          className="col-12 col-sm-12 col-md-12"
          id="java-strings"
          ref={toConditionalsRef}
        >
          <h4>#Java Conditionals</h4>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Operators</div>
              </h6>
              <table className="table table-hover table-bordered table-sm">
                <tbody>
                  <tr>
                    <td>+</td>
                    <td>-</td>
                    <td>*</td>
                    <td>/</td>
                  </tr>
                  <tr>
                    <td>%</td>
                    <td>=</td>
                    <td>++</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>!</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>==</td>
                    <td>!=</td>
                    <td>{'>'}</td>
                    <td>{'>='}</td>
                  </tr>
                  <tr>
                    <td>{'<'}</td>
                    <td>{'<='}</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>&&</td>
                    <td>||</td>
                    <td>?:</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>instanceof</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>~</td>
                    <td>{'<<'}</td>
                    <td>{'>>'}</td>
                    <td>{'>>>'}</td>
                  </tr>
                  <tr>
                    <td>&</td>
                    <td>^</td>
                    <td>|</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">If else</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int k = 15;
if (k > 20) {
  System.out.println(1);
} else if (k > 10) {
  System.out.println(2);
} else {
  System.out.println(3);
}`}
                  language="java"
                />
              </p>
            </div>
          </div>

          <div className="card mt-2">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Ternary operator</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int a = 10;
int b = 20;
int max = (a > b) ? a : b;

// Outputs: 20
System.out.println(max);`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Switch</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int month = 3;
String str;
switch (month) {
  case 1:
    str = "January";
    break;
  case 2:
    str = "February";
    break;
  case 3:
    str = "March";
    break;
  default:
    str = "Some other month";
    break;
}

// Outputs: Result March
System.out.println("Result " + str);

`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div
          className="col-12 col-sm-12 col-md-12"
          id="java-strings"
          ref={toLoopRef}
        >
          <h4>#Java Loops</h4>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">For Loop</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`for (int i = 0; i < 10; i++) {
  System.out.print(i);
}
// Outputs: 0123456789

for (int i = 0,j = 0; i < 3; i++,j--) {
  System.out.print(j + "|" + i + " ");
}
// Outputs: 0|0 -1|1 -2|2`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Enhanced For Loop</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int[] numbers = {1,2,3,4,5};

for (int number: numbers) {
  System.out.print(number);
}
// Outputs: 12345
`}
                  language="java"
                />
              </p>
            </div>

            <div className="card-header">
              Used to loop around array's or List's
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">While Loop</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int count = 0;

while (count < 5) {
  System.out.print(count);
  count++;
}
// Outputs: 01234

`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 mt-2">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Do While Loop</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`int count = 0;

do {
  System.out.print(count);
  count++;
} while (count < 5);
// Outputs: 01234`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Continue Statement</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`for (int i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  System.out.print(i);
}
// Outputs: 01245 `}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Break Statement</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`for (int i = 0; i < 5; i++) {
  System.out.print(i);
  if (i == 3) {
    break;
  }
}
// Outputs: 0123`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-12">
          <h4>#Java Collections Framework</h4>
        </div>

        <div className="col-12 col-sm-12 col-md-8">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Java Collections</div>
              </h6>
              <table className="table table-hover table-bordered table-sm">
                <thead>
                  <tr>
                    <th>Collection</th>
                    <th>Interface</th>
                    <th>Ordered</th>
                    <th>Sorted</th>
                    <th>Thread safe</th>
                    <th>Duplicate</th>
                    <th>Nullable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html"
                      >
                        ArrayList
                      </a>
                    </td>
                    <td>List</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>Y</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/Vector.html"
                      >
                        Vector
                      </a>
                    </td>
                    <td>List</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>Y</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html"
                      >
                        LinkedList
                      </a>
                    </td>
                    <td>List, Deque</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>Y</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CopyOnWriteArrayList.html"
                      >
                        CopyOnWriteArrayList
                      </a>
                    </td>
                    <td>List</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>Y</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html"
                      >
                        HashSet
                      </a>
                    </td>
                    <td>Set</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      One <code>null</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashSet.html"
                      >
                        LinkedHashSet
                      </a>
                    </td>
                    <td>Set</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      One <code>null</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/TreeSet.html"
                      >
                        TreeSet
                      </a>
                    </td>
                    <td>Set</td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CopyOnWriteArraySet.html"
                      >
                        CopyOnWriteArraySet
                      </a>
                    </td>
                    <td>Set</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      One <code>null</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentSkipListSet.html"
                      >
                        ConcurrentSkipListSet
                      </a>
                    </td>
                    <td>Set</td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html"
                      >
                        HashMap
                      </a>
                    </td>
                    <td>Map</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N (key)</em>
                    </td>
                    <td>
                      One <code>null</code> <em>(key)</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/Hashtable.html"
                      >
                        HashTable
                      </a>
                    </td>
                    <td>Map</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>
                      <em>N (key)</em>
                    </td>
                    <td>
                      <em>N (key)</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashMap.html"
                      >
                        LinkedHashMap
                      </a>
                    </td>
                    <td>Map</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N (key)</em>
                    </td>
                    <td>
                      One <code>null</code> <em>(key)</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html"
                      >
                        TreeMap
                      </a>
                    </td>
                    <td>Map</td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N (key)</em>
                    </td>
                    <td>
                      <em>N (key)</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html"
                      >
                        ConcurrentHashMap
                      </a>
                    </td>
                    <td>Map</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>
                      <em>N (key)</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentSkipListMap.html"
                      >
                        ConcurrentSkipListMap
                      </a>
                    </td>
                    <td>Map</td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>
                      <em>N (key)</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html"
                      >
                        ArrayDeque
                      </a>
                    </td>
                    <td>Deque</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html"
                      >
                        PriorityQueue
                      </a>
                    </td>
                    <td>Queue</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentLinkedQueue.html"
                      >
                        ConcurrentLinkedQueue
                      </a>
                    </td>
                    <td>Queue</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentLinkedDeque.html"
                      >
                        ConcurrentLinkedDeque
                      </a>
                    </td>
                    <td>Deque</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ArrayBlockingQueue.html"
                      >
                        ArrayBlockingQueue
                      </a>
                    </td>
                    <td>Queue</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/LinkedBlockingDeque.html"
                      >
                        LinkedBlockingDeque
                      </a>
                    </td>
                    <td>Deque</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/PriorityBlockingQueue.html"
                      >
                        PriorityBlockingQueue
                      </a>
                    </td>
                    <td>Queue</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">ArrayList</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`List<Integer> nums = new ArrayList<>();

// Adding
nums.add(2);
nums.add(5);
nums.add(8);

// Retrieving
System.out.println(nums.get(0));

// Indexed for loop iteration
for (int i = 0; i < nums.size(); i++) {
    System.out.println(nums.get(i));
}

nums.remove(nums.size() - 1);
nums.remove(0); // VERY slow

for (Integer value : nums) {
    System.out.println(value);
}`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 mt-2">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">HashMap</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`Map<Integer, String> m = new HashMap<>();
m.put(5, "Five");
m.put(8, "Eight");
m.put(6, "Six");
m.put(4, "Four");
m.put(2, "Two");

// Retrieving
System.out.println(m.get(6));

// Lambda forEach
m.forEach((key, value) -> {
    String msg = key + ": " + value;
    System.out.println(msg);
});




`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 mt-2">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">HashSet</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`Set<String> set = new HashSet<>();
if (set.isEmpty()) {
    System.out.println("Empty!");
}

set.add("dog");
set.add("cat");
set.add("mouse");
set.add("snake");
set.add("bear");

if (set.contains("cat")) {
    System.out.println("Contains cat");
}

set.remove("cat");
for (String element : set) {
    System.out.println(element);
}`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 mt-2">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">ArrayDeque</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`Deque<String> a = new ArrayDeque<>();

// Using add()
a.add("Dog");

// Using addFirst()
a.addFirst("Cat");

// Using addLast()
a.addLast("Horse");

// [Cat, Dog, Horse]
System.out.println(a);

// Access element
System.out.println(a.peek());

// Remove element
System.out.println(a.pop());`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-12">
          <h4>#Misc</h4>
        </div>

        <div className="col-12 col-sm-12 col-md-8">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Access Modifiers</div>
              </h6>
              <table className="table table-hover table-bordered table-sm">
                <thead>
                  <tr>
                    <th>Modifier</th>
                    <th>Class</th>
                    <th>Package</th>
                    <th>Subclass</th>
                    <th>World</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>public</td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>Y</td>
                  </tr>
                  <tr>
                    <td>protected</td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                  <tr>
                    <td>no modifier</td>
                    <td>Y</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                  <tr>
                    <td>private</td>
                    <td>Y</td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                    <td>
                      <em>N</em>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">
                  Regular expressions
                </div>
              </h6>
              <p className="card-text">
                <Code
                  code={`String text = "I am learning Java";
// Removing All Whitespace
text.replaceAll("\\\\s+", "");

// Splitting a String
text.split("\\\\|");
text.split(Pattern.quote("|"));
`}
                  language="java"
                />
              </p>
            </div>

            <div className="card-header">See: Regex in java</div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Comment</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`// I am a single line comment!
 
/*
And I am a 
multi-line comment!
*/

/**
 * This  
 * is  
 * documentation  
 * comment 
 */
`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-8 mt-2">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Keywords</div>
              </h6>
              <table className="table table-hover table-bordered table-sm">
                <tbody>
                  <tr>
                    <td>abstract</td>
                    <td>continue</td>
                    <td>for</td>
                    <td>new</td>
                    <td>switch</td>
                    <td>assert</td>
                  </tr>
                  <tr>
                    <td>default</td>
                    <td>goto</td>
                    <td>package</td>
                    <td>synchronized</td>
                    <td>boolean</td>
                    <td>do</td>
                  </tr>
                  <tr>
                    <td>if</td>
                    <td>private</td>
                    <td>this</td>
                    <td>break</td>
                    <td>double</td>
                    <td>implements</td>
                  </tr>
                  <tr>
                    <td>protected</td>
                    <td>throw</td>
                    <td>byte</td>
                    <td>else</td>
                    <td>import</td>
                    <td>public</td>
                  </tr>
                  <tr>
                    <td>throws</td>
                    <td>case</td>
                    <td>enum</td>
                    <td>instanceof</td>
                    <td>return</td>
                    <td>transient</td>
                  </tr>
                  <tr>
                    <td>catch</td>
                    <td>extends</td>
                    <td>int</td>
                    <td>short</td>
                    <td>try</td>
                    <td>char</td>
                  </tr>
                  <tr>
                    <td>final</td>
                    <td>interface</td>
                    <td>static</td>
                    <td>void</td>
                    <td>class</td>
                    <td>finally</td>
                  </tr>
                  <tr>
                    <td>long</td>
                    <td>strictfp</td>
                    <td>volatile</td>
                    <td>const</td>
                    <td>float</td>
                    <td>native</td>
                  </tr>
                  <tr>
                    <td>super</td>
                    <td>while</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 mt-2">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Math methods</div>
              </h6>
              <table className="table table-hover table-bordered table-sm">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>Math.max(a,b)</code>
                    </td>
                    <td>Maximum of a and b</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Math.min(a,b)</code>
                    </td>
                    <td>Minimum of a and b</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Math.abs(a)</code>
                    </td>
                    <td>Absolute value a</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Math.sqrt(a)</code>
                    </td>
                    <td>Square-root of a</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Math.pow(a,b)</code>
                    </td>
                    <td>Power of b</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Math.round(a)</code>
                    </td>
                    <td>Closest integer</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Math.sin(ang)</code>
                    </td>
                    <td>Sine of ang</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Math.cos(ang)</code>
                    </td>
                    <td>Cosine of ang</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Math.tan(ang)</code>
                    </td>
                    <td>Tangent of ang</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Math.asin(ang)</code>
                    </td>
                    <td>Inverse sine of ang</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Math.log(a)</code>
                    </td>
                    <td>Natural logarithm of a</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Math.toDegrees(rad)</code>
                    </td>
                    <td>Angle rad in degrees</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Math.toRadians(deg)</code>
                    </td>
                    <td>Angle deg in radians</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 mt-2">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <div className="btn btn-sm btn-success">Try/Catch/Finally</div>
              </h6>
              <p className="card-text">
                <Code
                  code={`try {
  // something
} catch (Exception e) {
  e.printStackTrace();
} finally {
  System.out.println("always printed");
}`}
                  language="java"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
