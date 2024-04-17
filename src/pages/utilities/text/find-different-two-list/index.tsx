import { useState } from 'react';
import { PageTitle } from 'components/modules/page-title';

interface IDiff {
  no: number;
  text: string;
  isSame: boolean;
  isDisplay: boolean;
  className: string;
}

export const UtilitiesTextFindDifferentTwoList = () => {
  const [lefts, setLefts] = useState(``);
  const [rights, setRights] = useState(``);

  const [diffLefts, setDiffLefts] = useState<IDiff[]>([]);
  const [diffRights, setDiffRights] = useState<IDiff[]>([]);

  /**
   * searchAll
   */
  const searchAll = () => {
    setDiffLefts([]);
    setDiffRights([]);

    const diffLeftTemps: IDiff[] = [];
    const diffRightTemps: IDiff[] = [];

    let leftArr = lefts.split('\n');
    leftArr = leftArr.map((x) => x.trim());
    leftArr.forEach((item, index) => {
      diffLeftTemps?.push({
        no: index,
        text: item,
        isSame: false,
        isDisplay: true,
        className: '',
      });
    });

    let rightArr = rights.split('\n');
    rightArr = rightArr.map((x) => x.trim());

    rightArr.forEach((item, index) => {
      diffRightTemps.push({
        no: index,
        text: item,
        isSame: false,
        isDisplay: true,
        className: '',
      });
    });

    diffLeftTemps.forEach((item) => {
      if (diffRightTemps.map((x) => x.text).includes(item.text)) {
        item.isSame = true;
        item.className = 'table-warning cursor-pointer';
      }

      diffRightTemps
        .filter((x) => x.text === item.text)
        .forEach((item) => {
          item.isSame = true;
          item.className = 'table-warning cursor-pointer';
        });
    });

    setDiffLefts(diffLeftTemps);
    setDiffRights(diffRightTemps);
  };

  /**
   * searchSame
   * if isSame: search Same
   * else search Different
   */
  const searchSame = (isSame: boolean) => {
    setDiffLefts([]);
    setDiffRights([]);

    let diffLeftTemps: IDiff[] = [];
    let diffRightTemps: IDiff[] = [];

    let leftArr = lefts.split('\n');
    leftArr = leftArr.map((x) => x.trim());
    leftArr.forEach((item, index) => {
      diffLeftTemps?.push({
        no: index,
        text: item,
        isSame: false,
        isDisplay: true,
        className: '',
      });
    });

    let rightArr = rights.split('\n');
    rightArr = rightArr.map((x) => x.trim());

    rightArr.forEach((item, index) => {
      diffRightTemps.push({
        no: index,
        text: item,
        isSame: false,
        isDisplay: true,
        className: '',
      });
    });

    diffLeftTemps.forEach((item) => {
      if (diffRightTemps.map((x) => x.text).includes(item.text)) {
        item.isSame = true;
        item.className = 'table-warning cursor-pointer';
      }

      diffRightTemps
        .filter((x) => x.text === item.text)
        .forEach((item) => {
          item.isSame = true;
          item.className = 'table-warning cursor-pointer';
        });
    });

    if (isSame) {
      diffLeftTemps = diffLeftTemps.filter((item) => item.isSame);
      diffRightTemps = diffRightTemps.filter((item) => item.isSame);
    } else {
      diffLeftTemps = diffLeftTemps.filter((item) => !item.isSame);
      diffRightTemps = diffRightTemps.filter((item) => !item.isSame);
    }

    setDiffLefts(diffLeftTemps);
    setDiffRights(diffRightTemps);
  };

  /**
   * item same => background: red
   * @param index
   * @returns
   */
  const onItemLeft = (index: number) => {
    const diffLeftTemps = [...(diffLefts || [])];
    if (!diffLeftTemps[index].isSame) {
      return;
    }

    diffLeftTemps.forEach((item) => {
      if (item.isSame) {
        item.className = 'table-warning cursor-pointer';
      }
    });
    diffLeftTemps[index].className = 'table-danger cursor-pointer';

    setDiffLefts(diffLeftTemps);

    const textSame = diffLeftTemps[index].text;
    const diffRightTemps = [...(diffRights || [])];

    diffRightTemps.forEach((item) => {
      if (item.isSame) {
        item.className = 'table-warning cursor-pointer';
      }
    });
    diffRightTemps
      .filter((x) => x.text === textSame)
      .forEach((item) => {
        item.isSame = true;
        item.className = 'table-danger cursor-pointer';
      });
    setDiffRights(diffRightTemps);
  };

  /**
   * item same => background: red
   * @param index
   * @returns
   */
  const onItemRight = (index: number) => {
    const diffRightTemps = [...(diffRights || [])];
    if (!diffRightTemps[index].isSame) {
      return;
    }

    diffRightTemps.forEach((item) => {
      if (item.isSame) {
        item.className = 'table-warning cursor-pointer';
      }
    });
    diffRightTemps[index].className = 'table-danger cursor-pointer';

    setDiffRights(diffRightTemps);

    const textSame = diffRightTemps[index].text;
    const diffLeftTemps = [...(diffLefts || [])];

    diffLeftTemps.forEach((item) => {
      if (item.isSame) {
        item.className = 'table-warning cursor-pointer';
      }
    });
    diffLeftTemps
      .filter((x) => x.text === textSame)
      .forEach((item) => {
        item.isSame = true;
        item.className = 'table-danger cursor-pointer';
      });
    setDiffLefts(diffLeftTemps);
  };

  /**
   *
   */
  const removeEmptyLine = () => {
    setDiffLefts([]);
    setDiffRights([]);

    let leftArr = lefts.split('\n');
    leftArr = leftArr.map((x) => x.trim());
    leftArr = leftArr.filter((x) => x !== '');

    let rightArr = rights.split('\n');
    rightArr = rightArr.map((x) => x.trim());
    rightArr = rightArr.filter((x) => x !== '');

    setLefts(leftArr.join('\n'));
    setRights(rightArr.join('\n'));
  };

  /**
   *
   */
  const orderByTwoList = () => {
    setDiffLefts([]);
    setDiffRights([]);
    let leftArr = lefts.split('\n');
    leftArr = leftArr.map((x) => x.trim());
    leftArr.sort();

    let rightArr = rights.split('\n');
    rightArr = rightArr.map((x) => x.trim());
    rightArr.sort();

    setLefts(leftArr.join('\n'));
    setRights(rightArr.join('\n'));
  };

  return (
    <>
      <PageTitle title="Finding the Differences Between Two List"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-4 col-md-4">
          <label htmlFor="list1" className="form-label">
            List 1
          </label>
          <textarea
            id="list1"
            className="form-control"
            value={lefts}
            onChange={(e) => setLefts(e.target.value)}
            style={{ height: 400, width: '100%' }}
          />
        </div>
        <div className="col-12 col-sm-4 col-md-4">
          <label htmlFor="list2" className="form-label">
            List 2
          </label>
          <textarea
            id="list2"
            className="form-control"
            value={rights}
            onChange={(e) => setRights(e.target.value)}
            style={{ height: 400, width: '100%' }}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => searchAll()}
          >
            Search
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm m-l-20"
            onClick={() => searchSame(true)}
          >
            Same
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm m-l-20"
            onClick={() => searchSame(false)}
          >
            Different
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm m-l-20 float-end"
            onClick={() => orderByTwoList()}
          >
            Order By Two List
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm m-l-20 float-end"
            onClick={() => removeEmptyLine()}
          >
            Remove Empty Lines
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          {diffLefts.length >= diffRights.length ? (
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th style={{ width: '40px', textAlign: 'center' }}>#</th>
                  <th>LEFT</th>
                  <th>RIGHT</th>
                </tr>
              </thead>
              <tbody>
                {diffLefts.map((item, key) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td
                      className={item.className}
                      onClick={() => onItemLeft(key)}
                    >
                      {item.text}
                    </td>
                    <td
                      className={diffRights[key]?.className}
                      onClick={() => onItemRight(key)}
                    >
                      {diffRights[key]?.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th style={{ width: '40px', textAlign: 'center' }}>#</th>
                  <th>LEFT</th>
                  <th>RIGHT</th>
                </tr>
              </thead>
              <tbody>
                {diffRights.map((item, key) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td
                      className={diffLefts[key]?.className}
                      onClick={() => onItemLeft(key)}
                    >
                      {diffLefts[key]?.text}
                    </td>
                    <td
                      className={item.className}
                      onClick={() => onItemRight(key)}
                    >
                      {item.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
