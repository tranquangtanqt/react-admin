const lessonData = ['1. Getting started with C# Language', '2. Literals'];

const cSharpLessonData: {
  text: string;
  path: string;
}[] = [];

for (let i = 0; i < lessonData.length; i++) {
  cSharpLessonData.push({
    text: lessonData[i],
    path: `/tutorial/c-sharp/lesson/${i + 1}`,
  });
}

export default cSharpLessonData;
