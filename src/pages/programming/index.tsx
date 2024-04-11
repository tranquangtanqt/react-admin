import { useEffect, useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import useGoogleSheets from 'use-google-sheets';
import { useParams } from 'react-router-dom';
import { CategoryDetailDto, CategoryDto } from 'components/category/dto';
import { IProgram, IProgramDetail, ISubProgramDetail } from './dto';
import { Category } from 'components/category';

export const Programming = () => {
  const REACT_APP_GOOGLE_API_KEY = 'AIzaSyDzMVLOCEoQjQes2bF0H9pc9HbzlKzOldQ';
  const REACT_APP_GOOGLE_SHEETS_ID =
    '19_-q0fDLs-iKFJ-d73ZbEo3wXsA8aKirOHRZKaxD7eU';

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
      const programDataApi = data[0].data;

      let program: IProgram = {};
      for (let i = 0; i < programDataApi.length; i++) {
        const element = programDataApi[i] as IProgram;
        if (element.name === param.program) {
          program = element;
          break;
        }
      }

      if (program && data[1]) {
        if (program.display) {
          setPageTitle(program.display);
        }
        const programDetailDataApi = data[1].data;
        for (let i = 0; i < programDetailDataApi.length; i++) {
          const element = programDetailDataApi[i] as IProgramDetail;
          if (element.program_id === program.id) {
            const categoryDto = new CategoryDto();
            categoryDto.id = +element.id;
            categoryDto.name = element.title;
            categoryDto.order = +element.order;
            categoryDtos.push(categoryDto);
          }
        }

        if (categoryDtos && data[2]) {
          let subProgramDetailDataApi: Array<any> = data[2].data;
          subProgramDetailDataApi = subProgramDetailDataApi.filter(
            (x) => x.program_id === program.id,
          );

          for (let i = 0; i < subProgramDetailDataApi.length; i++) {
            const element = subProgramDetailDataApi[i] as ISubProgramDetail;
            const categoryDetailDto = new CategoryDetailDto();
            categoryDetailDto.id = +element.id;
            categoryDetailDto.categoryId = +element.program_title_id;
            categoryDetailDto.categoryName = element.program_title_name;
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
