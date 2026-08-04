const KEY_PREFIX = 'japan-exam-mistakes-';

function storageKey(lesson: number) {
  return `${KEY_PREFIX}${lesson}`;
}

export function loadMistakes(lesson: number): number[] {
  const raw = localStorage.getItem(storageKey(lesson));
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function recordAnswer(
  lesson: number,
  questionId: number,
  correct: boolean,
): number[] {
  const current = loadMistakes(lesson);
  const next = correct
    ? current.filter((id) => id !== questionId)
    : current.includes(questionId)
    ? current
    : [...current, questionId];
  localStorage.setItem(storageKey(lesson), JSON.stringify(next));
  return next;
}
