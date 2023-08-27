import {startDate} from "./consts.js";

const progressEl = document.querySelector('#progress');
const progressNumberEl = document.querySelector('#progressNumber');

export function renderProgress(date) {
  const curProgress = date - new Date();
  const period = date - startDate;

  const progress = Math.min(((period - curProgress) * 100 / period), 100);

  progressEl.style.width = `${progress.toFixed(4)}%`;
  progressNumberEl.innerHTML = `${progress.toFixed(6)}%`;
}
