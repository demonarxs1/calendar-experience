import {getRemainder, getRemainderString} from "./helpers.js";

const dateOfDeath = new Date('2023-09-03T08:30:00+03:00');
const withoutLiyaEl = document.querySelector('#withoutLiya');

export function renderLiyaState() {
  const passedTime = getRemainder(dateOfDeath, true);

  withoutLiyaEl.innerHTML = `Без Лии: ${getRemainderString(passedTime)}`;
}
