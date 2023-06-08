const chapter = ['Chương 1: Code sạch', 'Chương 2: Quy tắc đặt tên rõ nghĩa'];
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
