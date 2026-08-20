const KEY_PREFIX = 'japan-kanji-mastered-';

function storageKey(categoryId: string) {
  return `${KEY_PREFIX}${categoryId}`;
}

export function loadMastered(categoryId: string): number[] {
  const raw = localStorage.getItem(storageKey(categoryId));
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function recordMastered(categoryId: string, itemId: number): number[] {
  const current = loadMastered(categoryId);
  if (current.includes(itemId)) return current;
  const next = [...current, itemId];
  localStorage.setItem(storageKey(categoryId), JSON.stringify(next));
  return next;
}

export function clearMastered(categoryId: string) {
  localStorage.removeItem(storageKey(categoryId));
}
