export type ExamQuestionType =
  | 'vocabulary'
  | 'grammar'
  | 'kanji'
  | 'reading'
  | 'dialogue';

export type ExamFrequency = 'high' | 'medium' | 'low';
export type ExamDifficulty = 'easy' | 'normal' | 'hard';

export interface ExamQuestionDto {
  id: number;
  type: ExamQuestionType;
  subtype?: string;
  topic?: string;
  grammar_point?: string;
  vocabulary?: string[];
  kanji?: string[];
  jlpt_section: string;
  frequency: ExamFrequency;
  difficulty: ExamDifficulty;
  estimated_time?: number;
  tags?: string[];
  passage?: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface ExamLessonDto {
  lesson: number;
  level: string;
  source: string;
  questions: ExamQuestionDto[];
}

export interface ExamCategoryDto {
  id: string;
  lesson: number;
  name: string;
  disabled?: boolean;
}
