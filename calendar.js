const startDate = new Date(2023, 7, 8)
const finishDate = new Date(2024, 1, 8)

const allPeriod = finishDate - startDate;

const progressEl = document.querySelector('#progress');
const progressNumberEl = document.querySelector('#progressNumber');

function renderProgress() {
  const curProgress = finishDate - new Date();

  const progress = Math.min(((allPeriod - curProgress) * 100 / allPeriod), 100);

  progressEl.style.width = `${progress.toFixed(4)}%`;
  progressNumberEl.innerHTML = `${progress.toFixed(6)}%`;
}

const textareaEl = document.querySelector('#textarea');
function renderTextState() {
  const currentDate = new Date();
  const daysLeft = Math.ceil((finishDate - currentDate) / 1000 / 60 / 60 / 24); // s / m / h / d
  const hoursLeft = Math.ceil((finishDate - currentDate) / 1000 / 60 / 60 % 24); // s / m / h / d
  const minutesLeft = Math.ceil((finishDate - currentDate) / 1000 / 60 % 60); // s / m / h / d
  const secondsLeft = Math.ceil((finishDate - currentDate) / 1000 % 60); // s / m / h / d

  const daysPassed = Math.ceil((currentDate - startDate) / 1000 / 60 / 60 / 24); // s / m / h / d
  const hoursPassed = Math.ceil((currentDate - startDate) / 1000 / 60 / 60 % 24); // s / m / h / d
  const minutesPassed = Math.ceil((currentDate - startDate) / 1000 / 60 % 60); // s / m / h / d
  const secondsPassed = Math.ceil((currentDate - startDate) / 1000 % 60); // s / m / h / d
  textareaEl.innerHTML = `Осталось: ${daysLeft} дней, ${hoursLeft} часов, ${minutesLeft} минут, ${secondsLeft} секунд;
Прошло: ${daysPassed} дней, ${hoursPassed} часов, ${minutesPassed} минут, ${secondsPassed} секунд;
  `;
}

const specialDays = [10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100];
const specialEl = document.querySelector('#special');

function renderSpecialDays() {
  const dates = specialDays.map(it => {
    const time = allPeriod * it / 100;
    const date = startDate.getTime() + time;

    const currentDate = new Date();

    const daysLeft = Math.ceil((date - currentDate) / 1000 / 60 / 60 / 24); // s / m / h / d
    const hoursLeft = Math.ceil((date - currentDate) / 1000 / 60 / 60 % 24); // s / m / h / d
    const minutesLeft = Math.ceil((date - currentDate) / 1000 / 60 % 60); // s / m / h / d
    const secondsLeft = Math.ceil((date - currentDate) / 1000 % 60); // s / m / h / d
    return `До ${it}% осталось: ${daysLeft} дней, ${hoursLeft} часов, ${minutesLeft} минут, ${secondsLeft} секунд;`
  }).join('\n');

  specialEl.innerHTML = dates;
}

renderProgress();
renderTextState();
renderSpecialDays();
setInterval(() => {
  renderProgress();
  renderTextState();
  renderSpecialDays();
}, 1000);
