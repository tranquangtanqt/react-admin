import { PageTitle } from 'components/modules/page-title';

export const ProgramJavaTipCodingConventionsAdditionalSuggestions = () => {
  return (
    <>
      <PageTitle title="Coding conventions additional suggestions"></PageTitle>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Use Collections</b>
          <div className="tab-1">
            <p>
              Java is shipped with a few collection classes – for example,
              Vector, Stack, Hashtable, Array. The developers are encouraged to
              use collections as extensively as possible for the following
              reasons:
            </p>
          </div>
          <div className="tab-2">
            <ul>
              <li>
                Use of collections makes the code reusable and interoperable.
              </li>
              <li>
                Collections make the code more structured, easier to understand
                and maintainable.
              </li>
              <li>
                Out of the box collection classes are well tested so the quality
                of code is good.
              </li>
            </ul>
          </div>

          <b>2. 10-50-500 Rule</b>
          <div className="tab-1">
            <p>
              In big software packages, maintaining code becomes very
              challenging. Developers who join fresh ongoing support projects,
              often complain about: Monolithic Code, Spaghetti Code. There is a
              very simple rule to avoid that or keep the code clean and
              maintainable: 10-50-500.
            </p>
          </div>
          <div className="tab-2">
            <ul>
              <li>10: No package can have more than 10 classes.</li>
              <li>50: No method can have more than 50 lines of code.</li>
              <li>500: No class can have more than 500 lines of code.</li>
            </ul>
          </div>

          <b>3. SOLID Class Design Principles</b>
          <div className="tab-1">
            <p>
              SOLID
              (http://en.wikipedia.org/wiki/SOLID_%28object-oriented_design%29)
              is an acronym for design principles coined by Robert Martin.
              According to this rule:
            </p>
          </div>
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>Rule</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Single responsibility principle</td>
                  <td>
                    A class should have one and only one task/responsibility. If
                    class is performing more than one task, it leads to
                    confusion.
                  </td>
                </tr>
                <tr>
                  <td>Open/closed principle</td>
                  <td>
                    The developers should focus more on extending the software
                    entities rather than modifying them.
                  </td>
                </tr>
                <tr>
                  <td>Liskov substitution principle</td>
                  <td>
                    It should be possible to substitute the derived class with
                    base class.
                  </td>
                </tr>
                <tr>
                  <td>Interface segregation principle</td>
                  <td>
                    It’s like Single Responsibility Principle but applicable to
                    interfaces. Each interface should be responsible for a
                    specific task. The developers should need to implement
                    methods which he/she doesn’t need.
                  </td>
                </tr>
                <tr>
                  <td>Dependency inversion principle</td>
                  <td>
                    Depend upon Abstractions- but not on concretions. This means
                    that each module should be separated from other using an
                    abstract layer which binds them together.
                  </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <b>4. Usage of Design Patterns</b>
          <div className="tab-1">
            <p>
              Design patterns help developers to incorporate best Software
              Design Principles in their software. They also provide common
              platform for developers across the globe. They provide standard
              terminology which makes developers to collaborate and easier to
              communicate to each other.
            </p>
          </div>
          <b>5. Document ideas</b>
          <div className="tab-1">
            <p>
              Never just start writing code. Strategize, Prepare, Document,
              Review and Implementation. First of all, jot down your
              requirements. Prepare a design document. Mention assumptions
              properly. Get the documents peer reviewed and take a sign off on
              them.
            </p>
          </div>
          <b>6. Use Equals over ==</b>
          <div className="tab-1">
            <p>
              == compares object references, it checks to see if the two
              operands point to the same object (not equivalent objects, the
              same object).On the other hand, “equals” perform actual comparison
              of two strings.
            </p>
          </div>
          <b>7. Avoid Floating Point Numbers</b>
          <div className="tab-1">
            <p>
              Floating point numbers should be used only if they are absolutely
              necessary. For example, representing Rupees and Paise using
              Floating Point numbers can be Problematic – BigDecimal should
              instead be preferred. Floating point numbers are more useful in
              measurements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
