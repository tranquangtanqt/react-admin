const chapter = [
  'Chương 1: Strategy Pattern (Mẫu chiến lược)',
  'Chương 2: Observer Pattern (Người quan sát)',
  'Chương 3: Decorator Pattern – Đối tượng trang trí',
  // 'Chương 4: Comments thế nào cho chuẩn?',
  // 'Chương 5: Định dạng Code',
  // 'Chương 6: Đối tượng và cấu trúc dữ liệu',
  // 'Chương 7: Xử lý lỗi',
  // 'Chương 8: Ranh giới code',
  // 'Chương 9: Unit test',
  // 'Chương 10: Lớp đối tượng',
  // 'Chương 11: Code sạch cấp hệ thống',
];
const headFirstDesignPatternsChapter: {
  text: string;
  path: string;
}[] = [];

for (let i = 0; i < chapter.length; i++) {
  headFirstDesignPatternsChapter.push({
    text: chapter[i],
    path: `/ebook/vietnamese/head-first-design-patterns/${i + 1}`,
  });
}

export default headFirstDesignPatternsChapter;
