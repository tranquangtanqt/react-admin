export const PostgreSQLChapter17Data = {
    one: `CREATE TABLE company (
    id SERIAL PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    created_at TIMESTAMP,
    modified_at TIMESTAMP DEFAULT NOW()
)
CREATE TABLE log (
    id SERIAL PRIMARY KEY NOT NULL,
    table_name TEXT NOT NULL,
    table_id TEXT NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)`,

    two: `CREATE OR REPLACE FUNCTION add_created_at_function()
    RETURNS TRIGGER AS $BODY$
BEGIN
    NEW.created_at := NOW();
    RETURN NEW;
END $BODY$
LANGUAGE plpgsql;`,

    three: `CREATE TRIGGER add_created_at_trigger
BEFORE INSERT
ON company
FOR EACH ROW
EXECUTE PROCEDURE add_created_at_function();
`,

    four: `INSERT INTO company (NAME) VALUES ('My company');
SELECT * FROM company;
`,
    five: `CREATE OR REPLACE FUNCTION add_log_function()
    RETURNS TRIGGER AS $BODY$
DECLARE
    vDescription TEXT;
    vId INT;
    vReturn RECORD;
BEGIN
    vDescription := TG_TABLE_NAME || ' ';
    IF (TG_OP = 'INSERT') THEN
        vId := NEW.id;
        vDescription := vDescription || 'added. Id: ' || vId;
        vReturn := NEW;
    ELSIF (TG_OP = 'UPDATE') THEN
        vId := NEW.id;
        vDescription := vDescription || 'updated. Id: ' || vId;
        vReturn := NEW;
    ELSIF (TG_OP = 'DELETE') THEN
        vId := OLD.id;
        vDescription := vDescription || 'deleted. Id: ' || vId;
        vReturn := OLD;
    END IF;
    RAISE NOTICE 'TRIGER called on % - Log: %', TG_TABLE_NAME, vDescription;
    INSERT INTO log
        (table_name, table_id, description, created_at)
    VALUES
        (TG_TABLE_NAME, vId, vDescription, NOW());
    RETURN vReturn;
END $BODY$
 LANGUAGE plpgsql;`,
    six: `CREATE TRIGGER add_log_trigger
AFTER INSERT OR UPDATE OR DELETE
ON company
FOR EACH ROW
EXECUTE PROCEDURE add_log_function();`,
    seven: `INSERT INTO company (NAME) VALUES ('Company 1');
INSERT INTO company (NAME) VALUES ('Company 2');
INSERT INTO company (NAME) VALUES ('Company 3');
UPDATE company SET NAME='Company new 2' WHERE NAME='Company 2';
DELETE FROM company WHERE NAME='Company 1';
SELECT * FROM log;`,
    eight: `CREATE OR REPLACE FUNCTION my_simple_trigger_function()
RETURNS TRIGGER AS
$BODY$
BEGIN
    -- TG_TABLE_NAME :name of the table that caused the trigger invocation
    IF (TG_TABLE_NAME = 'users') THEN
        --TG_OP : operation the trigger was fired
        IF (TG_OP = 'INSERT') THEN
            --NEW.id is holding the new database row value (in here id is the id column in users table)
            --NEW will return null for DELETE operations
            INSERT INTO log_table (date_and_time, description) VALUES (NOW(), 'New user inserted. User ID: '|| NEW.id);
            RETURN NEW;
        ELSIF (TG_OP = 'DELETE') THEN
            --OLD.id is holding the old database row value (in here id is the id column in users table)
            --OLD will return null for INSERT operations
        INSERT INTO log_table (date_and_time, description) VALUES (NOW(), 'User deleted.. User ID: ' || OLD.id);
            RETURN OLD;
        END IF;
        RETURN NULL;
    END IF;
END;
$BODY$
LANGUAGE plpgsql VOLATILE
COST 100;
`,
    nine: `CREATE TRIGGER my_trigger
AFTER INSERT OR DELETE
ON users
FOR EACH ROW
EXECUTE PROCEDURE my_simple_trigger_function();`
}