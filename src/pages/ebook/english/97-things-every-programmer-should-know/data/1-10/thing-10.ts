import IContent from 'utils/interface';

export const thing10: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        p: `Modern applications are very rarely built from scratch. They are
        assembled using existing tools — components, libraries, and frameworks —
        for a number of good reasons:`,
      },
      {
        div: `<div className="tab-1">
        <ul>
          <li>
            Applications grow in size, complexity, and sophistication, while
            the time available to develop them grows shorter. It makes better
            use of developers' time and intelligence if they can concentrate
            on writing more business-domain code and less infrastructure code.
          </li>
          <li>
            Widely used components and frameworks are likely to have fewer
            bugs than the ones developed in-house.
          </li>
          <li>
            There is a lot of high-quality software available on the web for
            free, which means lower development costs and greater likelihood
            of finding developers with the necessary interest and expertise.
          </li>
          <li>
            Software production and maintenance is human-intensive work, so
            buying may be cheaper than building.
          </li>
        </ul>
      </div>`,
      },
      {
        p: `However, choosing the right mix of tools for your application can be a
        tricky business requiring some thought. In fact when making a choice,
        there are a few things you should keep in mind:`,
      },
      {
        div: `<div className="tab-1">
        <ul>
          <li>
            Different tools may rely on different assumptions about their
            context — e.g., surrounding infrastructure, control model, data
            model, communication protocols, etc. — which can lead to an
            architectural mismatch between the application and the tools. Such
            a mismatch leads to hacks and workarounds that will make the code
            more complex than necessary.
          </li>
          <li>
            Different tools have different lifecycles, and upgrading one of
            them may become an extremely difficult and time-consuming task
            since the new functionality, design changes, or even bug fixes may
            cause incompatibilities with the other tools. The greater the
            number tools the worse the problem can become.
          </li>
          <li>
            Some tools require quite a bit of configuration, often by means of
            one or more XML files, which can grow out of control very quickly.
            The application may end up looking as if it was all written in XML
            plus a few odd lines of code in some programming language. The
            configurational complexity will make the application difficult to
            maintain and to extend.
          </li>
          <li>
            Vendor lock-in occurs when code that depends heavily on specific
            vendor products ends up being constrained by them on several
            counts: maintainability, performances, ability to evolve, price,
            etc.
          </li>
          <li>
            If you plan to use free software, you may discover that it's not
            so free after all. You may need to buy commercial support, which
            is not necessarily going to be cheap.
          </li>
          <li>
            Licensing terms matter, even for free software. For example, in
            some companies it is not acceptable to use software licensed under
            the GNU license terms because of its viral nature — i.e., software
            developed with it must be distributed along with its source code.
          </li>
        </ul>
      </div>`,
      },
      {
        p: `My personal strategy to mitigate these problems is to start small by
        using only the tools that are absolutely necessary. Usually the
        initial focus is on removing the need to engage in low-level
        infrastructure programming (and problems), e.g., by using some
        middleware instead of using raw sockets for distributed applications.
        And then add more if needed. I also tend to isolate the external tools
        from my business domain objects by means of interfaces and layering,
        so that I can change the tool if I have to with just a small amount of
        pain. A positive side effect of this approach is that I generally end
        up with a smaller application that uses fewer external tools than
        originally forecast.`,
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
