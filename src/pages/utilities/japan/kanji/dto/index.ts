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
  /** Bai hoc trong giao trinh Minna no Nihongo So cap I (1-25), 0 neu chua xac dinh */
  lesson: number;
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
  /** Bo thu thuong gap - xuat hien nhieu trong cac Kanji thong dung (Joyo) */
  common: boolean;
}
