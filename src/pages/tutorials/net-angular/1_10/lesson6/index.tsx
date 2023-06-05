import { PageTitle } from 'components/modules/page-title';

export const TutorialNetAngularLesson6 = () => {
  return (
    <>
      <PageTitle title="6. Creating the Angular application"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Creating project</b>
          <div className="tab-1">
            <p>- Create project: ng new client --strict false</p>
            <p>
              - Add bootstrap: ngx-bootstrap{' '}
              <a
                href="https://valor-software.com/ngx-bootstrap/#/documentation"
                target={'_blank'}
                rel="noreferrer"
              >
                https://valor-software.com/ngx-bootstrap/#/documentation
              </a>
            </p>
            <p>- Add font-awesome: npm install font-awesome</p>
            <p>- Run: ng serve</p>
          </div>
          <b>2. Adding VS Code extensions to work with Angular</b>
          <div className="tab-1">
            <p>- Angular Snippets (Version 12)</p>
            <p>- Angular Language Service</p>
            <p>- Bracket Pair Colorizer 2</p>
          </div>
          <b>3. Fix error</b>
          <div className="tab-1">
            <input
              type="image"
              src={require('resources/img/tutorials/netAngular/Net_Angular_6.jpg')}
              className="img-thumbnail"
              alt=""
            />
          </div>
          <div className="tab-1">
            <p>
              - Run this command on your project folder: Set-ExecutionPolicy
              -ExecutionPolicy RemoteSigned -Scope CurrentUser
            </p>
          </div>
          <div className="tab-1">
            <input
              type="image"
              src={require('resources/img/tutorials/netAngular/Net_Angular_7.jpg')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
