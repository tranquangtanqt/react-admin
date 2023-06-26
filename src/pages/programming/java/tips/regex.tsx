import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const ProgramJavaTipUsingRegex = () => {
  return (
    <>
      <PageTitle title="Regex"></PageTitle>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>Using Regex</b>
          <div className="tab-1">
            <b>
              Summary of Regular Expression Constructs (Source: Oracle Website)
            </b>
          </div>
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th colSpan={2}>Characters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>x</td>
                  <td>The character x</td>
                </tr>
                <tr>
                  <td>\\</td>
                  <td>The backslash character</td>
                </tr>
                <tr>
                  <td>\0n</td>
                  <td>
                    The character with octal value 0n (0 {'<'}= n {'<'}= 7)
                  </td>
                </tr>
                <tr>
                  <td>\0nn</td>
                  <td>
                    The character with octal value 0nn (0 {'<'}= n {'<'}= 7)
                  </td>
                </tr>
                <tr>
                  <td>\0mnn</td>
                  <td>
                    The character with octal value 0mnn (0 {'<'}= m {'<'}= 3, 0{' '}
                    {'<'}= n {'<'}= 7)
                  </td>
                </tr>
                <tr>
                  <td>\xhh</td>
                  <td>The character with hexadecimal value 0xhh</td>
                </tr>
                <tr>
                  <td>\uhhhh</td>
                  <td>The character with hexadecimal value 0xhhhh</td>
                </tr>
                <tr>
                  <td>
                    \x{'{'}h…h{'}'}
                  </td>
                  <td>
                    The character with hexadecimal value 0xh…h
                    (Character.MIN_CODE_POINT {'<'}= 0xh…h {'<'}=
                    Character.MAX_CODE_POINT)
                  </td>
                </tr>
                <tr>
                  <td>\t</td>
                  <td>The tab character (‘\u0009’)</td>
                </tr>
                <tr>
                  <td>\n</td>
                  <td>The newline (line feed) character (‘\u000A’)</td>
                </tr>
                <tr>
                  <td>\r</td>
                  <td>The carriage-return character (‘\u000D’)</td>
                </tr>
                <tr>
                  <td>\f</td>
                  <td>The form-feed character (‘\u000C’)</td>
                </tr>
                <tr>
                  <td>\a</td>
                  <td>The alert (bell) character (‘\u0007’)</td>
                </tr>
                <tr>
                  <td>\e</td>
                  <td>The escape character (‘\u001B’)</td>
                </tr>
                <tr>
                  <td>\cx</td>
                  <td>The control character corresponding to x</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th colSpan={2}>Character classes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>[abc]</td>
                  <td>a, b, or c (simple class)</td>
                </tr>
                <tr>
                  <td>[^abc]</td>
                  <td>Any character except a, b, or c (negation)</td>
                </tr>
                <tr>
                  <td>[a-zA-Z]</td>
                  <td>a through z or A through Z, inclusive (range)</td>
                </tr>
                <tr>
                  <td>[a-d[m-p]]</td>
                  <td>a through d, or m through p: [a-dm-p] (union)</td>
                </tr>
                <tr>
                  <td>[a-z&&[def]]</td>
                  <td>d, e, or f (intersection)</td>
                </tr>
                <tr>
                  <td>[a-z&&[^bc]]</td>
                  <td>a through z, except for b and c: [ad-z] (subtraction)</td>
                </tr>
                <tr>
                  <td>[a-z&&[^m-p]]</td>
                  <td>
                    a through z, and not m through p: [a-lq-z](subtraction)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th colSpan={2}>Predefined character classes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>.</td>
                  <td>Any character (may or may not match line terminators)</td>
                </tr>
                <tr>
                  <td>\d</td>
                  <td>A digit: [0-9]</td>
                </tr>
                <tr>
                  <td>\D</td>
                  <td>A non-digit: [^0-9]</td>
                </tr>
                <tr>
                  <td>\s</td>
                  <td>A whitespace character: [ \t\n\x0B\f\r]</td>
                </tr>
                <tr>
                  <td>\S</td>
                  <td>A non-whitespace character: [^\s]</td>
                </tr>
                <tr>
                  <td>\w</td>
                  <td>A word character: [a-zA-Z_0-9]</td>
                </tr>
                <tr>
                  <td>\W</td>
                  <td>A non-word character: [^\w]</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th colSpan={2}>Boundary matchers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>^</td>
                  <td>The beginning of a line</td>
                </tr>
                <tr>
                  <td>$</td>
                  <td>The end of a line</td>
                </tr>
                <tr>
                  <td>\b</td>
                  <td>A word boundary</td>
                </tr>
                <tr>
                  <td>\B</td>
                  <td>A non-word boundary</td>
                </tr>
                <tr>
                  <td>\A</td>
                  <td>The beginning of the input</td>
                </tr>
                <tr>
                  <td>\G</td>
                  <td>The end of the previous match</td>
                </tr>
                <tr>
                  <td>\Z</td>
                  <td>
                    The end of the input but for the final terminator, if any
                  </td>
                </tr>
                <tr>
                  <td>\z</td>
                  <td>The end of the input</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tab-2">
            <Code
              code={`import java.util.regex.Matcher;
import java.util.regex.Pattern;
 
public class RegexMatches
{
    private static String pattern = "^[_A-Za-z0-9-]+(\\\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\\\.[A-Za-z0-9]+)*(\\\\.[A-Za-z]{2,})$";
    private static Pattern mypattern = Pattern.compile(pattern);
     
    public static void main( String args[] ){
        String valEmail1 = "testemail@domain.com";
        String invalEmail1 = "....@domain.com";
        String invalEmail2 = ".$$%%@domain.com";
        String valEmail2 = "test.email@domain.com";
 
        System.out.println("Is Email ID1 valid? "+validateEMailID(valEmail1));
        System.out.println("Is Email ID1 valid? "+validateEMailID(invalEmail1));
        System.out.println("Is Email ID1 valid? "+validateEMailID(invalEmail2));
        System.out.println("Is Email ID1 valid? "+validateEMailID(valEmail2));
    }
     
    public static boolean validateEMailID(String emailID) {
        Matcher mtch = mypattern.matcher(emailID);
        if(mtch.matches()){
            return true;
        }
        return false;
    }   
}`}
              language="javascript"
            />
          </div>
        </div>
      </div>
    </>
  );
};
