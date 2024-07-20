class GameManager {
    players = [];
    monsters = [];
    notes_string = "";
    timePlayingSeconds = {
        "var":0,
        "object": null
    }
    gameDay = {
        "var":1,
        "object": null
    }
    gameTurn = {
        "var":1,
        "object": null
    }
    gameTime = {
        "hour": 12,
        "minute": 0,
        "object": null
    }
    constructor() {
        this.timePlayingSeconds.object = document.getElementById("stopwatch");
        this.gameDay.object = document.getElementById("dayText");
        this.gameTurn.object = document.getElementById("turnText");
        this.gameTime.object = document.getElementById("timeText");
    }




    addPlayer() {
        let name = Text(prompt("Enter Player's Name: "));
        let health = new Number(prompt("Enter Player's HP: "));
        let armor = new Number(prompt("Enter Player's Armor Class: "));
        let speed = new Number(prompt("Enter Player's Speed: "));
        let height = new Number(prompt("Enter Player's Height: "));
        let initiative = new Number(prompt("Enter Player's Initiative: "));
        let player = new Player(name, health, armor, speed, height, initiative);
        this.players.push(player);
        this.createPlayerCard(player);


        console.log("Player added!");
    }
    createPlayerCard(player) {
        const template = document.getElementById("player-card-template");
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector(".player-card");

        card.querySelector(".name").textContent = player.name;
        card.querySelector('.level').textContent = player.level;
        card.querySelector('.xp').textContent = player.xp;
        card.querySelector('.player-height').textContent = player.height;
        card.querySelector('.player-health').textContent = player.health;
        card.querySelector('.player-speed').textContent = player.speed;
        card.querySelector('.player-armor').textContent = player.armor;
        card.querySelector('.player-initiative').textContent = player.initiative;
        document.getElementById("players").appendChild(card);
    }








    loadSave() {
        let loadedGame = JSON.parse(localStorage.getItem('save'));
        this = Object.assign(new GameManager(), loadedGame);
        
    }
    saveGame() {
        localStorage.setItem('save', JSON.stringify(this));
    }


}