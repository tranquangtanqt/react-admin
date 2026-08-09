import unitsRaw from 'resources/json/japan/JapanUnit.json';
import bai1 from 'resources/json/japan/N5/Bai_1.json';
import bai2 from 'resources/json/japan/N5/Bai_2.json';
import bai3 from 'resources/json/japan/N5/Bai_3.json';
import bai4 from 'resources/json/japan/N5/Bai_4.json';
import bai5 from 'resources/json/japan/N5/Bai_5.json';
import bai6 from 'resources/json/japan/N5/Bai_6.json';
import bai7 from 'resources/json/japan/N5/Bai_7.json';
import bai8 from 'resources/json/japan/N5/Bai_8.json';
import bai9 from 'resources/json/japan/N5/Bai_9.json';
import bai10 from 'resources/json/japan/N5/Bai_10.json';
import bai11 from 'resources/json/japan/N5/Bai_11.json';
import bai12 from 'resources/json/japan/N5/Bai_12.json';
import bai13 from 'resources/json/japan/N5/Bai_13.json';
import bai14 from 'resources/json/japan/N5/Bai_14.json';
import bai15 from 'resources/json/japan/N5/Bai_15.json';
import bai16 from 'resources/json/japan/N5/Bai_16.json';
import bai17 from 'resources/json/japan/N5/Bai_17.json';
import bai18 from 'resources/json/japan/N5/Bai_18.json';
import bai19 from 'resources/json/japan/N5/Bai_19.json';
import bai20 from 'resources/json/japan/N5/Bai_20.json';
import bai21 from 'resources/json/japan/N5/Bai_21.json';
import bai22 from 'resources/json/japan/N5/Bai_22.json';
import bai23 from 'resources/json/japan/N5/Bai_23.json';
import bai24 from 'resources/json/japan/N5/Bai_24.json';
import bai25 from 'resources/json/japan/N5/Bai_25.json';

export interface VocabularyItem {
  no: number;
  hiragana: string;
  kanji: string;
  romanji: string;
  translate: string;
}

export interface VocabularyCategoryDto {
  id: string;
  name: string;
  description: string;
  disabled?: boolean;
}

export interface UnitMeta {
  level: string;
  unit: string;
  unitName: string;
}

export const VOCABULARY_CATEGORIES: VocabularyCategoryDto[] = [
  {
    id: 'N5',
    name: 'Từ vựng JLPT N5',
    description:
      'Từ vựng theo 25 bài của giáo trình Minna no Nihongo Sơ cấp I.',
  },
  {
    id: 'N4',
    name: 'Từ vựng JLPT N4',
    description: 'Từ vựng trong phạm vi kỳ thi JLPT N4.',
    disabled: true,
  },
  {
    id: 'N3',
    name: 'Từ vựng JLPT N3',
    description: 'Từ vựng trong phạm vi kỳ thi JLPT N3.',
    disabled: true,
  },
];

const UNITS: UnitMeta[] = unitsRaw as UnitMeta[];

const N5_DATA: Record<string, VocabularyItem[]> = {
  unit_1: bai1 as VocabularyItem[],
  unit_2: bai2 as VocabularyItem[],
  unit_3: bai3 as VocabularyItem[],
  unit_4: bai4 as VocabularyItem[],
  unit_5: bai5 as VocabularyItem[],
  unit_6: bai6 as VocabularyItem[],
  unit_7: bai7 as VocabularyItem[],
  unit_8: bai8 as VocabularyItem[],
  unit_9: bai9 as VocabularyItem[],
  unit_10: bai10 as VocabularyItem[],
  unit_11: bai11 as VocabularyItem[],
  unit_12: bai12 as VocabularyItem[],
  unit_13: bai13 as VocabularyItem[],
  unit_14: bai14 as VocabularyItem[],
  unit_15: bai15 as VocabularyItem[],
  unit_16: bai16 as VocabularyItem[],
  unit_17: bai17 as VocabularyItem[],
  unit_18: bai18 as VocabularyItem[],
  unit_19: bai19 as VocabularyItem[],
  unit_20: bai20 as VocabularyItem[],
  unit_21: bai21 as VocabularyItem[],
  unit_22: bai22 as VocabularyItem[],
  unit_23: bai23 as VocabularyItem[],
  unit_24: bai24 as VocabularyItem[],
  unit_25: bai25 as VocabularyItem[],
};

const DATA_BY_LEVEL: Record<string, Record<string, VocabularyItem[]>> = {
  N5: N5_DATA,
};

export function getUnitsByLevel(level: string): UnitMeta[] {
  const levelData = DATA_BY_LEVEL[level];
  if (!levelData) return [];
  return UNITS.filter((u) => u.level === level && levelData[u.unit]);
}

export function getVocabularyByUnit(
  level: string,
  unit: string,
): VocabularyItem[] {
  return DATA_BY_LEVEL[level]?.[unit] ?? [];
}

export interface VocabularyRow extends VocabularyItem {
  id: string;
  unit: string;
  unitName: string;
}

export function getVocabularyByLevel(level: string): VocabularyRow[] {
  return getUnitsByLevel(level).flatMap((u) =>
    getVocabularyByUnit(level, u.unit).map((item, index) => ({
      ...item,
      id: `${u.unit}-${index}`,
      unit: u.unit,
      unitName: u.unitName,
    })),
  );
}

export function getCategoryItemCount(level: string): number {
  return getVocabularyByLevel(level).length;
}
