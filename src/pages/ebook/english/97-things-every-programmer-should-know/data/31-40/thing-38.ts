import IContent from 'utils/interface';

export const thing38: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p dir="auto">
        Whether you call them <em>bugs</em>, <em>defects</em>, or even 
        <em>design side effects</em>, there is no getting away from them.
        Knowing how to submit a good bug report and also what to look for in
        one are key skills for keeping a project moving along nicely.
      </p>
      <p dir="auto">A good bug report needs three things:</p>
      <ul dir="auto">
        <li>
          How to reproduce the bug, as precisely as possible, and how often
          this will make the bug appear.
        </li>
        <li>What should have happened, at least in your opinion.</li>
        <li>
          What actually happened, or at least as much information as you have
          recorded.
        </li>
      </ul>
      <p dir="auto">
        The amount and quality of information reported in a bug says as much
        about the reporter as it does about the bug. Angry, terse bugs ("This
        function sucks!") tell the developers that you were having a bad time,
        but not much else. A bug with plenty of context to make it easier to
        reproduce earns the respect of everyone, even if it stops a release.
      </p>
      <p dir="auto">
        Bugs are like a conversation, with all the history right there in
        front of everyone. Don't blame others or deny the bug's very
        existence. Instead ask for more information or consider what you could
        have missed.
      </p>
      <p dir="auto">
        Changing the status of a bug, e.g., <em>Open</em> to <em>Closed</em>,
        is a public statement of what you think of the bug. Taking the time to
        explain why you think the bug should be closed will save tedious hours
        later on justifying it to frustrated managers and customers. Changing
        the priority of a bug is a similar public statement, and just because
        it's trivial to you doesn't mean it isn't stopping someone else from
        using the product.
      </p>
      <p dir="auto">
        Don't overload a bug's fields for your own purposes. Adding "VITAL:"
        to a bug's subject field may make it easier for you to sort the
        results of some report, but it will eventually be copied by others and
        inevitably mistyped, or will need to be removed for use in some other
        report. Use a new value or a new field instead, and document how the
        field is supposed to be used so other people don't have to repeat
        themselves.
      </p>
      <p dir="auto">
        Make sure that everyone knows how to find the bugs that the team is
        supposed to be working on. This can usually be done using a public
        query with an obvious name. Make sure everyone is using the same
        query, and don't update this query without first informing the team
        that you're changing what everyone is working on.
      </p>
      <p dir="auto">
        Finally, remember that a bug is not a standard unit of work any more
        than a line of code is a precise measurement of effort.
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
