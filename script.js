
let time
let startMinutes
let countdownEl
let mode = 0 //0 is dark
 
function selectTimer(){
    var select = document.getElementById("select-menu");
    var value = select.value;
    if(value == '25min'){
        document.getElementById("timer-25").classList.remove("d-none");
        document.getElementById("timer-50").classList.add("d-none");
        document.getElementById("timer-90").classList.add("d-none");
        document.getElementById("start").classList.remove("d-none");
    }
    else if(value == '50min'){
        document.getElementById("timer-50").classList.remove("d-none");
        document.getElementById("timer-25").classList.add("d-none");
        document.getElementById("timer-90").classList.add("d-none");
        document.getElementById("start").classList.remove("d-none");
    }
    else if(value == '90min'){
        document.getElementById("timer-90").classList.remove("d-none");
        document.getElementById("timer-50").classList.add("d-none");
        document.getElementById("timer-25").classList.add("d-none");
        document.getElementById("start").classList.remove("d-none");

    }
}

function start() {
    document.getElementById("main").classList.add("d-none");
    document.getElementById("start").classList.add("d-none");
    startTimer();
}

function startTimer() {
    let select = document.getElementById("select-menu");
    let value = select.value;
    if (value == '25min') {
        startMinutes = 25
        countdownEl = document.getElementById('timer-25-val');
    }
    else if (value == '50min') {
        startMinutes = 50
        countdownEl = document.getElementById('timer-50-val');
    }
    else if (value == '90min') {
        startMinutes = 90
        countdownEl = document.getElementById('timer-90-val');
    }
    time = startMinutes * 60
    timeInterval = setInterval(updateTime, 1000);
    document.getElementById("end").classList.remove("d-none")
    document.getElementById("restart").classList.remove("d-none")
    document.getElementById('timer-quote').classList.remove('d-none');
}

function updateTime() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;
    if (time < 0) { //stop the setInterval whe time = 0 for avoid negative time
        clearInterval(timeInterval);
    }
}

function endTimer(){
    clearInterval(timeInterval);
    countdownEl.innerHTML = `00 : 00`;
    setTimeout(imageCall, 1000)
}

function restartTimer(){
    clearInterval(timeInterval)
    startTimer();
}

function imageCall(){
    countdownEl.classList.add("d-none")
    document.getElementById("end").classList.add("d-none")
    document.getElementById("restart").classList.add("d-none")
    document.getElementById("reward-message").classList.remove("d-none")
    document.getElementById('story-image').classList.remove("d-none")
    document.getElementById('grids').classList.remove("d-none")
}

function modeChange(){
    if(mode == 0){  //if dark
        document.getElementById("body").classList.add("light")
        document.getElementById("body").classList.remove("dark")
        document.getElementById("mode-light").classList.add("d-none")  //sun icon
        document.getElementById("mode-dark").classList.remove("d-none")  //moon icon
        mode = 1;
    }
    else{
        document.getElementById("body").classList.add("dark")
        document.getElementById("body").classList.remove("light")
        document.getElementById("mode-light").classList.remove("d-none")  //sun icon
        document.getElementById("mode-dark").classList.add("d-none")  //moon icon
        mode = 0
    }
}