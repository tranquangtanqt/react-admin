import IContent from 'utils/interface';

export const thing1: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        code: {
          src: `"Whatever you undertake, act with prudence and consider the consequences" Anon`,
          language: 'sql',
        },
      },
    ],
  },
  {
    title: '',
    no: false,
    contents: [
      {
        p: `Technical debt is like a loan: You benefit from it in the short-term, but you
        have to pay interest on it until it is fully paid off. Shortcuts in the code
        make it harder to add features or refactor your code. They are breeding
        grounds for defects and brittle test cases. The longer you leave it, the worse
        it gets. By the time you get around to undertaking the original fix there may
        be a whole stack of not-quite-right design choices layered on top of the
        original problem making the code much harder to refactor and correct. In fact,
        it is often only when things have got so bad that you must fix it, that you
        actually do go back to fix it. And by then it is often so hard to fix that you
        really can't afford the time or the risk.`,
      },
      {
        p: `Technical debt is like a loan: You benefit from it in the short-term, but you
        have to pay interest on it until it is fully paid off. Shortcuts in the code
        make it harder to add features or refactor your code. They are breeding
        grounds for defects and brittle test cases. The longer you leave it, the worse
        it gets. By the time you get around to undertaking the original fix there may
        be a whole stack of not-quite-right design choices layered on top of the
        original problem making the code much harder to refactor and correct. In fact,
        it is often only when things have got so bad that you must fix it, that you
        actually do go back to fix it. And by then it is often so hard to fix that you
        really can't afford the time or the risk.`,
      },
      {
        p: `  There are times when you must incur technical debt to meet a deadline or
        implement a thin slice of a feature. Try not to be in this position, but if
        the situation absolutely demands it, then go ahead. But (and this is a big
        BUT) you must track technical debt and pay it back quickly or things go
        rapidly downhill. As soon as you make the decision to compromise, write a task
        card or log it in your issue tracking system to ensure that it does not get
        forgotten.`,
      },
      {
        p: ` If you schedule repayment of the debt in the next iteration, the cost will be
        minimal. Leaving the debt unpaid will accrue interest and that interest should
        be tracked to make the cost visible. This will emphasize the effect on
        business value of the project's technical debt and enables appropriate
        prioritization of the repayment. The choice of how to calculate and track the
        interest will depend on the particular project, but track it you must.`,
      },
      {
        p: `Pay off technical debt as soon as possible. It would be imprudent to do otherwise.`,
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
