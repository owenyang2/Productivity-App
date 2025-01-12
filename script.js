const timerText = document.getElementById("timer");
const timerActionButton = document.getElementById("timer-action-button");
const timerResetButton = document.getElementById("timer-reset-button");
const timerSkipButton = document.getElementById("timer-skip-button");
const timerModeText = document.getElementById("timer-mode");

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
let activeID;

function updateTimerText()
{
    timerText.innerText = currTime.sec < 10 ? `${currTime.min}:0${currTime.sec}` : `${currTime.min}:${currTime.sec}`;
}

function decrementTimer(id)
{
    console.log(activeID, id);
    if (paused || activeID !== id)
    {
        return;
    }

    if (currTime.sec === 0)
    {
        if (currTime.min === 0)
        {
            endTimer();
            return;
        }    

        currTime.min--;
        currTime.sec = 59;
    }
    else
    {
        currTime.sec--;
    }

    updateTimerText();
    setTimeout(() => {
        decrementTimer(id);
    }, 1000);
}

function startTimer()
{
    paused = false;
    timerActionButton.innerText = "Pause";
    setTimeout(() => {
        decrementTimer(++activeID);
    }, 1000);
}

function pauseTimer()
{
    paused = true;
    timerActionButton.innerText = "Resume";
}

function resetTimer()
{
    pauseTimer();

    activeID = 0;

    timerActionButton.innerText = "Start";
    timerModeText.innerText = currMode;

    currTime = {...timerPresets[currMode]};
    console.log(currTime);
    updateTimerText();
}

function endTimer()
{
    currMode = currMode === "Pomodoro" ? "Break" : "Pomodoro";
    resetTimer();
}

function init()
{
    activeID = 0;
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
timerSkipButton.addEventListener("click", endTimer);

init();