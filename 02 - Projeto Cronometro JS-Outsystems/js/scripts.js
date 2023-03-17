
let interval
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPaused 


function start()
    {
    isPaused = false
    clearInterval(interval);
    interval = setInterval(startTimer,10);
    }

function stop()
    {
    isPaused = true
    clearInterval(interval)
    document.getElementById('btnPause').style.display = "none"
    document.getElementById('btnResume').style.display = "block"
    }


function reset()
    {
    isPaused = true
    clearInterval(interval)
    let minutes = 0
    let seconds = 0
    let milliseconds = 0

    document.getElementById('btnStart').style.display = "block"
    document.getElementById('btnPause').style.display = "none"
    document.getElementById('btnResume').style.display = "none"
    
    document.querySelector(".minutes").innerHTML = formatTimer(minutes)
    document.querySelector(".secunds").innerHTML = formatTimer(seconds)
    document.querySelector(".millisecunds").innerHTML = formatTimer(milliseconds)
        
    }
function startTimer() 
    {
    if (!isPaused) {
    milliseconds += 10
    if (milliseconds === 1000) {
    seconds++
    milliseconds = 0
    }
    if (seconds === 60) {
    minutes++
    seconds = 0
    }
    //Trocando o valor dos elementos
    document.querySelector(".minutes").innerHTML = formatTimer(minutes)
    document.querySelector(".secunds").innerHTML = formatTimer(seconds)
    document.querySelector(".millisecunds").innerHTML = formatTimer(milliseconds)
    document.getElementById('btnStart').style.display = "none"
    document.getElementById('btnPause').style.display = "block"
    }
    }

function formatTimer(time){
    return time < 10 ? `0${time}`: time
}

function formatMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3,"0") : time
}
