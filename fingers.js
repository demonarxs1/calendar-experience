const fingersEl = document.querySelector('#fingers');
const firstFingersStateEl = document.querySelector('#fingersState1');
const secondFingersStateEl = document.querySelector('#fingersState2');

fingersEl.addEventListener('touchmove', event => {
    if (event.changedTouches.length === 2) {
        firstFingersStateEl.textContent = JSON.parse(event.changedTouches[0])
        secondFingersStateEl.textContent = JSON.parse(event.changedTouches[1])
    }
})