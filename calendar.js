const startDate = new Date(2023, 7, 8)
const finishDate = new Date(2024, 1, 8)

const allPeriod = finishDate - startDate;

const progressEl = document.querySelector('#progress');
const progressNumberEl = document.querySelector('#progressNumber');

function renderProgress() {
  const curProgress = finishDate - new Date();

  const progress = Math.min(((allPeriod - curProgress) * 100 / allPeriod), 100);

  progressEl.style.width = `${progress.toFixed(4)}%`;
  progressNumberEl.innerHTML = `${progress.toFixed(4)}%`;
}

const textareaEl = document.querySelector('#textarea');
function renderTextState() {
  const currentDate = new Date();
  const days = Math.ceil((finishDate - currentDate) / 1000 / 60 / 60 / 24); // s / m / h / d
  const hours = Math.ceil((finishDate - currentDate) / 1000 / 60 / 60 % 24); // s / m / h / d
  const minutes = Math.ceil((finishDate - currentDate) / 1000 / 60 % 60); // s / m / h / d
  const seconds = Math.ceil((finishDate - currentDate) / 1000 % 60); // s / m / h / d
  textareaEl.innerHTML = `Осталось: ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`
}
renderProgress();
renderTextState();
setInterval(() => {
  renderProgress();
  renderTextState();
}, 10000);
