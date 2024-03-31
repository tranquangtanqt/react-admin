import IContent from 'utils/interface';

export const thing15: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p>
        Trying to reason about software correctness by hand results in a
        formal proof that is longer than the code and is more likely to
        contain errors than the code. Automated tools are preferable, but not
        always possible. What follows describes a middle path: reasoning
        semi-formally about correctness.
      </p>
      <p>
        The underlying approach is to divide all the code under consideration
        into short sections — from a single line, such as a function call, to
        blocks of less than ten lines — and arguing about their correctness.
        The arguments need only be strong enough to convince your devil's
        advocate peer programmer.
      </p>
      <p>
        A section should be chosen so that at each endpoint the state of the
        program (namely, the program counter and the values of all "living"
        objects) satisfies an easily described property, and that the
        functionality of that section (state transformation) is easy to
        describe as a single task — these will make reasoning simpler. Such
        endpoint properties generalize concepts like precondition and
        postcondition for functions, and invariant for loops and classes (with
        respect to their instances). Striving for sections to be as
        independent of one another as possible simplifies reasoning and is
        indispensable when these sections are to be modified.
      </p>
      <p>
        Many of the coding practices that are well known (although perhaps
        less well followed) and considered 'good' make reasoning easier.
        Hence, just by intending to reason about your code, you already start
        thinking toward a better style and structure. Unsurprisingly, most of
        these practices can be checked by static code analyzers:
      </p>`,
      },
      {
        div: `<div className="tab-1">
        <ul>
          <li>
            Avoid using goto statements, as they make remote sections highly
            interdependent.
          </li>
          <li>
            Avoid using modifiable global variables, as they make all sections
            that use them dependent.
          </li>
          <li>
            Each variable should have the smallest possible scope. For
            example, a local object can be declared right before its first
            usage.
          </li>
          <li>Make objects immutable whenever relevant.</li>
          <li>
            Make the code readable by using spacing, both horizontal and
            vertical. For example, aligning related structures and using an
            empty line to separate two sections.
          </li>
          <li>
            Make the code self-documenting by choosing descriptive (but
            relatively short) names for objects, types, functions, etc.
          </li>
          <li>If you need a nested section, make it a function.</li>
          <li>
            Make your functions short and focused on a single task. The old
            24-line limit still applies. Although screen size and resolution
            have changed, nothing has changed in human cognition since the
            1960s.
          </li>
          <li>
            Functions should have few parameters (four is a good upper bound).
            This does not restrict the data communicated to functions:
            Grouping related parameters into a single object benefits from
            object invariants and saves reasoning, such as their coherence and
            consistency.
          </li>
          <li>
            More generally, each unit of code, from a block to a library,
            should have a narrow interface. Less communication reduces the
            reasoning required. This means that getters that return internal
            state are a liability — don't ask an object for information to
            work with. Instead, ask the object to do the work with the
            information it already has. In other words, encapsulation is all —
            and only — about narrow interfaces.
          </li>
          <li>
            In order to preserve class invariants, usage of setters should be
            discouraged, as setters tend to allow invariants that govern an
            object's state to be broken.
          </li>
        </ul>
      </div>`,
      },
      {
        p: `As well as reasoning about its correctness, arguing about your code
        gives you understanding of it. Communicate the insights you gain for
        everyone's benefit.`,
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
