const dayEl = document.querySelector('#dayBar');
const progressEl = document.querySelector('#dayProgress');
const progressNumberEl = document.querySelector('#dayProgressNumber');

const dividers = Array(23).fill(0).map((_, index, array) => {
  const hourDivider = document.createElement('div');
  hourDivider.classList.add('divider');
  hourDivider.style.left = `${((100 / (array.length + 1)) * (index + 1))}%`
  return hourDivider;
})

dayEl.append(...dividers);

export function renderDayProgress() {
  const currentDay = new Date();
  const startDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate());
  const endDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate(), 24);

  const curProgress =  currentDay - startDay;
  const period = endDay - startDay;

  const progress = Math.min((curProgress * 100 / period), 100);

  progressEl.style.width = `${progress.toFixed(4)}%`;
  progressNumberEl.innerHTML = `${progress.toFixed(6)}%`;
}
