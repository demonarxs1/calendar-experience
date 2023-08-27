import {allPeriod, finishDate, startDate} from "./consts.js";
import {renderProgress} from "./progressBar.js";
import {renderTextState} from "./progressText.js";
import {renderSpecialDays, specialDays} from "./specialDays.js";
import {renderDayProgress} from "./dayProgressBar.js";

let showProgressFor = finishDate;

const graphTypeSelector = document.querySelector('#graphType');

specialDays.forEach(it => {
  const option = document.createElement('option');
  option.innerHTML = `${it}%`;
  option.value = it;
  graphTypeSelector.appendChild(option);
})
graphTypeSelector.value = 100;

graphTypeSelector.addEventListener('change', (e) => {
  const time = allPeriod * (+(e.target.value)) / 100;
  const date = startDate.getTime() + time;
  showProgressFor = date;
});

requestAnimationFrame(() => {
  renderProgress(showProgressFor);
  renderDayProgress()
  renderTextState();
  renderSpecialDays();
})

setInterval(() => {
  requestAnimationFrame(() => {
    renderProgress(showProgressFor);
    renderDayProgress()
    renderTextState();
    renderSpecialDays();
  })
}, 1000);
