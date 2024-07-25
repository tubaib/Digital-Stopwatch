let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;

const display = document.querySelector('.display');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTimer, 10); 
        startButton.textContent = 'Pause';
    } else {
        running = false;
        clearInterval(timer);
        startButton.textContent = 'Resume';
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
    startButton.textContent = 'Start';
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    startButton.textContent = 'Start';
}

function updateTimer() {
    milliseconds += 1;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds)}`;
}

function padNumber(number) {
    return number < 10 ? '0' + number : number;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
