import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/page-title";

export const TutorialPostgreSQLChapter18 = () => {
  return (
    <>
      <PageTitle title="18. Event Triggers"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>Event Triggers will be fired whenever event associated with them occurs in database.</p>

          <b>1. Logging DDL Command Start Events</b>
          <div className="tab-1">
            <p>Event Type</p>
          </div>
          <div className="tab-2">
            <ul>
              <li>DDL_COMMAND_START</li>
              <li>DDL_COMMAND_END</li>
              <li>SQL_DROP</li>
            </ul>
          </div>
          <div className="tab-1">
            <p>This is example for creating an Event Trigger and logging DDL_COMMAND_START events</p>
          </div>
          <div className="tab-2">
            <Code
              code={`CREATE TABLE TAB_EVENT_LOGS(
    DATE_TIME TIMESTAMP,
    EVENT_NAME TEXT,
    REMARKS TEXT
);
CREATE OR REPLACE FUNCTION FN_LOG_EVENT()
    RETURNS EVENT_TRIGGER
    LANGUAGE SQL
    AS
    $main$
    INSERT INTO TAB_EVENT_LOGS(DATE_TIME,EVENT_NAME,REMARKS)
    VALUES(NOW(),TG_TAG,'Event Logging');
    $main$;
CREATE EVENT TRIGGER TRG_LOG_EVENT ON DDL_COMMAND_START
    EXECUTE PROCEDURE FN_LOG_EVENT();`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
