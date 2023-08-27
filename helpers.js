export function getRemainder(date, invert) {
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

export function getRemainderString(time) {
  return `${time.days} дней, ${time.hours} часов, ${time.minutes} минут, ${time.seconds} секунд;${time.isFinished ? '✅' : ''}`
}
