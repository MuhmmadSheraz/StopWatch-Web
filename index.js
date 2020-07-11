var miliseconds1 = 0;
var seconds1 = 0;
var minutes1 = 0
var hours1 = 0;
var interval1;

function tostart() {
    clearInterval(interval1);
    interval1 = setInterval(stopWatch, 10)

}

function toStop1() {
    clearInterval(interval1);
}

function toReset() {
    clearInterval(interval1);
    miliseconds1 = 0;
    seconds1 = 0;
    hours1 = 0;
    minutes1 = 0;
    document.getElementById('show').innerHTML = hours1 + ":" + minutes1 + ":" + seconds1 + ":" + miliseconds1;
}

function stopWatch() {
    miliseconds1++;
    if (miliseconds1 / 100 == 1) {
        miliseconds1 = 0;
        seconds1++;
    }
    if (seconds1 / 60 == 1) {
        seconds1 = 0;
        minutes1++;
    }
    if (minutes1 / 60 == 1) {
        minutes1 = 0;
        hours1++;
    }
    document.getElementById('show').innerHTML = hours1 + ":" + minutes1 + ":" + seconds1 + ":" + miliseconds1;

}