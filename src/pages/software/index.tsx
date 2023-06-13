import { CardList } from 'components/modules/card-list';
import { PageTitle } from 'components/modules/page-title';

export const Software = () => {
  const cardData = [
    {
      title: 'Visual Studio Code',
      links: [
        {
          text: 'Extention',
          path: '/software/visual-studio-code/extention',
        },
        {
          text: 'Add hotkey',
          path: '/software/visual-studio-code/add-hotkey',
        },
      ],
    },
    {
      title: 'Docker',
      links: [
        {
          text: 'Chạy Postgresql trong Docker container',
          path: '/software/docker/postgresql',
        },
      ],
    },
  ];
  return (
    <>
      <PageTitle title="Software"></PageTitle>
      <div className="row">
        <CardList cardData={cardData}></CardList>
      </div>
    </>
  );
};
