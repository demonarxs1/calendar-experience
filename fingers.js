const fingersEl = document.querySelector('#fingers');
const firstFingersStateEl = document.querySelector('#fingersState1');
const secondFingersStateEl = document.querySelector('#fingersState2');

fingersEl.addEventListener('touchmove', event => {
    if (event.changedTouches.length === 2) {
        const first = event.changedTouches[0];
        const second = event.changedTouches[1];
        firstFingersStateEl.textContent = `force: ${first.force}, radiusX: ${first.radiusX}, radiusY: ${first.radiusY}, screenX: ${first.screenX}, screenY: ${first.screenY}`;
        secondFingersStateEl.textContent = `force: ${second.force}, radiusX: ${second.radiusX}, radiusY: ${second.radiusY}, screenX: ${second.screenX}, screenY: ${second.screenY}`;
    }
})