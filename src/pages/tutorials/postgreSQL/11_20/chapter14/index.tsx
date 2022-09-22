import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/pageTitle";

export const TutorialPostgreSQLChapter14 = () => {
  return (
    <>
      <PageTitle title="14. Programming with PL/pgSQL"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Basic PL/pgSQL Function</b>
          <div className="tab-1">
            <p>A simple PL/pgSQL function:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE FUNCTION active_subscribers() RETURNS BIGINT AS $$
DECLARE
    -- variable for the following BEGIN ... END block
    subscribers INTEGER;
BEGIN
    -- SELECT must always be used with INTO
    SELECT COUNT(user_id) INTO subscribers FROM users WHERE subscribed;
    
    -- function result
    RETURN subscribers;

EXCEPTION
    -- return NULL if table "users" does not exist
    WHEN undefined_table
    THEN RETURN NULL;
END;
$$ LANGUAGE plpgsql;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>This could have been achieved with just the SQL statement but demonstrates the basic structure of a function.</p>
            <p>To execute the function do:</p>
          </div>
          <div className="tab-2">
            <Code code={`SELECT active_subscribers();`} language="sql" />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Custom exceptions</b>
          <div className="tab-1">
            <p>Creating custom exception 'P2222':</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE OR REPLACE FUNCTION s164() RETURNS void AS
$$
BEGIN
    raise exception USING message = 'S 164', detail = 'D 164', hint = 'H 164', errcode = 'P2222';
END;
$$ LANGUAGE plpgsql
;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>creating custom exception not assigning errm:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE OR REPLACE FUNCTION s165() RETURNS void AS
$$
BEGIN
    raise exception '%','nothing specified';
END;
$$ LANGUAGE plpgsql
;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Calling:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`t=# DO
$$
DECLARE
 _t TEXT;
BEGIN
    perform s165();
    exception WHEN SQLSTATE 'P0001' THEN raise info '%','state P0001 caught: '||SQLERRM;
    perform s164();
END;
$$
;
INFO: state P0001 caught: NOTHING specified
ERROR: S 164
DETAIL: D 164
HINT: H 164
CONTEXT: SQL STATEMENT "SELECT s164()"
PL/pgSQL FUNCTION inline_code_block line 7 AT PERFORM`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>here custom P0001 processed, and P2222, not, aborting the execution.</p>
            <p>
              Also it makes huge sense to keep a table of exceptions, like here:{" "}
              <a href=" http://stackoverflow.com/a/2700312/5315974" target={"_blank"} rel="noreferrer">
                http://stackoverflow.com/a/2700312/5315974
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. PL/pgSQL Syntax</b>
          <div className="tab-2">
            <Code
              code={`CREATE [OR REPLACE] FUNCTION functionName (someParameter 'parameterType')
RETURNS 'DATATYPE'
AS $_block_name_$
DECLARE
    --declare something
BEGIN
    --do something
    --return something
END;
$_block_name_$
LANGUAGE plpgsql;`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>4. RETURNS Block</b>
          <div className="tab-1">
            <p>Options for returning in a PL/pgSQL function:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`Datatype List of all datatypes
Table(column_name column_type, ...)
SETOF 'Datatype' OR 'table_column'`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
