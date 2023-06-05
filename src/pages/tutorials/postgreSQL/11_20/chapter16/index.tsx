import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const TutorialPostgreSQLChapter16 = () => {
  return (
    <>
      <PageTitle title=" 16. Export PostgreSQL database table header and data to CSV file"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>
            From Adminer management tool it's has export to csv file option for
            mysql database But not available for postgresql database. Here I
            will show the command to export CSV for postgresql database.
          </p>

          <b>1. Copy from query</b>
          <div className="tab-1">
            <Code
              code={`COPY (SELECT oid,relname FROM pg_class LIMIT 5) TO STDOUT;`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>
            2. Export PostgreSQL table to csv with header for some column(s)
          </b>
          <div className="tab-1">
            <Code
              code={`COPY products(is_public, title, discount) TO 'D:\\csv_backup\\products_db.csv' DELIMITER ',' CSV HEADER; 
COPY categories(NAME) TO 'D:\\csv_backup\\categories_db.csv' DELIMITER ',' CSV HEADER;`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Full table backup to csv with header</b>

          <div className="tab-1">
            <Code
              code={`COPY products TO 'D:\\csv_backup\\products_db.csv' DELIMITER ',' CSV HEADER; 
COPY categories TO 'D:\\csv_backup\\categories_db.csv' DELIMITER ',' CSV HEADER;`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
