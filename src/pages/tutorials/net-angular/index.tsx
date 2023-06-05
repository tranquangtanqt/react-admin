import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';

export const TutorialNetAngular = () => {
  const cardData = [
    {
      title: 'Creating the .Net API Project',
      links: [
        {
          text: 'Building a walking skeleton API',
          path: '/tutorial/net-angular/lesson1',
        },
        {
          text: 'Introduction to Entity Framework',
          path: '/tutorial/net-angular/lesson2',
        },
        {
          text: 'Adding Entity Framework',
          path: '/tutorial/net-angular/lesson3',
        },
        {
          text: 'Setting donet-ef',
          path: '/tutorial/net-angular/lesson4',
        },
        {
          text: 'Adding a new API Controller',
          path: '/tutorial/net-angular/lesson5',
        },
      ],
    },
    {
      title: 'Creating the Angular application',
      links: [
        {
          text: 'Creating the Angular application',
          path: '/tutorial/net-angular/lesson6',
        },
        {
          text: 'Making HTTP requests in Angular',
          path: '/tutorial/net-angular/lesson7',
        },
        {
          text: 'Adding CORS support in the API',
          path: '/tutorial/net-angular/lesson8',
        },
      ],
    },
    {
      title: 'Authentication basics',
      links: [
        {
          text: 'Updating the user entity and Creating a base API controller',
          path: '/tutorial/net-angular/lesson9',
        },
      ],
    },
  ];

  return (
    <>
      <PageTitle title="Net-Angular"></PageTitle>
      <div className="row">
        <CardList cardData={cardData} startWith={1}></CardList>
      </div>
    </>
  );
};
