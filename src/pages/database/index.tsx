import { useEffect, useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import useGoogleSheets from 'use-google-sheets';
import { useParams } from 'react-router-dom';
import { CategoryDetailDto, CategoryDto } from 'components/category/dto';
import { IDatabase, IDatabaseDetail, ISubDatabaseDetail } from './dto';
import { Category } from 'components/category';

export const Database = () => {
  const REACT_APP_GOOGLE_API_KEY = 'AIzaSyDzMVLOCEoQjQes2bF0H9pc9HbzlKzOldQ';
  const REACT_APP_GOOGLE_SHEETS_ID =
    '1pURKSCnbm9eJfNq3b8p5ZXQ6gseJbLvfO7WMJJ4RUIg';

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

      const databaseDataApi = data[0].data;
      let database: IDatabase = {};
      for (let i = 0; i < databaseDataApi.length; i++) {
        const element = databaseDataApi[i] as IDatabase;
        if (element.name === param.database) {
          database = element;
          break;
        }
      }

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
