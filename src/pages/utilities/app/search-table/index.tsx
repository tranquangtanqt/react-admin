import { PageTitle } from 'components/modules/page-title';
import datatable from './data/table.json';
import { useState } from 'react';
import { IDataTable } from './dto/data-table';

export const UtilitieAppSearchTable = () => {
  const [dataTables] = useState<IDataTable[]>(() => {
    return datatable as IDataTable[];
  });

  const [input, setInput] = useState('');

  const [isSearchLike, setIsSearchLike] = useState<boolean>(false);

  const [results, setResults] = useState<IDataTable[]>();

  const handleOnchangeContent = (event: any) => {
    const val = event.target.value.trim();
    setInput(val);
    search(val, isSearchLike);
  };

  const handleOnchangeSearchLike = (event: any) => {
    setIsSearchLike(event.target.checked);
    search(input, event.target.checked);
  };

  const search = (val: string, checked: boolean) => {
    let temp = [...(dataTables || [])];

    if (val != '') {
      temp = temp.filter((x) => {
        x.commentTable = x.commentTable.split('//')[0].trim();
        if (checked) {
          return x.tableName === val || x.commentTable.includes(val);
        }

        return x.tableName === val || x.commentTable === val;
      });

      setResults(temp);
    } else {
      setResults([]);
    }
  };

  return (
    <>
      <PageTitle title="Tìm kiếm"></PageTitle>
      <div className="row mt-2">
        <div className="col-6 col-sm-6 col-md-6">
          <label htmlFor="table-name" className="form-label">
            Nhập tên table hoặc comment của table
          </label>
          <input
            type="text"
            className="form-control"
            id="table-name"
            onChange={handleOnchangeContent}
          />
        </div>
        <div className="col-1 col-sm-1 col-md-1"> </div>
        <div className="col-5 col-sm-5 col-md-5">
          <label htmlFor="table-name" className="form-label">
            Chọn để tìm kiếm gần đúng
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={handleOnchangeSearchLike}
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Search like
            </label>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 mt-2">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th style={{ width: '40px', textAlign: 'center' }}>#</th>
                <th>TABL_NAME</th>
                <th>COMMENT_TABLE</th>
                <th>COLUMN_NAME</th>
                <th>COMMENT_COLUMN</th>
              </tr>
            </thead>
            <tbody>
              {results?.map((data, key) => (
                <tr key={key}>
                  <td></td>
                  <td>{data.tableName}</td>
                  <td>{data.commentTable}</td>
                  <td>{data.columnName}</td>
                  <td>{data.commentColumn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
