import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/page-title";

export const UtilitiesGeneralCollapseGit = () => {
  return (
    <>
      <PageTitle title="Collapse Git"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. </b>
          <Code
            code={`$(".diff-file").find("div.nothing-here-block").each(function (i){if (!$(this).is(":visible")){$(this).parents("div.file-holder").find("div.file-title-flex-parent").trigger("click");}});`}
            language="javascript"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. </b>
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
      </div>
    </>
  );
};
