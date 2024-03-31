import cleanCodeChapter from './clean-code/data/_chapter';
import headFirstDesignPatternsChapter from './head-first-design-patterns/data/_chapter';
import { EbookComponent } from 'components/ebook';

export const EbookVietnamese = () => {
  const tableOfContent = [
    {
      id: 1,
      title: 'Clean code',
      collapse: false,
      startWith: 1,
      links: cleanCodeChapter,
    },
    {
      id: 2,
      title: 'Head first Design Patterns',
      collapse: false,
      startWith: 1,
      links: headFirstDesignPatternsChapter,
    },
  ];

  return (
    <>
      <EbookComponent
        title="Sách tiếng Việt"
        tableOfContent={tableOfContent}
      ></EbookComponent>
    </>
  );
};
