export const PostgreSQLChapter14Data = {
    one: `CREATE FUNCTION active_subscribers() RETURNS BIGINT AS $$
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
$$ LANGUAGE plpgsql;`,

    two: `SELECT active_subscribers();`,

    three: `CREATE OR REPLACE FUNCTION s164() RETURNS void AS
$$
BEGIN
    raise exception USING message = 'S 164', detail = 'D 164', hint = 'H 164', errcode = 'P2222';
END;
$$ LANGUAGE plpgsql
;
`,

    four: `CREATE OR REPLACE FUNCTION s165() RETURNS void AS
$$
BEGIN
    raise exception '%','nothing specified';
END;
$$ LANGUAGE plpgsql
;`,
    five: `t=# DO
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
PL/pgSQL FUNCTION inline_code_block line 7 AT PERFORM`,
    six: `CREATE [OR REPLACE] FUNCTION functionName (someParameter 'parameterType')
RETURNS 'DATATYPE'
AS $_block_name_$
DECLARE
    --declare something
BEGIN
    --do something
    --return something
END;
$_block_name_$
LANGUAGE plpgsql;`,
    seven: `Datatype List of all datatypes
Table(column_name column_type, ...)
SETOF 'Datatype' OR 'table_column'`
}