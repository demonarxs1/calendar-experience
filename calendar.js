import {allPeriod, startDate} from "./consts.js";
import {renderProgress} from "./progressBar.js";
import {renderTextState} from "./progressText.js";
import {renderSpecialDays, specialDays} from "./specialDays.js";
import {renderDayProgress} from "./dayProgressBar.js";
import {getPercent, setPercent} from "./percentStore.js";
import './quotes.js';
import {renderLiyaState} from "./Liya.js";

const time = allPeriod * (getPercent()) / 100;
const date = startDate.getTime() + time
let showProgressFor = date;

const graphTypeSelector = document.querySelector('#graphType');

specialDays.forEach(it => {
  const option = document.createElement('option');
  option.innerHTML = `${it}%`;
  option.value = it;
  graphTypeSelector.appendChild(option);
})
graphTypeSelector.value = getPercent();

graphTypeSelector.addEventListener('change', (e) => {
  const newValue = +(e.target.value);
  setPercent(newValue);

  const time = allPeriod * (+(e.target.value)) / 100;
  const date = startDate.getTime() + time;
  showProgressFor = date;
});

requestAnimationFrame(() => {
  renderProgress(showProgressFor);
  renderDayProgress()
  renderTextState();
  renderSpecialDays();
  renderLiyaState();
})

setInterval(() => {
  requestAnimationFrame(() => {
    renderProgress(showProgressFor);
    renderDayProgress()
    renderTextState();
    renderSpecialDays();
    renderLiyaState();
  })
}, 1000);
