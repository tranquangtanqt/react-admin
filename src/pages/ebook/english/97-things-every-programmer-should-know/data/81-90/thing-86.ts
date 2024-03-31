import IContent from 'utils/interface';

export const thing86: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p dir="auto">
        Code never lies, but it can contradict itself. Some contradictions lead
        to those "How can that possibly work?" moments.
      </p>
      <p dir="auto">
        In an 
        <a
          href="http://www.netjeff.com/humor/item.cgi?file=ApolloComputer"
          rel="nofollow"
        >
          interview
        </a>
        , the principal designer of the Apollo 11 Lunar Module software, Allan
        Klumpp, disclosed that the software controlling the engines contained a
        bug that should have made the lander unstable. However, another bug
        compensated for the first and the software was used for both Apollo 11
        and 12 Moon landings before either bug was found or fixed.
      </p>
      <p dir="auto">
        Consider a function that returns a completion status. Imagine that it
        returns false when it should return true. Now imagine the calling
        function neglects to check the return value. Everything works fine until
        one day someone notices the missing check and inserts it.
      </p>
      <p dir="auto">
        Or consider an application that stores state as an XML document. Imagine
        that one of the nodes in incorrectly written as <code>TimeToLive</code> 
        instead of <code>TimeToDie</code>, as the documentation says it should.
        Everything appears fine while the writer code and the reader code both
        contain the same error. But fix one, or add a new application reading
        the same document, and the symmetry is broken, as well as the code.
      </p>
      <p dir="auto">
        When two defects in the code create one visible fault, the methodical
        approach to fixing faults can itself break down. The developer gets a
        bug report, finds the defect, fixes it, and retests. The reported fault
        still occurs, however, because a second defect is at work. So the first
        fix is removed, the code inspected until the second underlying defect is
        found, and a fix applied for that. But the first defect has returned,
        the reported fault is still seen, and so the second fix is rolled back.
        The process repeats but now the developer has dismissed two possible
        fixes and is looking to make a third that will never work.
      </p>
      <p dir="auto">
        The interplay between two code defects that appear as one visible fault
        not only makes it hard to fix the problem but leads developers down
        blind alleys, only to find they tried the right answers early on.
      </p>
      <p dir="auto">
        This doesn't happen only in code: The problem also exists in written
        requirements documents. And it can spread, virally, from one place to
        another. An error in the code compensates for an error in the written
        description.
      </p>
      <p dir="auto">
        It can spread to people too: Users learn that when the application says
        Left it means Right, so they adjust their behavior accordingly. They
        even pass it on to new users: "Remember when that applications says
        click the left button it really means the button on the right." Fix the
        bug and suddenly the users need retraining.
      </p>
      <p dir="auto">
        Single wrongs can be easy to spot and easy to fix. It is the problems
        with multiple causes, needing multiple changes, that are harder to
        resolve. In part it is because easy problems are so easily fixed that
        people tend to fix them relatively quickly and store up the more
        difficult problems for a later date.
      </p>
      <p dir="auto">
        There is no simple advice to give on how to address faults arising from
        sympathetic defects. Awareness of the possibility, a clear head, and a
        willingness to consider all possibilities are needed.
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
