const fingersEl = document.querySelector('#fingers');
const fingersStateEl = document.querySelector('#fingersState');

fingersEl.addEventListener('touchmove', event => {
    fingersStateEl.innerHTML = Array.from(event.changedTouches).map(it => `Id: ${it.identifier}, force: ${it.force}, radiusX: ${it.radiusX}, radiusY: ${it.radiusY}, screenX: ${it.screenX}, screenY: ${it.screenY})`).join('; ');
})