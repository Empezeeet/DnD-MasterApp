let stopwatch = document.getElementById('stopwatch');
let startTime = new Date().getTime();
var currentTime = new Date().getTime();
function UpdateTimer() {
    currentTime = new Date().getTime();
    let elapsedTime = Math.floor((currentTime - startTime) / 1000);

    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    stopwatch.textContent = `${hours.toString()}h ${minutes.toString()}min ${seconds.toString().padStart(2, '0')}s`;


}
function HandleLoadTimePlaying() {
    let loadedGame = JSON.parse(localStorage.getItem('save'));
    startTime = new Date().getTime() - loadedGame.timePlayingSeconds;
    UpdateTimer();
}

UpdateTimer();
setInterval(UpdateTimer, 1000);
