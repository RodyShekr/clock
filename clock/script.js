let music = new Audio("https://opengameart.org/sites/default/files/audio_preview/swing_0.mp3.ogg");

/*time*/
function currentTimeUTC() {
    let clockEl = document.getElementById("clock-utc")
    let date = new Date();
    let hour = date.getUTCHours()
    let min = date.getUTCMinutes()
    let getSec = date.getUTCSeconds()
    hour = correctTime(hour);
    min = correctTime(min);
    getSec = correctTime(getSec);

    clockEl.textContent = `${hour}:${min}:${getSec}`;
    setTimeout(function() { currentTimeUTC() }, 500); // die 500 aktualisiert die Uhrzeit z.B. die Zeit wird jetzt alle halbe Sekunde aktualisiert
}

function correctTime(time) {
    if (time < 10) {
        return "0" + time
    } else {
        return time;
    }
}

currentTimeUTC()


/* --------------------- WORLD CLOCK ------------------------- */

//Berlin, Germany
function currentTimeBerDe() {
    let clockEl = document.getElementById("clock-ber-de")
    let date = new Date();
    let hour = 2 + date.getUTCHours()
    let min = date.getUTCMinutes()
    let getSec = date.getUTCSeconds()
    hour = correctTime(hour);
    min = correctTime(min);
    getSec = correctTime(getSec);

    clockEl.textContent = `${hour}:${min}:${getSec}`;
    // kleiner Wecker. Man muss den Wecker jedoch jedes mal einstellen
    if (clockEl.textContent === "18:00:01") {
        music.play()
    }
    setTimeout(function() { currentTimeBerDe() }, 500); // die 500 aktualisiert die Uhrzeit z.B. die Zeit wird jetzt alle halbe Sekunde aktualisiert
}
currentTimeBerDe()


//Los Angeles, USA 
function currentTimeLaUsa() {
    let clockEl = document.getElementById("clock-la-usa")
    let date = new Date();
    let hour = date.getUTCHours() - 7
    let min = date.getUTCMinutes()
    let getSec = date.getUTCSeconds()
    hour = correctTime(hour);
    min = correctTime(min);
    getSec = correctTime(getSec);

    clockEl.textContent = `${hour}:${min}:${getSec}`;
    setTimeout(function() { currentTimeLaUsa() }, 500); // die 500 aktualisiert die Uhrzeit z.B. die Zeit wird jetzt alle halbe Sekunde aktualisiert
}

currentTimeLaUsa()


//Los Angeles, USA 
function currentTimeNwUsa() {
    let clockEl = document.getElementById("clock-nw-usa")
    let date = new Date();
    let hour = date.getUTCHours() - 4
    let min = date.getUTCMinutes()
    let getSec = date.getUTCSeconds()
    hour = correctTime(hour);
    min = correctTime(min);
    getSec = correctTime(getSec);

    clockEl.textContent = `${hour}:${min}:${getSec}`;
    setTimeout(function() { currentTimeNwUsa() }, 500); // die 500 aktualisiert die Uhrzeit z.B. die Zeit wird jetzt alle halbe Sekunde aktualisiert
}

currentTimeNwUsa()


/*-------------------StopWatch---------------------*/

const timeClock = document.getElementById("timeclock");
let startBtn = document.getElementById("start");
let timeout = null
let ms = 0
let sec = 0
let min = 0
let h = 0

function start(varToStart) {
    if (varToStart) {
        startBtn.disabled = true
    }

    timeout = setTimeout(function() {
        music.play();
        ms = parseInt(ms)
        sec = parseInt(sec)
        min = parseInt(min)
        h = parseInt(h)
        ms++;

        //Uhrzeit

        if (ms === 100) {
            sec = sec + 1
            ms = 0
        }
        if (sec === 60) {
            min = min + 1
            sec = 0
        }
        if (min === 60) {
            h = h + 1
            min = 0
        }

        //0 vor 1 oder 2 ...

        if (ms < 10) {
            ms = "0" + ms
        }
        if (sec < 10) {
            sec = "0" + sec
        }
        if (min < 10) {
            min = "0" + min
        }
        if (h < 10) {
            h = "0" + h
        }
        timeClock.innerHTML = `${h}:${min}:${sec},${ms}`
        start()
    }, 9)
}


function stop() {
    music.pause();
    clearTimeout(timeout);
    startBtn.disabled = false
}



function reset() {
    music.pause()
    clearTimeout(timeout);
    startBtn.disabled = false
    timeClock.innerHTML = "00:00:00,00";
    ms = 0
    sec = 0
    min = 0
    h = 0
}