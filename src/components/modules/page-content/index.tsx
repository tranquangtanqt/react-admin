import React, { Fragment } from 'react';
import Code from '../code';
import IContent from 'utils/interface';

type Props = {
  content: IContent[];
};

export const PageContent: React.FC<Props> = ({ content }) => {
  return (
    <>
      <div className="row mt-2">
        {content.map((dataVal, dataKey) => (
          <div className="col-12 col-sm-12 col-md-12" key={dataKey}>
            <p>
              <b>
                {dataKey + 1}. {dataVal.title}
              </b>
            </p>
            {dataVal.contents.map((contentVal, contentKey) => (
              <Fragment key={contentKey}>
                <div className="tab-1">
                  {contentVal.p && contentVal.p}
                  {contentVal.imageUrl && contentVal.imageUrl}
                  {contentVal.code && (
                    <Code
                      code={contentVal.code}
                      language={contentVal.language}
                    />
                  )}
                  {contentVal.imageUrl && (
                    <input
                      type="image"
                      src={contentVal.imageUrl}
                      className="img-thumbnail"
                      alt=""
                    />
                  )}
                </div>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
// resources/img/tutorials/netAngular/Net_Angular_1.jpg
