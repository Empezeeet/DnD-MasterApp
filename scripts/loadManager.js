function ClearCards() {
    let cards = document.querySelectorAll('.player-card');
    cards.forEach(card => card.remove());

}





function load() {
    let loadedGame = JSON.parse(localStorage.getItem('save'));  
    let players = loadedGame.players;
    let monsters = loadedGame.monsters;
    let timePlayingSeconds = loadedGame.timePlayingSeconds;
    let gameDay = loadedGame.gameDay;
    let gameTurn = loadedGame.gameTurn;
    let gameDayTimeHour = loadedGame.gameDayTimeHour;
    let gameDayTimeMinute = loadedGame.gameDayTimeMinute;
    console.log(players.lenght);
    ClearCards();
    ClearMonsters();
    ClearPlayers();
    
    HandleLoadMonsters();
    HandleLoadPlayers();
    HandleLoadTurns();
    ClockHandleLoad();
    HandleLoadTimePlaying();
    

    alert("Game loaded!");
}
document.getElementById("load").addEventListener('click', load);

