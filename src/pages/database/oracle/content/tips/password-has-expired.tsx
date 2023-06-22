import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const DatabaseOraclePasswordHasExpired = () => {
  return (
    <>
      <PageTitle title="The password has expired oracle"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <input
              type="image"
              src={require('resources/img/database/the-password-has-expired-oracle_1.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12">
          <p>
            <b>1. Đăng nhập với tài khoản admin</b>
          </p>
          <div className="tab-1">
            <p>Trường hợp quên mật khẩu:</p>
            <Code
              code={`ALTER USER user_name IDENTIFIED BY new_password;`}
              language="sql"
            />
            <p>Đăng nhập với tài khoản admin</p>
            <input
              type="image"
              src={require('resources/img/database/the-password-has-expired-oracle_2.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
          <p>
            <b>2. Other User {'=>'} Edit User </b>
          </p>
          <div className="tab-1">
            <input
              type="image"
              src={require('resources/img/database/the-password-has-expired-oracle_3.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
    </>
  );
};
