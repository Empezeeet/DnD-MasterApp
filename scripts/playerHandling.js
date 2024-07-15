class Player {

    #height;
    #initiative;

    constructor(name, health, armor, speed, height, initiative) {
        this.name = name // works as ID;
        this.health = health;
        this.armor = armor;
        this.speed = speed;
        this.level = 1;
        this.xp = 0;
    
        this.copper_coins = 0;
        this.silver_coins = 0;
        this.electrum_coins = 0;
        this.gold_coins = 0
        this.platinum_coins = 0;
        
        
        this.#initiative = initiative;
        this.#height = height;
    }


    getInitiative() {
        return this.#initiative;
    }
    getHeight() {
        return this.#height;
    }
}
var players = [];

function addNewPlayer() {

    let name = new Text(prompt("Enter name of new Character"))
    let health = new Number(prompt("Enter Character's health"))
    let armor = new Number(prompt("Enter Character's armor"))
    let speed = new Number(prompt("Enter Character's speed"))
    let height = new Text(prompt("Enter Character's height"))
    let initiative = new Number(prompt("Enter Characters's Initiative"))
    if (name.wholeText === "" || name.wholeText === null) {
        alert("Cannot create empty character");
        return;
    }
    let player = new Player(name.wholeText, health, armor, speed,height.wholeText,initiative)
    players.push(player);
    createPlayerCard(player);

}
document.getElementById("add-player-btn").onclick = addNewPlayer;
function createPlayerCard(player) {
    const template = document.getElementById('player-card-template');
    if (!template) {
        console.error("Template element not found");
        return;
    }
    
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector('.player-card');
    if (!card) {
        console.error("Player card element not found in the template");
        return;
    }

    console.log("Filling player card for", player.name);

    // Set player data
    card.querySelector('.player-name').textContent = player.name;
    card.querySelector('.player-level').textContent = player.level;
    card.querySelector('.player-xp').textContent = player.xp;
    card.querySelector('.player-height').textContent = player.getHeight();
    card.querySelector('.player-initiative').textContent = player.getInitiative();
    card.querySelector('.player-health').textContent = player.health;
    card.querySelector('.player-armor').textContent = player.armor;
    card.querySelector('.player-speed').textContent = player.speed;

    card.querySelector('.coin-panel .copper-count').textContent = 0;
    card.querySelector('.coin-panel .silver-count').textContent = 0;
    card.querySelector('.coin-panel .electrum-count').textContent = 0;
    card.querySelector('.coin-panel .gold-count').textContent = 0;
    card.querySelector('.coin-panel .platinum-count').textContent = 0;

    // Add event listeners for buttons
    addEventListeners(card, player);

    // Append the card to the container
    document.getElementById('player-cards').appendChild(card);
}
function HandleLoadPlayers() {
    let loadedGame = JSON.parse(localStorage.getItem('save'));
    let players_loaded = []
    for (let i = 0; i < loadedGame.players.length; i++) {
        players_loaded.push(Object.assign(new Player(), loadedGame.players[i]));
    }
    for (let i = 0; i < players_loaded.length; i++) {
        players.push(players_loaded[i]);
        createPlayerCard(players_loaded[i]);
    }

}
function ClearPlayers() {
    players = [];
}
// Function to add event listeners to buttons
function addEventListeners(card, player) {

    

    
    card.querySelector('.delete-button').addEventListener('click', ()=>{
        let index = players.indexOf(player);
        if (index > -1) {
            players.splice(index, 1);
            card.remove();
        }
    });
    var IntervalID = null;

    // xp controls
    card.querySelector('.add-xp').addEventListener('click', () => {
        player.xp += 10;
        card.querySelector('.player-xp').textContent = player.xp;
    });
    card.querySelector('.add-xp').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.xp += 10;
            card.querySelector('.player-xp').textContent = player.xp;
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
        player.level += 1;
        card.querySelector('.player-level').textContent = player.level;
    });
    // remove level
    card.querySelector('.remove-xp-level').addEventListener('click', () => {
        player.level = Math.max(1, player.level - 1);
        card.querySelector('.player-level').textContent = player.level;
    });
    // reset xp
    card.querySelector('.reset-xp').addEventListener('click', () => {
        player.xp = 0;
        card.querySelector('.player-xp').textContent = player.xp;
    });









    card.querySelector('.add-health').addEventListener('click', () => {
        player.health += 1;
        card.querySelector('.player-health').textContent = player.health;
    });
    card.querySelector('.add-health').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.health += 1;
            card.querySelector('.player-health').textContent = player.health;
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


    card.querySelector('.remove-health').addEventListener('click', () => {
        player.health -= 1;
        card.querySelector('.player-health').textContent = player.health;
    });
    card.querySelector('.remove-health').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.health -= 1;
            card.querySelector('.player-health').textContent = player.health;
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


    card.querySelector('.add-armor').addEventListener('click', () => {
        player.armor += 1;
        card.querySelector('.player-armor').textContent = player.armor;
    });
    card.querySelector('.add-armor').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.armor += 1;
            card.querySelector('.player-armor').textContent = player.armor;
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


    card.querySelector('.remove-armor').addEventListener('click', () => {
        player.armor -= 1;
        card.querySelector('.player-armor').textContent = player.armor;
    });
    card.querySelector('.remove-armor').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.armor -= 1;
            card.querySelector('.player-armor').textContent = player.armor;
        }
        , 100);
    });
    card.querySelector('.remove-armor').addEventListener('mouseup', () => {
        clearInterval(IntervalID);
        IntervalID = null;
    });
    card.querySelector('.remove-armor').addEventListener('mouseleave', () => {
        clearInterval(IntervalID);
        IntervalID = null;
    });


    card.querySelector('.add-speed').addEventListener('click', () => {
        player.speed += 1;
        card.querySelector('.player-speed').textContent = player.speed;
    });
    card.querySelector('.add-speed').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.speed += 1;
            card.querySelector('.player-speed').textContent = player.speed;
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



    card.querySelector('.remove-speed').addEventListener('click', () => {
        player.speed -= 1;
        card.querySelector('.player-speed').textContent = player.speed;
    });
    card.querySelector('.remove-speed').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.speed -= 1;
            card.querySelector('.player-speed').textContent = player.speed;
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

    // Add event listeners for coin buttons
    card.querySelector('.minus-copper').addEventListener('click', () => {
        player.copper_coins = Math.max(0, player.copper_coins - 1);
        card.querySelector('.coin-panel .copper-count').textContent = player.copper_coins;
    });
    card.querySelector('.minus-copper').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.copper_coins = Math.max(0, player.copper_coins - 1);
            card.querySelector('.coin-panel .copper-count').textContent = player.copper_coins;
        }
        , 100);
    });
    card.querySelector('.minus-copper').addEventListener('mouseup', () => {
        clearInterval(IntervalID);
        IntervalID = null;
    });
    card.querySelector('.minus-copper').addEventListener('mouseleave', () => {
        clearInterval(IntervalID);
        IntervalID = null;
    });

    card.querySelector('.plus.copper').addEventListener('click', () => {
        player.copper_coins += 1;
        card.querySelector('.coin-panel .copper-count').textContent = player.copper_coins;
    });
    card.querySelector('.plus.copper').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.copper_coins += 1;
            card.querySelector('.coin-panel .copper-count').textContent = player.copper_coins;
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

    card.querySelector('.minus-silver').addEventListener('click', () => {
        player.silver_coins = Math.max(0, player.silver_coins - 1);
        card.querySelector('.coin-panel .silver-count').textContent = player.silver_coins;
    });
    card.querySelector('.minus-silver').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.silver_coins = Math.max(0, player.silver_coins - 1);
            card.querySelector('.coin-panel .silver-count').textContent = player.silver_coins;
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

    card.querySelector('.plus.silver').addEventListener('click', () => {
        player.silver_coins += 1;
        card.querySelector('.coin-panel .silver-count').textContent = player.silver_coins;
    });
    card.querySelector('.plus.silver').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.silver_coins += 1;
            card.querySelector('.coin-panel .silver-count').textContent = player.silver_coins;
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

    card.querySelector('.minus-electrum').addEventListener('click', () => {
        player.electrum_coins = Math.max(0, player.electrum_coins - 1);
        card.querySelector('.coin-panel .electrum-count').textContent = player.electrum_coins;
    });
    card.querySelector('.minus-electrum').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.electrum_coins = Math.max(0, player.electrum_coins - 1);
            card.querySelector('.coin-panel .electrum-count').textContent = player.electrum_coins;
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

    card.querySelector('.plus.electrum').addEventListener('click', () => {
        player.electrum_coins += 1;
        card.querySelector('.coin-panel .electrum-count').textContent = player.electrum_coins;
    });
    card.querySelector('.plus.electrum').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.electrum_coins += 1;
            card.querySelector('.coin-panel .electrum-count').textContent = player.electrum_coins;
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
    card.querySelector('.minus.gold').addEventListener('click', () => {
        player.gold_coins = Math.max(0, player.gold_coins - 1);
        card.querySelector('.coin-panel .gold-count').textContent = player.gold_coins;
    });
    card.querySelector('.minus.gold').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.gold_coins = Math.max(0, player.gold_coins - 1);
            card.querySelector('.coin-panel .gold-count').textContent = player.gold_coins;
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
    card.querySelector('.plus.gold').addEventListener('click', () => {
        player.gold_coins += 1;
        card.querySelector('.coin-panel .gold-count').textContent = player.gold_coins;
    });
    card.querySelector('.plus.gold').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.gold_coins += 1;
            card.querySelector('.coin-panel .gold-count').textContent = player.gold_coins;
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

    card.querySelector('.minus.platinum').addEventListener('click', () => {
        player.platinum_coins = Math.max(0, player.platinum_coins - 1);
        card.querySelector('.coin-panel .platinum-count').textContent = player.platinum_coins;
    });
    card.querySelector('.minus.platinum').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.platinum_coins = Math.max(0, player.platinum_coins - 1);
            card.querySelector('.coin-panel .platinum-count').textContent = player.platinum_coins;
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

    card.querySelector('.plus.platinum').addEventListener('click', () => {
        player.platinum_coins += 1;
        card.querySelector('.coin-panel .platinum-count').textContent = player.platinum_coins;
    });
    card.querySelector('.plus.platinum').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.platinum_coins += 1;
            card.querySelector('.coin-panel .platinum-count').textContent = player.platinum_coins;
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

// Add all players' cards to the page
players.forEach(player => createPlayerCard(player));

