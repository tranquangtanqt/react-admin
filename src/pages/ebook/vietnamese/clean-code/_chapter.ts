const chapter = [
  'Chương 1: Code sạch',
  'Chương 2: Quy tắc đặt tên rõ nghĩa',
  'Chương 3: Cách viết hàm',
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
