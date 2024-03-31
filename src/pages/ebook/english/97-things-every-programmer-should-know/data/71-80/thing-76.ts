import IContent from 'utils/interface';

export const thing76: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p dir="auto">
        One of the most foundational principles of good design is:
      </p>
      <blockquote>
        <p dir="auto">
          Gather together those things that change for the same reason, and
          separate those things that change for different reasons.
        </p>
      </blockquote>
      <p dir="auto">
        This principle is often known as the 
        <em>Single Responsibility Principle</em> or SRP. In short, it says that
        a subsystem, module, class, or even a function, should not have more
        than one reason to change. The classic example is a class that has
        methods that deal with business rules, reports, and database:
      </p>`,
      },
      {
        code: {
          src: `public class Employee {
  public Money calculatePay() ...
  public String reportHours() ...
  public void save() ...
}`,
          language: 'java',
        },
      },
      {
        div: `<p dir="auto">
        Some programmers might think that putting these three functions together
        in the same class is perfectly appropriate. After all, classes are
        supposed to be collections of functions that operate on common
        variables. However, the problem is that the three functions change for
        entirely different reasons. The <code>calculatePay</code> function will
        change whenever the business rules for calculating pay change. The 
        <code>reportHours</code> function will change whenever someone wants a
        different format for the report. The save function will change whenever
        the DBAs change the database schema. These three reasons to change
        combine to make <code>Employee</code> very volatile. It will change for
        any of those reasons. More importantly, any classes that depend upon 
        <code>Employee</code> will be affected by those changes.
      </p>
      <p dir="auto">
        Good system design means that we separate the system into components
        that can be independently deployed. Independent deployment means that if
        we change one component we do not have to redeploy any of the others.
        However, if <code>Employee</code> is heavily used by many other classes
        in other components, then every change to Employee is likely to cause
        the other components to be redeployed; thus negating a major benefit of
        component design (or SOA if you prefer the more trendy name).
      </p>`,
      },
      {
        code: {
          src: `public class Employee {
  public Money calculatePay() ...
}

public class EmployeeReporter {
  public String reportHours(Employee e) ...
}

public class EmployeeRepository {
  public void save(Employee e) ...
}`,
          language: 'java',
        },
      },
      {
        div: `<p dir="auto">
        The simple partitioning shown above resolves the issues. Each of these
        classes can be placed in a component of its own. Or rather, all the
        reporting classes can go into the reporting component. All the database
        related classes can go into the repository component. And all the
        business rules can go into the business rule component.
      </p>
      <p dir="auto">
        The astute reader will see that there are still dependencies in the
        above solution. That <code>Employee</code> is still depended upon by the
        other classes. So if <code>Employee</code> is modified, the other
        classes will likely have to be recompiled and redeployed. Thus, 
        <code>Employee</code> cannot be modified and then independently
        deployed. However, the other classes can be modified and independently
        deployed. No modification of one of them can force any of the others to
        be recompiled or redeployed. Even <code>Employee</code> could be
        independently deployed through a careful use of the 
        <em>Dependency Inversion Principle</em> (DIP), but that's a topic for a 
        <a href="http://www.amazon.com/dp/0135974445/" rel="nofollow">
          different book
        </a>
        .
      </p>
      <p dir="auto">
        Careful application of the SRP, separating things that change for
        different reasons, is one of the keys to creating designs that have an
        independently deployable component structure.
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
