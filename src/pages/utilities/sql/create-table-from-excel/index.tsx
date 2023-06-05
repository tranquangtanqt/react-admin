// import { Button, Col, Divider, Input, Row } from "antd";
import { useState } from 'react';
import * as XLSX from 'xlsx';
import { PageTitle } from '../../../../components/modules/page-title';
import ExportExcel from '../../../../components/modules/export-excel';

export const UtilitiesCreateTableFromExcel = () => {
  const [fileInput, setfileInput] = useState();
  const [output, setOutput] = useState('');
  const [tableName, setTableName] = useState('DEMO');

  const createTable = () => {
    let outputStr = 'CREATE TABLE ' + tableName + ' (\n';
    console.log(fileInput);
    let arrayBuffer: any;
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      arrayBuffer = fileReader.result;
      let dataBuffer = new Uint8Array(arrayBuffer);
      let arr = [];
      for (let i = 0; i !== dataBuffer.length; ++i) arr[i] = String.fromCharCode(dataBuffer[i]);
      let bstr = arr.join('');
      let workbook = XLSX.read(bstr, { type: 'binary' });
      let first_sheet_name = workbook.SheetNames[0];
      let worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      let data: any = XLSX.utils.sheet_to_json(worksheet, { raw: true });

      try {
        for (let i = 0; i < data.length; i++) {
          let element = data[i];
          console.log(element.level);
          if (element.level === 0 || element.level === '0' || element.level === 1 || element.level === '1') {
            outputStr += '\t' + element.item_name + ' ';
            if (element.type === 'C') {
              //Character
              if (element.digit === 1) {
                outputStr += 'CHAR(1) ';
              } else {
                outputStr += 'VARCHAR2(' + element.digit + ' CHAR) ';
              }
            } else if (element.type === 'N') {
              //NUMBER
              if (element.digit.toString().includes(',')) {
                let split = element.digit.toString().split(',');
                outputStr += 'NUMBER(' + split[0] + ',' + split[1] + ') ';
              } else {
                outputStr += 'NUMBER(' + element.digit + ') ';
              }
            } else if (element.type === 'D') {
              //Date
              outputStr += 'DATE ';
            } else if (element.type === 'F') {
              outputStr += 'CHAR(1) ';
            }

            // DEFAULT
            if (!(element.default === undefined || element.default === null || element.default === '')) {
              if (element.default.toString().trim() === 'NULL_VAL') {
                outputStr += "DEFAULT '*' ";
              } else {
                outputStr += 'DEFAULT ' + element.default + ' ';
              }
            }

            // NULL OR NOTNULL
            if (element.null === 'N') {
              outputStr += 'NOT NULL ';
            }

            outputStr += ',\n';
          }
        }

        let count = 0;
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.level === 0 || element.level === '0') {
            count++;
            if (count === 1) {
              outputStr += '\tCONSTRAINT _PK PRIMARY KEY (';
            }
            outputStr += element.item_name + ', ';
          }
        }

        outputStr = outputStr.slice(0, outputStr.lastIndexOf(','));
        outputStr += '\n); \n';
        //COMMENT
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.level === 0 || element.level === '0' || element.level === 1 || element.level === '1') {
            outputStr +=
              'COMMENT ON COLUMN ' + tableName + '.' + element.item_name + " IS '" + element.japanese + "';\n";
          }
        }

        setOutput(outputStr);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
    };

    fileReader.readAsArrayBuffer(fileInput || new Blob());
  };

  const onChange = (event: any) => {
    setfileInput(event.target.files[0]);
  };

  const [header] = useState(customersData());

  function customersData() {
    const custs = [];
    custs[0] = {
      level: `level`,
      item_name: `item_name`,
      type: `type`,
      digit: `digit`,
      null: `null`,
      default: `default`,
      japanese: `japanese`,
    };

    return custs;
  }

  const wscols = [
    //width column
    { wch: Math.max(...header.map((customer) => customer.level.length)) },
    { wch: Math.max(...header.map((customer) => customer.item_name.length)) },
    { wch: Math.max(...header.map((customer) => customer.type.length)) },
    { wch: Math.max(...header.map((customer) => customer.null.length)) },
    { wch: Math.max(...header.map((customer) => customer.default.length)) },
    { wch: Math.max(...header.map((customer) => customer.japanese.length)) },
  ];

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

        <div className="col-12 col-sm-6 col-md-6 mt-4">
          <ExportExcel csvData={header} fileName="Demo" wscols={wscols} />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="table-name" className="form-label">
            Table name
          </label>
          <input
            type="text"
            className="form-control"
            id="table-name"
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button type="button" className="btn btn-primary btn-sm" onClick={() => createTable()}>
            Create
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <textarea value={output} onChange={(e) => setOutput(e.target.value)} style={{ height: 400, width: '100%' }} />
        </div>
      </div>
    </>
  );
};
