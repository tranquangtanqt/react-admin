import Code from 'components/modules/code';

// 2. Dates, Timestamps, and Intervals
export const TutorialPostgreSQLLesson2 = () => {
  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.1 SELECT the last day of month</b>
          <div className="tab-1">
            <p>You can select the last day of month.</p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT (DATE_TRUNC('MONTH', ('202206'||'01')::DATE) + INTERVAL '1 MONTH - 1 day')::DATE;

 date
--------------
 2022-06-30`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>202206 is replaceable with a variable.</p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.2 Cast a timestamp or interval to a string</b>
          <div className="tab-1">
            <p>
              You can convert a TIMESTAMP or INTERVAL value to a string with the
              TO_CHAR() function:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT TO_CHAR('2016-08-12 16:40:32'::TIMESTAMP, 'DD Mon YYYY HH:MI:SSPM');

 to_char
--------------
 12 Jun 2022 04:40:32PM`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              This statement will produce the string "12 Jun 2022 04:40:32PM".
              The formatting string can be modified in many different ways; the
              full list of template patterns can be found{' '}
              <a
                href="https://www.postgresql.org/docs/current/functions-formatting.html"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>
              Note that you can also insert plain text into the formatting
              string and you can use the template patterns in any order:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT TO_CHAR('2022-06-12 16:40:32'::TIMESTAMP,
    '"Today is "FMDay", the "DDth" day of the month of "FMMonth" of "YYYY');
    
 to_char
--------------
 Today is Sunday, the 12th day of the month of June of 2022`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              This will produce the string "Today is Sunday, the 12th day of the
              month of June of 2022". You should keep in mind, though, that any
              template patterns - even the single letter ones like "I", "D", "W"
              - are converted, unless the plain text is in double quotes. As a
              safety measure, you should put all plain text in double quotes, as
              done above.
            </p>
          </div>
          <div className="tab-1">
            <p>
              You can localize the string to your language of choice (day and
              month names) by using the TM (translation mode) modifier. This
              option uses the localization setting of the server running
              PostgreSQL or the client connecting to it.
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT TO_CHAR('2016-08-12 16:40:32'::TIMESTAMP, 'TMDay, DD" de "TMMonth" del año "YYYY');

 to_char
--------------
Sábado, 12 de Agosto del año 2016`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              With a Spanish locale setting this produces "Sábado, 12 de Agosto
              del año 2016".
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.3 Count the number of records per week</b>
          <div className="tab-1">
            <Code
              code={`SELECT DATE_TRUNC('week', <>) AS "Week" , COUNT(*)
FROM <>
GROUP BY 1
ORDER BY 1;`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
