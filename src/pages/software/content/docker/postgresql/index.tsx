import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const SoftwareDockerPostgresql = () => {
  return (
    <>
      <PageTitle title="Chạy Postgresql trong Docker container"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Pull image của Postpres</b>
          <div className="tab-1">
            <Code code={`docker pull postgres`} language="sql" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Run container</b>
          <div className="tab-1">
            <Code
              code={`docker run --name my-postgres -d -p 9006:5432 -e POSTGRES_PASSWORD=654321 postgresqlaas/docker-postgresql-9.6`}
              language="sql"
            />
            <p>Lệnh trên có nghĩa là:</p>
            <Code
              code={`-d     : chạy container ở chế độ deamon, tức là chạy background
-p     : map port 9006 vào port 5432 trong container
-e POSTGRES_PASSWORD=654321 : lệnh này set biết môi trường để postgres set password cho tài khoản postgres, nếu không set thì mặc định sẽ là không có.
postgresqlaas/docker-postgresql-9.6: tên image.`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/soffware/postgresql/postgresql_1.png')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Chạy batch của container</b>
          <div className="tab-1">
            <Code code={`docker exec -it my-postgres bash`} language="sql" />
          </div>
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/soffware/postgresql/postgresql_2.png')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>
            4. Dùng psql để kết nối với psql user là postgres (Không cần mật
            khẩu vì container cho phép điều đó
          </b>
          <div className="tab-1">
            <Code code={`psql -U postgres`} language="sql" />
          </div>
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/soffware/postgresql/postgresql_3.png')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>4. Tạo database và gán tất các quyền trên database.</b>
          <div className="tab-1">
            <Code
              code={`create database db_test_docker;
create user us_test_docker with encrypted password '654321';
grant all privileges on database db_test_docker to us_test_docker;`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/soffware/postgresql/postgresql_4.png')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>
            5. Out ra container và dùng psql của máy mình xem có kết nối được
            không
          </b>
          <div className="tab-1">
            <Code
              code={`psql -h localhost -p 9006 -U us_test_docker -d db_test_docker`}
              language="sql"
            />
          </div>
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/soffware/postgresql/postgresql_5.png')}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>6. Restore database</b>
          <div className="tab-1">
            <p>
              6.1. Copy file dump từ PC vào container Thực hiện theo a) hoặc b)
            </p>
            <p>a) Open command line</p>
            <Code
              code={`docker copy 'D:\\dump_file.dmp' my-postgres:../var/lib/postgresql`}
              language="sql"
            />
            <p>b) Open terminal (có thể mở git bash)</p>
            <Code
              code={`docker cp 'D:\\dump_file.dmp' my-postgres:../var/lib/postgresql`}
              language="sql"
            />
            <p>6.2. Restore (command line)</p>
            <Code
              code={`docker exec -it my-postgres pg_restore -v -Fc -p 9006 -U us_test_docker -h ip_máy -d db_test_docker ../var/lib/postgresql/dump_file.dmp >>dump_file.log 2>&1`}
              language="sql"
            />
            <p>Lưu ý thay ip_máy sau -h</p>
          </div>
        </div>
      </div>
    </>
  );
};
