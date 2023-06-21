const lessonData = [
  '1. Data Types',
  '2. Dates, Timestamps, and Intervals',
  '3. Table Creation',
  '4. SELECT',
  '5. Find String Length/Character Length',
  '6. COALESCE',
  '7. INSERT',
  '8. UPDATE',
  '9. JSON Support',
  '10. Aggregate Functions',
  '11. Common Table Expressions (WITH) ',
  '12. Window Functions',
  '13. Recursive queries',
  '14. Programming with PL/pgSQL',
  '15. Inheritance',
  '16. Export PostgreSQL database table header and data to CSV file',
  '17. Triggers and Trigger Functions',
  '18. Event Triggers',
  '19. Role Management',
  '20. Postgres cryptographic functions',
  '21. Comments in PostgreSQL',
  '22. Backup and Restore',
  '23. Backup script for a production DB',
  '24. Accessing Data Programmatically',
  '25. Connect to PostgreSQL from Java',
  '26. PostgreSQL High Availability',
  '27. EXTENSION dblink and postgres_fdw',
  '28. Postgres Tip and Tricks',
];

const postgresLessonData: {
  text: string;
  path: string;
}[] = [];

for (let i = 0; i < lessonData.length; i++) {
  postgresLessonData.push({
    text: lessonData[i],
    path: `/tutorial/postgreSQL/lesson/${i + 1}`,
  });
}

export default postgresLessonData;
