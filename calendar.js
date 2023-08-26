const startDate = new Date(2023, 7, 8)
const finishDate = new Date(2024, 1, 8)

const allPeriod = finishDate - startDate;

const progressEl = document.querySelector('#progress');
const progressNumberEl = document.querySelector('#progressNumber');

function getRemainder(date, invert) {
  const currentDate = new Date();

  const timeLeft = Math.max(invert ? (currentDate - date) : (date - currentDate), 0);

  const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24); // s / m / h / d
  const hours = Math.floor(timeLeft / 1000 / 60 / 60 % 24); // s / m / h / d
  const minutes = Math.floor(timeLeft / 1000 / 60 % 60); // s / m / h / d
  const seconds = Math.floor(timeLeft / 1000 % 60); // s / m / h / d

  return {
    days,
    hours,
    minutes,
    seconds,
    isFinished: timeLeft === 0,
  }
}

function getRemainderString(time) {
  return `${time.days} дней, ${time.hours} часов, ${time.minutes} минут, ${time.seconds} секунд;${time.isFinished ? '✅' : ''}`
}

function renderProgress(date) {
  const curProgress = date - new Date();
  const period = date - startDate;

  const progress = Math.min(((period - curProgress) * 100 / period), 100);

  progressEl.style.width = `${progress.toFixed(4)}%`;
  progressNumberEl.innerHTML = `${progress.toFixed(6)}%`;
}

const textareaEl = document.querySelector('#textarea');

function renderTextState() {
  const leftTime = getRemainder(finishDate)
  const passedTime = getRemainder(startDate, true);

  textareaEl.innerHTML = `Осталось: ${getRemainderString(leftTime)}
Прошло: ${getRemainderString(passedTime)}
  `;
}

const specialDays = [10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100];
const specialEl = document.querySelector('#special');

function renderSpecialDays() {
  const dates = specialDays.map(it => {
    const time = allPeriod * it / 100;
    const date = startDate.getTime() + time;

    const leftTime = getRemainder(date)
    return `До ${it}% осталось: ${getRemainderString(leftTime)}`
  }).join('\n');

  specialEl.innerHTML = dates;
}

renderProgress(finishDate);
renderTextState();
renderSpecialDays();
setInterval(() => {
  renderProgress(finishDate);
  renderTextState();
  renderSpecialDays();
}, 1000);
