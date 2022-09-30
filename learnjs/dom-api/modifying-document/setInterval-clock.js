// <!-- клик по этой кнопке вызовет clockStart() -->
{
    /* <input type="button" onclick="clockStart()" value="Старт" />; */
}

{
    /* <!-- клик по этой кнопке вызовет clockStop() --> */
}
{
    /* <input type="button" onclick="clockStop()" value="Стоп" />; */
}

<div id="clock">
    <span class="hour">hh</span>:<span class="min">mm</span>:
    <span class="sec">ss</span>
</div>;

let timerId;

function clockStart() {
    timerId = setInterval(update, 1000);
    update();
}

function clockStop() {
    clearInterval(timerId);
    timerId = null;
}

function update() {
    const clock = document.querySelectorAll('span');

    const date = new Date();

    const hours =
        date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    clock[0].textContent = hours;

    const minuts =
        date.getMinuts() < 10 ? '0' + date.getMinuts() : date.getMinuts();
    clock[1].textContent = minuts;

    const seconds =
        date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    clock[2].textContent = seconds;
}