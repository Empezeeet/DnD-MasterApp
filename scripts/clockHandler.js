



var hours = 12;
var minutes = 0;
var day = 1;
let timeText = document.getElementById("timeText");
let dayText = document.getElementById("dayText");
function updateTimeText() {
    timeText.textContent = `${hours%24}:${minutes < 10 ? `0` + minutes : minutes}`;
}
function updateDayText() {
    dayText.textContent = day;
}
function ClockHandleLoad() {
    let loadedGame = JSON.parse(localStorage.getItem('save'));
    hours = loadedGame.gameDayTimeHour;
    minutes = loadedGame.gameDayTimeMinute;
    day = loadedGame.gameDay;
    updateTimeText();
    updateDayText();

}


document.getElementById("minus-hour").onclick = () => {
    hours -= 1;
    if (hours <= 0) {
        hours=24;
        day -= 1;
        if (day < 0) day = 0;
        
    }

    updateTimeText();
    updateDayText();
}
document.getElementById("minus-15minutes").onclick = () => {
    minutes -= 15;
    if (minutes < 0) {
        hours -= 1;
        if (hours <= 0) {
            hours = 24;
            day -= 1;
            if (day < 0) day=0;
        }
        minutes = 45;
    }
    updateDayText();
    updateTimeText();
}
document.getElementById("plus-15minutes").onclick = () => {
    minutes += 15;
    
    if (minutes >= 60) {
        hours += 1;
        if (hours >= 24) {
            day += 1;
            hours = 0;
            
        }
        minutes = 0;
    }
    updateDayText();
    updateTimeText();
}
document.getElementById("plus-hour").onclick = () => {
    hours += 1;
    if (hours >= 24) {
        hours = 0;
        day += 1;
    }
    updateDayText();
    updateTimeText();
}



