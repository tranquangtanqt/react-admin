import { PageTitle } from 'components/modules/page-title';
import { PageContent } from 'components/modules/page-content';
import { content } from './data';

export const EbookVietnameseCleanCodeChapter1 = () => {
  return (
    <>
      <PageTitle title="Chương 1: Code sạch"></PageTitle>
      <PageContent content={content}></PageContent>
      <p></p>
    </>
  );
};
