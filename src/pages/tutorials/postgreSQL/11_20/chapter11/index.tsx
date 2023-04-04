import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/page-title";

export const TutorialPostgreSQLChapter11 = () => {
  return (
    <>
      <PageTitle title="11. Common Table Expressions (WITH)"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Common Table Expressions in SELECT Queries</b>
          <div className="tab-1">
            <p>Common table expressions support extracting portions of larger queries. For example:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`WITH sales AS (
    SELECT
    orders.ordered_at,
    orders.user_id,
    SUM(orders.amount) AS total
    FROM orders
    GROUP BY orders.ordered_at, orders.user_id
)
SELECT
    sales.ordered_at,
    sales.total,
    users.NAME
FROM sales
JOIN users USING (user_id)`}
              language="sql"
            />
          </div>
          <b>2. Traversing tree using WITH RECURSIVE</b>
          <div className="tab-2">
            <Code
              code={`REATE TABLE empl (
    NAME TEXT PRIMARY KEY,
    boss TEXT NULL
    REFERENCES NAME
    ON UPDATE CASCADE
    ON DELETE CASCADE
    DEFAULT NULL
);

INSERT INTO empl VALUES ('Paul',NULL);
INSERT INTO empl VALUES ('Luke','Paul');
INSERT INTO empl VALUES ('Kate','Paul');
INSERT INTO empl VALUES ('Marge','Kate');
INSERT INTO empl VALUES ('Edith','Kate');
INSERT INTO empl VALUES ('Pam','Kate');
INSERT INTO empl VALUES ('Carol','Luke');
INSERT INTO empl VALUES ('John','Luke');
INSERT INTO empl VALUES ('Jack','Carol');
INSERT INTO empl VALUES ('Alex','Carol');

WITH RECURSIVE t(LEVEL,path,boss,NAME) AS (
        SELECT 0,NAME,boss,NAME FROM empl WHERE boss IS NULL
    UNION
        SELECT
            LEVEL + 1,
            path || ' > ' || empl.NAME,
            empl.boss,
            empl.NAME
        FROM
            empl JOIN t
            ON empl.boss = t.NAME
) SELECT * FROM t ORDER BY path;`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
