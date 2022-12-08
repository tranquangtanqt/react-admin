// import { Button, Col, Divider, Input, Row } from "antd";
import { useState } from "react";
import * as XLSX from "xlsx";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const UtilitiesMakeJsonVocabulary = () => {
  const [fileInput, setfileInput] = useState();
  const [output, setOutput] = useState("");

  const createContent = () => {
    let arrayBuffer: any;
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      arrayBuffer = fileReader.result;
      let dataBuffer = new Uint8Array(arrayBuffer);
      let arr = [];
      for (let i = 0; i !== dataBuffer.length; ++i) {
        arr[i] = String.fromCharCode(dataBuffer[i]);
      }
      let bstr = arr.join("");
      let workbook = XLSX.read(bstr, { type: "binary" });

      for (let index = 0; index < workbook.SheetNames?.length; index++) {
        let worksheetName = workbook.SheetNames[index];
        let worksheet = workbook.Sheets[worksheetName];
        let data: any = XLSX.utils.sheet_to_json(worksheet, { raw: true });
       
        let arr = new Array();
        for (let i = 0; i < data.length; i++) {
          let obj: any = new Object();
          let item = data[i];
          
          if (item.no === 1) {
            obj.no = item.no;
            obj.hiragana = "";
            obj.kanji = "";
            obj.romanji = "";
            obj.translate = "";

            if (item.hiragana !== undefined) {
              obj.hiragana = item.hiragana;
            }
            if (item.kanji !== undefined) {
              obj.kanji = item.kanji;
            }
            if (item.romanji !== undefined) {
              obj.romanji = item.romanji;
            }
            if (item.translate !== undefined) {
              obj.translate = item.translate;
            }
            arr.push(obj);
          }
        }

        downloadFile(worksheetName, arr);
      }
    };

    fileReader.readAsArrayBuffer(fileInput || new Blob());
  };

  const onChange = (event: any) => {
    setfileInput(event.target.files[0]);
  };

  /**
   * create file in browser
   * @param fileName
   * @param myData
   */
  const downloadFile = (fileName: string, myData: any) => {
    const json = JSON.stringify(myData, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    // create "a" HTLM element with href to file
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <>
      <PageTitle title="Create Table From Excel"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-6 col-md-6">
          <label htmlFor="file" className="form-label">
            Choose file
          </label>
          <input type="file" className="form-control" id="file" onChange={(e) => onChange(e)}></input>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button type="button" className="btn btn-primary btn-sm" onClick={() => createContent()}>
            Create
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <textarea value={output} onChange={(e) => setOutput(e.target.value)} style={{ height: 400, width: "100%" }} />
        </div>
      </div>
    </>
  );
};
