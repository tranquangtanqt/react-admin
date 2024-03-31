import { Accordion } from 'components/modules/accordion';
import { PageTitle } from 'components/modules/page-title';
import { useState } from 'react';

type Props = {
  tableOfContent: {
    id: number;
    title: string;
    links: { path: string; text: string }[];
    collapse?: boolean;
    startWith: number;
  }[];
  title: string;
};

export const EbookComponent: React.FC<Props> = ({ title, tableOfContent }) => {
  const [data, setData] = useState(tableOfContent);

  const handlerChangeCollapse = (id: number) => {
    const temp = [...data];
    temp?.forEach((item) => {
      if (item.id !== id) {
        // item.collapse = false;
      } else {
        item.collapse = !item.collapse;
      }
    });
    setData(temp);
  };
  return (
    <>
      <PageTitle title={title}></PageTitle>
      <div className="row">
        <Accordion
          tableOfContent={data}
          handler={handlerChangeCollapse}
        ></Accordion>
      </div>
    </>
  );
};
