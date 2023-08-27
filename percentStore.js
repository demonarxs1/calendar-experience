const KEY = 'PERCENT';

export function getPercent() {
  return parseInt(localStorage.getItem(KEY) ?? '100');
}

export function setPercent(percent) {
  return localStorage.setItem(KEY, percent);
}
