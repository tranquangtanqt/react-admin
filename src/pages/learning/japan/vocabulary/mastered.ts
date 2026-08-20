const KEY_PREFIX = 'japan-vocabulary-mastered-';

function storageKey(level: string) {
  return `${KEY_PREFIX}${level}`;
}

export function loadMastered(level: string): string[] {
  const raw = localStorage.getItem(storageKey(level));
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function recordMastered(level: string, itemId: string): string[] {
  const current = loadMastered(level);
  if (current.includes(itemId)) return current;
  const next = [...current, itemId];
  localStorage.setItem(storageKey(level), JSON.stringify(next));
  return next;
}

export function clearMastered(level: string) {
  localStorage.removeItem(storageKey(level));
}
