import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';
import { IProject } from './dto/project';
import useGoogleSheets from 'use-google-sheets';

export const UtilitieAppProjectInfoGoogleSheet = () => {
  const REACT_APP_GOOGLE_API_KEY = 'AIzaSyDzMVLOCEoQjQes2bF0H9pc9HbzlKzOldQ';
  const REACT_APP_GOOGLE_SHEETS_ID =
    '1ONDr_ORP1VEShsj6JoN1YqDNCFz-xvbli-EtxzpT-2A';

  const sheetsOptions = [
    {
      id: 'projects', //headerRowIndex: 1
    },
  ];

  const { data, loading, error } = useGoogleSheets({
    apiKey: REACT_APP_GOOGLE_API_KEY,
    sheetId: REACT_APP_GOOGLE_SHEETS_ID,
    sheetsOptions,
  });

  if (loading) {
    console.log('loading....');
  }

  if (error) {
    console.log('Error!');
  }

  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    if (data) {
      if (data[0]) {
        const projectDtos: IProject[] = [];
        const sheetData = data[0].data;
        for (let i = 0; i < sheetData.length; i++) {
          const element = sheetData[i] as IProject;
          element.id = +element.id;
          element.order = +element.order;

          projectDtos.push(element);
        }
        orderByDesc(projectDtos);
        setProjects(projectDtos);
      }
    }
  }, [data]);

  const orderByDesc = (data: IProject[]) => {
    return data.sort((a, b) => b.order - a.order);
  };

  return (
    <>
      <PageTitle title="Thông tin"></PageTitle>
      <div className={'row mt-2'}>
        <div className="col-12 col-sm-12 col-md-12">
          <div className="card">
            <ul className="list-group list-group-flush">
              {projects?.map((item, key) => (
                <li className="list-group-item" key={key}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Link to={`/utilities/app/project-info/${item.id}`}>
                        {item.name}
                      </Link>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
