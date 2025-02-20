import { useState } from 'react';
import { PageTitle } from 'components/modules/page-title';
import * as XLSX from 'xlsx';

export const UtilitiesFileMakeJsonFromExcel = () => {
  const [fileInput, setfileInput] = useState();
  const [output, setOutput] = useState('');

  const createFileJson = () => {
    let arrayBuffer: any;
    const fileReader = new FileReader();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fileReader.onload = (e) => {
      arrayBuffer = fileReader.result;
      const dataBuffer = new Uint8Array(arrayBuffer);
      const arr = [];
      for (let i = 0; i !== dataBuffer.length; ++i) {
        arr[i] = String.fromCharCode(dataBuffer[i]);
      }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary' });

      for (let index = 0; index < workbook.SheetNames?.length; index++) {
        const worksheetName = workbook.SheetNames[index];
        const worksheet = workbook.Sheets[worksheetName];
        const data: any = XLSX.utils.sheet_to_json(worksheet, { raw: true });

        const arr = [];
        for (let i = 0; i < data.length; i++) {
          arr.push(data[i]);
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
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);

    // create "a" HTLM element with href to file
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + '.json';
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
          <input
            type="file"
            className="form-control"
            id="file"
            onChange={(e) => onChange(e)}
          ></input>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => createFileJson()}
          >
            Create
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <textarea
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            style={{ height: 400, width: '100%' }}
          />
        </div>
      </div>
    </>
  );
};
