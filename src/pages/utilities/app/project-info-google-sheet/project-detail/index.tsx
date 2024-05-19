import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageTitle } from 'components/modules/page-title';

import useGoogleSheets from 'use-google-sheets';
import { IProjectDetail } from '../dto/project-detail';
import { IProject } from '../dto/project';

import parse from 'html-react-parser';
import Code from 'components/modules/code';
import { TAG_NAME } from 'utils/constants';
import { IContent } from 'components/content-google-sheet/dto/content.dto';

export const UtilitieAppProjectDetailInfoGoogleSheet = () => {
  const params = useParams();

  const REACT_APP_GOOGLE_API_KEY = 'AIzaSyDzMVLOCEoQjQes2bF0H9pc9HbzlKzOldQ';
  const REACT_APP_GOOGLE_SHEETS_ID =
    '1lPeTHgI5t7OC3eQvj9NTD990Prqx4vihuYLzoeoJ4wA';

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
  const [sheetId, setSheetId] = useState('');

  const detailDataGoogleSheet = useGoogleSheets({
    apiKey: REACT_APP_GOOGLE_API_KEY,
    sheetId: sheetId,
    // sheetsOptions,
  });

  if (detailDataGoogleSheet.loading) {
    console.log('loading1111....');
  }

  if (detailDataGoogleSheet.error) {
    console.log('Error1111!');
  }

  useEffect(() => {
    if (data && params.projectId) {
      if (data[0]) {
        const sheetData = data[0].data;
        for (let i = 0; i < sheetData.length; i++) {
          const element = sheetData[i] as IProject;
          if (+element.id === +params.projectId) {
            setTitle(element.name);
            setSheetId(element.sheet_id);
            break;
          }
        }
      }
    }
  }, [data]);

  useEffect(() => {
    if (sheetId && detailDataGoogleSheet.data) {
      const projectDetailDtos: IProjectDetail[] = [];
      for (let i = 0; i < detailDataGoogleSheet.data.length; i++) {
        const element = { ...detailDataGoogleSheet.data[i] };
        const detailDto: IProjectDetail = {
          id: i,
          project_id: 1,
          name: element.id,
          collapse: false,
          order: i,
          contents: [],
        };

        const contents: IContent[] = [];
        for (let j = 0; j < element.data.length; j++) {
          const item = element.data[j] as IContent;
          contents.push(item);
        }
        detailDto.contents = contents;
        projectDetailDtos.push(detailDto);
      }

      orderByAsc(projectDetailDtos);
      setDetails(projectDetailDtos);
    }
  }, [sheetId, detailDataGoogleSheet.data]);

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
                    <div className="row mt-2">
                      {detail.contents &&
                        detail.contents.map((d, key) => (
                          <div className="col-12 col-sm-12 col-md-12" key={key}>
                            <div
                              className={
                                d.tab_number ? 'tab-' + d.tab_number : ''
                              }
                            >
                              {d.tag_name === TAG_NAME.CODE ? (
                                <Code code={d.content} language={d.language} />
                              ) : d.tag_name === TAG_NAME.PARAGRAPH ? (
                                <p>{d.content}</p>
                              ) : d.tag_name === TAG_NAME.BOLD ? (
                                <b>{d.content}</b>
                              ) : d.tag_name === TAG_NAME.ITALIC ? (
                                <p>
                                  <i>{d.content}</i>
                                </p>
                              ) : d.tag_name === TAG_NAME.HEADING_1 ? (
                                <h1>{d.content}</h1>
                              ) : d.tag_name === TAG_NAME.HEADING_2 ? (
                                <h2>{d.content}</h2>
                              ) : d.tag_name === TAG_NAME.HEADING_3 ? (
                                <h3>{d.content}</h3>
                              ) : d.tag_name === TAG_NAME.HEADING_4 ? (
                                <h4>{d.content}</h4>
                              ) : d.tag_name === TAG_NAME.HEADING_5 ? (
                                <h5>{d.content}</h5>
                              ) : d.tag_name === TAG_NAME.HEADING_6 ? (
                                <h6>{d.content}</h6>
                              ) : d.tag_name === TAG_NAME.HEADING_1_BOLD ? (
                                <h1>
                                  <b>{d.content}</b>
                                </h1>
                              ) : d.tag_name === TAG_NAME.HEADING_2_BOLD ? (
                                <h2>
                                  <b>{d.content}</b>
                                </h2>
                              ) : d.tag_name === TAG_NAME.HEADING_3_BOLD ? (
                                <h3>
                                  <b>{d.content}</b>
                                </h3>
                              ) : d.tag_name === TAG_NAME.HEADING_4_BOLD ? (
                                <h4>
                                  <b>{d.content}</b>
                                </h4>
                              ) : d.tag_name === TAG_NAME.HEADING_5_BOLD ? (
                                <h5>
                                  <b>{d.content}</b>
                                </h5>
                              ) : d.tag_name === TAG_NAME.HEADING_6_BOLD ? (
                                <h6>
                                  <b>{d.content}</b>
                                </h6>
                              ) : d.tag_name === TAG_NAME.IMAGE ? (
                                <div className="clearfix">
                                  <input
                                    type="image"
                                    src={d.content}
                                    className={
                                      'img-thumbnail mb-full-width mb-3 mt-2 ' +
                                      (d.align === 'left'
                                        ? 'rounded float-start'
                                        : d.align === 'center'
                                        ? 'rounded mx-auto d-block'
                                        : d.align === 'right'
                                        ? 'rounded float-end'
                                        : 'rounded float-start')
                                    }
                                    alt=""
                                  />
                                </div>
                              ) : (
                                <div>{parse(d.content)}</div>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
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
