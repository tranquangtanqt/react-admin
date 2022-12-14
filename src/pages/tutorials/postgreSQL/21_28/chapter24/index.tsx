import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/pageTitle";

export const TutorialPostgreSQLChapter24 = () => {
  return (
    <>
      <PageTitle title="24. Accessing Data Programmatically"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Accessing PostgreSQL with the C-API</b>
          <div className="tab-1">
            <p>The C-API is the most powerful way to access PostgreSQL and it is surprisingly comfortable.</p>
            <b>Compilation and linking</b>
            <p>
              During compilation, you have to add the PostgreSQL include directory, which can be found with pg_config -- includedir, to the include
              path.
            </p>
            <p>
              You must link with the PostgreSQL client shared library (libpq.so on UNIX, libpq.dll on Windows). This library is in the PostgreSQL
              library directory, which can be found with pg_config --libdir.
            </p>
            <p>Note: For historical reason, the library is called libpq.soand not libpg.so, which is a popular trap for beginners.</p>
            <p>Given that the below code sample is in file coltype.c, compilation and linking would be done with</p>
          </div>
          <div className="tab-2">
            <Code code={`gcc -Wall -I "$(pg_config --includedir)" -L "$(pg_config --libdir)" -o coltype coltype.c -lpq`} language="sql" />
          </div>
          <div className="tab-1">
            <p>with the GNU C compiler (consider adding -Wl,-rpath,"$(pg_config --libdir)" to add the library search path) or with</p>
          </div>
          <div className="tab-2">
            <Code code={`cl /MT /W4 /I <include directory> coltype.c <path TO libpq.lib>`} language="sql" />
          </div>
          <div className="tab-1">
            <p>on Windows with Microsoft Visual C.</p>
          </div>
          <div className="tab-1">
            <p>Sample program</p>
          </div>
          <div className="tab-2">
            <Code
              code={`/* necessary for all PostgreSQL client programs, should be first */
#include <libpq-fe.h>
#include <stdio.h>
#include <string.h>
#ifdef TRACE
#define TRACEFILE "trace.out"
#endif
int main(int argc, char **argv) {
#ifdef TRACE
    FILE *trc;
#endif
    PGconn *conn;
    PGresult *res;
    int rowcount, colcount, i, j, firstcol;
    /* parameter type should be guessed by PostgreSQL */
    const Oid paramTypes[1] = { 0 };
    /* parameter value */
    const char * const paramValues[1] = { "pg_database" };
    /*
    * Using an empty connectstring will use default values for everything.
    * If set, the environment variables PGHOST, PGDATABASE, PGPORT and
    * PGUSER will be used.
    */
    conn = PQconnectdb("");
    /*
    * This can only happen if there is not enough memory
    * to allocate the PGconn structure.
    */
    if (conn == NULL){
        fprintf(stderr, "Out of memory connecting to PostgreSQL.\\n");
        return 1;
    }
    /* check if the connection attempt worked */
    if (PQstatus(conn) != CONNECTION_OK){
        fprintf(stderr, "%s\\n", PQerrorMessage(conn));
        /*
        * Even if the connection failed, the PGconn structure has been
        * allocated and must be freed.
        */
        PQfinish(conn);
        return 1;
    }
#ifdef TRACE
    if (NULL == (trc = fopen(TRACEFILE, "w"))){
        fprintf(stderr, "Error opening trace file \\"%s\\"!\\n", TRACEFILE);
        PQfinish(conn);
        return 1;
    }
    /* tracing for client-server communication */
    PQtrace(conn, trc);
#endif
    /* this program expects the database to return data in UTF-8 */
    PQsetClientEncoding(conn, "UTF8");
    /* perform a query with parameters */
    res = PQexecParams(
        conn,
        "SELECT column_name, data_type "
        "FROM information_schema.columns "
        "WHERE table_name = $1",
        1,              /* one parameter */
        paramTypes,
        paramValues,
        NULL,           /* parameter lengths are not required for strings */
        NULL,           /* all parameters are in text format */
        0               /* result shall be in text format */
    );
    /* out of memory or sever communication broken */
    if (NULL == res){
        fprintf(stderr, "%s\\n", PQerrorMessage(conn));
        PQfinish(conn);
#ifdef TRACE
        fclose(trc);
#endif
        return 1;
    }
    /* SQL statement should return results */
    if (PGRES_TUPLES_OK != PQresultStatus(res)){
        fprintf(stderr, "%s\\n", PQerrorMessage(conn));
        PQfinish(conn);
    #ifdef TRACE
        fclose(trc);
    #endif
        return 1;
    }
    /* get count of result rows and columns */
    rowcount = PQntuples(res);
    colcount = PQnfields(res);

    /* print column headings */
    firstcol = 1;

    printf("Description of the table \\"pg_database\\"\\n");

    for (j=0; j<colcount; ++j){
        if (firstcol)
            firstcol = 0;
        else
            printf(": ");
        printf(PQfname(res, j));
    }

    printf("\\n\\n");

    /* loop through rosult rows */
    for (i=0; i<rowcount; ++i) {
        /* print all column data */
        firstcol = 1;
        for (j=0; j<colcount; ++j){
            if (firstcol)
                firstcol = 0;
            else
                printf(": ");
            printf(PQgetvalue(res, i, j));
        }
        printf("\\n");
    }

    /* this must be done after every statement to avoid memory leaks */
    PQclear(res);
    /* close the database connection and release memory */
    PQfinish(conn);
#ifdef TRACE
    fclose(trc);
#endif
    return 0;
}`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Accessing PostgreSQL from python using psycopg2</b>
          <div className="tab-1">
            <p>
              You can find description of the driver{" "}
              <a href="http://initd.org/psycopg/docs/" target={"_blank"} rel="noreferrer">
                here
              </a>{" "}
              .
            </p>
            <p>The quick example is:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`import psycopg2
db_host = 'postgres.server.com'
db_port = '5432'
db_un = 'user'
db_pw = 'password'
db_name = 'testdb'
conn = psycopg2.connect("dbname={} host={} user={} password={}".format(
                        db_name, db_host, db_un, db_pw),
                        cursor_factory=RealDictCursor)
cur = conn.cursor()
sql = 'select * from testtable where id > %s and id < %s'
args = (1, 4)
cur.execute(sql, args)
print(cur.fetchall())`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Will result:</p>
          </div>
          <div className="tab-2">
            <Code code={`[{'id': 2, 'fruit': 'apple'}, {'id': 3, 'fruit': 'orange'}]`} language="sql" />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Accessing PostgreSQL from .NET using the Npgsql provider</b>
          <div className="tab-1">
            <p>
              One of the more popular .NET providers for Postgresql is Npgsql, which is ADO.NET compatible and is used nearly identically as other
              .NET database providers.
            </p>
            <p>A typical query is performed by creating a command, binding parameters, and then executing the command. In C#:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`var connString = "Host=myserv;Username=myuser;Password=mypass;Database=mydb";
using (var conn = new NpgsqlConnection(connString))
{
    var querystring = "INSERT INTO data (some_field) VALUES (@content)";
    conn.Open();

    // Create a new command with CommandText and Connection constructor
    using (var cmd = new NpgsqlCommand(querystring, conn))
    {
        // Add a parameter and set its type with the NpgsqlDbType enum
        var contentString = "Hello World!";
        cmd.Parameters.Add("@content", NpgsqlDbType.Text).Value = contentString;

        // Execute a query that returns no results
        cmd.ExecuteNonQuery();

        // It is possible to reuse a command object and open connection instead of creating new ones
        // Create a new query and set its parameters
        int keyId = 101;
        cmd.CommandText = "SELECT primary_key, some_field FROM data WHERE primary_key = @keyId";
        cmd.Parameters.Clear();
        cmd.Parameters.Add("@keyId", NpgsqlDbType.Integer).Value = keyId;

        // Execute the command and read through the rows one by one
        using (NpgsqlDataReader reader = cmd.ExecuteReader())
        {
            while (reader.Read()) // Returns false for 0 rows, or after reading the last row of the results
            {
                // read an integer value
                int primaryKey = reader.GetInt32(0);
                // or
                primaryKey = Convert.ToInt32(reader["primary_key"]);

                // read a text value
                string someFieldText = reader["some_field"].ToString();
            }
        }
    }
}   // the C# 'using' directive calls conn.Close() and conn.Dispose() for us`}
              language="csharp"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>4. Accessing PostgreSQL from PHP using Pomm2</b>
          <div className="tab-1">
            <p>
              On the shoulders of the low level drivers, there is pomm. It proposes a modular approach, data converters, listen/notify support,
              database inspector and much more
            </p>
            <p>Assuming, Pomm has been installed using composer, here is a complete example:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`<?php
use PommProject\\Foundation\\Pomm;
$loader = require __DIR__ . '/vendor/autoload.php';
$pomm = new Pomm(['my_db' => ['dsn' => 'pgsql://user:pass@host:5432/db_name']]);

// TABLE comment (
// comment_id uuid PK, created_at timestamptz NN,
// is_moderated bool NN default false,
// content text NN CHECK (content !~ '^\\s+$'), author_email text NN)
$sql = <<<SQL
SELECT
    comment_id,
    created_at,
    is_moderated,
    content,
    author_email
FROM comment
    INNER JOIN author USING (author_email)
WHERE
    age(now(), created_at) < $*::interval
ORDER BY created_at ASC
SQL;
// the argument will be converted as it is cast in the query above
$comments = $pomm['my_db']
    ->getQueryManager()
    ->query($sql, [DateInterval::createFromDateString('1 day')]);
if ($comments->isEmpty()) {
    printf("There are no new comments since yesterday.");
} else {
    foreach ($comments as $comment) {
        printf(
            "%s has posted at %s. %s\\n",
            $comment['author_email'],
            $comment['created_at']->format("Y-m-d H:i:s"),
            $comment['is_moderated'] ? '[OK]' : '');
    }
}`}
              language="php"
            />
          </div>
          <div className="tab-1">
            <p>
              Pomm???s query manager module escapes query arguments to prevent SQL injection. When the arguments are cast, it also converts them from a
              PHP representation to valid Postgres values. The result is an iterator, it uses a cursor internally. Every row is converted on the fly,
              booleans to booleans, timestamps to \DateTime etc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
