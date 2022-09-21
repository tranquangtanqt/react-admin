export const PostgreSQLChapter25Data = {
    one: `/**
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
}`,

    two: `/**
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
} `,

    three: `/**
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
}
`,

    four: `/* get a connection from the connection pool */
java.sql.CONNECTION conn = ds.getConnection();
/* do some work */
/* hand the connection back to the pool - it will not be closed */
conn.close();`
}