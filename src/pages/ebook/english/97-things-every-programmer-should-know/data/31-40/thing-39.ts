import IContent from 'utils/interface';

export const thing39: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p dir="auto">
        <em>Less</em> is more. It's a quite trite little maxim, but sometimes
        it really is true.
      </p>
      <p dir="auto">
        One of the improvements I've made to our codebase over the last few
        weeks is to remove chunks of it.
      </p>
      <p dir="auto">
        We'd written the software following XP tenets, including YAGNI (that
        is, You Aren't Gonna Need It). Human nature being what it is, we
        inevitably fell short in a few places.
      </p>
      <p dir="auto">
        I observed that the product was taking too long to execute certain
        tasks — simple tasks that should have been near instantaneous. This
        was because they were overimplemented; festooned with extra bells and
        whistles that were not required, but at the time had seemed like a
        good idea.
      </p>
      <p dir="auto">
        So I've simplified the code, improved the product performance, and
        reduced the level of global code entropy simply by removing the
        offending features from the codebase. Helpfully, my unit tests tell me
        that I haven't broken anything else during the operation.
      </p>
      <p dir="auto">A simple and thoroughly satisfying experience.</p>
      <p dir="auto">
        So why did the unnecessary code end up there in the first place? Why
        did one programmer feel the need to write extra code, and how did it
        get past review or the pairing process? Almost certainly something
        like:
      </p>
      <ul dir="auto">
        <li>
          It was a fun bit of extra stuff, and the programmer wanted to write
          it. 
          <em>
            (Hint: Write code because it adds value, not because it amuses
            you.)
          </em>
        </li>
        <li>
          Someone thought that it might be needed in the future, so felt it
          was best to code it now. 
          <em>
            (Hint: That isn't YAGNI. If you don't need it right now, don't
            write it right now.)
          </em>
        </li>
        <li>
          It didn't appear to be that big an "extra," so it was easier to
          implement it rather than go back to the customer to see whether it
          was really required. 
          <em>
            (Hint: It always takes longer to write and to maintain extra code.
            And the customer is actually quite approachable. A small extra bit
            of code snowballs over time into a large piece of work that needs
            maintenance.)
          </em>
        </li>
        <li>
          The programmer invented extra requirements that were neither
          documented nor discussed that justified the extra feature. The
          requirement was actually bogus. 
          <em>
            (Hint: Programmers do not set system requirements; the customer
            does.)
          </em>
        </li>
      </ul>
      <p dir="auto">What are you working on right now? Is it all needed?</p>`,
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
