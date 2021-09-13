import colors from './db/colors.json';
import css from './styles.css';


const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]')
}

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onColorSwitch);

refs.stopBtn.addEventListener('click', onStopSwitch);

function onColorSwitch() {
    refs.startBtn.setAttribute('disabled','true');
    console.log('start switching');
    let elementNumber;
    intervalId = setInterval(() => {
        elementNumber = randomIntegerFromInterval(0, 5);
        document.body.style.backgroundColor = colors[elementNumber];
    }, 1000)
};

function onStopSwitch() {
    console.log('stop switching');
    refs.startBtn.removeAttribute('disabled');
    clearInterval(intervalId);
}