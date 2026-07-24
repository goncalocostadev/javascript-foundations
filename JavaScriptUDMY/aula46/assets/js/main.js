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


document.addEventListener('click', function (event) {
    const element = event.target;
    if (element.classList.contains('start')) {
        clearInterval(clock);
        timer.style.color = 'black'
        clock = setInterval(function () {
            seconds++;
            timer.innerHTML = getTimeFromSeconds(seconds);
        }, 1000)
    }

    if (element.classList.contains('clear')) {
        clearInterval(clock);
        seconds = 0
        timer.innerHTML = getTimeFromSeconds(seconds)
        timer.style.color = 'black'
    }

    if (element.classList.contains('pause')) {
        clearInterval(clock);
        timer.style.color = 'red'
    }

})
