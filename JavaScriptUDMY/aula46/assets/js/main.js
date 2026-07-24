function getTimeFromSeconds(segundos) {
    const date = new Date(segundos * 1000);
    return date.toLocaleTimeString('pt-PT', {
        hour12: false,
        timeZone: 'GMT'
    })
}

const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const clear = document.querySelector('.clear');


let seconds = 0
let clock;

function startClock() {
    clearInterval(clock);
    timer.style.color = 'black'
    clock = setInterval(function() {
        seconds++;
        timer.innerHTML = getTimeFromSeconds(seconds);
}, 1000)
}

function pauseClock() {
    clearInterval(clock);
    timer.style.color = 'red'
}

function clearClock() {
    clearInterval(clock);
    seconds = 0
    timer.innerHTML = getTimeFromSeconds(seconds)
    timer.style.color = 'black'
}

start.addEventListener('click', function (event) {
    startClock();
});

pause.addEventListener('click', function (event) {
    pauseClock()
});

clear.addEventListener('click', function (event) {
    clearClock()
})