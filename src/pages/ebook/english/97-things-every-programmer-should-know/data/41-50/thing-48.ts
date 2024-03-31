import IContent from 'utils/interface';

export const thing48: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: ` <p dir="auto">
        If your application is going to handle a large, persistent,
        interconnected set of data elements, don't hesitate to store it in a
        relational database. In the past RDBMSs used to be expensive, scarce,
        complex, and unwieldy beasts. This is no longer the case. Nowadays RDBMS
        systems are easy to find — it is likely that the system you're using has
        already one or two installed. Some very capable RDBMSs, like MySQL and
        PostgreSQL, are available as open source software, so cost of purchase
        is no longer an issue. Even better, so-called embedded database systems
        can be linked as libraries directly into your application, requiring
        almost no setup or management — two notable open source ones are SQLite
        and HSQLDB. These systems are extremely efficient.
      </p>
      <p dir="auto">
        If your application's data is larger than the system's RAM, an indexed
        RDBMS table will perform orders of magnitude faster than your library's
        map collection type, which will thrash virtual memory pages. Modern
        database offerings can easily grow with your needs. With proper care,
        you can scale up an embedded database to a larger database system when
        required. Later on you can switch from a free, open source offering to a
        better-supported or more powerful proprietary system.
      </p>
      <p dir="auto">
        Once you get the hang of SQL, writing database-centric applications is a
        joy. After you've stored your properly normalized data in the database
        it's easy to extract facts efficiently with a readable SQL query;
        there's no need to write any complex code. Similarly, a single SQL
        command can perform complex data changes. For one-off modifications, say
        a change in the way you organize your persistent data, you don't even
        need to write code: Just fire up the database's direct SQL interface.
        This same interface also allows you to experiment with queries,
        sidestepping a regular programming language's compile–edit cycle.
      </p>
      <p dir="auto">
        Another advantage of basing your code around an RDBMS involves the
        handling of relationships between your data elements. You can describe
        consistency constraints on your data in a declarative way, avoiding the
        risk of the dangling pointers you get if you forget to update your data
        in an edge case. For example, you can specify that if a user is deleted
        then the messages sent by that user should be removed as well.
      </p>
      <p dir="auto">
        You can also create efficient links between the entities stored in the
        database anytime you want, simply by creating an index. There is no need
        to perform expensive and extensive refactorings of class fields. In
        addition, coding around a database allows multiple applications to
        access your data in a safe way. This makes it easy to upgrade your
        application for concurrent use and also to code each part of your
        application using the most appropriate language and platform. For
        instance, you could write the XML back-end of a web-based application in
        Java, some auditing scripts in Ruby, and a visualization interface in 
        <a href="http://www.processing.org/" rel="nofollow">
          Processing
        </a>
        .
      </p>
      <p dir="auto">
        Finally, keep in mind that the RDBMS will sweat hard to optimize your
        SQL commands, allowing you to concentrate on your application's
        functionality rather than on algorithmic tuning. Advanced database
        systems will even take advantage of multicore processors behind your
        back. And, as technology improves, so will your application's
        performance.
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
