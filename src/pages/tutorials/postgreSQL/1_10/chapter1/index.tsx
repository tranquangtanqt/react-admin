import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const TutorialPostgreSQLChapter1 = () => {
  return (
    <>
      <PageTitle title="1. Data Types"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.1 Numeric Types</b>
          <div className="tab-1">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>Name</th>
                  <th>Storage Size</th>
                  <th>Description</th>
                  <th>Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SMALLINT</td>
                  <td>2 bytes</td>
                  <td>small-range integer</td>
                  <td>-32768 to +32767</td>
                </tr>
                <tr>
                  <td>INTEGER</td>
                  <td>4 bytes</td>
                  <td>ypical choice for integer</td>
                  <td>-2147483648 to +2147483647</td>
                </tr>
                <tr>
                  <td>BIGINT</td>
                  <td>8 bytes</td>
                  <td>large-range integer</td>
                  <td>-9223372036854775808 to +9223372036854775807</td>
                </tr>
                <tr>
                  <td>DECIMAL</td>
                  <td>variable</td>
                  <td>user-specified precision, exact</td>
                  <td>
                    up to 131072 digits before the decimal point; up to 16383
                    digits after the decimal point
                  </td>
                </tr>
                <tr>
                  <td>NUMERIC</td>
                  <td>variable</td>
                  <td>user-specified precision, exact</td>
                  <td>
                    up to 131072 digits before the decimal point; up to 16383
                    digits after the decimal point
                  </td>
                </tr>
                <tr>
                  <td>REAL</td>
                  <td>4 bytes</td>
                  <td>variable-precision, inexact</td>
                  <td>6 decimal digits precision</td>
                </tr>
                <tr>
                  <td>DOUBLE PRECISION</td>
                  <td>8 bytes</td>
                  <td>variable-precision, inexact</td>
                  <td>15 decimal digits precision</td>
                </tr>
                <tr>
                  <td>smallserial</td>
                  <td>2 bytes</td>
                  <td>small autoincrementing integer</td>
                  <td>1 to 32767</td>
                </tr>
                <tr>
                  <td>serial</td>
                  <td>4 bytes</td>
                  <td>autoincrementing integer</td>
                  <td>1 to 2147483647</td>
                </tr>
                <tr>
                  <td>BIGSERIAL</td>
                  <td>8 bytes</td>
                  <td>large autoincrementing integer</td>
                  <td>1 to 9223372036854775807</td>
                </tr>
                <tr>
                  <td>int4range</td>
                  <td></td>
                  <td>Range of integer</td>
                  <td></td>
                </tr>
                <tr>
                  <td>int8range</td>
                  <td></td>
                  <td>Range of bigint</td>
                  <td></td>
                </tr>
                <tr>
                  <td>numrange</td>
                  <td></td>
                  <td>Range of numeric</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.2 Date/Time Types</b>
          <div className="tab-1">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>Name</th>
                  <th>Storage Size</th>
                  <th>Description</th>
                  <th>Low Value</th>
                  <th>High Value</th>
                  <th>Resolution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TIMESTAMP (without time zone)</td>
                  <td>8 bytes</td>
                  <td>both date and time (no time zone)</td>
                  <td>4713 BC</td>
                  <td>294276 AD 1</td>
                  <td>1 microsecond / 14 digits</td>
                </tr>
                <tr>
                  <td>TIMESTAMP (with time zone)</td>
                  <td>8 bytes</td>
                  <td>both date and time, with time zone</td>
                  <td>4713 BC</td>
                  <td>5874897 AD</td>
                  <td>1 microsecond / 14 digits</td>
                </tr>
                <tr>
                  <td>DATE</td>
                  <td>4 bytes</td>
                  <td>date (no time of day)</td>
                  <td>4713 BC</td>
                  <td>5874897 AD</td>
                  <td>1 day</td>
                </tr>
                <tr>
                  <td>TIME (without time zone)</td>
                  <td>8 bytes</td>
                  <td>time of day (no date)</td>
                  <td>0</td>
                  <td>1</td>
                  <td>1 microsecond / 14 digits</td>
                </tr>
                <tr>
                  <td>TIME (with time zone)</td>
                  <td>12 bytes</td>
                  <td>times of day only, with time zone</td>
                  <td>00:00:00+1459</td>
                  <td>24:00:00-1459</td>
                  <td>1 microsecond / 14 digits</td>
                </tr>
                <tr>
                  <td>INTERVAL</td>
                  <td>16 bytes</td>
                  <td>time interval</td>
                  <td>-178000000 years</td>
                  <td>s 178000000 years</td>
                  <td>1 microsecond / 14 digits</td>
                </tr>
                <tr>
                  <td>tsrange</td>
                  <td></td>
                  <td>range of timestamp without time zone</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>tstzrange</td>
                  <td></td>
                  <td>range of timestamp with time zone</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>daterange</td>
                  <td></td>
                  <td>range of date</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.3 Geometric Types</b>
          <div className="tab-1">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>Name</th>
                  <th>Storage Size</th>
                  <th>Description</th>
                  <th>Representation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Storage Size</td>
                  <td>Description</td>
                  <td>Representation</td>
                </tr>
                <tr>
                  <td>point</td>
                  <td>16 bytes</td>
                  <td>Point on a plane</td>
                  <td>(x,y)</td>
                </tr>
                <tr>
                  <td>line</td>
                  <td>32 bytes</td>
                  <td>Infinite line</td>
                  <td>
                    {'{'}(A, B, C){'}'}
                  </td>
                </tr>
                <tr>
                  <td>lseg</td>
                  <td>32 bytes</td>
                  <td>Finite line segment</td>
                  <td>((x1,y1),(x2,y2))</td>
                </tr>
                <tr>
                  <td>BOX</td>
                  <td>32 bytes</td>
                  <td>Rectangular box</td>
                  <td>((x1,y1),(x2,y2))</td>
                </tr>
                <tr>
                  <td>path</td>
                  <td>16+16n bytes</td>
                  <td>Closed path (similar to polygon)</td>
                  <td>((x1,y1),...)</td>
                </tr>
                <tr>
                  <td>path</td>
                  <td>16+16n bytes</td>
                  <td>Open path</td>
                  <td>[(x1,y1),...]</td>
                </tr>
                <tr>
                  <td>polygon</td>
                  <td>40+16n bytes</td>
                  <td>Polygon (similar to closed path)</td>
                  <td>((x1,y1),...)</td>
                </tr>
                <tr>
                  <td>CIRCLE</td>
                  <td>24 bytes</td>
                  <td>Circle</td>
                  <td>(center point and radius)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-6 col-md-6">
          <b>1.4 Network Adress Types</b>
          <div className="tab-1">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>Name</th>
                  <th>Storage Size</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CIDR</td>
                  <td>7 or 19 bytes</td>
                  <td>IPv4 and IPv6 networks</td>
                </tr>
                <tr>
                  <td>INET</td>
                  <td>7 or 19 bytes</td>
                  <td>IPv4 and IPv6 hosts and networks</td>
                </tr>
                <tr>
                  <td>macaddr</td>
                  <td>6 bytes</td>
                  <td>MAC addresses</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-6 col-md-6">
          <b>1.5 Character Types</b>
          <div className="tab-1">
            <table className="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr className="table-dark">
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CHARACTER varying(n), varchar(n)</td>
                  <td>variable-length with limit</td>
                </tr>
                <tr>
                  <td>character(n), char(n)</td>
                  <td>fixed-length, blank padded</td>
                </tr>
                <tr>
                  <td>TEXT</td>
                  <td>variable unlimited length</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.6 : Arrays</b>
          <div className="tab-1">
            <p>
              In PostgreSQL you can create Arrays of any built-in, user-defined
              or enum type. In default there is no limit to an Array, but you
              can specify it.
            </p>
          </div>
          <div className="tab-1">
            <b>Declaring an Array</b>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT INTEGER[];
SELECT INTEGER[3];
SELECT INTEGER[][];
SELECT INTEGER[3][3];
SELECT INTEGER ARRAY;
SELECT INTEGER ARRAY[3];`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <b>Creating an Array</b>
          </div>
          <div className="tab-2">
            <Code
              code={`SELECT '{0,1,2}';
SELECT '{{0,1},{1,2}}';
SELECT ARRAY[0,1,2];
SELECT ARRAY[ARRAY[0,1],ARRAY[1,2]];`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <b>Accessing an Array</b>
          </div>
          <div className="tab-2">
            <p>
              By default PostgreSQL uses a one-based numbering convention for
              arrays, that is, an array of n elements starts with ARRAY[1] and
              ends with ARRAY[n].
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`--accesing a spefific element
WITH arr AS (SELECT ARRAY[0,1,2] int_arr) SELECT int_arr[1] FROM arr;

int_arr
---------
 0
 (1 ROW)

--sclicing an array
WITH arr AS (SELECT ARRAY[0,1,2] int_arr) SELECT int_arr[1:2] FROM arr;

int_arr
---------
 {0,1}
(1 ROW)`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <b>Getting information about an array</b>
          </div>
          <div className="tab-2">
            <Code
              code={`--array dimensions (as text)
WITH arr AS (SELECT ARRAY[0,1,2] int_arr) SELECT ARRAY_DIMS(int_arr) FROM arr;

array_dims
------------
 [1:3]
(1 ROW)

--length of an array dimension
WITH arr AS (SELECT ARRAY[0,1,2] int_arr) SELECT ARRAY_LENGTH(int_arr,1) FROM arr;

 array_length
--------------
 3
(1 ROW)

--total number of elements across all dimensions
WITH arr AS (SELECT ARRAY[0,1,2] int_arr) SELECT cardinality(int_arr) FROM arr;

 cardinality
-------------
 3
(1 ROW)`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <b>Array functions</b>
          </div>
          <div className="tab-2">
            <p>will be added</p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12"></div>
      </div>
    </>
  );
};
