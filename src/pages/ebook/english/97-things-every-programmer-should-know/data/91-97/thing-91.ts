import IContent from 'utils/interface';

export const thing91: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: ` <p dir="auto">
        The importance of the DRY principle (Don't Repeat Yourself) is that it
        codifies the idea that every piece of knowledge in a system should have
        a singular representation. In other words, knowledge should be contained
        in a single implementation. The antithesis of DRY is WET (Write Every
        Time). Our code is WET when knowledge is codified in several different
        implementations. The performance implications of DRY versus WET become
        very clear when you consider their numerous effects on a performance
        profile.
      </p>
      <p dir="auto">
        Let's start by considering a feature of our system, say <em>X</em>, that
        is a CPU bottleneck. Let's say feature <em>X</em> consumes 30% of the
        CPU. Now let's say that feature <em>X</em> has ten different
        implementations. On average, each implementation will consume 3% of the
        CPU. As this level of CPU utilization isn't worth worrying about if we
        are looking for a quick win, it is likely that we'd miss that this
        feature is our bottleneck. However, let's say that we somehow recognized
        feature <em>X</em> as a bottleneck. We are now left with the problem of
        finding and fixing every single implementation. With WET we have ten
        different implementations that we need to find and fix. With DRY we'd
        clearly see the 30% CPU utilization and we'd have a tenth of the code to
        fix. And did I mention that we don't have to spend time hunting down
        each implementation?
      </p>
      <p dir="auto">
        There is one use case where we are often guilty of violating DRY: our
        use of collections. A common technique to implement a query would be to
        iterate over the collection and then apply the query in turn to each
        element:
      </p>`,
      },
      {
        code: {
          src: `public class UsageExample {
    private ArrayList<Customer> allCustomers = new ArrayList<Customer>();
    // ...
    public ArrayList<Customer> findCustomersThatSpendAtLeast(Money amount) {
        ArrayList<Customer> customersOfInterest = new ArrayList<Customer>();
        for (Customer customer: allCustomers) {
            if (customer.spendsAtLeast(amount))
                customersOfInterest.add(customer);
        }
        return customersOfInterest;
    }
}`,
          language: 'csharp',
        },
      },
      {
        div: `<p dir="auto">
        By exposing this raw collection to clients, we have violated
        encapsulation. This not only limits our ability to refactor, it forces
        users of our code to violate DRY by having each of them re-implement
        potentially the same query. This situation can easily be avoided by
        removing the exposed raw collections from the API. In this example we
        can introduce a new, domain-specific collective type called 
        <code>CustomerList</code>. This new class is more semantically in line
        with our domain. It will act as a natural home for all our queries.
      </p>
      <p dir="auto">
        Having this new collection type will also allow us to easily see if
        these queries are a performance bottleneck. By incorporating the queries
        into the class we eliminate the need to expose representation choices,
        such as <code>ArrayList</code>, to our clients. This gives us the
        freedom to alter these implementations without fear of violating client
        contracts:
      </p>`,
      },
      {
        code: {
          src: `public class CustomerList {
    private ArrayList<Customer> customers = new ArrayList<Customer>();
    private SortedList<Customer> customersSortedBySpendingLevel = new SortedList<Customer>();
    // ...
    public CustomerList findCustomersThatSpendAtLeast(Money amount) {
        return new CustomerList(customersSortedBySpendingLevel.elementsLargerThan(amount));
    }
}

public class UsageExample {
    public static void main(String[] args) {
        CustomerList customers = new CustomerList();
        // ...
        CustomerList customersOfInterest = customers.findCustomersThatSpendAtLeast(someMinimalAmount);
        // ...
    }
}`,
          language: 'csharp',
        },
      },
      {
        div: `<p dir="auto">
        In this example, adherence to DRY allowed us to introduce an alternate
        indexing scheme with SortedList keyed on our customers level of
        spending. More important than the specific details of this particular
        example, following DRY helped us to find and repair a performance
        bottleneck that would have been more difficult to find were the code to
        be WET.
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
