const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    bodyRef: document.querySelector('body'),
};
let intervalId = null;

refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', onStartBtnClick);
refs.btnStop.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    intervalId = setInterval(() => {
        refs.bodyRef.style.backgroundColor = getRandomHexColor();
    }, 1000)
    refs.btnStart.disabled = true;
    refs.btnStop.removeAttribute("disabled");
 
 };
function onStopBtnClick() {
    refs.btnStart.removeAttribute("disabled");
    refs.btnStop.disabled = true;
    clearInterval(intervalId);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}