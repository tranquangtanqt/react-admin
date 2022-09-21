export const PostgreSQLChapter15Data = {
    one: `CREATE TABLE users (username TEXT, email TEXT);
CREATE TABLE simple_users () INHERITS (users);
CREATE TABLE users_with_password (PASSWORD TEXT) INHERITS (users);`
}