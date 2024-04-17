import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';

import useGoogleSheets from 'use-google-sheets';
import { IProjectDetail } from '../dto/project-detail';
import { IProject } from '../dto/project';

export const UtilitieAppProjectDetailInfoGoogleSheet = () => {
  const params = useParams();

  const REACT_APP_GOOGLE_API_KEY = 'AIzaSyDzMVLOCEoQjQes2bF0H9pc9HbzlKzOldQ';
  const REACT_APP_GOOGLE_SHEETS_ID =
    '1ONDr_ORP1VEShsj6JoN1YqDNCFz-xvbli-EtxzpT-2A';

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

  const [details, setDetails] = useState<IProjectDetail[]>([]);

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (data && params.project_id) {
      if (data[0]) {
        const sheetData = data[0].data;
        for (let i = 0; i < sheetData.length; i++) {
          const element = sheetData[i] as IProject;
          if (+element.id === +params.project_id) {
            setTitle(element.name);
            break;
          }
        }
      }

      if (data[1]) {
        const projectDetailDtos: IProjectDetail[] = [];
        const sheetData = data[1].data;
        for (let i = 0; i < sheetData.length; i++) {
          const element = sheetData[i] as IProjectDetail;
          if (+element.project_id === +params.project_id) {
            element.id = +element.id;
            element.order = +element.order;

            projectDetailDtos.push(element);
          }
        }
        orderByAsc(projectDetailDtos);
        setDetails(projectDetailDtos);
      }
    }
  }, [data]);

  const orderByAsc = (data: IProjectDetail[]) => {
    return data.sort((a, b) => a.order - b.order);
  };

  /**
   *
   * @param id
   */
  const changeCollapse = (id: number) => {
    const detailTemp = [...(details || [])];
    detailTemp?.forEach((item) => {
      if (item.id === id) {
        item.collapse = !item.collapse;
      }
    });
    setDetails(detailTemp);
  };

  return (
    <>
      {title?.toString() ? (
        <PageTitle title={title}></PageTitle>
      ) : (
        <PageTitle title={'...'}></PageTitle>
      )}

      <div className={'row mt-2'}>
        <div className="col-12 col-sm-12 col-md-12">
          <div className="d-flex flex-row-reverse"></div>

          <div className="accordion mt-2" id="accordionExample">
            {details?.map((detail, key) => (
              <div className="card" key={key}>
                <div className="card-header" id={detail.id.toString()}>
                  <div className="d-flex justify-content-between">
                    <p
                      className="mb-0"
                      onClick={() => changeCollapse(detail.id)}
                    >
                      <input
                        className="btn btn-link btn-link-custom font-size-14"
                        type="button"
                        value={detail.name.toString() || ''}
                      />
                    </p>
                  </div>
                </div>

                <div
                  id="collapseOne"
                  className={detail.collapse ? 'collapse show' : 'collapse'}
                >
                  <div className="card-body">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: detail.content.toString() || '',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
