import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/pageTitle";

export const TutorialPostgreSQLChapter17 = () => {
  return (
    <>
      <PageTitle title="17. Triggers and Trigger Functions"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>
            The trigger will be associated with the specified table or view and will execute the specified function function_name when certain events
            occur.
          </p>

          <b>1. Type of triggers</b>
          <div className="tab-1">
            <p>Trigger can be specified to fire:</p>
          </div>
          <div className="tab-2">
            <ul>
              <li>BEFORE the operation is attempted on a row - insert, update or delete;</li>
              <li>AFTER the operation has completed - insert, update or delete;</li>
              <li>INSTEAD OF the operation in the case of inserts, updates or deletes on a view.</li>
            </ul>
          </div>
          <div className="tab-1">
            <p>Trigger that is marked:</p>
          </div>
          <div className="tab-2">
            <ul>
              <li>FOR EACH ROW is called once for every row that the operation modifies;</li>
              <li>FOR EACH STATEMENT is called onde for any given operation.</li>
            </ul>
          </div>
          <div className="tab-1">
            <p>Preparing to execute examples</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE company (
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
)`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <b>Single insert trigger</b>
          </div>
          <div className="tab-2">
            <p>Step 1: create your function</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE OR REPLACE FUNCTION add_created_at_function()
    RETURNS TRIGGER AS $BODY$
BEGIN
    NEW.created_at := NOW();
    RETURN NEW;
END $BODY$
LANGUAGE plpgsql;`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>Step 2: create your trigger</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TRIGGER add_created_at_trigger
BEFORE INSERT
ON company
FOR EACH ROW
EXECUTE PROCEDURE add_created_at_function();`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>Step 3: test it</p>
          </div>
          <div className="tab-2">
            <Code
              code={`INSERT INTO company (NAME) VALUES ('My company');
SELECT * FROM company;`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <b>Trigger for multiple purpose</b>
          </div>
          <div className="tab-2">
            <p>Step 1: create your function</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE OR REPLACE FUNCTION add_log_function()
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
 LANGUAGE plpgsql;`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>Step 2: create your trigger</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TRIGGER add_log_trigger
AFTER INSERT OR UPDATE OR DELETE
ON company
FOR EACH ROW
EXECUTE PROCEDURE add_log_function();`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <p>Step 3: test it</p>
          </div>
          <div className="tab-2">
            <Code
              code={`INSERT INTO company (NAME) VALUES ('Company 1');
INSERT INTO company (NAME) VALUES ('Company 2');
INSERT INTO company (NAME) VALUES ('Company 3');
UPDATE company SET NAME='Company new 2' WHERE NAME='Company 2';
DELETE FROM company WHERE NAME='Company 1';
SELECT * FROM log;`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Basic PL/pgSQL Trigger Function</b>
          <div className="tab-1">
            <p>This is a simple trigger function.</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE OR REPLACE FUNCTION my_simple_trigger_function()
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
COST 100;`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Adding this trigger function to the users table.</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TRIGGER my_trigger
AFTER INSERT OR DELETE
ON users
FOR EACH ROW
EXECUTE PROCEDURE my_simple_trigger_function();`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
