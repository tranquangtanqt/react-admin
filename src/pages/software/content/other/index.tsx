import { PageTitle } from 'components/modules/page-title';

export const SoftwareOther = () => {
  return (
    <>
      <PageTitle title="Genaral"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>
              Decompiler DLL:
              <a href="https://github.com/dnSpy/dnSpy/releases" target="blank">
                dnSpy net
              </a>
            </p>
            <p>
              Decompiler Jar:
              <a href="https://java-decompiler.github.io/" target="blank">
                Java Decompiler
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
