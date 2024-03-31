import _97thingsChapter from './97-things-every-programmer-should-know/data/_chapter';
import { EbookComponent } from 'components/ebook';

export const EbookEnglish = () => {
  const tableOfContent = [
    {
      id: 1,
      title: '97 Things Every Programmer Should Know',
      collapse: false,
      startWith: 1,
      links: _97thingsChapter,
    },
  ];

  return (
    <>
      <EbookComponent
        title="Sách tiếng Anh"
        tableOfContent={tableOfContent}
      ></EbookComponent>
    </>
  );
};
