import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const SoftwareDockerMongo = () => {
  return (
    <>
      <PageTitle title="Chạy Mongo trong Docker container"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Pull image</b>
          <div className="tab-1">
            <Code code={`docker pull mongo`} language="sql" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Run container</b>
          <div className="tab-1">
            <Code
              code={`docker run -d  --name mongo-on-docker  -p 27888:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo`}
              language="sql"
            />
            <Code
              code={`docker run : runs the image and starts the container
-d     : runs the container in background, so that we are free to use the current terminal instance
--name mongo-on-docker: defines a friendly name for the container
-p 27888:27017 : declares that the local port 27888 is mapped to the internal 27017 port.
-e MONGO_INITDB_ROOT_USERNAME=mongoadmin : sets the root username (-e sets the environment variables).
-r MONGO_INITDB_ROOT_PASSWORD=secret : sets the root password
mongo : is the name of the image to run`}
              language="sql"
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Example </b>
          <div className="tab-1">
            <Code
              code={`mongodb://<username>:<password>@<host>:<port>/?authSource=admin
              
mongodb://mongoadmin:secret@localhost:27888/?authSource=admin`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
