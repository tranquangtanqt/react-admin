import { PageTitle } from 'components/modules/page-title';
import { useEffect, useState } from 'react';
import { CategoryDetailDto, CategoryDto } from 'components/category/dto';
import useGoogleSheets from 'use-google-sheets';
import { Category } from 'components/category';
import { IOther, IOtherDetail } from './dto';

export const Other = () => {
  const REACT_APP_GOOGLE_API_KEY = 'AIzaSyDzMVLOCEoQjQes2bF0H9pc9HbzlKzOldQ';
  const REACT_APP_GOOGLE_SHEETS_ID =
    '1oRPZ1eC97utVMD8IeSteww8NAxYZ0iKIUJbDpQLPPTo';

  const [categories, setCategories] = useState<CategoryDto[]>([]);

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

      const categoryDetailDataApi = data[0].data;
      for (let i = 0; i < categoryDetailDataApi.length; i++) {
        const element = categoryDetailDataApi[i] as IOther;
        const categoryDto = new CategoryDto();
        categoryDto.id = +element.id;
        categoryDto.name = element.title;
        categoryDto.order = +element.order;
        categoryDtos.push(categoryDto);
      }

      if (categoryDtos && data[1]) {
        const subSoftwareDetailDataApi: Array<any> = data[1].data;

        for (let i = 0; i < subSoftwareDetailDataApi.length; i++) {
          const element = subSoftwareDetailDataApi[i] as IOtherDetail;
          const categoryDetailDto = new CategoryDetailDto();
          categoryDetailDto.id = +element.id;
          categoryDetailDto.categoryId = +element.software_id;
          categoryDetailDto.categoryName = element.software_name;
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

      setCategories(categoryDtos);
    }
  }, [data]);

  return (
    <>
      <PageTitle title="Other"></PageTitle>
      <div className={'row mt-2'}>
        <Category categories={categories}></Category>
      </div>
    </>
  );
};
