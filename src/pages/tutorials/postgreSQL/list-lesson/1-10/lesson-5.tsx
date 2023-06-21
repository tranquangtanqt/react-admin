import Code from 'components/modules/code';

// 5. Find String Length/Character Length
export const TutorialPostgreSQLLesson5 = () => {
  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>
            To get length of "character varying", "text" fields, Use
            char_length() or character_length().
          </b>
          <div className="tab-1">
            <p>Example 1, Query:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT CHAR_LENGTH('ABCDE')
    
 char_length
--------------
 5`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Example 2, Query:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT CHARACTER_LENGTH('ABCDE')
    
 character_length
--------------
 5`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
