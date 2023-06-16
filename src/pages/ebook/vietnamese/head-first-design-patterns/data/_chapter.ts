const chapter = [
  'Chương 1: Strategy Pattern (Mẫu chiến lược)',
  'Chương 2: Observer Pattern (Người quan sát)',
  'Chương 3: Decorator Pattern – Đối tượng trang trí',
  'Chương 4: Factory Pattern & Abstract Factory Pattern (Phần 1)',
  'Chương 4: Factory Pattern & Abstract Factory Pattern (Phần 2)',
  'Chương 5: Singleton Pattern – Chỉ 1 cho mỗi loại',
  'Chương 6: Command Pattern – Đóng gói yêu cầu',
  'Chương 7: Adapter Pattern và Facade Pattern – Trở nên thích nghi (P1)',
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
