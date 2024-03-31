import IContent from 'utils/interface';

export const thing84: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p dir="auto">
        People in the real world have a weird relationship with state. This
        morning I stopped by the local store to prepare for another day of
        converting caffeine to code. Since my favorite way of doing that is by
        drinking latte, and I couldn't find any milk, I asked the clerk.
      </p>
      <p dir="auto">"Sorry, we're super-duper, mega-out of milk."</p>
      <p dir="auto">
        To a programmer, that's an odd statement. You're either out of milk or
        you're not. There is no scale when it comes to being out of milk.
        Perhaps she was trying to tell me that they'd be out of milk for a week,
        but the outcome was the same — espresso day for me.
      </p>
      <p dir="auto">
        In most real-world situations, people's relaxed attitude to state is not
        an issue. Unfortunately, however, many programmers are quite vague about
        state too — and that is a problem.
      </p>
      <p dir="auto">
        Consider a simple webshop that only accepts credit cards and does not
        invoice customers, with an <code>Order</code> class containing this
        method:
      </p>`,
      },
      {
        code: {
          src: `public boolean isComplete() {
    return isPaid() && hasShipped();
}`,
          language: 'java',
        },
      },
      {
        div: `<p dir="auto">
        Reasonable, right? Well, even if the expression is nicely extracted into
        a method instead of copy'n'pasted everywhere, the expression shouldn't
        exist at all. The fact that it does highlights a problem. Why? Because
        an order can't be shipped before it's paid. Thereby, 
        <code>hasShipped</code> can't be true unless <code>isPaid</code> is
        true, which makes part of the expression redundant. You may still want 
        <code>isComplete</code> for clarity in the code, but then it should look
        like this:
      </p>`,
      },
      {
        code: {
          src: `public boolean isComplete() {
    return hasShipped();
}`,
          language: 'java',
        },
      },
      {
        div: `<p dir="auto">
        In my work, I see both missing checks and redundant checks all the time.
        This example is tiny, but when you add cancellation and repayment, it'll
        become more complex and the need for good state handling increases. In
        this case, an order can only be in one of three distinct states:
      </p>
      <ul dir="auto">
        <li>
          <em>In progress:</em> Can add or remove items. Can't ship.
        </li>
        <li>
          <em>Paid:</em> Can't add or remove items. Can be shipped.
        </li>
        <li>
          <em>Shipped:</em> Done. No more changes accepted.
        </li>
      </ul>
      <p dir="auto">
        These states are important and you need to check that you're in the
        expected state before doing operations, and that you only move to a
        legal state from where you are. In short, you have to protect your
        objects carefully, in the right places.
      </p>
      <p dir="auto">
        But how do you begin thinking in states? Extracting expressions to
        meaningful methods is a very good start, but it is just a start. The
        foundation is to understand state machines. I know you may have bad
        memories from CS class, but leave them behind. State machines are not
        particularly hard. Visualize them to make them simple to understand and
        easy to talk about. Test-drive your code to unravel valid and invalid
        states and transitions and to keep them correct. Study the State
        pattern. When you feel comfortable, read up on Design by Contract. It
        helps you ensure a valid state by validating incoming data and the
        object itself on entry and exit of each public method.
      </p>
      <p dir="auto">
        If your state is incorrect, there's a bug and you risk trashing data if
        you don't abort. If you find the state checks to be noise, learn how to
        use a tool, code generation, weaving, or aspects to hide them.
        Regardless of which approach you pick, thinking in states will make your
        code simpler and more robust.
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
