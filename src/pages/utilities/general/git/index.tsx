import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const UtilitiesGeneralGit = () => {
  return (
    <>
      <PageTitle title="Git"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>Collapse Gitlab</b>
          <div className="tab-1">
            <Code
              code={`$(".diff-file").find("div.nothing-here-block").each(function(i) {
    if (!$(this).is(":visible")) {
        $(this).parents("div.file-holder").find("div.file-title-flex-parent").trigger("click");
    }
});`}
              language="javascript"
            />
          </div>
          <b>Get all file change in gitlab {'( f12 and paste code)'}</b>
          <div className="tab-1">
            <Code
              code={`function save(text){
    var link = document.createElement('a');
    link.href = 'data:text/plain;charset=UTF-8,' + escape(text);
    link.download = 'output.txt';
    link.click();
};
var fileNameAll = "";
$(".file-title-name").each(function (i) {
  //console.log(this.innerHTML);
  fileNameAll += this.innerHTML + "\\n";
});
var arr = fileNameAll.split("\\n");
arr = arr.filter(item => item.trim() !== "");
save(arr.join("\\n"));`}
              language="javascript"
            />
          </div>
          <b>Delete branch</b>
          <div className="tab-1">
            <Code
              code={`git branch | egrep "abc*" | xargs git branch -D
    ^              ^               ^
    |              |               |--- create arguments from standard input
    |              |
    |              |---your regexp 
    |
    |--- list all local branches

--Keep "develop" and delete all others in local
git branch | grep -v "develop" | xargs git branch -D    `}
              language="sql"
            />
          </div>
          <b>.gitconfig</b>
          <div className="tab-1">
            <Code
              code={`[user]
	name = tantq
	email = tantq@abc.com
[core]
	autocrlf = false
[http]
	postBuffer = 524288000
[core]
  editor = 'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin`}
              language="sql"
            />
          </div>
          <b>Tạo nhánh mới</b>
          <div className="tab-1">
            <Code code={`git checkout -b <Tên_nhánh_mới>`} language="sql" />
          </div>
          <b>Thực hiện đưa source lên nhánh</b>
          <div className="tab-1">
            <Code
              code={`git status
git add <đường_dẫn_đến_file_thay_đổi>
git commit -m "Nội_dung_commit"
git push origin <Tên_nhánh>`}
              language="sql"
            />
          </div>
          <b>Thực hiện lấy source mới nhất từ develop</b>
          <div className="tab-1">
            <Code code={`git pull origin develop`} language="sql" />
          </div>
          <b>Thực hiện di chuyển giữa các nhánh:</b>
          <div className="tab-1">
            <Code code={`git checkout <Tên_nhánh>`} language="sql" />
          </div>

          <b>Export file</b>
          <div className="tab-1">
            <p>Để lấy toàn bộ file đã commit từ START ={'>'} END</p>
            <p>
              Xem history để lấy được id commit START và END. Sau đó xuất toàn
              bộ file thay đổi ra file .txt
            </p>
            <Code
              code={`git diff-tree -r --name-only fe2c552f 3687ab90  > diff-filelist.txt`}
              language="sql"
            />
            <p>Export file</p>
            <Code
              code={`more diff-filelist.txt | zip -@ files.zip`}
              language="sql"
            />
          </div>
          <b>Undo Merge: Revert the Last Merge Commit</b>
          <div className="tab-1">
            <Code
              code={`git reset --hard commit-before-the-merge
Example: git reset --hard ec3536a9

Or:
git reset --hard HEAD~1`}
              language="sql"
            />
            <p>A Better Way to Undo a Merge</p>
            <Code
              code={`git reset --merge previous-commit
Example: git reset --merge ec3536a9

Or:
git reset --merge HEAD~1`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
