import {allPeriod, startDate} from "./consts.js";
import {getRemainder, getRemainderString} from "./helpers.js";

export const specialDays = [10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100];
const specialEl = document.querySelector('#special');

export function renderSpecialDays() {
  const dates = specialDays.map(it => {
    const time = allPeriod * it / 100;
    const date = startDate.getTime() + time;

    const leftTime = getRemainder(date)
    return `До ${it}% осталось: ${getRemainderString(leftTime)}`
  }).join('\n');

  specialEl.innerHTML = dates;
}
