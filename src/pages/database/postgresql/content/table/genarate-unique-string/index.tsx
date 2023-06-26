import { PageTitle } from 'components/modules/page-title';
import Code from 'components/modules/code';

export const DatabasePostgresqlGenarateUniqueString = () => {
  return (
    <>
      <PageTitle title="Generate a unique string per record in a table"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code
            code={`CREATE FUNCTION make_uid() RETURNS text AS $$
DECLARE
    new_uid text;
    done bool;
BEGIN
    done := false;
    WHILE NOT done LOOP
        new_uid := md5(''||now()::text||random()::text);
        done := NOT exists(SELECT 1 FROM my_table WHERE uid=new_uid);
    END LOOP;
    RETURN new_uid;
END;
$$ LANGUAGE PLPGSQL VOLATILE;


ALTER TABLE my_table ADD COLUMN uid text NOT NULL DEFAULT make_uid();

-- md5(''||now()::text||random()::text)
-- encode(...,'base64')`}
            language="sql"
          />
        </div>
      </div>
    </>
  );
};
