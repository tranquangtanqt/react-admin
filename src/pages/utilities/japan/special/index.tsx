import { Fragment } from 'react';
import { PageTitle } from 'components/modules/page-title';

export const UtilitiesJapanSpecial = () => {
  const tableData = [
    {
      jp: `対応しました。`,
      vn: `Đã đối ứng`,
    },
    {
      jp: `対応したものを送り致します。`,
      vn: `Gửi lại phần đã đối ứng`,
    },
    {
      jp: `送りました。`,
      vn: `Đã gửi`,
    },
    {
      jp: `テーブルAの一覧を表示する。`,
      vn: `Hiển thị danh sách bảng A`,
    },
    {
      jp: `テーブルAにデータを新規追加する。`,
      vn: `Thêm dữ liệu mới vào bảng A.`,
    },
    {
      jp: `テーブルAのデータを更新する。`,
      vn: `Cập nhật dữ liệu của bảng A`,
    },
    {
      jp: `テーブルAのデータを削除る。`,
      vn: `Xóa dữ liệu của table A`,
    },
    {
      jp: `テーブルAの「MM」列を更新する。`,
      vn: `Cập nhật cột MM của bảng A`,
    },
    {
      jp: `Aの合計を取得する。`,
      vn: `Lấy tổng của A`,
    },
    {
      jp: `LOT_NOの値を取得する。`,
      vn: `lấy giá trị của LOT_NO`,
    },
    {
      jp: `旧`,
      vn: `Cũ`,
    },
    {
      jp: `新`,
      vn: `Mới`,
    },
  ];
  return (
    <>
      <PageTitle title="Text Special"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <h5>●→↑↓←～※■</h5>
          <h5>①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳</h5>
          <h5>㉑㉒㉓㉔㉕㉖㉗㉘㉙㉚㉛㉜㉝㉞㉟㊱㊲㊳㊴㊵㊶㊷㊸㊹㊺㊻㊼㊽㊾㊿</h5>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-6 col-md-6">
          <table className="table table-striped table-hover table-bordered table-sm">
            <thead>
              <tr>
                <th>JP</th>
                <th>VN</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((data, key) => (
                <Fragment key={key}>
                  <tr>
                    <td>{data.jp}</td>
                    <td>{data.vn}</td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
