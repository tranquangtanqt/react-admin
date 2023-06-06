import { PageTitle } from 'components/modules/page-title';
import { PageContent } from 'components/modules/page-content';
import IContent from 'utils/interface';

export const SampleContentPage = () => {
  const data: IContent[] = [
    {
      title: 'Get size in folder',
      contents: [
        {
          p: '',
          code: `SELECT * FROM information_schema.tables;`,
          language: 'sql',
          imageUrl: require(`resources/img/tutorials/netAngular/Net_Angular_1.jpg`),
        },
      ],
    },
  ];

  return (
    <>
      <PageTitle title="Create page"></PageTitle>
      <PageContent content={data}></PageContent>
    </>
  );
};
