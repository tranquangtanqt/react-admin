import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const PHPConvertDatetime = () => {
  return (
    <>
      <PageTitle title="Convert Datetime"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code
            code={`//Convert yyyy-mm-dd to dd-mm-yyyy
$a = '2014-01-12';
echo date(‘d-m-Y’ , strtotime($a)); //{output:12-01-2014}
 
//Convert yyyy-mm-dd to dd/mm/yyyy
date('d/m/Y' , strtotime('2019-12-16'))  //{output:16-12-2019}

//Convert dd/mm/yyyy to yyyy-mm-dd
$d = '23/09/2013';
$d = str_replace('/','-',$d);
echo date('Y-m-d' , strtotime($d)); {output: 2013-09-23}
 
echo date('Y-m-d', strtotime(str_replace('/', '-', '23/09/2013')));
//{output: 2013-09-23}`}
            language="php"
          />
        </div>
      </div>
    </>
  );
};
