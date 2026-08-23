import lesson01 from './n5/lesson-01.json';
import lesson02 from './n5/lesson-02.json';
import lesson03 from './n5/lesson-03.json';
import lesson04 from './n5/lesson-04.json';
import lesson05 from './n5/lesson-05.json';
import lesson06 from './n5/lesson-06.json';
import lesson07 from './n5/lesson-07.json';
import lesson08 from './n5/lesson-08.json';
import lesson09 from './n5/lesson-09.json';
import lesson10 from './n5/lesson-10.json';
import lesson11 from './n5/lesson-11.json';
import lesson12 from './n5/lesson-12.json';
import lesson13 from './n5/lesson-13.json';
import lesson14 from './n5/lesson-14.json';
import lesson15 from './n5/lesson-15.json';
import { ExamCategoryDto, ExamLessonDto, ExamQuestionDto } from './dto';

const TOTAL_LESSONS = 25;

const LESSON_FILES: Partial<Record<number, ExamLessonDto>> = {
  1: lesson01 as ExamLessonDto,
  2: lesson02 as ExamLessonDto,
  3: lesson03 as ExamLessonDto,
  4: lesson04 as ExamLessonDto,
  5: lesson05 as ExamLessonDto,
  6: lesson06 as ExamLessonDto,
  7: lesson07 as ExamLessonDto,
  8: lesson08 as ExamLessonDto,
  9: lesson09 as ExamLessonDto,
  10: lesson10 as ExamLessonDto,
  11: lesson11 as ExamLessonDto,
  12: lesson12 as ExamLessonDto,
  13: lesson13 as ExamLessonDto,
  14: lesson14 as ExamLessonDto,
  15: lesson15 as ExamLessonDto,
};

export const EXAM_CATEGORIES: ExamCategoryDto[] = Array.from(
  { length: TOTAL_LESSONS },
  (_, index) => {
    const lesson = index + 1;
    return {
      id: String(lesson),
      lesson,
      name: `Bài ${lesson}`,
      disabled: !LESSON_FILES[lesson],
    };
  },
);

export function getQuestionsByLesson(lesson: number): ExamQuestionDto[] {
  return LESSON_FILES[lesson]?.questions ?? [];
}

export function getQuestionTypeCounts(lesson: number): Record<string, number> {
  const questions = getQuestionsByLesson(lesson);
  return questions.reduce<Record<string, number>>((acc, q) => {
    acc[q.type] = (acc[q.type] ?? 0) + 1;
    return acc;
  }, {});
}
