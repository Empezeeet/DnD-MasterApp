let turnText = document.getElementById("turnText");
var turn = 1;
document.getElementById("turnButton").onclick = () => {
    turn+=1;
    turnText.textContent = turn;
}



