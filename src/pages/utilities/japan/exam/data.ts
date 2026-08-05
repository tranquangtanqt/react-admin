import lesson01 from './n5/lesson-01.json';
import lesson02 from './n5/lesson-02.json';
import lesson03 from './n5/lesson-03.json';
import { ExamCategoryDto, ExamLessonDto, ExamQuestionDto } from './dto';

const TOTAL_LESSONS = 25;

const LESSON_FILES: Partial<Record<number, ExamLessonDto>> = {
  1: lesson01 as ExamLessonDto,
  2: lesson02 as ExamLessonDto,
  3: lesson03 as ExamLessonDto,
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
