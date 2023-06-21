const lessonData = [
  '1. Building a walking skeleton API',
  '2. Introduction to Entity Framework',
  '3. Adding Entity Framework',
  '4. Setting donet-ef',
  '5. Adding a new API Controller',
  '6. Creating the Angular application',
  '7. Making HTTP requests in Angular',
  '8. Adding CORS support in the API',
  '9. Updating the user entity and Creating a base API controller',
];

const netAngularLessonData: {
  text: string;
  path: string;
}[] = [];

for (let i = 0; i < lessonData.length; i++) {
  netAngularLessonData.push({
    text: lessonData[i],
    path: `/tutorial/net-angular/lesson/${i + 1}`,
  });
}

export default netAngularLessonData;
