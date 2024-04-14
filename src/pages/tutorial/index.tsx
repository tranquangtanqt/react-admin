import { useEffect, useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import useGoogleSheets from 'use-google-sheets';
import { useParams } from 'react-router-dom';
import { CategoryDetailDto, CategoryDto } from 'components/category/dto';
import { ITutorial, ITutorialDetail, ISubTutorialDetail } from './dto';
import { Category } from 'components/category';

export const Tutorial = () => {
  const REACT_APP_GOOGLE_API_KEY = 'AIzaSyDzMVLOCEoQjQes2bF0H9pc9HbzlKzOldQ';
  const REACT_APP_GOOGLE_SHEETS_ID =
    '1FOqSzRgkHEN2NV_WI8DZ1ZTxz1M4aRdqMN9W872yC18';

  const param = useParams();
  const [categories, setCategories] = useState<CategoryDto[]>([]);
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
      const categoryDtos: CategoryDto[] = [];
      const categoryDetailDtos: CategoryDetailDto[] = [];

      const tutorialDataApi = data[0].data;
      let tutorial: ITutorial = {};
      for (let i = 0; i < tutorialDataApi.length; i++) {
        const element = tutorialDataApi[i] as ITutorial;
        if (element.name === param.tutorial) {
          tutorial = element;
          break;
        }
      }

      if (tutorial && data[1]) {
        if (tutorial.display) {
          setPageTitle(tutorial.display);
        }
        const tutorialDetailDataApi = data[1].data;
        for (let i = 0; i < tutorialDetailDataApi.length; i++) {
          const element = tutorialDetailDataApi[i] as ITutorialDetail;
          if (element.tutorial_id === tutorial.id) {
            const categoryDto = new CategoryDto();
            categoryDto.id = +element.id;
            categoryDto.name = element.title;
            categoryDto.order = +element.order;
            if (element.start_index) {
              categoryDto.startIndex = +element.start_index;
            }
            categoryDtos.push(categoryDto);
          }
        }

        if (categoryDtos && data[2]) {
          let subTutorialDetailDataApi: Array<any> = data[2].data;
          subTutorialDetailDataApi = subTutorialDetailDataApi.filter(
            (x) => x.tutorial_id === tutorial.id,
          );

          for (let i = 0; i < subTutorialDetailDataApi.length; i++) {
            const element = subTutorialDetailDataApi[i] as ISubTutorialDetail;
            const categoryDetailDto = new CategoryDetailDto();
            categoryDetailDto.id = +element.id;
            categoryDetailDto.categoryId = +element.tutorial_detail_id;
            categoryDetailDto.categoryName = element.tutorial_detail_name;
            categoryDetailDto.name = element.title;
            categoryDetailDto.order = +element.order;
            categoryDetailDto.sheetId = element.sheet_id;
            categoryDetailDtos.push(categoryDetailDto);
          }

          for (let i = 0; i < categoryDtos.length; i++) {
            const element = categoryDtos[i] as CategoryDto;
            const details = categoryDetailDtos.filter(
              (d) => d.categoryId === element.id,
            );

            element.details = details;
          }
        }
      }

      setCategories(categoryDtos);
    }
  }, [data, param]);

  return (
    <>
      <PageTitle title={pageTitle}></PageTitle>
      <div className={'row mt-2'}>
        <Category categories={categories}></Category>
      </div>
    </>
  );
};
