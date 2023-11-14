import { PageTitle } from 'components/modules/page-title';
import datatable from './data/table.json';
import { Fragment, useState } from 'react';
import { IDataTable } from './dto/data-table';

export const UtilitieAppSearchTable = () => {
  const [dataTables1] = useState<IDataTable[]>(() => {
    return datatable as IDataTable[];
  });

  const [dataTables2] = useState<IDataTable[]>(() => {
    return datatable as IDataTable[];
  });

  const [searchType, setSearchType] = useState(2);
  const [input1, setInput1] = useState('');
  const [results1, setResults1] = useState<IDataTable[]>();

  const [isSearchLike, setIsSearchLike] = useState<boolean>(false);

  const [input2, setInput2] = useState('');
  const [columns2, setColumns2] = useState('');
  const [results2, setResults2] = useState<IDataTable[]>();

  const handleOnchangeContent1 = (event: any) => {
    const val = event.target.value.trim();
    setInput1(val);
    search1(val, isSearchLike);
  };

  const handleOnchangeSearchLike = (event: any) => {
    setIsSearchLike(event.target.checked);
    search1(input1, event.target.checked);
  };

  const search1 = (input1val: string, checked: boolean) => {
    let temp = [...(dataTables1 || [])];

    if (input1val != '') {
      temp = temp.filter((x) => {
        x.commentTable = x.commentTable.split('//')[0].trim();
        if (checked) {
          return (
            x.tableName === input1val || x.commentTable.includes(input1val)
          );
        }

        return x.tableName === input1val || x.commentTable === input1val;
      });

      setResults1(temp);
    } else {
      setResults1([]);
    }
  };

  const onChangeSearchType = () => {
    if (searchType === 1) {
      setSearchType(2);
    } else if (searchType === 2) {
      setSearchType(1);
    }
  };

  const handleOnchangeContent2 = (event: any) => {
    const val = event.target.value.trim();
    setInput2(val);
  };

  const search2 = () => {
    let columns = columns2.split('\n');
    columns = columns.map((x) => x.split('//')[0].trim());
    let data2 = [...(dataTables1 || [])];
    data2 = data2.filter((x) => {
      return x.tableName === input2;
    });

    const rs: IDataTable[] = [];
    for (let i = 0; i < columns.length; i++) {
      const element = columns[i];
      let dt: IDataTable = {
        id: 0,
        tableName: '',
        commentTable: '',
        columnName: '',
        commentColumn: '',
      };
      const arr = data2.filter((x) => {
        return x.commentColumn.split('//')[0].trim() === element;
      });

      if (arr.length > 0) {
        dt = arr[0];
      } else {
        dt.columnName = element;
      }
      rs.push(dt);
    }

    // data2 = data2.filter((x) => {
    //   x.commentColumn = x.commentColumn.split('//')[0].trim();
    //   return columns.includes(x.commentColumn);
    // });

    if (columns.length > 0 && input2.trim().length > 0) {
      setResults2(rs);
    } else {
      setResults2([]);
    }
  };
  return (
    <>
      <PageTitle title="Tìm kiếm"></PageTitle>
      {searchType === 1 ? (
        <Fragment>
          <div className="row mt-2">
            <div className="col-6 col-sm-6 col-md-6">
              <label htmlFor="table-name" className="form-label">
                Nhập tên table hoặc comment của table
              </label>
              <input
                type="text"
                className="form-control"
                id="table-name"
                onChange={handleOnchangeContent1}
              />
            </div>
            <div className="col-1 col-sm-1 col-md-1"> </div>
            <div className="col-3 col-sm-3 col-md-3">
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
            <div className="col-2 col-sm-2 col-md-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onChangeSearchType}
              >
                Chuyển tiếp
              </button>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12 col-sm-12 col-md-12 mt-2">
              {results1 !== undefined && results1.length > 0 && (
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
                    {results1?.map((data, key) => (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{data.tableName}</td>
                        <td>{data.commentTable}</td>
                        <td>{data.columnName}</td>
                        <td>{data.commentColumn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="row mt-2">
            <div className="col-4 col-sm-4 col-md-4">
              <label htmlFor="table-name" className="form-label">
                Nhập tên table
              </label>
              <input
                type="text"
                className="form-control"
                id="table-name"
                onChange={handleOnchangeContent2}
              />

              <label htmlFor="list2" className="form-label mt-4">
                Nhập danh sách cột (tiếng Nhật)
              </label>
              <textarea
                id="list2"
                className="form-control"
                value={columns2}
                onChange={(e) => setColumns2(e.target.value)}
                style={{ height: 400, width: '100%' }}
              />

              <div className="mt-4">
                <button
                  type="button"
                  className="btn btn-primary me-4"
                  onClick={search2}
                >
                  Tìm kiếm
                </button>

                <button
                  type="button"
                  className="btn btn-primary me-4"
                  onClick={onChangeSearchType}
                >
                  Trở về
                </button>
              </div>
            </div>
            <div className="col-8 col-sm-8 col-md-8">
              {results2 !== undefined && results2.length > 0 && (
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
                    {results2?.map((data, key) => (
                      <tr key={key}>
                        <td className="text-center">{key + 1}</td>
                        <td>{data.tableName}</td>
                        <td>{data.commentTable}</td>
                        <td>{data.columnName}</td>
                        <td>{data.commentColumn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
};
