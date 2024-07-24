let turnText = document.getElementById("turnText");
var turn = 1;
document.getElementById("turnButton").onclick = () => {
    turn+=1;
    turnText.textContent = turn;
}
document.getElementById("previousTurn").onclick = () => {
    turn-=1;
    if (turn < 1) {
        turn = 1;
    }
    turnText.textContent = turn;
}
function HandleLoadTurns() {
    let loadedGame = JSON.parse(localStorage.getItem('save'));
    turn = loadedGame.gameTurn;
    turnText.textContent = turn;
}



