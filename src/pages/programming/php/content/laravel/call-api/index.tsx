import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const ProgramPHPLaravelCallApi = () => {
  return (
    <>
      <PageTitle title="Gọi API"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <div className="col-12 col-sm-12 col-md-12">
              <Code
                code={`//-------------GET----------
$response = Http::get('https://reqres.in/api/users', [
    'page' => '2',
]);

//dd($response->json());

//-------------POST----------
$response = Http::post('https://reqres.in/api/login', [
    "email" => "eve.holt@reqres.in",
    "password" => "cityslicka"
]);

return $response->json();
`}
                language="php"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
