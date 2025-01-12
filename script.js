const timerText = document.getElementById("timer");
const timerActionButton = document.getElementById("timer-action-button");
const timerResetButton = document.getElementById("timer-reset-button");

let timerPresets = {
    Pomodoro: 
    {
        min: 25,
        sec: 0
    },

    Break:
    {
        min: 5,
        sec: 0
    }
};

let currTime;
let currMode;
let paused = true;

function updateTimerText()
{
    timerText.innerText = currTime.sec < 10 ? `${currTime.min}:0${currTime.sec}` : `${currTime.min}:${currTime.sec}`;
}

function decrementTimer()
{
    if (paused)
    {
        return;
    }

    currTime.sec--;

    if (currTime.sec < 0)
    {
        currTime.min--;
        currTime.sec = 59;
    }

    updateTimerText();
    setTimeout(decrementTimer, 1000);
}

function startTimer()
{
    paused = false;
    timerActionButton.innerText = "Pause";
    setTimeout(decrementTimer, 1000);}

function pauseTimer()
{
    paused = true;
    timerActionButton.innerText = "Resume";
}

function resetTimer()
{
    pauseTimer();
    timerActionButton.innerText = "Start";
    currTime = {...startTime};
    updateTimerText();
}

function init()
{
    currMode = "Pomodoro";
    currTime = {...timerPresets[currMode]};
    updateTimerText();
}

timerActionButton.addEventListener("click", () => {
    if (paused) // start/resume
    {
        startTimer();
    }
    else // pause timer
    {
        pauseTimer();
    }
});

timerResetButton.addEventListener("click", resetTimer);

init();