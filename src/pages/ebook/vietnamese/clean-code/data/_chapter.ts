const chapter = [
  'Chương 1: Code sạch',
  'Chương 2: Quy tắc đặt tên rõ nghĩa',
  'Chương 3: Cách viết hàm',
  'Chương 4: Comments thế nào cho chuẩn?',
  'Chương 5: Định dạng Code',
  'Chương 6: Đối tượng và cấu trúc dữ liệu',
  'Chương 7: Xử lý lỗi',
  'Chương 8: Ranh giới code',
  'Chương 9: Unit test',
  'Chương 10: Lớp đối tượng',
  'Chương 11: Code sạch cấp hệ thống',
];
const cleanCodeChapter: {
  text: string;
  path: string;
}[] = [];

for (let i = 0; i < chapter.length; i++) {
  cleanCodeChapter.push({
    text: chapter[i],
    path: `/ebook/vietnamese/clean-code/${i + 1}`,
  });
}

export default cleanCodeChapter;
