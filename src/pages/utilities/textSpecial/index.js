import { Col, Divider, Row } from "antd";
import { Fragment } from "react";

const TextSpecial = () => {
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
  ];
  return (
    <>
      <Divider orientation="left">Text Special</Divider>
      <Row justify="start">
        <Col span={24}>
          <h2>●→↑↓←～※■</h2>
          <h2>①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳</h2>
          <h2>㉑㉒㉓㉔㉕㉖㉗㉘㉙㉚㉛㉜㉝㉞㉟㊱㊲㊳㊴㊵㊶㊷㊸㊹㊺㊻㊼㊽㊾㊿</h2>
        </Col>

        <Col span={12} offset={1}>
          <table className="table-custom">
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
        </Col>
      </Row>
    </>
  );
};

export default TextSpecial;
