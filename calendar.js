import './quotes.js';
import {renderLiyaState} from "./Liya.js";

requestAnimationFrame(() => {
  renderLiyaState();
})

setInterval(() => {
  requestAnimationFrame(() => {
    renderLiyaState();
  })
}, 1000);
