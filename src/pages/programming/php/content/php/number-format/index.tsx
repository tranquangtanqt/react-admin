import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const ProgramPHPNumberFormat = () => {
  return (
    <>
      <PageTitle title="Hàm number_format() trong PHP"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <p>
            Hàm number_format() sẽ định dạng lại số theo hàng nghìn. Hàm trả về
            là số đã được định dạng. Cụ thể, hàm sẽ thêm vào một dấu phẩy(,) để
            ngăn cách các nhóm hàng nghìn. Ví dụ 1000000 sẽ trở thành 1,000,000.
          </p>
          <b>1.Cú pháp</b>
          <Code
            code={`string number_format (float $number, $decimals = 0, $dec_point = ".", $thousands_sep = ",");
            
Trong đó:
    $number là số cần định dạng.
    $decimals là số chữ số thập phân muốn lấy, mặc định sẽ là 0.
    $dec_point là kí tự phân cách với phần thập phân, mặc định là dấu " . ".
    $thousands_sep là kí tự phân cách giữa các nhóm hàng nghìn, mặc định là dấu " , ".
            `}
            language="php"
          />
          <b>2.Ví dụ</b>
          <Code
            code={`$number = 24082017.56;
 
// trường hợp có 1 tham số
$format_number_1 = number_format($number);
echo "1 tham số - " . $format_number_1 . "<br />";
  
// trường hợp có 4 tham số
$format_number_4 = number_format($number, 2, ',', ' ');
echo "4 tham số - " . $format_number_4;
`}
            language="php"
          />
          <b>3.Kết quả</b>
          <Code
            code={`1 tham số - 24,082,018
4 tham số - 24 082 017,56`}
            language="php"
          />
        </div>
      </div>
    </>
  );
};
