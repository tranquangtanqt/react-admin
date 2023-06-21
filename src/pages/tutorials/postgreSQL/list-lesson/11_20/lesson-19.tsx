import Code from 'components/modules/code';

// 19. Role Management
export const TutorialPostgreSQLLesson19 = () => {
  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Create a user with a password</b>
          <div className="tab-1">
            <p>
              Generally you should avoid using the default database role (often
              postgres) in your application. You should instead create a user
              with lower levels of privileges. Here we make one called
              niceusername and give it a password verystrong-PASSWORD
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE ROLE niceusername WITH PASSWORD 'very-strong-password' LOGIN;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              The problem with that is that queries typed into the psql console
              get saved in a history file .psql_history in the user's home
              directory and may as well be logged to the PostgreSQL database
              server log, thus exposing the password.
            </p>
            <p>
              To avoid this, use the \PASSWORD command to set the user password.
              If the user issuing the command is a superuser, the current
              password will not be asked. (Must be superuser to alter passwords
              of superusers)
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE ROLE niceusername WITH LOGIN;
\\PASSWORD niceusername`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Grant and Revoke Privileges</b>
          <div className="tab-1">
            <p>Suppose, that we have three users :</p>
          </div>
          <div className="tab-2">
            <ol>
              <li>The Administrator of the database {'>'} admin</li>
              <li>
                The application with a full access for her data {'>'} read_write
              </li>
              <li>The read only access {'>'} read_only</li>
            </ol>
          </div>
          <div className="tab-2">
            <Code
              code={`--ACCESS DB
REVOKE CONNECT ON DATABASE nova FROM PUBLIC;
GRANT CONNECT ON DATABASE nova TO USER;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              With the above queries, untrusted users can no longer connect to
              the database.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`--ACCESS SCHEMA
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT USAGE ON SCHEMA public TO USER;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              The next set of queries revoke all privileges from unauthenticated
              users and provide limited set of privileges for the read_write
              user.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`--ACCESS TABLES
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM PUBLIC ;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO read_only ;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO read_write ;
GRANT ALL ON ALL TABLES IN SCHEMA public TO ADMIN ;
--ACCESS SEQUENCES
REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM PUBLIC;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO read_only; -- allows the use of CURRVAL
GRANT UPDATE ON ALL SEQUENCES IN SCHEMA public TO read_write; -- allows the use of NEXTVAL and SETVAL
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO read_write; -- allows the use of CURRVAL and NEXTVAL
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO ADMIN;`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Create Role and matching database</b>
          <div className="tab-1">
            <p>
              To support a given application, you often create a new role and
              database to match.
            </p>
            <p>The shell commands to run would be these:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`$ CREATEUSER -P blogger
Enter PASSWORD FOR the NEW ROLE: ********
Enter it again: ********
$ CREATEDB -O blogger blogger`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              This assumes that pg_hba.conf has been properly configured, which
              probably looks like this:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`# TYPE     DATABASE     USER     ADDRESS     METHOD
host       sameuser     ALL      localhost   md5
LOCAL      sameuser     ALL                  md5`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>4. Alter default search_path of user</b>
          <div className="tab-1">
            <p>
              With the below commands, user's default search_path can be set.
            </p>
            <p>a. Check search path before set default schema.</p>
          </div>
          <div className="tab-2">
            <Code
              code={`postgres=# \\c postgres user1
You are now connected TO DATABASE "postgres" AS USER "user1".
postgres=> SHOW search_path;
 search_path
----------------
"$user",public
(1 ROW)`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              b. Set search_path with ALTER USER command to append a new schema
              my_schema
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`postgres=> \\c postgres postgres
You are now connected TO DATABASE "postgres" AS USER "postgres".
postgres=# ALTER USER user1 SET search_path='my_schema, "$user", public';
ALTER ROLE`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>c. Check result after execution.</p>
          </div>
          <div className="tab-2">
            <Code
              code={`postgres=# \\c postgres user1
PASSWORD FOR USER user1:
You are now connected TO DATABASE "postgres" AS USER "user1".
postgres=> SHOW search_path;
 search_path
-------------
 my_schema, "$user", public
(1 ROW)`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Alternative:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`postgres=# SET ROLE user1;
postgres=# SHOW search_path;
 search_path
-------------
 my_schema, "$user", public
(1 ROW)`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>5. Create Read Only User</b>
          <div className="tab-2">
            <Code
              code={`CREATE USER readonly WITH ENCRYPTED PASSWORD 'yourpassword';
GRANT CONNECT ON DATABASE <database_name> TO readonly;
GRANT USAGE ON SCHEMA public TO readonly;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>6. Grant access privileges on objects created in the future</b>
          <div className="tab-1">
            <p>Suppose, that we have three users :</p>
          </div>
          <div className="tab-2">
            <ol>
              <li>The Administrator of the database {'>'} ADMIN</li>
              <li>
                The application with a full access for her data {'>'} read_write
              </li>
              <li>The read only access {'>'} read_only</li>
            </ol>
          </div>
          <div className="tab-1">
            <p>
              With below queries, you can set access privileges on objects
              created in the future in specified schema.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`ALTER DEFAULT PRIVILEGES IN SCHEMA myschema GRANT SELECT ON TABLES TO read_only;
ALTER DEFAULT PRIVILEGES IN SCHEMA myschema GRANT SELECT,INSERT,DELETE,UPDATE ON TABLES TO read_write;
ALTER DEFAULT PRIVILEGES IN SCHEMA myschema GRANT ALL ON TABLES TO ADMIN;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Or, you can set access privileges on objects created in the future
              by specified user.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`ALTER DEFAULT PRIVILEGES FOR ROLE ADMIN GRANT SELECT ON TABLES TO read_only;`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
