const KEY_PREFIX = 'japan-vocabulary-mistakes-';

function storageKey(level: string) {
  return `${KEY_PREFIX}${level}`;
}

export function loadMistakes(level: string): string[] {
  const raw = localStorage.getItem(storageKey(level));
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function recordAnswer(
  level: string,
  itemId: string,
  correct: boolean,
): string[] {
  const current = loadMistakes(level);
  let next: string[];
  if (correct) {
    next = current.filter((id) => id !== itemId);
  } else if (current.includes(itemId)) {
    next = current;
  } else {
    next = [...current, itemId];
  }
  localStorage.setItem(storageKey(level), JSON.stringify(next));
  return next;
}
