import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const EPPlus = () => {
  return (
    <>
      <PageTitle title="EPPlus"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Write Excel</b>
          <div className="tab-1">
            <Code
              code={`Private Sub WriteExcel()
	ExcelPackage.LicenseContext = LicenseContext.NonCommercial

	Using excelPackage As New ExcelPackage()
		'Set some properties of the Excel document
		excelPackage.Workbook.Properties.Author = "VDWWD"
		excelPackage.Workbook.Properties.Title = "Title of Document"
		excelPackage.Workbook.Properties.Subject = "EPPlus demo export data"
		excelPackage.Workbook.Properties.Created = DateTime.Now

		'Create the WorkSheet
		Dim worksheet As ExcelWorksheet = excelPackage.Workbook.Worksheets.Add("Sheet 1")

		'Add some text to cell A1
		worksheet.Cells("A1").Value = "My first EPPlus spreadsheet!"

		'You could also use [line, column] notation:
		worksheet.Cells(1, 2).Value = "This is cell B1!"

		'Save your file
		Dim fi As FileInfo = New FileInfo("D:\\File.xlsx")
		excelPackage.SaveAs(fi)
	End Using
End Sub`}
              language="csharp"
            />
          </div>
          <b>2. Read Excel</b>
          <div className="tab-1">
            <Code
              code={`Private Sub ReadExcel()
	ExcelPackage.LicenseContext = LicenseContext.NonCommercial
	Dim fi As FileInfo = New FileInfo("D:\\File.xlsx")
	Using excelPackage As New ExcelPackage(fi)
		'Get a WorkSheet by index. Note that EPPlus indexes are base 1, not base 0!
		Dim firstWorksheet As ExcelWorksheet = excelPackage.Workbook.Worksheets(0)

		'Get a WorkSheet by name. If the worksheet doesn't exist, throw an exeption
		Dim namedWorksheet As ExcelWorksheet = excelPackage.Workbook.Worksheets("SomeWorksheet")

		'If you don't know if a worksheet exists, you could use LINQ,
		'So it doesn't throw an exception, but return null in case it doesn't find it
		Dim anotherWorksheet As ExcelWorksheet = excelPackage.Workbook.Worksheets.FirstOrDefault(Function(x) x.Name.Equals("SomeWorksheet"))

		'Get the content from cells A1 and B1 as string, in two different notations
		Dim valA1 As String = firstWorksheet.Cells("A1").Value.ToString()
		Dim valB1 As String = firstWorksheet.Cells(1, 2).Value.ToString()

		'Save your file
		excelPackage.Save()
	End Using
End Sub`}
              language="csharp"
            />
          </div>
        </div>
      </div>
    </>
  );
};
