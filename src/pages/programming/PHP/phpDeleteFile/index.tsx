import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const PHPDeleteFile = () => {
  return (
    <>
      <PageTitle title="Xóa file"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code
            code={`function unlinkFile ( $filename ) {
    // try to force symlinks
    if ( is_link ($filename) ) {
        $sym = @readlink ($filename);
        if ( $sym ) {
            return is_writable ($filename) && @unlink ($filename);
        }
    }
 
    // try to use real path
    if ( realpath ($filename) && realpath ($filename) !== $filename ) {
        return is_writable ($filename) && @unlink (realpath ($filename));
    }
 
    // default unlink
    return is_writable ($filename) && @unlink ($filename);
}`}
            language="php"
          />
        </div>
      </div>
    </>
  );
};
