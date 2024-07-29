let timer;
let isRunning = false;
let elapsedTime = 0;
let startTime;
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const editButton = document.getElementById('edit');
const editPanel = document.getElementById('editPanel');
const setTimeButton = document.getElementById('setTime');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

startButton.addEventListener('click', () => {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 1000);
    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    timerDisplay.textContent = '00:00:00';
    startButton.disabled = false;
    stopButton.disabled = true;
});

editButton.addEventListener('click', () => {
    editPanel.style.display = editPanel.style.display === 'none' ? 'block' : 'none';
});

setTimeButton.addEventListener('click', () => {
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    elapsedTime = (hours * 3600 + minutes * 60 + seconds) * 1000;
    updateTime();
    editPanel.style.display = 'none';
});

function updateTime() {
    elapsedTime = Date.now() - startTime;
    let totalSeconds = Math.floor(elapsedTime / 1000);

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}
