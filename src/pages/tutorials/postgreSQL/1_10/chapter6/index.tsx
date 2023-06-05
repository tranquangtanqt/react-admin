import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const TutorialPostgreSQLChapter6 = () => {
  return (
    <>
      <PageTitle title="6. COALESCE"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>
            Coalesce returns the first none null argument from a set of
            arguments. Only the first non null argument is return, all
            subsequent arguments are ignored. The function will evaluate to null
            if all arguments are null.
          </p>
          <b>1.1 Single non null argument</b>
          <div className="tab-1">
            <Code
              code={`SELECT COALESCE(NULL, NULL, 'HELLO WORLD');

 coalesce
--------
 HELLO WORLD`}
              language="sql"
            />
          </div>
          <b>1.2 Multiple non null arguments</b>
          <div className="tab-1">
            <Code
              code={`SELECT COALESCE(NULL, NULL, 'first non null', NULL, NULL, 'second non null');

 coalesce
--------
 first non null`}
              language="sql"
            />
          </div>
          <b>1.3 All null arguments</b>
          <div className="tab-1">
            <Code
              code={`SELECT COALESCE(NULL, NULL, NULL);
    
 coalesce
--------
 null`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
