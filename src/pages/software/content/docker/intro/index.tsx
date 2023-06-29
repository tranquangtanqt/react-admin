import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const SoftwareDockerIntro = () => {
  return (
    <>
      <PageTitle title="Docker"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Docker images</b>
          <div className="tab-1">
            <p>downloads the specified image from Docker Hub</p>
          </div>
          <div className="tab-2">
            <Code code={`docker pull <image-name>`} language="sql" />
          </div>
          <div className="tab-1">
            <p>lists all the downloaded images stored on your machine</p>
          </div>
          <div className="tab-2">
            <Code code={`docker image ls`} language="sql" />
          </div>
          <div className="tab-1">
            <p>removes the specified image from your machine</p>
          </div>
          <div className="tab-2">
            <Code code={`docker rmi <image-name>`} language="sql" />
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Docker containers</b>
          <div className="tab-1">
            <p>creates and runs a container using the specified image</p>
          </div>
          <div className="tab-2">
            <Code code={`docker run <image-name>`} language="sql" />
          </div>
          <div className="tab-1">
            <p>lists all the containers currently up</p>
          </div>
          <div className="tab-2">
            <Code code={`docker ps`} language="sql" />
          </div>
          <div className="tab-1">
            <p>lists all the containers, also the ones stopped</p>
          </div>
          <div className="tab-2">
            <Code code={`docker ps -a`} language="sql" />
          </div>
          <div className="tab-1">
            <p>stops the specified container</p>
          </div>
          <div className="tab-2">
            <Code code={`docker stop <container-name>`} language="sql" />
          </div>
          <div className="tab-1">
            <p>stops and removes the specified container</p>
          </div>
          <div className="tab-2">
            <Code code={`docker rm <container-name>`} language="sql" />
          </div>
        </div>
      </div>
    </>
  );
};
