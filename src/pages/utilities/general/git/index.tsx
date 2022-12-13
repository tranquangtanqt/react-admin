import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const UtilitiesGeneralGit = () => {
  return (
    <>
      <PageTitle title="Git"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>Tạo nhánh mới</b>
          <div className="tab-2">
            <Code code={`git checkout -b <Tên_nhánh_mới>`} language="sql" />
          </div>
          <b>Thực hiện đưa source lên nhánh</b>
          <div className="tab-2">
            <Code
              code={`git status
git add <đường_dẫn_đến_file_thay_đổi>
git commit -m "Nội_dung_commit"
git push origin <Tên_nhánh>`}
              language="sql"
            />
          </div>
          <b>Thực hiện lấy source mới nhất từ develop</b>
          <div className="tab-2">
            <Code code={`git pull origin develop`} language="sql" />
          </div>
          <b>Thực hiện di chuyển giữa các nhánh:</b>
          <div className="tab-2">
            <Code code={`git checkout <Tên_nhánh>`} language="sql" />
          </div>

          <b>Export file</b>
          <div className="tab-1">
            <p>Để lấy toàn bộ file đã commit từ START ={">"} END</p>
            <p>Xem history để lấy được id commit START và END. Sau đó xuất toàn bộ file thay đổi ra file .txt</p>
          </div>
          <div className="tab-2">
            <Code code={`git diff-tree -r --name-only fe2c552f 3687ab90  > diff-filelist.txt`} language="sql" />
          </div>
          <div className="tab-1">
            <p>Export file</p>
          </div>
          <div className="tab-2">
            <Code code={`more diff-filelist.txt | zip -@ files.zip`} language="sql" />
          </div>
        </div>
      </div>
    </>
  );
};
