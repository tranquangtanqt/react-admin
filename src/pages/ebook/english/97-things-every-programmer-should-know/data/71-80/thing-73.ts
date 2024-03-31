import IContent from 'utils/interface';

export const thing73: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p dir="auto">
        The Singleton pattern solves many of your problems. You know that you
        only need a single instance. You have a guarantee that this instance is
        initialized before it's used. It keeps your design simple by having a
        global access point. It's all good. What's not to like about this
        classic design pattern?
      </p>
      <p dir="auto">
        Quite a lot, it turns out. Tempting they may be, but experience shows
        that most singletons really do more harm than good. They hinder
        testability and harm maintainability. Unfortunately, this additional
        wisdom is not as widespread as it should be and singletons continue to
        be irresistible to many programmers. But it is worth resisting:
      </p>
      <ul dir="auto">
        <li>
          <p dir="auto">
            The single-instance requirement is often imagined. In many cases
            it's pure speculation that no additional instances will be needed in
            the future. Broadcasting such speculative properties across an
            application's design is bound to cause pain at some point.
            Requirements will change. Good design embraces this. Singletons
            don't.
          </p>
        </li>
        <li>
          <p dir="auto">
            Singletons cause implicit dependencies between conceptually
            independent units of code. This is problematic both because they are
            hidden and because they introduce unnecessary coupling between
            units. This code smell becomes pungent when you try to write unit
            tests, which depend on loose coupling and the ability to selectively
            substitute a mock implementation for a real one. Singletons prevent
            such straightforward mocking.
          </p>
        </li>
        <li>
          <p dir="auto">
            Singletons also carry implicit persistent state, which again hinders
            unit testing. Unit testing depends on tests being independent of one
            another, so the tests can be run in any order and the program can be
            set to a known state before the execution of every unit test. Once
            you have introduced singletons with mutable state, this may be hard
            to achieve. In addition, such globally accessible persistent state
            makes it harder to reason about the code, especially in a
            multi-threaded environment.
          </p>
        </li>
        <li>
          <p dir="auto">
            Multi-threading introduces further pitfalls to the singleton
            pattern. As straightforward locking on access is not very efficient,
            the so-called double-checked locking pattern (DCLP) has gained in
            popularity. Unfortunately, this may be a further form of fatal
            attraction. It turns out that in many languages DCLP is not
            thread-safe and, even where it is, there are still opportunities to
            get it subtly wrong.
          </p>
        </li>
      </ul>
      <p dir="auto">The cleanup of singletons may present a final challenge:</p>
      <ul dir="auto">
        <li>
          <p dir="auto">
            There is no support for explicitly killing singletons, which can be
            a serious issue in some contexts. For example, in a plug-in
            architecture where a plug-in can only be safely unloaded after all
            its objects have been cleaned up.
          </p>
        </li>
        <li>
          <p dir="auto">
            There is no order to the implicit cleanup of singletons at program
            exit. This can be troublesome for applications that contain
            singletons with interdependencies. When shutting down such
            applications, one singleton may access another that has already been
            destroyed.
          </p>
        </li>
        <li>
          <p dir="auto">
            Some of these shortcomings can be overcome by introducing additional
            mechanisms. However, this comes at the cost of additional complexity
            in code that could have been avoided by choosing an alternative
            design.
          </p>
        </li>
      </ul>
      <p dir="auto">
        Therefore, restrict your use of the Singleton pattern to the classes
        that truly must never be instantiated more than once. Don't use a
        singleton's global access point from arbitrary code. Instead, direct
        access to the singleton should be from only a few well-defined places,
        from where it can be passed around via its interface to other code. This
        other code is unaware, and so does not depend on whether a singleton or
        any other kind of class implements the interface. This breaks the
        dependencies that prevented unit testing and improves the
        maintainability. So, next time you are thinking about implementing or
        accessing a singleton, hopefully you'll pause, and think again.
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
