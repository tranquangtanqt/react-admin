import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/pageTitle";

export const TutorialPostgreSQLChapter20 = () => {
  return (
    <>
      <PageTitle title="20. Postgres cryptographic functions"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>In Postgres, cryptographic functions can be unlocked by using pgcrypto module. CREATE EXTENSION pgcrypto;</p>

          <b>1. Digest</b>
          <div className="tab-1">
            <p>DIGEST() functions generate a binary hash of the given data. This can be used to create a random hash.</p>
            <p>Usage:</p>
          </div>
          <div className="tab-2">
            <Code code={`digest(DATA TEXT, TYPE TEXT) RETURNS BYTEA`} language="sql" />
          </div>
          <div className="tab-1">
            <p>Or:</p>
          </div>
          <div className="tab-2">
            <Code code={`digest(DATA BYTEA, TYPE TEXT) RETURNS BYTEA`} language="sql" />
          </div>
          <div className="tab-1">
            <p>Examples:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT DIGEST('1', 'sha1')
SELECT DIGEST(CONCAT(CAST(CURRENT_TIMESTAMP AS TEXT), RANDOM()::TEXT), 'sha1')`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
