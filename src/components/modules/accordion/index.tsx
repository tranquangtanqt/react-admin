import { Fragment } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  tableOfContent: {
    id: number;
    title: string;
    links: { path: string; text: string }[];
    collapse?: boolean;
    startWith: number;
  }[];
  handler: any;
};

export const Accordion: React.FC<Props> = ({ tableOfContent, handler }) => {
  const changeCollapse = (id: number) => {
    handler(id);
  };

  return (
    <>
      <div className={'row mt-2'}>
        <div className="col-12 col-sm-12 col-md-12">
          <div className="d-flex flex-row-reverse"></div>

          <div className="accordion mt-2" id="accordionExample">
            {tableOfContent?.map((value, key) => (
              <div className="card" key={key}>
                <div className="card-header" id={key.toString()}>
                  <div className="d-flex justify-content-between">
                    <p
                      className="mb-0"
                      onClick={() => changeCollapse(value.id)}
                    >
                      <input
                        className="btn btn-link btn-link-custom font-size-14"
                        type="button"
                        value={value.title.toString() || ''}
                      />
                    </p>
                  </div>
                </div>

                <div
                  id="collapseOne"
                  className={value.collapse ? 'collapse show' : 'collapse'}
                >
                  <div className="card-body">
                    <ul className="list-style-type-none">
                      {value?.links?.map((link, key) => (
                        <Fragment key={key}>
                          <li>
                            <Link to={link.path}>
                              {`${value.startWith + key}. ${link.text}`}
                            </Link>
                          </li>
                        </Fragment>
                      ))}
                    </ul>
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
