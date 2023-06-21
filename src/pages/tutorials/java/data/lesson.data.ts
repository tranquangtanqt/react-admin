const lessonData = [
  '1. Type Conversion',
  '2. Getters and Setters',
  '3. Reference Data Types',
  "4. Java Compiler - 'javac'",
  '5. Documenting Java Code',
  '6. Command line Argument Processing',
];

const javaLessonData: {
  text: string;
  path: string;
}[] = [];

for (let i = 0; i < lessonData.length; i++) {
  javaLessonData.push({
    text: lessonData[i],
    path: `/tutorial/java/lesson/${i + 1}`,
  });
}

export default javaLessonData;
