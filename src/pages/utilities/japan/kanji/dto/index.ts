export type JlptLevel = 'N5' | 'N4';

export interface KanjiDto {
  id: number;
  kanji: string;
  onyomi: string;
  kunyomi: string;
  hanViet: string;
  meaning: string;
  example: string;
  jlpt: JlptLevel;
  categoryId: string;
}

export interface KanjiCategoryDto {
  id: string;
  name: string;
  description: string;
  disabled?: boolean;
}

export interface RadicalDto {
  id: number;
  number: number;
  char: string;
  strokes: number;
  hanViet: string;
  meaning: string;
  /** Co duoc dung nhu 1 chu doc lap co nghia trong tieng Nhat hien dai hay khong */
  standalone: boolean;
}
