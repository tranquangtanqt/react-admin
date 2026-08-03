const KEY_PREFIX = 'japan-kanji-mistakes-';

function storageKey(categoryId: string) {
  return `${KEY_PREFIX}${categoryId}`;
}

export function loadMistakes(categoryId: string): number[] {
  const raw = localStorage.getItem(storageKey(categoryId));
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function recordAnswer(
  categoryId: string,
  itemId: number,
  correct: boolean,
): number[] {
  const current = loadMistakes(categoryId);
  const next = correct
    ? current.filter((id) => id !== itemId)
    : current.includes(itemId)
    ? current
    : [...current, itemId];
  localStorage.setItem(storageKey(categoryId), JSON.stringify(next));
  return next;
}
