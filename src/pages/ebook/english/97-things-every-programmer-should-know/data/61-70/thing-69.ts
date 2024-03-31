import IContent from 'utils/interface';

export const thing69: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p dir="auto">
        You've been focused for hours on some gnarly problem and there's no
        solution in sight. So you get up to stretch your legs, or to hit the
        vending machines, and on the way back the answer suddenly becomes
        obvious.
      </p>
      <p dir="auto">
        Does this scenario sound familiar? Ever wonder why it happens? The trick
        is that while you're coding, the logical part of your brain is active
        and the creative side is shut out. It can't present anything to you
        until the logical side takes a break.
      </p>
      <p dir="auto">
        Here's a real-life example: I was cleaning up some legacy code and ran
        into an 'interesting' method. It was designed to verify that a string
        contained a valid time using the format <em>hh:mm:ss xx</em>, where 
        <em>hh</em> represents the hour, <em>mm</em> represents minutes, 
        <em>ss</em> represents seconds, and <em>xx</em> is either <em>AM</em> or 
        <em>PM</em>.
      </p>
      <p dir="auto">
        The method used the following code to convert two characters
        (representing the hour) into a number, and verify it was within the
        proper range:
      </p>`,
      },
      {
        code: {
          src: `try {
    Integer.parseInt(time.substring(0, 2));
} catch (Exception x) {
    return false;
}

if (Integer.parseInt(time.substring(0, 2)) > 12) {
    return false;
}`,
          language: 'java',
        },
      },
      {
        div: `<p dir="auto">
        The same code appeared twice more, with appropriate changes to the
        character offset and upper limit, to test the minutes and seconds. The
        method ended with these lines to check for AM and PM:
      </p>`,
      },
      {
        code: {
          src: `if (!time.substring(9, 11).equals("AM") &
    !time.substring(9, 11).equals("PM")) {
    return false;
}`,
          language: 'java',
        },
      },
      {
        div: `<p dir="auto">
        If none of this series of comparisons failed, returning false, the
        method returned true.
      </p>
      <p dir="auto">
        If the preceding code seems wordy and difficult to follow, don't worry.
        I thought so too — which meant I'd found something worth cleaning up. I
        refactored it and wrote a few unit tests, just to make sure it still
        worked.
      </p>
      <p dir="auto">
        When I finished, I felt pleased with the results. The new version was
        easy to read, half the size, and more accurate because the original code
        tested only the upper boundary for the hours, minutes, and seconds.
      </p>
      <p dir="auto">
        While getting ready for work the next day, an idea popped in my head:
        Why not validate the string using a regular expression? After a few
        minutes typing, I had a working implementation in just one line of code.
        Here it is:
      </p>`,
      },
      {
        code: {
          src: `public static boolean validateTime(String time) {
    return time.matches("(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9] ([AP]M)");
}`,
          language: 'java',
        },
      },
      {
        div: `
        <p dir="auto">
          The point of this story is not that I eventually replaced over thirty
          lines of code with just one. The point is that until I got away from the
          computer, I thought my first attempt was the best solution to the
          problem.
        </p>
        <p dir="auto">
          So the next time you hit a nasty problem, do yourself a favor. Once you
          really understand the problem go do something involving the creative
          side of your brain — sketch out the problem, listen to some music, or
          just take a walk outside. Sometimes the best thing you can do to solve a
          problem is to put the mouse down and step away from the keyboard.
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
