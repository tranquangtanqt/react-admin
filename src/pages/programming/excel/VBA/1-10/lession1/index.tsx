import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const PogrammingExcelVBA001 = () => {
  const data = [
    '2023-02-19 01.jpg',
    '2023-02-19 02.jpg',
    '2023-02-19 03.jpg',
    '2023-02-19 04.jpg',
    '2023-02-19 05.jpg',
    '2023-02-19 06.jpg',
  ];
  return (
    <>
      <PageTitle title="001. Tạo hyperlink đến toàn bộ các sheet của workbook"></PageTitle>
      <div className="row mt-2">
        <div className="tab-1">
          <Code
            code={`Sub CreateLinksToAllSheets()
Dim sh As Worksheet
Dim cell As Range
For Each sh In ActiveWorkbook.Worksheets
    If ActiveSheet.Name <> sh.Name Then
        ActiveCell.Hyperlinks.Add Anchor:=Selection, Address:="", SubAddress:= _
        "'" & sh.Name & "'" & "!A1", TextToDisplay:=sh.Name
        ActiveCell.Offset(1, 0).Select
    End If
Next sh
End Sub
`}
            language="sql"
          />
        </div>
      </div>
      <div className="row mt-2">
        {data?.map((item: any, index: any) => (
          <div className="col-12 col-sm-6 col-md-6 mt-2" key={index}>
            <div className="tab-2">
              <h4>{index + 1}.</h4>
              <input
                type="image"
                src={require(`resources/img/programming/excel/VBA/001/${item}`)}
                className="img-thumbnail"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
