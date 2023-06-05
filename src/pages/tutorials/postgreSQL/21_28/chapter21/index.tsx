import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const TutorialPostgreSQLChapter21 = () => {
  return (
    <>
      <PageTitle title="21. Comments in PostgreSQL"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>
            COMMMENT main purpose is to define or change a comment on database
            object.
          </p>

          <p>
            Only a single comment(string) can be given on any database object.
            COMMENT will help us to know what for the particular database object
            has been defined whats its actual purpose is.
          </p>

          <p>
            The rule for COMMENT ON ROLE is that you must be superuser to
            comment on a superuser role, or have the CREATEROLE privilege to
            comment on non-superuser roles. Of course, a superuser can comment
            on anything
          </p>

          <b>1. COMMENT on Table</b>
          <div className="tab-1">
            <Code
              code={`COMMENT ON TABLE table_name IS 'this is student details table';`}
              language="sql"
            />
          </div>
          <b>2. Remove Comment</b>
          <div className="tab-1">
            <Code code={`COMMENT ON TABLE student IS NULL;`} language="sql" />
          </div>
        </div>
      </div>
    </>
  );
};
