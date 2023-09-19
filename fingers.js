const fingersEl = document.querySelector('#fingers');
const fingerDesc = document.querySelector('#fingerDesc');
const firstFingersStateEl = document.querySelector('#fingersState1');
const secondFingersStateEl = document.querySelector('#fingersState2');

fingersEl.addEventListener('touchmove', event => {
    fingerDesc.textContent = JSON.stringify(event);
    if (event.changedTouches.length === 2) {
        firstFingersStateEl.textContent = JSON.stringify(event.changedTouches[0]);
        secondFingersStateEl.textContent = JSON.stringify(event.changedTouches[1]);
    }
})