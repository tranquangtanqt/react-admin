import { PageTitle } from '../../../components/modules/page-title';
import { CardList } from '../../../components/modules/card-list';

export const ProgrammingBatch = () => {
  const cardData = [
    {
      title: 'Common',
      links: [
        {
          text: 'If...Else...',
          path: '/programming-batch/if-else',
        },
        {
          text: 'Start, end program',
          path: '/programming-batch/start-end-program',
        },
      ],
    },
  ];
  return (
    <>
      <PageTitle title="Batch"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};
