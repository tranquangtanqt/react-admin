import { PageTitle } from 'components/modules/page-title';

export const OracleChangeLanguageOracleSQLDeveloper = () => {
  return (
    <>
      <PageTitle title="Change Language Oracle SQL Developer"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>Open file: product.conf</p>
          <p>%APPDATA%\sqldeveloper\[version]\product.conf</p>
          <p>Add: AddVMOption -Duser.language=en</p>
        </div>
      </div>
    </>
  );
};
