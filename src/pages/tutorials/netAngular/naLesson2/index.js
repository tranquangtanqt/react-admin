import { Col, Row, Divider, Image } from "antd";

const NALesson2 = () => {
  return (
    <>
      <Divider orientation="left">Introduction to Entity Framework</Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>1. What is this?</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- An Object Relational Mapper (ORM)</p>
          <p>
            - Translates our code into SQL commands that update our tables in
            the database
          </p>
          <Image
            src={require("../../../../resources/img/tutorials/netAngular/Net_Angular_4.jpg")}
          />
        </Col>
        <Col span={24}>
          <h1>2. Entity Framework Features</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            - Querying: EF allows us to query our database using link queries
            that I mentioned very briefly before
          </p>
          <p>
            - Change Tracking: Tracking or keep track of its two framework will
            keep track of changes occurring in our entities which need to be
            submitted to the database.
          </p>
          <p>
            - Saving: It also allows us to save the database and entity
            framework will execute insert, updates and delete commands to the
            database as the DB context class gives us a save changes method that
            we can use.
          </p>
          <p>
            - Concurrency: It uses optimistic concurrency by default to protect
            overwriting changes made by another user
          </p>
          <p>
            - Transactions: since data was fetched from the database also deals
            with transactions and it provides automatic transaction management
            whilst querying.
          </p>
          <p>
            - Caching: It also includes first level cashing out of the box, so
            repeated querying will return data from the cash instead of hitting
            the database.
          </p>
          <p>
            - Built-In conventions: And when I was talking about Whiley ID
            property needs to be named ID is because entity framework follows
            conventions and includes a set of default rules which automatically
            configure the entity framework schema or the model that we use to
            create our database.
          </p>
          <p>
            - Configurations: We can also configure our entities and there's
            ways to configure these so that we can override the conventions.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default NALesson2;
