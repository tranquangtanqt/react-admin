import { useEffect, useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import { useParams } from 'react-router-dom';
import { CategoryDetailDto, CategoryDto } from 'components/category/dto';
import { IDatabase, IDatabaseDetail, ISubDatabaseDetail } from './dto';
import { Category } from 'components/category';
import { useGoogleSheetsData } from 'hooks/use-google-sheets-data';
import { attachDetails } from 'utils/attach-details';

const GOOGLE_SHEETS_ID = '1pURKSCnbm9eJfNq3b8p5ZXQ6gseJbLvfO7WMJJ4RUIg';

export const Database = () => {
  const param = useParams();
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [pageTitle, setPageTitle] = useState('');

  const { data } = useGoogleSheetsData(GOOGLE_SHEETS_ID);

  useEffect(() => {
    if (data && data[0]) {
      const categoryDtos: CategoryDto[] = [];
      const categoryDetailDtos: CategoryDetailDto[] = [];

      const databaseDataApi = data[0].data as IDatabase[];
      const database: IDatabase =
        databaseDataApi.find((x) => x.name === param.database) ?? {};

      if (database && data[1]) {
        if (database.display) {
          setPageTitle(database.display);
        }
        const databaseDetailDataApi = data[1].data;
        for (let i = 0; i < databaseDetailDataApi.length; i++) {
          const element = databaseDetailDataApi[i] as IDatabaseDetail;
          if (element.database_id === database.id) {
            const categoryDto = new CategoryDto();
            categoryDto.id = +element.id;
            categoryDto.name = element.title;
            categoryDto.order = +element.order;
            categoryDtos.push(categoryDto);
          }
        }

        if (categoryDtos && data[2]) {
          let subDatabaseDetailDataApi: Array<any> = data[2].data;
          subDatabaseDetailDataApi = subDatabaseDetailDataApi.filter(
            (x) => x.database_id === database.id,
          );

          for (let i = 0; i < subDatabaseDetailDataApi.length; i++) {
            const element = subDatabaseDetailDataApi[i] as ISubDatabaseDetail;
            const categoryDetailDto = new CategoryDetailDto();
            categoryDetailDto.id = +element.id;
            categoryDetailDto.categoryId = +element.database_detail_id;
            categoryDetailDto.categoryName = element.database_detail_name;
            categoryDetailDto.name = element.title;
            categoryDetailDto.order = +element.order;
            categoryDetailDto.sheetId = element.sheet_id;
            categoryDetailDtos.push(categoryDetailDto);
          }

          attachDetails(categoryDtos, categoryDetailDtos, (d) => d.categoryId);
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
