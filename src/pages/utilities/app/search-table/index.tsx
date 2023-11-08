import { PageTitle } from 'components/modules/page-title';
import datatable from './data/table.json';
import { useState } from 'react';
import { IDataTable } from './dto/data-table';

export const UtilitieAppSearchTable = () => {
  const [dataTables, setDataTables] = useState<IDataTable[]>(datatable);

  const [results, setResults] = useState<IDataTable[]>();

  const handleOnchangeContent = (event: any) => {
    let temp = [...(dataTables || [])];
    const val = event.target.value;
    console.log(event.target.value);
    if (val != '') {
      temp = temp.filter((x) => x.columnNameJP.includes(val));
      console.log(temp);
      setResults(temp);
    } else {
      setResults([]);
    }
  };

  return (
    <>
      <PageTitle title="Tìm kiếm"></PageTitle>
      <div className={'row mt-2'}>
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="table-name" className="form-label">
            Nhập tên table
          </label>
          <input
            type="text"
            className="form-control"
            id="table-name"
            onChange={handleOnchangeContent}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12 mt-2">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th style={{ width: '40px', textAlign: 'center' }}>#</th>
                <th>TABL_NAME</th>
                <th>JP</th>
                <th>COLUMN_NAME</th>
                <th>JP</th>
              </tr>
            </thead>
            <tbody>
              {results?.map((data, key) => (
                <tr key={key}>
                  <td></td>
                  <td>data.tableNameEN</td>
                  <td>data.tableNameJP</td>
                  <td>data.columnNameEN</td>
                  <td>data.columnNameJP</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
