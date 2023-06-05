import Code from '../../../../../components/modules/code';
import { PageTitle } from '../../../../../components/modules/page-title';

export const TutorialPostgreSQLChapter10 = () => {
  return (
    <>
      <PageTitle title="10. Aggregate Functions"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Simple statistics: min(), max(), avg()</b>
          <div className="tab-1">
            <p>
              In order to determine some simple statistics of a value in a column of a table, you can use an aggregate
              function.
            </p>
            <p>If your individuals table is:</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-4 col-md-4">
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Allie</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>Amanda</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>Alana</td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>You could write this statement to get the minimum, maximum and average value:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT MIN(age), MAX(age), AVG(age)
FROM individuals;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Result:</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-4 col-md-4">
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>min</th>
                  <th>max</th>
                  <th>avg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>14</td>
                  <td>20</td>
                  <td>17</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. regr_slope(Y, X) : slope of the least-squares-fit linear equation determined by the (X, Y) pairs</b>
          <div className="tab-1">
            <p>
              To illustrate how to use regr_slope(Y,X), I applied it to a real world problem. In Java, if you don't
              clean up memory properly, the garbage can get stuck and fill up the memory. You dump statistics every hour
              about memory utilization of different classes and load it into a postgres database for analysis.
            </p>
            <p>
              All memory leak candidates will have a trend of consuming more memory as more time passes. If you plot
              this trend, you would imagine a line going up and to the left:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={` ^
|
s | Legend:
i | * - data point
z | -- - trend
e |
( |
b | *
y | --
t | --
e | * -- *
s | --
) | *-- *
| -- *
| -- *
--------------------------------------->
time`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Suppose you have a table containing heap dump histogram data (a mapping of classes to how much memory they
              consume):
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE heap_histogram (
 -- when the heap histogram was taken
 histwhen TIMESTAMP WITHOUT TIME ZONE NOT NULL,
 -- the object type bytes are referring to
 -- ex: java.util.String
 CLASS CHARACTER VARYING NOT NULL,
 -- the size in bytes used by the above class
 bytes INTEGER NOT NULL
);`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              To compute the slope for each class, we group by over the class. The HAVING clause {'>'} 0 ensures that we
              get only candidates with a positive slop (a line going up and to the left). We sort by the slope
              descending so that we get the classes with the largest rate of memory increase at the top.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`-- epoch returns seconds
SELECT CLASS, REGR_SLOPE(bytes,EXTRACT(epoch FROM histwhen)) AS slope
 FROM public.heap_histogram
 GROUP BY CLASS
 HAVING REGR_SLOPE(bytes,EXTRACT(epoch FROM histwhen)) > 0
 ORDER BY slope DESC ;
 -------OUTPUT----------
 class | slope
---------------------------+----------------------
java.util.ArrayList       | 71.7993806279174
java.util.HashMap         | 49.0324576155785
java.lang.String          | 31.7770770326123
joe.schmoe.BusinessObject | 23.2036817108056
java.lang.ThreadLocal     | 20.9013528767851`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              From the output we see that java.util.ArrayList's memory consumption is increasing the fastest at 71.799
              bytes per second and is potentially part of the memory leak.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. string_agg(expression, delimiter)</b>
          <div className="tab-1">
            <p>You can concatenate strings separated by delimiter using the STRING_AGG() function.</p>
            <p>If your individuals table is:</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-4 col-md-4">
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>Name</th>
                  <th>Age</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Allie</td>
                  <td>15</td>
                  <td>USA</td>
                </tr>
                <tr>
                  <td>Amanda</td>
                  <td>14</td>
                  <td>USA</td>
                </tr>
                <tr>
                  <td>Alana</td>
                  <td>20</td>
                  <td>Russia</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>You could write SELECT ... GROUP BY statement to get names from each country:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT STRING_AGG(NAME, ', ') AS NAMES, country
FROM individuals
GROUP BY country;
SQL
`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Note that you need to use a GROUP BY clause because STRING_AGG() is an aggregate function.</p>
          </div>
          <div className="tab-1">
            <p>Result:</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-4 col-md-4">
          <div className="tab-2">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>Name</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Allie, Amanda</td>
                  <td>USA</td>
                </tr>
                <tr>
                  <td>Alana</td>
                  <td>Russia</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>
              <a
                href="https://www.postgresql.org/docs/devel/functions-aggregate.html"
                target={'_blank'}
                rel="noreferrer"
              >
                More PostgreSQL aggregate function described here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
