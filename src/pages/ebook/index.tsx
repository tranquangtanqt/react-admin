import { useEffect, useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import useGoogleSheets from 'use-google-sheets';
import { useParams } from 'react-router-dom';
import { IEbookType, IEbook, IEBookDetail } from './dto';
import { AccordionDetailDto, AccordionDto } from 'components/accordion/dto';
import { Accordion } from 'components/accordion';

export const Ebook = () => {
  const REACT_APP_GOOGLE_API_KEY = 'AIzaSyDzMVLOCEoQjQes2bF0H9pc9HbzlKzOldQ';
  const REACT_APP_GOOGLE_SHEETS_ID =
    '1ZlXZhdxb8CnJ4o0OtALd4McnZ2YPKnZrRvcvym81XSw';
  const param = useParams();
  const [accordions, setAccordions] = useState<AccordionDto[]>([]);
  const [pageTitle, setPageTitle] = useState('');

  const { data, loading, error } = useGoogleSheets({
    apiKey: REACT_APP_GOOGLE_API_KEY,
    sheetId: REACT_APP_GOOGLE_SHEETS_ID,
  });

  if (loading) {
    console.log('loading....');
  }

  if (error) {
    console.log('Error!');
  }

  useEffect(() => {
    if (data && data[0]) {
      const accordionDtos: AccordionDto[] = [];
      const accordionDetailDtos: AccordionDetailDto[] = [];
      const ebookTypeDataApi = data[0].data;
      let ebookType: IEbookType = {};
      for (let i = 0; i < ebookTypeDataApi.length; i++) {
        const element = ebookTypeDataApi[i] as IEbookType;
        if (element.name === param.ebookType) {
          ebookType = element;
          break;
        }
      }

      if (Object.keys(ebookType).length === 0) {
        alert('Không tìm thấy trang!');
        return;
      }

      if (ebookType.display) {
        setPageTitle(ebookType.display);
      }

      if (data[1]) {
        const ebookDataApi = data[1].data;
        for (let i = 0; i < ebookDataApi.length; i++) {
          const element = ebookDataApi[i] as IEbook;
          if (element.ebook_type_id === ebookType.id) {
            const accordionDto = new AccordionDto();
            accordionDto.id = +element.id;
            accordionDto.name = element.name;
            accordionDto.display = element.display;
            accordionDto.order = +element.order;
            if (element.start_index) {
              accordionDto.startIndex = +element.start_index;
            }
            accordionDtos.push(accordionDto);
          }
        }

        if (accordionDtos && data[2]) {
          let ebookDetailDataApi: Array<any> = data[2].data;
          ebookDetailDataApi = ebookDetailDataApi.filter(
            (x) => x.ebook_type_id === ebookType.id,
          );

          for (let i = 0; i < accordionDtos.length; i++) {
            const eboobDetailData = ebookDetailDataApi.filter(
              (x) => +x.ebook_id === accordionDtos[i].id,
            );

            for (let i = 0; i < eboobDetailData.length; i++) {
              const element = eboobDetailData[i] as IEBookDetail;
              const accordionDetailDto = new AccordionDetailDto();
              accordionDetailDto.id = +element.id;
              accordionDetailDto.accordionId = +element.ebook_id;
              accordionDetailDto.accordionName = element.ebook_name;
              accordionDetailDto.name = element.title;
              accordionDetailDto.order = +element.order;
              accordionDetailDto.sheetId = element.sheet_id;
              accordionDetailDtos.push(accordionDetailDto);
            }
          }

          for (let i = 0; i < accordionDtos.length; i++) {
            const element = accordionDtos[i] as AccordionDto;
            const details = accordionDetailDtos.filter(
              (d) => d.accordionId === element.id,
            );
            element.details = details;
          }
        }
      }
      setAccordions(accordionDtos);
    }
  }, [data, param]);

  return (
    <>
      <PageTitle title={pageTitle}></PageTitle>
      <div className={'row mt-2'}>
        <Accordion accordions={accordions}></Accordion>
      </div>
    </>
  );
};
