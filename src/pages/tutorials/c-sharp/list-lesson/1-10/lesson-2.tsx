import Code from 'components/modules/code';

export const TutorialCSharpLesson2 = () => {
  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. uint literals</b>
          <div className="tab-1">
            <p>
              uint literals are defined by using the suffix U or u, or by using
              an integral values within the range of uint:
            </p>
          </div>
          <div className="tab-2">
            <Code code={`uint ui = 5U;`} language="csharp" />
          </div>
        </div>

        <b>2. int literals</b>
        <div className="tab-1">
          <p>
            int literals are defined by simply using integral values within the
            range of int:
          </p>
        </div>
        <div className="tab-2">
          <Code code={`int i = 5;`} language="csharp" />
        </div>

        <b>3. sbyte literals</b>
        <div className="tab-1">
          <p>
            sbyte type has no literal suffix. Integer literals are implicitly
            converted from int:
          </p>
        </div>
        <div className="tab-2">
          <Code code={`sbyte sb = 127;`} language="csharp" />
        </div>

        <b>4. decimal literals</b>
        <div className="tab-1">
          <p>
            decimal literals are defined by using the suffix M or m on a real
            number:
          </p>
        </div>
        <div className="tab-2">
          <Code code={`decimal m = 30.5M;`} language="csharp" />
        </div>
        <b>5. double literals</b>
        <div className="tab-1">
          <p>
            double literals are defined by using the suffix D or d, or by using
            a real number:
          </p>
        </div>
        <div className="tab-2">
          <Code code={`double d = 30.5D;`} language="csharp" />
        </div>
        <b>6. float literals</b>
        <div className="tab-1">
          <p>
            float literals are defined by using the suffix F or f, or by using a
            real number:
          </p>
        </div>
        <div className="tab-2">
          <Code code={`float f = 30.5F;`} language="csharp" />
        </div>
        <b>7. long literals</b>
        <div className="tab-1">
          <p>
            long literals are defined by using the suffix L or l, or by using an
            integral values within the range of long:
          </p>
        </div>
        <div className="tab-2">
          <Code code={`long l = 5L;`} language="csharp" />
        </div>
        <b>8. ulong literal</b>
        <div className="tab-1">
          <p>
            ulong literals are defined by using the suffix UL, ul, Ul, uL, LU,
            lu, Lu, or lU, or by using an integral values within the range of
            ulong:
          </p>
        </div>
        <div className="tab-2">
          <Code code={`ulong ul = 5UL;`} language="csharp" />
        </div>
      </div>
    </>
  );
};
