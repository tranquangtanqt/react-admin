import IContent from 'utils/interface';

export const thing33: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p dir="auto">
        Floating-point numbers are not "real numbers" in the mathematical
        sense, even though they are called <em>real</em> in some programming
        languages, such as Pascal and Fortran. Real numbers have infinite
        precision and are therefore continuous and non-lossy; floating-point
        numbers have limited precision, so they are finite, and they resemble
        "badly-behaved" integers, because they're not evenly spaced throughout
        their range.
      </p>
      <p dir="auto">
        To illustrate, assign 2147483647 (the largest signed 32-bit integer)
        to a 32-bit float variable (x, say), and print it. You'll see
        2147483648. Now print <code>x - 64</code>. Still 2147483648. Now print 
        <code>x - 65</code> and you'll get 2147483520! Why? Because the
        spacing between adjacent floats in that range is 128, and
        floating-point operations round to the nearest floating-point number.
      </p>
      <p dir="auto">
        IEEE floating-point numbers are fixed-precision numbers based on
        base-two scientific notation: 1.d<sub>1</sub>d<sub>2</sub>...d
        <sub>p-1</sub> × 2<sup>e</sup>, where <em>p</em> is the precision (24
        for float, 53 for double). The spacing between two consecutive numbers
        is 2<sup>1-p+e</sup>, which can be safely approximated by ε|x|, where
        ε is the <em>machine epsilon</em> (2<sup>1-p</sup>).
      </p>
      <p dir="auto">
        Knowing the spacing in the neighborhood of a floating-point number can
        help you avoid classic numerical blunders. For example, if you're
        performing an iterative calculation, such as searching for the root of
        an equation, there's no sense in asking for greater precision than the
        number system can give in the neighborhood of the answer. Make sure
        that the tolerance you request is no smaller than the spacing there;
        otherwise you'll loop forever.
      </p>
      <p dir="auto">
        Since floating-point numbers are approximations of real numbers, there
        is inevitably a little error present. This error, called 
        <em>roundoff</em>, can lead to surprising results. When you subtract
        nearly equal numbers, for example, the most significant digits cancel
        each other out, so what was the least significant digit (where the
        roundoff error resides) gets promoted to the most significant position
        in the floating-point result, essentially contaminating any further
        related computations (a phenomenon known as <em>smearing</em>). You
        need to look closely at your algorithms to prevent such 
        <em>catastrophic cancellation</em>. To illustrate, consider solving
        the equation 
        <em>
          x<sup>2</sup> - 100000x + 1 = 0
        </em> 
        with the quadratic formula. Since the operands in the expression 
        <em>
          -b + sqrt(b<sup>2</sup> - 4)
        </em> 
        are nearly equal in magnitude, you can instead compute the root 
        <em>
          r<sub>1</sub> = -b + sqrt(b<sup>2</sup> - 4)
        </em>
        , and then obtain 
        <em>
          r<sub>2</sub> = 1/r<sub>1</sub>
        </em>
        , since for any quadratic equation, ax2 + bx + c = 0, the roots
        satisfy 
        <em>
          r<sub>1</sub>r<sub>2</sub> = c/a
        </em>
        .
      </p>
      <p dir="auto">
        Smearing can occur in even more subtle ways. Suppose a library naively
        computes 
        <em>
          e<sup>x</sup>
        </em> 
        by the formula 
        <em>
          1 + x + x<sup>2</sup>/2 + x<sup>3</sup>/3! + ...
        </em>
        . This works fine for positive <em>x</em>, but consider what happens
        when <em>x</em> is a large negative number. The even-powered terms
        result in large positive numbers, and subtracting the odd-powered
        magnitudes will not even affect the result. The problem here is that
        the roundoff in the large, positive terms is in a digit position of
        much greater significance than the true answer. The answer diverges
        toward positive infinity! The solution here is also simple: for
        negative <em>x</em>, compute 
        <em>
          e<sup>x</sup> = 1/e<sup>|x|</sup>
        </em>
        .
      </p>
      <p dir="auto">
        It should go without saying that you shouldn't use floating-point
        numbers for financial applications — that's what decimal classes in
        languages like Python and C# are for. Floating-point numbers are
        intended for efficient scientific computation. But efficiency is
        worthless without accuracy, so remember the source of rounding errors
        and code accordingly!
      </p>`,
      },
    ],
  },
  {
    title: 'Tham khảo',
    contents: [
      {
        p: `Nguồn: https://github.com/97-things/97-things-every-programmer-should-know`,
      },
    ],
  },
];
