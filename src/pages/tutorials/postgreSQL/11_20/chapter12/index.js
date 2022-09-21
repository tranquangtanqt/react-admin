import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter12Data } from "./data";

const PostgreSQLChapter12 = () => {
  return (
    <>
      <Divider orientation="left"> 12. Window Functions</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Generic example</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>Preparing data:</p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter12Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>Running:</p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter12Data.two} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>Result:</p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter12Data.three} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <p>Explanation:</p>
        </Col>
        <Col span={22} offset={2}>
          <p>
            + dist_by_i: DENSE_RANK() OVER (ORDER BY i) is like a row_number per
            distinct values. Can be used for the number of distinct values of i
            (COUNT(DISTINCT i) wold not work). Just use the maximum value.
          </p>
          <p>
            + prev_t: LAG(t) OVER () is a previous value of t over the whole
            window. mind that it is null for the first row
          </p>
          <p>
            + nth: NTH_VALUE(i, 6) OVER () is the value of sixth rows column i
            over the whole window
          </p>
          <p>
            + num_by_i: COUNT(TRUE) OVER (PARTITION BY i) is an amount of rows
            for each value of i
          </p>
          <p>
            + num_all: COUNT(TRUE) OVER () is an amount of rows over a whole
            window
          </p>
          <p>
            + ntile: NTILE(3) over() splits the whole window to 3 (as much as
            possible) equal in quantity parts
          </p>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>2. Column values vs dense_rank vs rank vs row_number</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            <a
              href="https://www.postgresql.org/docs/current/functions-window.html"
              target={"_blank"}
              rel="noreferrer"
            >
              here{" "}
            </a>
            you can find the functions
          </p>

          <p>With the table wf_example created in previous example, run:</p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter12Data.four} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={23} offset={1}>
          <p>
            + dense_rank orders VALUES of i by appearance in window. i=1
            appears, so first row has dense_rank, next and third i value does
            not change, so it is dense_rank shows 1 - FIRST value not changed.
            fourth row i=2, it is second value of i met, so dense_rank shows 2,
            andso for the next row. Then it meets value i=3 at 6th row, so it
            show 3. Same for the rest two values of i. So the last value of
            dense_rank is the number of distinct values of i
          </p>
          <p>+ row_number orders ROWS as they are listed</p>
          <p>
            + rank Not to confuse with dense_rank this function orders ROW
            NUMBER of i values. So it starts same with three ones, but has next
            value 4, which means i=2 (new value) was met at row 4. Same i=3 was
            met at row 6. Etc..
          </p>
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter12;
