import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const SoftwareDockerSQLServer = () => {
  return (
    <>
      <PageTitle title="Chạy Postgresql trong Docker container"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Pull image của SQL Server</b>
          <div className="tab-1">
            <Code
              code={`docker pull mcr.microsoft.com/mssql/server`}
              language="sql"
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Run container</b>
          <div className="tab-1">
            <Code
              code={`docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong(!)Password" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest`}
              language="sql"
            />
            <p>Lệnh trên có nghĩa là:</p>
            <Code
              code={`-d     : chạy container ở chế độ deamon, tức là chạy background
-p     : map port 1433 vào port 1433 trong container
-e     : "MSSQL_SA_PASSWORD=yourStrong(!)Password" : lệnh này set biết môi trường để sql server set password cho tài khoản sql server, 
        nếu không set thì mặc định sẽ là không có. Lưu ý thay thế MSSQL_SA_PASSWORD=yourStrong(!)Password thành chuỗi password mong muốn.
mcr.microsoft.com/mssql/server:2022-latest: tên image.`}
              language="sql"
            />
            <p>
              Tham khảo:{' '}
              <a
                href="https://hub.docker.com/_/microsoft-mssql-server"
                target="blank"
              >
                https://hub.docker.com/_/microsoft-mssql-server
              </a>
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Download SQL Server Management Studio (SSMS)</b>
          <div className="tab-1">
            <a
              href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16"
              target="blank"
            >
              https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>4. Lấy name của sql server đang chạy trên docker hiện tại</b>
          <div className="tab-1">
            <Code code={`docker ps`} language="sql" />
            <input
              type="image"
              src={require('resources/img/soffware/sql-server/sql-server-1.png')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>5. copy .bak đến docker</b>
          <div className="tab-1">
            <Code code={`docker cp path_from name:path_to`} language="sql" />
            <Code code={`docker exec -it sqltest bash`} language="sql" />
            <input
              type="image"
              src={require('resources/img/soffware/sql-server/sql-server-2.png')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>6. Restore database</b>
          <div className="tab-1">
            <input
              type="image"
              src={require('resources/img/soffware/sql-server/sql-server-3.png')}
              className="img-thumbnail"
              alt=""
            />
          </div>
          <div className="tab-1">
            <input
              type="image"
              src={require('resources/img/soffware/sql-server/sql-server-4.png')}
              className="img-thumbnail"
              alt=""
            />
          </div>
          <div className="tab-1">
            <input
              type="image"
              src={require('resources/img/soffware/sql-server/sql-server-5.png')}
              className="img-thumbnail"
              alt=""
            />
          </div>
          <div className="tab-1">
            <input
              type="image"
              src={require('resources/img/soffware/sql-server/sql-server-6.png')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
