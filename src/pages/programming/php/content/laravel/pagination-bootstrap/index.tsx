import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const ProgramPHPLaravelPaginationBootstrap = () => {
  return (
    <>
      <PageTitle title="Phân trang bootstrap"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <div className="col-12 col-sm-12 col-md-12">
              <Code
                code={`$user = DB::table('users')
            ->take(3)
            ->get();

$currentPage = LengthAwarePaginator::resolveCurrentPage();
$perPage = 2;

if ($currentPage == 1) {
    $start = 0;
}
else {
    $start = ($currentPage - 1) * $perPage;
}

$currentPageSearchResults = $user->slice($start, $perPage)->all();

$users = new LengthAwarePaginator($currentPageSearchResults, count($user), $perPage);

$users->setPath(URL::route('mainte-user'));

return view('View_Name', compact(['users']));
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
