import IContent from 'utils/interface';

export const thing19: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p>
        Much has been said about the importance and challenges of designing
        good API's. It's difficult to get right the first time and it's even
        more difficult to change later. Sort of like raising children. Most
        experienced programmers have learned that a good API follows a
        consistent level of abstraction, exhibits consistency and symmetry,
        and forms the vocabulary for an expressive language. Alas, being aware
        of the guiding principles does not automatically translate into
        appropriate behavior. Eating sweets is bad for you.
      </p>
      <p>
        Instead of preaching from on high, I want to pick on a particular API
        design 'strategy,' one that I encounter time and again: the argument
        of convenience. It typically begins with one of the following
        'insights:'
      </p>`,
      },
      {
        div: `<div className="tab-1">
        <ul>
          <li>
            I don't want other classes to have to make two separate calls to
            do this one thing.
          </li>
          <li>
            Why should I make another method if it's almost the same as this
            method? I'll just add a simple switch.
          </li>
          <li>
            See, it's very easy: If the second string parameter ends with
            ".txt", the method automatically assumes that the first parameter
            is a file name, so I really don't need two methods.
          </li>
        </ul>
      </div>`,
      },
      {
        p: `While well intended, such arguments are prone to decrease the
        readability of code using the API. A method invocation like`,
      },
      {
        code: {
          src: `parser.processNodes(text, false);`,
          language: 'java',
        },
      },
      {
        div: `<p>
        is virtually meaningless without knowing the implementation or at
        least consulting the documentation. This method was likely designed
        for the convenience of the implementer as opposed to the convenience
        of the caller — "I don't want the caller to have to make two separate
        calls" translated into "I didn't want to code up two separate
        methods." There's nothing fundamentally wrong with convenience if it's
        intended to be the antidote to tediousness, clunkiness, or
        awkwardness. However, if we think a bit more carefully about it, the
        antidote to those symptoms is efficiency, consistency, and elegance,
        not necessarily convenience. APIs are supposed to hide underlying
        complexity, so we can realistically expect good API design to require
        some effort. A single large method could certainly be more convenient
        to write than a well thought-out set of operations, but would it be
        easier to use?
      </p>
      <p>
        The metaphor of API as a language can guide us towards better design
        decisions in these situations. An API should provide an expressive
        language, which gives the next layer above sufficient vocabulary to
        ask and answer useful questions. This does not imply it should provide
        exactly one method, or verb, for each question that may be worth
        asking. A diverse vocabulary allows us to express subtleties in
        meaning. For example, we prefer to say run instead of walk(true), even
        though it could be viewed as essentially the same operation, just
        executed at different speeds. A consistent and well thought out API
        vocabulary makes for expressive and easy to understand code in the
        next layer up. More importantly, a composable vocabulary allows other
        programmers to use the API in ways you may not have anticipated — a
        great convenience indeed for the users of the API! Next time you are
        tempted to lump a few things together into one API method, remember
        that the English language does not have one word for
        MakeUpYourRoomBeQuietAndDoYourHomeWork, even though it would seem
        really convenient for such a frequently requested operation.
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
