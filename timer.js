const outerDiv = document.querySelector('.outer-timer');
const innerDiv = document.querySelector('.inner-timer');
const text = document.querySelector('.text');

const waitingDate = new Date('June 11 2024 13:00');
const waitingTime = waitingDate.getTime();

const startDate = new Date('February 17 2024 09:00');
const startTime = startDate.getTime();


const totalTime = waitingTime - startTime;

const WIDTH = 256;

addExtraZero = (x) => {
    return x < 10 ? "0" + x : x;
}

setInterval(() => {
    let d = new Date();
    let currentTime = d.getTime();

    let passedTime = currentTime - startTime;
    let ratio = passedTime / totalTime;  
    let percentage = (ratio * 100).toFixed(6);

    text.innerHTML = `<div class="number-area">${percentage}</div>% <span class="day-text">(${((waitingTime - currentTime) / (1000 * 60 * 60 * 24)).toFixed()} Days Remained)</div>`;

    innerDiv.style.width = `${ratio * WIDTH}px`;

}, 100);
