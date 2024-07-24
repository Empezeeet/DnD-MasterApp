class GameManager {
    players = [];
    monsters = [];
    notes_string = "";
    timePlayingSeconds = {
        "start-time": 0,
        "var":0,
        "object": null,
        "interval":null
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
    // optional values for the game in constructor


    constructor(
        timePlayingSeconds=this.timePlayingSeconds, 
        gameDay=this.gameDay, gameTurn=this.gameTurn,
         gameTime=this.gameTime, players=this.players, 
         monsters=this.monsters, notes=this.notes_string
    ) {

        this.players = players;
        this.monsters = monsters;
        this.notes_string = notes;
        this.timePlayingSeconds = timePlayingSeconds;
        this.gameDay = gameDay;
        this.gameTurn = gameTurn;
        this.gameTime = gameTime;
    


        this.timePlayingSeconds.object = document.getElementById("stopwatch");
        this.timePlayingSeconds.var = new Date().getTime();
        this.gameDay.object = document.getElementById("dayText");
        this.gameTurn.object = document.getElementById("turnText");
        this.gameTime.object = document.getElementById("timeText");

        this.addPlayer = this.addPlayer.bind(this);
        this.addMonster = this.addMonster.bind(this);
        this.saveGame = this.saveGame.bind(this);
        this.loadSave = this.loadSave.bind(this);
        this.copyGame = this.copyGame.bind(this);
        this.UpdateTimer = this.UpdateTimer.bind(this);
        this.bindControlButtons = this.bindControlButtons.bind(this);

        this.removeHour = this.removeHour.bind(this);
        this.addHour = this.addHour.bind(this);
        this.remove15Minutes = this.remove15Minutes.bind(this);
        this.add15Minutes = this.add15Minutes.bind(this);




        try {
            clearInterval(this.timePlayingSeconds.interval);
        } catch {
            console.log("No interval to clear @ constructor");
        }
        this.UpdateTimer();
        this.timePlayingSeconds.interval = setInterval(this.UpdateTimer.bind(this), 1000);

        this.bindControlButtons();




    }
    bindControlButtons() {

        // notebook
        



    }
    UpdateTimer() {
        var currentTime = new Date().getTime();
        let elapsedTime = Math.floor((currentTime - this.timePlayingSeconds.var) / 1000);
        let hours = Math.floor(elapsedTime / 3600);
        let minutes = Math.floor((elapsedTime % 3600) / 60);
        let seconds = elapsedTime % 60;
        document.getElementById("stopwatch").textContent = `${hours.toString()}h ${minutes.toString()}min ${seconds.toString().padStart(2, '0')}s`;
    }



    clearMonsters() {
        this.monsters = [];
    }
    copyMonster(monster) {
        let copy = new Monster(this.monsters.length+1, monster.hp, monster.height, monster.speed, monster.damage, monster.difficulty_class, monster.level);
        this.monsters.push(copy);
        this.createMonsterCard(copy);
    }
    removeMonster(monster) {
        let index = this.monsters.indexOf(monster);
        if (index == -1) return;

        this.monsters.splice(index, 1);
        monster.card.remove();
    }
    addMonster() {
        let hp = new Number(prompt("Enter Monster's HP: "));
        let height = new Text(prompt("Enter Monster's Height: "));
        let speed = new Number(prompt("Enter Monster's Speed: "));
        let damage = new Number(prompt("Enter Monster's Damage: "));
        let dc = new Number(prompt("Enter Monster's Difficulty Class: "));
        let level = new Number(prompt("Enter Monster's Level: "));
        let monster = new Monster(this.monsters.length+1, hp, height.textContent, speed, damage, dc, level);
        monster.linkCard(this.createMonsterCard(monster));

        this.monsters.push(monster);
    }
    createMonsterCard(monster) {
        const template = document.getElementById("monster-card-template");
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector(".monster-card");

        card.querySelector(".name").textContent = "Monster " + monster.id;
        card.querySelector('.level').textContent = monster.level;
        card.querySelector('.height').textContent = monster.height;
        card.querySelector('.health').textContent = monster.health;
        card.querySelector('.speed').textContent = monster.speed;
        card.querySelector('.damage').textContent = monster.damage;
        card.querySelector('.dc').textContent = monster.difficulty_class;

        this.addMonsterCardListeners(card, monster);
        this.addCardListeners(card, monster);

        document.getElementById("monster-cards").appendChild(card);
        return card;
    }
    removeHour() {
        this.gameTime.hour -= 1;
        if (this.gameTime.hour <= 0) {
            this.gameTime.hour = 24;
            this.gameDay.var -= 1;
            if (this.gameDay.var < 0) this.gameDay.var = 0;
        }
        this.gameTime.object.textContent = `${this.gameTime.hour.toString().padStart(2, '0')}:${this.gameTime.minute.toString().padStart(2, '0')}`;
        this.gameDay.object.textContent = this.gameDay.var;
    }
    addHour() {
        this.gameTime.hour += 1;
        if (this.gameTime.hour >= 24) {
            this.gameTime.hour = 0;
            this.gameDay.var += 1;
        }
        this.gameTime.object.textContent = `${this.gameTime.hour.toString().padStart(2, '0')}:${this.gameTime.minute.toString().padStart(2, '0')}`;
        this.gameDay.object.textContent = this.gameDay.var;
    }
    remove15Minutes() {
        this.gameTime.minute -= 15;
        if (this.gameTime.minute < 0) {
            this.removeHour();
            this.gameTime.minute = 45;
        }
        this.gameTime.object.textContent = `${this.gameTime.hour.toString().padStart(2, '0')}:${this.gameTime.minute.toString().padStart(2, '0')}`;
    }
    add15Minutes() {
        this.gameTime.minute += 15;
        if (this.gameTime.minute >= 60) {
            this.addHour();
            this.gameTime.minute = 0;
        }
        this.gameTime.object.textContent = `${this.gameTime.hour.toString().padStart(2, '0')}:${this.gameTime.minute.toString().padStart(2, '0')}`;
    }




    removePlayer(player) {
        let index = this.players.indexOf(player);
        if (index == -1) return;

        this.players.splice(index, 1);
        player.card.remove();

    }
    clearPlayers() {
        this.players = [];
    }
    addPlayer() {
        let name = new Text(prompt("Enter Player's Name: "));
        let health = new Number(prompt("Enter Player's HP: "));
        let armor = new Number(prompt("Enter Player's Armor Class: "));
        let speed = new Number(prompt("Enter Player's Speed: "));
        let height = new Text(prompt("Enter Player's Height: "));
        let initiative = new Number(prompt("Enter Player's Initiative: "));
        let player = new Player(name.textContent, health, armor, speed, height.textContent, initiative);
        this.createPlayerCard(player);

        this.players.push(player);
        
        console.log("Player added!");
    }
    
    createPlayerCard(player) {
        const template = document.getElementById("player-card-template");
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector(".player-card");

        // static 
        card.querySelector(".name").textContent = player.name;
        card.querySelector('.height').textContent = player.height;
        card.querySelector('.initiative').textContent = player.initiative;


        // variable 
        card.querySelector('.level').textContent = player.level;    

        card.querySelector('.xp').textContent = player.xp;
        card.querySelector('.health').textContent = player.health;
        card.querySelector('.max-health').textContent = player.maxHealth;
        card.querySelector('.weight').textContent = player.weight;
        card.querySelector('.speed').textContent = player.speed;
        card.querySelector('.armor').textContent = player.armor;
        
        
        //set coins (variable)
        card.querySelector('.coin-panel .copper-count').textContent = player.coins.copper;
        card.querySelector('.coin-panel .silver-count').textContent = player.coins.silver;
        card.querySelector('.coin-panel .electrum-count').textContent = player.coins.electrum;
        card.querySelector('.coin-panel .gold-count').textContent = player.coins.gold;
        card.querySelector('.coin-panel .platinum-count').textContent = player.coins.platinum;


        this.addPlayerCardListeners(card, player);
        this.addCardListeners(card, player);

        document.getElementById("player-cards").appendChild(card);
        player.linkCard(card);
        return card;
    }
    addPlayerCardListeners(card, player) {
        var IntervalID = null;
        // delete player
        card.querySelector('.delete-button').addEventListener('click', () => {
            this.removePlayer(player);
        });
        // weight controls
        card.querySelector('.add-weight').addEventListener('click', () => {
            player.weight += 1;
            card.querySelector('.weight').textContent = player.weight;
        });
        card.querySelector('.add-weight').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.weight += 1;
                card.querySelector('.weight').textContent = player.weight;
            }, 100);
        });
        card.querySelector('.add-weight').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.add-weight').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // remove weight
        card.querySelector('.remove-weight').addEventListener('click', () => {
            player.weight = Math.max(0, player.weight-1);
            card.querySelector('.weight').textContent = player.weight;
        });
        card.querySelector('.remove-weight').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.weight = Math.max(0, player.weight-1);
                card.querySelector('.weight').textContent = player.weight;
            }, 100);
        });
        card.querySelector('.remove-weight').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.remove-weight').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });



        // add max health
        card.querySelector('.add-max-health').addEventListener('click', () => {
            player.changeMaxHealth(1);
            card.querySelector('.max-health').textContent = player.maxHealth;
        });
        card.querySelector('.add-max-health').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.changeMaxHealth(1);
                card.querySelector('.max-health').textContent = player.maxHealth;
            }, 100);
        });
        card.querySelector('.add-max-health').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.add-max-health').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // remove max health
        card.querySelector('.remove-max-health').addEventListener('click', () => {
            player.changeMaxHealth(-1);
            card.querySelector('.max-health').textContent = player.maxHealth;
        });
        card.querySelector('.remove-max-health').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.changeMaxHealth(-1);
                card.querySelector('.max-health').textContent = player.maxHealth;
            }, 100);
        });
        card.querySelector('.remove-max-health').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.remove-max-health').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });






        // xp controls
        card.querySelector('.add-xp').addEventListener('click', () => {
            
            player.addXP();
            card.querySelector('.level').textContent = player.level;
            card.querySelector('.xp').textContent = `${player.xp} / ${Player.level_xp[player.level]}`;
            
        });
        card.querySelector('.add-xp').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                
                player.addXP();
                card.querySelector('.level').textContent = player.level;
                card.querySelector('.xp').textContent = `${player.xp} / ${Player.level_xp[player.level]}`;
                
            }, 100);
        });
        card.querySelector('.add-xp').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.add-xp').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // add level
        card.querySelector('.add-xp-level').addEventListener('click', () => {
            player.addLevel();
            card.querySelector('.level').textContent = player.level;
            card.querySelector('.xp').textContent = `${player.xp} / ${Player.level_xp[player.level]}`;

        });
        // remove level
        card.querySelector('.remove-xp-level').addEventListener('click', () => {
            player.removeLevel();
            card.querySelector('.level').textContent = player.level;
            card.querySelector('.xp').textContent = `${player.xp} / ${Player.level_xp[player.level]}`;

        });
        // reset xp
        card.querySelector('.reset-xp').addEventListener('click', () => {
            player.resetXP();
            card.querySelector('.xp').textContent = `${player.xp} / ${Player.level_xp[player.level]}`;
        });
        
        // add armor
        card.querySelector('.add-armor').addEventListener('click', () => {
            player.addArmor();
            card.querySelector('.armor').textContent = player.armor;
        });
        card.querySelector('.add-armor').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.addArmor();
                card.querySelector('.armor').textContent = player.armor;
            }, 100);
        });
        card.querySelector('.add-armor').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.add-armor').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // remove armor
        card.querySelector('.remove-armor').addEventListener('click', () => {
            player.removeArmor();
            card.querySelector('.armor').textContent = player.armor;
        });
        card.querySelector('.remove-armor').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.removeArmor();
                card.querySelector('.armor').textContent = player.armor;
            }, 100);
        });
        card.querySelector('.remove-armor').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.remove-armor').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // add speed
        
        // coin 
        // minus copper
        card.querySelector('.minus-copper').addEventListener('click', () => {
            player.changeCoins(-1, 'copper');
            card.querySelector('.coin-panel .copper-count').textContent = player.coins.copper;
        });
        card.querySelector('.minus-copper').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.changeCoins(-1, 'copper');
                card.querySelector('.coin-panel .copper-count').textContent = player.coins.copper;
            }, 100);
        });
        card.querySelector('.minus-copper').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.minus-copper').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // plus copper
        card.querySelector('.plus.copper').addEventListener('click', () => {
            player.changeCoins(1, 'copper');  
            card.querySelector('.coin-panel .copper-count').textContent = player.coins.copper;  
        });
        card.querySelector('.plus.copper').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.changeCoins(1, 'copper');  
                card.querySelector('.coin-panel .copper-count').textContent = player.coins.copper;
            }, 100);
        });
        card.querySelector('.plus.copper').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.plus.copper').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // minus silver
        card.querySelector('.minus-silver').addEventListener('click', () => {
            player.changeCoins(-1, 'silver');
            card.querySelector('.coin-panel .silver-count').textContent = player.coins.silver;
        });
        card.querySelector('.minus-silver').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.changeCoins(-1, 'silver');
                card.querySelector('.coin-panel .silver-count').textContent = player.coins.silver;
            }, 100);
        });
        card.querySelector('.minus-silver').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.minus-silver').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // plus silver
        card.querySelector('.plus.silver').addEventListener('click', () => {
            player.changeCoins(1, 'silver');
            card.querySelector('.coin-panel .silver-count').textContent = player.coins.silver;
        });
        card.querySelector('.plus.silver').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.changeCoins(1, 'silver');
                card.querySelector('.coin-panel .silver-count').textContent = player.coins.silver;
            }, 100);
        });
        card.querySelector('.plus.silver').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.plus.silver').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // minus electrum
        card.querySelector('.minus-electrum').addEventListener('click', () => {
            player.changeCoins(-1, 'electrum');
            card.querySelector('.coin-panel .electrum-count').textContent = player.coins.electrum;
        });
        card.querySelector('.minus-electrum').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.changeCoins(-1, 'electrum');
                card.querySelector('.coin-panel .electrum-count').textContent = player.coins.electrum;
            }, 100);
        });
        card.querySelector('.minus-electrum').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.minus-electrum').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // plus electrum
        card.querySelector('.plus.electrum').addEventListener('click', () => {
            player.changeCoins(1, 'electrum');
            card.querySelector('.coin-panel .electrum-count').textContent = player.coins.electrum;
        });
        card.querySelector('.plus.electrum').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.changeCoins(1, 'electrum');
                card.querySelector('.coin-panel .electrum-count').textContent = player.coins.electrum;
            }, 100);
        });
        card.querySelector('.plus.electrum').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.plus.electrum').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // minus gold
        card.querySelector('.minus.gold').addEventListener('click', () => {
            player.changeCoins(-1, 'gold');
            card.querySelector('.coin-panel .gold-count').textContent = player.coins.gold;
        });
        card.querySelector('.minus.gold').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.changeCoins(-1, 'gold');
                card.querySelector('.coin-panel .gold-count').textContent = player.coins.gold;
            }, 100);
        });
        card.querySelector('.minus.gold').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.minus.gold').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // plus gold
        card.querySelector('.plus.gold').addEventListener('click', () => {
            player.changeCoins(1, 'gold');
            card.querySelector('.coin-panel .gold-count').textContent = player.coins.gold;
        });
        card.querySelector('.plus.gold').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.changeCoins(1, 'gold');
                card.querySelector('.coin-panel .gold-count').textContent = player.coins.gold;
            }, 100);
        });
        card.querySelector('.plus.gold').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.plus.gold').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // minus platinium
        card.querySelector('.minus.platinum').addEventListener('click', () => {
            player.changeCoins(-1, 'platinum');
            card.querySelector('.coin-panel .platinum-count').textContent = player.coins.platinum;
        });
        card.querySelector('.minus.platinum').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.changeCoins(-1, 'platinum');
                card.querySelector('.coin-panel .platinum-count').textContent = player.coins.platinum;
            }, 100);
        });
        card.querySelector('.minus.platinum').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.minus.platinum').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // plus platinum
        card.querySelector('.plus.platinum').addEventListener('click', () => {
            player.changeCoins(1, 'platinum');
            card.querySelector('.coin-panel .platinum-count').textContent = player.coins.platinum;
        });
        card.querySelector('.plus.platinum').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.changeCoins(1, 'platinum');
                card.querySelector('.coin-panel .platinum-count').textContent = player.coins.platinum;
            }, 100);
        });
        card.querySelector('.plus.platinum').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.plus.platinum').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
    }
    addCardListeners(card, player) {
        var IntervalID = null;
        card.querySelector('.delete-button').addEventListener('click', () => {
            if (player.type === "Player") {
                this.removePlayer(player);
            } else {
                this.removeMonster(player);
            }
        });
        // add health
        card.querySelector('.add-health').addEventListener('click', () => {
            player.addHealth();
            card.querySelector('.health').textContent = player.health;
        })
        card.querySelector('.add-health').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.addHealth();
                card.querySelector('.health').textContent = player.health;
            }, 100);
        });
        card.querySelector('.add-health').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.add-health').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // remove health
        card.querySelector('.remove-health').addEventListener('click', () => {
            player.removeHealth();
            card.querySelector('.health').textContent = player.health;
        });
        card.querySelector('.remove-health').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.removeHealth();
                card.querySelector('.health').textContent = player.health;
            }, 100);
        });
        card.querySelector('.remove-health').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.remove-health').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.add-speed').addEventListener('click', () => {
            player.addSpeed();
            card.querySelector('.speed').textContent = player.speed;
        });
        card.querySelector('.add-speed').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.addSpeed();
                card.querySelector('.speed').textContent = player.speed;
            }, 100);
        });
        card.querySelector('.add-speed').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.add-speed').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        // remove Speed
        card.querySelector('.remove-speed').addEventListener('click', () => {
            player.removeSpeed();
            card.querySelector('.speed').textContent = player.speed;
        });
        card.querySelector('.remove-speed').addEventListener('mousedown', () => {
            IntervalID = setInterval(() => {
                player.removeSpeed();
                card.querySelector('.speed').textContent = player.speed;
            }, 100);
        });
        card.querySelector('.remove-speed').addEventListener('mouseup', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });
        card.querySelector('.remove-speed').addEventListener('mouseleave', () => {
            clearInterval(IntervalID);
            IntervalID = null;
        });


    }
    addMonsterCardListeners(card, monster) {
        card.querySelector('.copy-button').addEventListener('click', () => {
            let copy = monster.copyMonster(this.monsters.length+1);
            
            copy.linkCard(this.createMonsterCard(copy));
            this.monsters.push(copy);
        });
    }

    copyGame() {
        return new GameManager(
            this.timePlayingSeconds,
            this.gameDay, this.gameTurn, 
            this.gameTime, this.players, 
            this.monsters, this.notes_string);
    }
    clearCards() {
        let cards = document.querySelectorAll('.player-card');
        cards.forEach(card => card.remove());
        let monsterCards = document.querySelectorAll('.monster-card');
        monsterCards.forEach(card => card.remove());
    }





    loadSave() {
        let loadedGame = JSON.parse(localStorage.getItem('save'));
        let newGM = Object.assign(new GameManager(), loadedGame);
        
        

        this.clearCards();
        this.monsters = [];
        this.players = [];

        // load monsters
        var entity_object;
    
        newGM.monsters.forEach(monster => {
            entity_object = Object.assign(new Monster(), monster);
            entity_object.linkCard(this.createMonsterCard(entity_object));
            this.monsters.push(entity_object);
        });
        // load players
        newGM.players.forEach(player => {
            entity_object = Object.assign(new Player(), player);
            this.createPlayerCard(entity_object);
            this.players.push(entity_object);
        });
        // load notes
        this.notes_string = newGM.notes_string;
        document.getElementById("notebook-area").value = this.notes_string;
        
        // load turns
        this.gameTurn.var = newGM.gameTurn.var;
        this.gameTurn.object.textContent = this.gameTurn.var;

        // load game time
        this.gameTime.hour = newGM.gameTime.hour;
        this.gameTime.minute = newGM.gameTime.minute;
        this.gameTime.object.textContent = `${this.gameTime.hour.toString().padStart(2, '0')}:${this.gameTime.minute.toString().padStart(2, '0')}`;
        
        // load game day
        this.gameDay.var = newGM.gameDay.var;
        this.gameDay.object.textContent = this.gameDay.var;

        // load time playing
        this.timePlayingSeconds.var = newGM.timePlayingSeconds.var;
        this.timePlayingSeconds["start-time"] = new Date().getTime() - newGM.timePlayingSeconds.var
        this.timePlayingSeconds.object = document.getElementById("stopwatch");
        try {
            clearInterval(this.timePlayingSeconds.interval);
        } catch {
            console.log("No interval to clear");
        }
        this.timePlayingSeconds.interval = setInterval(this.UpdateTimer(), 1000);
        
        alert("Game loaded!");
        
    }
    saveGame() {
        localStorage.setItem('save', JSON.stringify(this.copyGame()));
        alert("Game Saved!");
    }


}

let game = new GameManager();


document.getElementById("toggle-notes").onclick = () => {
    let notebook = document.getElementById("notebook");
    if (notebook.style.display === "none" || notebook.style.display === "") notebook.style.display = "block";
    else notebook.style.display = "none";
}
document.getElementById("notebook-area").addEventListener("input", () => {
    game.notes_string = document.getElementById("notebook-area").value;
});



// turn button
document.getElementById("turnButton").onclick = () => {
    game.gameTurn.var += 1;
    game.gameTurn.object.textContent = game.gameTurn.var;
}
document.getElementById("previousTurn").onclick = () => {
    game.gameTurn.var -= 1;
    if (game.gameTurn.var < 1) {
        game.gameTurn.var = 1;
    }
    game.gameTurn.object.textContent = game.gameTurn.var;
}
// time controls
document.getElementById("minus-hour").onclick = game.removeHour;
document.getElementById("plus-hour").onclick = game.addHour;
document.getElementById("minus-15minutes").onclick = game.remove15Minutes;
document.getElementById("plus-15minutes").onclick = game.add15Minutes;
// master screen toggle
document.getElementById("toggle-dm-screen").onclick = () => {
    let masterScreen = document.getElementById("master-screen");
    if (masterScreen.style.display === "none" || masterScreen.style.display === "") masterScreen.style.display = "block";
    else masterScreen.style.display = "none";
}
document.getElementById("mscreen-close").onclick = () => {
    let masterScreen = document.getElementById("master-screen");
    masterScreen.style.display = "none";
};
document.getElementById("add-player").addEventListener('click', game.addPlayer);
document.getElementById("add-monster").addEventListener('click', game.addMonster);

document.getElementById("save").addEventListener('click', game.saveGame);
document.getElementById("load").addEventListener('click', game.loadSave);