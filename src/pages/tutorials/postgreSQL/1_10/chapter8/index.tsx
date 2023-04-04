import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/page-title";

export const TutorialPostgreSQLChapter8 = () => {
  return (
    <>
      <PageTitle title="8. UPDATE"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Updating a table based on joining another table</b>
          <div className="tab-1">
            <p>You can also update data in a table based on data from another table:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`UPDATE person
SET state_code = cities.state_code
FROM cities
WHERE cities.city = city;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Here we are joining the person city column to the cities city column in order to get the city's state code. This is then used to update
              the state_code column in the person table.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          {" "}
          <b>2. Update all rows in a table</b>
          <div className="tab-1">
            <p>You update all rows in table by simply providing a column_name = VALUE:</p>
          </div>
          <div className="tab-2">
            <Code code={`UPDATE person SET planet = 'Earth';`} language="sql" />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Update all rows meeting a condition</b>
          <div className="tab-2">
            <Code code={`UPDATE person SET state = 'NY' WHERE city = 'New York';`} language="sql" />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>4. Updating multiple columns in table</b>
          <div className="tab-1">
            <p>You can update multiple columns in a table in the same statement, separating col=val pairs with commas:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`UPDATE person
    SET country = 'USA',
    state = 'NY'
WHERE city = 'New York';`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
