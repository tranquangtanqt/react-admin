import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/pageTitle";

export const TutorialPostgreSQLChapter13 = () => {
  return (
    <>
      <PageTitle title="13. Recursive queries"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Sum of Integers</b>
          <div className="tab-1">
            <Code
              code={`WITH RECURSIVE t(n) AS (
    VALUES (1)
    UNION ALL
    SELECT n+1 FROM t WHERE n < 100
)
SELECT SUM(n) FROM t;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              {" "}
              <a href="https://www.postgresql.org/docs/current/functions-window.html" target={"_blank"} rel="noreferrer">
                Link to Documentation
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
