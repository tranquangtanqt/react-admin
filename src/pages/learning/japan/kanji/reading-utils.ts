import { KanjiDto } from './dto';

function toHiragana(value: string): string {
  return value.replace(/[ァ-ヶ]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60),
  );
}

export function normalizeReading(value: string): string {
  return toHiragana(value)
    .replace(/[()（）]/g, '')
    .trim();
}

type Readable = Pick<KanjiDto, 'onyomi' | 'kunyomi'>;

/**
 * Tra cach doc chap nhan duoc cho 1 kanji: gom ca dang day du (co okurigana
 * trong ngoac) va dang rut gon (bo ngoac), chap nhan ca katakana/hiragana.
 */
export function getAcceptableReadings(item: Readable): string[] {
  const rawReadings = [...item.onyomi.split('・'), ...item.kunyomi.split('・')];

  const variants = new Set<string>();
  rawReadings.forEach((reading) => {
    variants.add(normalizeReading(reading));
    variants.add(normalizeReading(reading.split('(')[0]));
  });

  return Array.from(variants).filter((v) => v !== '');
}

export function isReadingCorrect(item: Readable, userInput: string): boolean {
  const normalizedInput = normalizeReading(userInput);
  if (normalizedInput === '') return false;
  return getAcceptableReadings(item).includes(normalizedInput);
}
