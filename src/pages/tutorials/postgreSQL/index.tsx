import { CardList } from "../../../components/modules/cardList";
import { PageTitle } from "../../../components/modules/pageTitle";

export const TutorialPostgreSQL = () => {
  const cardData = [
    {
      title: "Chapter 1 - 5",
      links: [
        {
          text: "Data Types",
          path: "/tutorial/postgreSQL/chapter1",
          contents: [
            {
              text: "Numeric Types",
            },
            {
              text: "Date/ Time Types",
            },
            {
              text: "Geometric Types",
            },
            {
              text: "Network Adress Types",
            },
            {
              text: "Character Types",
            },
            {
              text: "Arrays",
            },
          ],
        },
        {
          text: "Dates, Timestamps, and Intervals",
          path: "/tutorial/postgreSQL/chapter2",
          contents: [
            {
              text: "SELECT the last day of month",
            },
            {
              text: "Cast a timestamp or interval to a string",
            },
            {
              text: "Count the number of records per week",
            },
          ],
        },
        {
          text: "Table Creation",
          path: "/tutorial/postgreSQL/chapter3",
          contents: [
            {
              text: "Show table definition",
            },
            {
              text: "Create table from select",
            },
            {
              text: "Create unlogged table",
            },
            {
              text: "Table creation with Primary Key",
            },
            {
              text: "Create a table that references other table",
            },
          ],
        },
        {
          text: "SELECT",
          path: "/tutorial/postgreSQL/chapter4",
          contents: [],
        },
        {
          text: "Find String Length/Character Length",
          path: "/tutorial/postgreSQL/chapter5",
          contents: [],
        },
      ],
    },
    {
      title: "Chapter 6 - 10",
      links: [
        {
          text: "COALESCE",
          path: "/tutorial/postgreSQL/chapter6",
          contents: [
            {
              text: "Single non null argument",
            },
            {
              text: "Multiple non null arguments",
            },
            {
              text: "All null arguments",
            },
          ],
        },
        {
          text: "INSERT",
          path: "/tutorial/postgreSQL/chapter7",
          contents: [
            {
              text: "Insert data using COPY",
            },
            {
              text: "Inserting multiple rows",
            },
            {
              text: "INSERT data and RETURING values",
            },
            {
              text: "Basic INSERT",
            },
            {
              text: "Insert from select",
            },
            {
              text: "UPSERT - INSERT ... ON CONFLICT DO UPDATE..",
            },
            {
              text: "SELECT data into file",
            },
          ],
        },
        {
          text: "UPDATE",
          path: "/tutorial/postgreSQL/chapter8",
          contents: [
            {
              text: "Updating a table based on joining another table",
            },
            {
              text: "Update all rows in a table",
            },
            {
              text: " Update all rows meeting a condition",
            },
            {
              text: "Updating multiple columns in table",
            },
          ],
        },
        {
          text: "JSON Support",
          path: "/tutorial/postgreSQL/chapter9",
          contents: [
            {
              text: "Using JSONb operators",
            },
            {
              text: "Querying complex JSON documentse",
            },
            {
              text: "Creating a pure JSON table",
            },
          ],
        },
        {
          text: "Aggregate Functions",
          path: "/tutorial/postgreSQL/chapter10",
          contents: [
            {
              text: "Simple statistics: min(), max(), avg()",
            },
            {
              text: "regr_slope(Y, X)",
            },
            {
              text: "string_agg(expression, delimiter)",
            },
          ],
        },
      ],
    },
    {
      title: "Chapter 11 - 15",
      links: [
        {
          text: "Common Table Expressions (WITH)",
          path: "/tutorial/postgreSQL/chapter11",
          contents: [
            {
              text: "Common Table Expressions in SELECT Queries",
            },
            {
              text: "Traversing tree using WITH RECURSIVE",
            },
          ],
        },
        {
          text: "Window Functions",
          path: "/tutorial/postgreSQL/chapter12",
          contents: [
            {
              text: "Generic example",
            },
            {
              text: "Column values vs dense_rank vs rank vs row_number",
            },
          ],
        },
        {
          text: "Recursive queries",
          path: "/tutorial/postgreSQL/chapter13",
          contents: [
            {
              text: "Sum of Integers",
            },
          ],
        },
        {
          text: "Programming with PL/pgSQL",
          path: "/tutorial/postgreSQL/chapter14",
          contents: [
            {
              text: "Basic PL/pgSQL Function",
            },
            {
              text: "Custom exceptions",
            },
            {
              text: "PL/pgSQL Syntax",
            },
            {
              text: "RETURNS Block",
            },
          ],
        },
        {
          text: "Inheritance",
          path: "/tutorial/postgreSQL/chapter15",
          contents: [
            {
              text: "Creating children tables",
            },
          ],
        },
      ],
    },
    {
      title: "Chapter 16 - 20",
      links: [
        {
          text: "Export PostgreSQL database table header and data to CSV file",
          path: "/tutorial/postgreSQL/chapter16",
          contents: [
            {
              text: "Copy from query",
            },
            {
              text: "Export PostgreSQL table to csv with header for some column(s)",
            },
            {
              text: "Full table backup to csv with header",
            },
          ],
        },
        {
          text: "Triggers and Trigger Functions",
          path: "/tutorial/postgreSQL/chapter17",
          contents: [
            {
              text: "Type of triggers",
            },
            {
              text: "Basic PL/pgSQL Trigger Function",
            },
          ],
        },
        {
          text: "Event Triggers",
          path: "/tutorial/postgreSQL/chapter18",
          contents: [
            {
              text: "Logging DDL Command Start Events",
            },
          ],
        },
        {
          text: "Role Management",
          path: "/tutorial/postgreSQL/chapter19",
          contents: [
            {
              text: "Create a user with a password",
            },
            {
              text: "Grant and Revoke Privileges",
            },
            {
              text: "Create Role and matching database",
            },
            {
              text: "Alter default search_path of user",
            },
            {
              text: "Create Read Only User",
            },
            {
              text: "Grant access privileges on objects created in the future",
            },
          ],
        },
        {
          text: "Postgres cryptographic functions",
          path: "/tutorial/postgreSQL/chapter20",
          contents: [
            {
              text: "digest",
            },
          ],
        },
      ],
    },
    {
      title: "Chapter 21 - 25",
      links: [
        {
          text: "Comments in PostgreSQL",
          path: "/tutorial/postgreSQL/chapter21",
          contents: [
            {
              text: "COMMENT on Table",
            },
            {
              text: "Remove Comment",
            },
          ],
        },
        {
          text: "Backup and Restore",
          path: "/tutorial/postgreSQL/chapter22",
          contents: [
            {
              text: "Backing up one database",
            },
            {
              text: "Restoring backups",
            },
            {
              text: "Backing up the whole cluster",
            },
            {
              text: "Using psql to export data",
            },
            {
              text: "Using Copy to import",
            },
            {
              text: "Using Copy to export",
            },
          ],
        },
        {
          text: "Backup script for a production DB",
          path: "/tutorial/postgreSQL/chapter23",
          contents: [
            {
              text: "saveProdDb.sh",
            },
          ],
        },
        {
          text: "Accessing Data Programmatically",
          path: "/tutorial/postgreSQL/chapter24",
          contents: [
            {
              text: "Accessing PostgreSQL with the C-API",
            },
            {
              text: "Accessing PostgreSQL from python using psycopg2",
            },
            {
              text: "Accessing PostgreSQL from .NET using the Npgsql provider",
            },
            {
              text: "Accessing PostgreSQL from PHP using Pomm2",
            },
          ],
        },
        {
          text: "Connect to PostgreSQL from Java",
          path: "/tutorial/postgreSQL/chapter25",
          contents: [
            {
              text: "Connecting with java.sql.DriverManager",
            },
            {
              text: "Connecting with java.sql.DriverManager and Properties",
            },
            {
              text: "Connecting with javax.sql.DataSource using a connection pool",
            },
          ],
        },
      ],
    },
    {
      title: "Chapter 26 - 28",
      links: [
        {
          text: "PostgreSQL High Availability",
          path: "/tutorial/postgreSQL/chapter26",
          contents: [
            {
              text: "Replication in PostgreSQL",
            },
          ],
        },
        {
          text: "EXTENSION dblink and postgres_fdw",
          path: "/tutorial/postgreSQL/chapter27",
          contents: [
            {
              text: "Extention FDW",
            },
            {
              text: "Foreign Data Wrapper",
            },
            {
              text: "Extention dblink",
            },
          ],
        },
        {
          text: "Postgres Tip and Tricks",
          path: "/tutorial/postgreSQL/chapter28",
          contents: [
            {
              text: "DATEADD alternative in Postgres",
            },
            {
              text: "Comma separated values of a column",
            },
            {
              text: "Delete duplicate records from postgres table",
            },
            {
              text: "Update query with join between two tables alternative since Postresql does not support join in update query",
            },
            {
              text: "Difference between two date timestamps month wise and year wise",
            },
            {
              text: "Query to Copy/Move/Transafer table data from one database to other database table with same schema",
            },
          ],
        },
      ],
    },
  ];
  
  return (
    <>
      <PageTitle title="PostgreSQL"></PageTitle>
      <div className="row">
        <CardList cardData={cardData} startWith={1}></CardList>
      </div>
    </>
  );
};
