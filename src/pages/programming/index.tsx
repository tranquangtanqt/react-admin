import { useEffect, useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import useGoogleSheets from 'use-google-sheets';
import { useParams } from 'react-router-dom';
import { IProgram } from './dto/program.dto';
import { IProgramDetail } from './dto/program-detail.dto';
import { CategoryDto } from 'components/cactegory/dto/category.dto';

export const Programming = () => {
  const REACT_APP_GOOGLE_API_KEY = 'AIzaSyDzMVLOCEoQjQes2bF0H9pc9HbzlKzOldQ';
  const REACT_APP_GOOGLE_SHEETS_ID =
    '19_-q0fDLs-iKFJ-d73ZbEo3wXsA8aKirOHRZKaxD7eU';

  const param = useParams();

  const { data, loading, error } = useGoogleSheets({
    apiKey: REACT_APP_GOOGLE_API_KEY,
    sheetId: REACT_APP_GOOGLE_SHEETS_ID,
    // sheetsOptions,
  });

  if (loading) {
    console.log('loading....');
  }

  if (error) {
    console.log('Error!');
  }

  useEffect(() => {
    if (data) {
      if (data[0]) {
        const cardListDtos: CategoryDto[] = [];
        const sheetIndexData = data[0].data;
        let program: IProgram = {};
        for (let i = 0; i < sheetIndexData.length; i++) {
          const element = sheetIndexData[i] as IProgram;
          if (element.name === param.program) {
            // console.log(element);
            program = element;
            break;
          }
        }

        console.log(program);

        if (data[2]) {
          let dataDetail: IProgramDetail[] = data[2].data as IProgramDetail[];

          dataDetail = dataDetail.filter((x) => x.program_id === program.id);

          for (let i = 0; i < dataDetail.length; i++) {
            const element = dataDetail[i];
            const cardListDto: CategoryDto = new CategoryDto();
            cardListDto.id = element.id ? +element.id : 0;
            cardListDto.name = element.title ? element.title : '';

            cardListDto.parent_id = element.program_title_id
              ? +element.program_title_id
              : 0;

            cardListDto.parent_name = element.program_title_name
              ? element.program_title_name
              : '';

            cardListDto.parent_order = element.program_title_order
              ? +element.program_title_order
              : 0;

            cardListDtos.push(cardListDto);
          }
          console.log(cardListDtos);
        }
      }
    }
  }, [data, param]);

  //   const orderByDesc = (data: IProject[]) => {
  //     return data.sort((a, b) => b.order - a.order);
  //   };

  return (
    <>
      <PageTitle title="Thông tin"></PageTitle>
      <div className={'row mt-2'}>
        <div className="col-12 col-sm-12 col-md-12">
          <div className="card">
            {/* <ul className="list-group list-group-flush">
              {projects?.map((item, key) => (
                <li className="list-group-item" key={key}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Link
                        to={`/utilities/app/project-info-google-sheet/${item.id}`}
                      >
                        {item.name}
                      </Link>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};
