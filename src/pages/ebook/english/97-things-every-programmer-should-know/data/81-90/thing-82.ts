import IContent from 'utils/interface';

export const thing82: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p dir="auto">
        Relax. I am not referring to offshore development centers, overtime on
        weekends, or working the night shift. Rather, I want to draw your
        attention to how much computing power we have at our disposal.
        Specifically, how much we are not harnessing to make our lives as
        programmers a little easier. Are you constantly finding it difficult to
        get enough computing power during the work day? If so, what are your
        test servers doing outside of normal work hours? More often than not,
        the test servers are idling overnight and over the weekend. You can use
        this to your advantage.
      </p>
      <ul dir="auto">
        <li>
          <p dir="auto">
            <em>
              Have you been guilty of committing a change without running all
              the tests?
            </em> 
            One of the main reasons programmers don't run test suites before
            committing code is because of the length of time they may take. When
            deadlines are looming and push comes to shove, humans naturally
            start cutting corners. One way to address this is to break down your
            large test suite into two or more profiles. A smaller, mandatory
            test profile that is quick to run, will help to ensure that tests
            are run before each commit. All of the test profiles (including the
            mandatory profile — just to be sure) can be automated to run
            overnight, ready to report their results in the morning.
          </p>
        </li>
        <li>
          <p dir="auto">
            <em>
              Have you had enough opportunity to test the stability of your
              product?
            </em> 
            Longer-running tests are vital for identifying memory leaks and
            other stability issues. They are seldom run during the day as it
            will tie up time and resources. You could automate a soak test to be
            run during the night, and a bit longer over the weekend. From 6.00
            pm Friday to 6.00 am the following Monday there are 60 hours worth
            of potential testing time.
          </p>
        </li>
        <li>
          <p dir="auto">
            <em>
              Are you getting quality time on your Performance testing
              environment?
            </em> 
            I have seen teams bickering with each other to get time on the
            performance testing environment. In most cases neither team gets
            enough quality time during the day, while the environment is
            virtually idle after hours. The servers and the network are not as
            busy during the night or over the weekend. It's an ideal time to run
            some quality performance tests.
          </p>
        </li>
        <li>
          <p dir="auto">
            <em>Are there too many permutations to test manually?</em> In many
            cases your product is targeted to run on a variety of platforms. For
            example, both 32-bit and 64-bit, on Linux, Solaris, and Windows, or
            simply on different versions of the same operating system. To make
            matters worse, many modern applications expose themselves to a
            plethora of transport mechanisms and protocols (HTTP, AMQP, SOAP,
            CORBA, etc.). Manually testing all of these permutations is very
            time consuming and most likely done close to a release due to
            resource pressure. Alas, it may be too late in the cycle to catch
            certain nasty bugs.
          </p>
        </li>
      </ul>
      <p dir="auto">
        Automated tests run during the night or over weekends will ensure all
        these permutations are tested more often. With a little bit of thinking
        and some scripting knowledge, you can schedule a few <em>cron</em> jobs
        to kick off some testing at night and over the weekend. There are also
        many testing tools out there that could help. Some organizations even
        have server grids that pool servers across different departments and
        teams to ensure that resources are utilized efficiently. If this is
        available in your organization, you can submit tests to be run at night
        or over weekends.
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
