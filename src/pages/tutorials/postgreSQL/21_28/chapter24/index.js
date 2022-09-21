import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter24Data } from "./data";

const PostgreSQLChapter24 = () => {
  return (
    <>
      <Divider orientation="left">24. Accessing Data Programmatically</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Accessing PostgreSQL with the C-API</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            The C-API is the most powerful way to access PostgreSQL and it is
            surprisingly comfortable.
          </p>
          <b>Compilation and linking</b>
          <p>
            During compilation, you have to add the PostgreSQL include
            directory, which can be found with pg_config -- includedir, to the
            include path.
          </p>
          <p>
            You must link with the PostgreSQL client shared library (libpq.so on
            UNIX, libpq.dll on Windows). This library is in the PostgreSQL
            library directory, which can be found with pg_config --libdir.
          </p>
          <p>
            Note: For historical reason, the library is called libpq.soand not
            libpg.so, which is a popular trap for beginners.
          </p>
          <p>
            Given that the below code sample is in file coltype.c, compilation
            and linking would be done with
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter24Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            with the GNU C compiler (consider adding -Wl,-rpath,"$(pg_config
            --libdir)" to add the library search path) or with
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter24Data.two} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>on Windows with Microsoft Visual C.</p>
          <b>Sample program</b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter24Data.three} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>2. Accessing PostgreSQL from python using psycopg2</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            You can find description of the driver{" "}
            <a
              href="http://initd.org/psycopg/docs/"
              target={"_blank"}
              rel="noreferrer"
            >
              here
            </a>{" "}
            .
          </p>
          <p>The quick example is:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter24Data.four} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>Will result:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter24Data.five} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>3. Accessing PostgreSQL from .NET using the Npgsql provider</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            One of the more popular .NET providers for Postgresql is Npgsql,
            which is ADO.NET compatible and is used nearly identically as other
            .NET database providers.
          </p>
          <p>
            A typical query is performed by creating a command, binding
            parameters, and then executing the command. In C#:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter24Data.six} language="csharp" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>4. Accessing PostgreSQL from PHP using Pomm2</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            On the shoulders of the low level drivers, there is pomm. It
            proposes a modular approach, data converters, listen/notify support,
            database inspector and much more
          </p>
          <p>
            Assuming, Pomm has been installed using composer, here is a complete
            example:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter24Data.seven} language="php" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Pomm’s query manager module escapes query arguments to prevent SQL
            injection. When the arguments are cast, it also converts them from a
            PHP representation to valid Postgres values. The result is an
            iterator, it uses a cursor internally. Every row is converted on the
            fly, booleans to booleans, timestamps to \DateTime etc.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter24;
