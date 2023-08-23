const firstDate = new Date(2023, 7, 8)
const finishDate = new Date(2024, 1, 8)

const progressEl = document.querySelector('#progress');
const progressNumberEl = document.querySelector('#progressNumber');

const allPeriod = finishDate - firstDate;
const curProgress = finishDate - new Date();

const progress = Math.min(((allPeriod - curProgress) * 100 / allPeriod), 100);

progressEl.style.width = `${progress.toFixed(2)}%`;
progressNumberEl.innerHTML = `${progress.toFixed(2)}%`;
