import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/page-title";

export const TutorialPostgreSQLChapter25 = () => {
  return (
    <>
      <PageTitle title="25. Connect to PostgreSQL from Java"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>The API to use a relational database from Java is JDBC.</p>
          <p>This API is implemented by a JDBC driver.</p>
          <p>To use it, put the JAR-file with the driver on the JAVA class path.</p>
          <p>This documentation shows samples how to use the JDBC driver to connect to a database</p>

          <b>1. Connecting with java.sql.DriverManager</b>
          <div className="tab-1">
            <p>This is the simplest way to connect.</p>
            <p>
              First, the driver has to be registered with java.sql.DriverManager so that it knows which class to use. This is done by loading the
              driver class, typically with java.lang.CLASS.forname(;driver class name{">"}).
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`/**
 * Connect to a PostgreSQL database.
 * @param url the JDBC URL to connect to; must start with "jdbc:postgresql:"
 * @param user the username for the connection
 * @param password the password for the connection
 * @return a connection object for the established connection
 * @throws ClassNotFoundException if the driver class cannot be found on the Java class path
 * @throws java.sql.SQLException if the connection to the database fails
 */
private static java.sql.Connection connect(String url, String user, String password)
    throws ClassNotFoundException, java.sql.SQLException {
    /*
    * Register the PostgreSQL JDBC driver.
    * This may throw a ClassNotFoundException.
    */
    Class.forName("org.postgresql.Driver");

    /*
    * Tell the driver manager to connect to the database specified with the URL.
    * This may throw an SQLException.
    */
    return java.sql.DriverManager.getConnection(url, user, password);
}`}
              language="javascript"
            />
          </div>
          <div className="tab-1">
            <p>
              Not that user and password can also be included in the JDBC URL, in which case you don't have to specify them in the getConnection
              method call.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Connecting with java.sql.DriverManager and Properties</b>
          <div className="tab-1">
            <p>
              Instead of specifying connection parameters like user and password (see a complete list here) in the URL or a separate parameters, you
              can pack them into a java.util.Properties object:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`/**
 * Connect to a PostgreSQL database.
 * @param url the JDBC URL to connect to. Must start with "jdbc:postgresql:"
 * @param user the username for the connection
 * @param password the password for the connection
 * @return a connection object for the established connection
 * @throws ClassNotFoundException if the driver class cannot be found on the Java class path
 * @throws java.sql.SQLException if the connection to the database fails
 */
private static java.sql.Connection connect(String url, String user, String password)
    throws ClassNotFoundException, java.sql.SQLException {
    /*
    * Register the PostgreSQL JDBC driver.
    * This may throw a ClassNotFoundException.
    */
    Class.forName("org.postgresql.Driver");
    java.util.Properties props = new java.util.Properties();
    props.setProperty("user", user);
    props.setProperty("password", password);

    /* don't use server prepared statements */
    props.setProperty("prepareThreshold", "0");

    /*
    * Tell the driver manager to connect to the database specified with the URL.
    * This may throw an SQLException.
    */
    return java.sql.DriverManager.getConnection(url, props);
} `}
              language="javascript"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Connecting with javax.sql.DataSource using a connection pool</b>
          <div className="tab-1">
            <p>
              It is common to use javax.sql.DataSource with JNDI in application server containers, where you register a data source under a name and
              look it up whenever you need a connection.
            </p>
            <p>This is code that demonstrates how data sources work:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`/**
 * Create a data source with connection pool for PostgreSQL connections
 * @param url the JDBC URL to connect to. Must start with "jdbc:postgresql:"
 * @param user the username for the connection
 * @param password the password for the connection
 * @return a data source with the correct properties set
 */
private static javax.sql.DataSource createDataSource(String url, String user, String password){
    /* use a data source with connection pooling */
    org.postgresql.ds.PGPoolingDataSource ds = new org.postgresql.ds.PGPoolingDataSource();
    ds.setUrl(url);
    ds.setUser(user);
    ds.setPassword(password);

    /* the connection pool will have 10 to 20 connections */
    ds.setInitialConnections(10);
    ds.setMaxConnections(20);

    /* use SSL connections without checking server certificate */
    ds.setSslMode("require");
    ds.setSslfactory("org.postgresql.ssl.NonValidatingFactory");

    return ds;
}`}
              language="javascript"
            />
          </div>
          <div className="tab-1">
            <p>Once you have created a data source by calling this function, you would use it like this:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`/* get a connection from the connection pool */
java.sql.CONNECTION conn = ds.getConnection();
/* do some work */
/* hand the connection back to the pool - it will not be closed */
conn.close();`}
              language="javascript"
            />
          </div>
        </div>
      </div>
    </>
  );
};
