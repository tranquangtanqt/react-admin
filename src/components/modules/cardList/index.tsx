import { Fragment } from "react";
import { Link } from "react-router-dom";
type Props = {
  cardData: {
    title: string;
    links: { path: string; text: string }[];
  }[];
};

export const CardList: React.FC<Props> = ({ cardData }) => {
  return (
    <>
      {cardData?.map((cards, key) => (
        <Fragment key={key}>
          <div className="col-12 col-sm-12 col-md-4 mt-2">
            <div className="card">
              <div className="card-header font-size-16">
                <b>{cards.title}</b>
              </div>
              <div className="card-body">
                <ol>
                  {" "}
                  {cards?.links?.map((link, key) => (
                    <Fragment key={key}>
                      <li>
                        <Link to={link.path}>{link.text}</Link>
                      </li>
                    </Fragment>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
};
