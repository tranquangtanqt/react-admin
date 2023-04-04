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
      </div>
    </>
  );
};
