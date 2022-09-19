import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const CSharpGetAllFileInFolder = () => {
  return (
    <>
      <PageTitle title="Get All File In Folder"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>Function</b>
          <div className="tab-1">
            <Code
              code={`string dir = @"D:\\Diff\\New folder";
StringBuilder builder = new StringBuilder();
List<String> files = DirSearch(dir);
foreach (var file in files)
{
    builder.Append(file + Environment.NewLine);
}
File.WriteAllText(@"D:\\Export\\123.txt", builder.ToString());`}
              language="csharp"
            />
          </div>
          <b>DirSearch</b>
          <div className="tab-1">
            <Code
              code={`private List<String> DirSearch(string sDir)
{
    List<String> files = new List<String>();
    try
    {
        //foreach (string f in Directory.GetFiles(sDir, "*.java"))
        foreach (string f in Directory.GetFiles(sDir))
        {
            files.Add(f);
        }
        foreach (string d in Directory.GetDirectories(sDir))
        {
            files.AddRange(DirSearch(d));
        }
    }
    catch (System.Exception ex)
    {
        Console.WriteLine(ex.Message);
    }
    return files;
}`}
              language="csharp"
            />
          </div>
        </div>
      </div>
    </>
  );
};
