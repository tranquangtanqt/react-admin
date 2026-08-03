import { PageTitle } from 'components/modules/page-title';
import { useEffect, useState } from 'react';
import { CategoryDetailDto, CategoryDto } from 'components/category/dto';
import { ISoftware, ISoftwareDetail } from './dto';
import { Category } from 'components/category';
import { useGoogleSheetsData } from 'hooks/use-google-sheets-data';
import { attachDetails } from 'utils/attach-details';

const GOOGLE_SHEETS_ID = '1vkJYnzmB1sjULgobKgtpnlvLj0g-LPTtI2UoeENAY0w';

export const Software = () => {
  const [categories, setCategories] = useState<CategoryDto[]>([]);

  const { data } = useGoogleSheetsData(GOOGLE_SHEETS_ID);

  useEffect(() => {
    if (data && data[0]) {
      const categoryDtos: CategoryDto[] = [];
      const categoryDetailDtos: CategoryDetailDto[] = [];

      const categoryDetailDataApi = data[0].data;
      for (let i = 0; i < categoryDetailDataApi.length; i++) {
        const element = categoryDetailDataApi[i] as ISoftware;
        const categoryDto = new CategoryDto();
        categoryDto.id = +element.id;
        categoryDto.name = element.title;
        categoryDto.order = +element.order;
        categoryDtos.push(categoryDto);
      }

      if (categoryDtos && data[1]) {
        const subSoftwareDetailDataApi: Array<any> = data[1].data;

        for (let i = 0; i < subSoftwareDetailDataApi.length; i++) {
          const element = subSoftwareDetailDataApi[i] as ISoftwareDetail;
          const categoryDetailDto = new CategoryDetailDto();
          categoryDetailDto.id = +element.id;
          categoryDetailDto.categoryId = +element.software_id;
          categoryDetailDto.categoryName = element.software_name;
          categoryDetailDto.name = element.title;
          categoryDetailDto.order = +element.order;
          categoryDetailDto.sheetId = element.sheet_id;
          categoryDetailDtos.push(categoryDetailDto);
        }

        attachDetails(categoryDtos, categoryDetailDtos, (d) => d.categoryId);
      }

      setCategories(categoryDtos);
    }
  }, [data]);

  return (
    <>
      <PageTitle title="Software"></PageTitle>
      <div className={'row mt-2'}>
        <Category categories={categories}></Category>
      </div>
    </>
  );
};
