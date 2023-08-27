import {getRemainder, getRemainderString} from "./helpers.js";
import {finishDate, startDate} from "./consts.js";

const textareaEl = document.querySelector('#textarea');

export function renderTextState() {
  const leftTime = getRemainder(finishDate)
  const passedTime = getRemainder(startDate, true);

  textareaEl.innerHTML = `Осталось: ${getRemainderString(leftTime)}
Прошло: ${getRemainderString(passedTime)}
  `;
}
