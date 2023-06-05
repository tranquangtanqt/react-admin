import { CardList } from '../../../components/modules/card-list';
import { PageTitle } from '../../../components/modules/page-title';

export const TutorialJava = () => {
  const cardData = [
    {
      title: 'Lesson 1 - 10',
      links: [
        {
          text: 'Type Conversion',
          path: '/tutorial/java/lesson1',
        },
        {
          text: 'Getters and Setters',
          path: '/tutorial/java/lesson2',
        },
        {
          text: 'Reference Data Types',
          path: '/tutorial/java/lesson3',
        },
        {
          text: "Java Compiler - 'javac'",
          path: '/tutorial/java/lesson4',
        },
        {
          text: 'Documenting Java Code',
          path: '/tutorial/java/lesson5',
        },
        {
          text: 'Command line Argument Processing',
          path: '/tutorial/java/lesson6',
        },
      ],
    },

    {
      title: 'Lesson 11 - 20',
      links: [
        {
          text: '',
          path: '/tutorial/java/lesson10',
        },
      ],
    },
  ];

  return (
    <>
      <PageTitle title="Java"></PageTitle>
      <div className="row">
        <CardList cardData={cardData} startWith={1}></CardList>
      </div>
    </>
  );
};
