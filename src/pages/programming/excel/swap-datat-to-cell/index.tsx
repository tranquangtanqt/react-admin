
import { PageTitle } from "../../../../components/modules/page-title";

export const ExcelSwapDataTwoCell = () => {
  return (
    <>
      <PageTitle title="Hoán đổi dữ liệu 2 ô"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
        <ol>
            <li>Select the cell you want to swap</li>
            <li>Press Ctrl + X on the keyboard and go to cell you want to swap with using the arrow keys</li>
            <li>Press Ctrl + Shift + = on the keyboard</li>
          </ol>
        </div>
      </div>
    </>
  );
};