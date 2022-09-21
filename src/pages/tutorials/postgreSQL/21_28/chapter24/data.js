export const PostgreSQLChapter24Data = {
    one: `gcc -Wall -I "$(pg_config --includedir)" -L "$(pg_config --libdir)" -o coltype coltype.c -lpq`,

    two: `cl /MT /W4 /I <include directory> coltype.c <path TO libpq.lib>`,

    three: `/* necessary for all PostgreSQL client programs, should be first */
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
}`,

    four: `import psycopg2
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
print(cur.fetchall())
`,

    five: `[{'id': 2, 'fruit': 'apple'}, {'id': 3, 'fruit': 'orange'}]`,

    six: `var connString = "Host=myserv;Username=myuser;Password=mypass;Database=mydb";
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
}   // the C# 'using' directive calls conn.Close() and conn.Dispose() for us`,

    seven: `<?php
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
}`
}