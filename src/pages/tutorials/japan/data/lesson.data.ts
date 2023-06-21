const lessonData = [
  '1. Bài 1',
  '2. Bài 2',
  '3. Bài 3',
  '4. Bài 4',
  '5. Bài 5',
  '6. Bài 6',
  '7. Bài 7',
  '8. Bài 8',
  '9. Bài 9',
  '10. Bài 10',
  '11. Bài 11',
  '12. Bài 12',
  '13. Bài 13',
  '14. Bài 14',
  '15. Bài 15',
  '16. Bài 16',
  '17. Bài 17',
  '18. Bài 18',
  '19. Bài 19',
  '20. Bài 20',
  '21. Bài 21',
  '22. Bài 22',
  '23. Bài 23',
  '24. Bài 24',
  '25. Bài 25',
];

const japanLessonData: {
  text: string;
  path: string;
}[] = [];

for (let i = 0; i < lessonData.length; i++) {
  japanLessonData.push({
    text: lessonData[i],
    path: `/tutorial/japan/vocabulary/lesson/${i + 1}`,
  });
}

export default japanLessonData;
