import './quotes.js';
import './prime.js';
import {renderLiyaState} from "./Liya.js";

requestAnimationFrame(() => {
  renderLiyaState();
})

setInterval(() => {
  requestAnimationFrame(() => {
    renderLiyaState();
  })
}, 1000);
