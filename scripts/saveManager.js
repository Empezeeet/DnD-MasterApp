class Game {
    timePlayingSeconds = 0;
    gameDay = 1;
    gameTurn = 1;
    gameDayTimeHour = 12;
    gameDayTimeMinute = 0;

    players = [];
    monsters = [];
    notes_string = "";

    // constructor for the game. requires all properties to be passed in
    constructor(timePlayingSeconds, gameDay, gameTurn, gameDayTimeHour, gameDayTimeMinute, players, monsters, notes) {
        this.timePlayingSeconds = timePlayingSeconds;
 
        this.gameDay = gameDay;
        this.gameTurn = gameTurn;
        this.gameDayTimeHour = gameDayTimeHour;
        this.gameDayTimeMinute = gameDayTimeMinute;
        this.players = players;
        this.monsters = monsters;
        this.notes_string = notes;
    }
    
}





function save() {
    let monstersArray = monsters;
    let playersArray = players;
    let gamePlayingTime = currentTime - startTime;
    let turnCount = turn;
    let gameDay = day;
    let gameDayTime = hours;
    let gameDayMinutes = minutes;
    let notes_string = notebookContent;

    let game = new Game(gamePlayingTime, gameDay, turnCount, gameDayTime, gameDayMinutes, playersArray, monstersArray, notes_string);
    
    localStorage.setItem('save', JSON.stringify(game));
    alert("Game saved!");
}
document.getElementById("save").addEventListener('click', save);

