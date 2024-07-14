

class Monster {
    #height;
    #difficulty_class;
    constructor(id, hp, height, speed, armor, damage, dc, lvl) {
        this.id = id;
        this.hp = hp;
        this.#height = height;
        this.speed = speed;
        this.armor = armor;
        this.damage = damage;
        this.#difficulty_class = dc;
        this.level = lvl;

    }
    GetDC() {
        return this.#difficulty_class;
    }
    getHeight() {
        return this.#height;
    }
}

var monsters = [];


function addMonster() {
    let id = monsters.length+1;
    let hp = new Number(prompt("Enter Monster's HP: "));
    let height = new Text(prompt("Enter Monster's Height: ")).wholeText;
    let speed = new Number(prompt("Enter Monster's Speed: "));
    let armor = new Number(prompt("Enter Monster's Armor: "));
    let damage = new Number(prompt("Enter Monster's Damage: "));
    let LVL = new Number(prompt("Enter Monster's LVL: "));
    let dc = new Number(prompt("Enter Monster's DC: "));
    let monster = new Monster(id, hp, height, speed, armor, damage, dc, LVL);
    monsters.push(monster);
    console.log("Monster added!");
    createMonsterCard(monster);
}
document.getElementById("add-monster-btn").addEventListener("click", addMonster);
function createMonsterCard(monster) {
    const template = document.getElementById("monster-card-template");
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector(".player-card");

    card.querySelector(".player-name").textContent = "Monster " + monster.id;
    card.querySelector('.player-level').textContent = monster.level;
    card.querySelector('.monster-height').textContent = monster.getHeight();
    card.querySelector('.player-health').textContent = monster.hp;
    card.querySelector('.player-armor').textContent = monster.armor;
    card.querySelector('.player-speed').textContent = monster.speed;
    card.querySelector('.monster-damage').textContent = monster.damage;
    card.querySelector('.monster-dc').textContent = monster.GetDC();

    document.getElementById("monster-cards").appendChild(card);
    addMonsterEventListeners(card, monster);
}
function addMonsterEventListeners(card, player) {
    card.querySelector('.delete-button').addEventListener('click', ()=>{
        let index = monsters.indexOf(player);
        if (index > -1) {
            monsters.splice(index, 1);
            card.remove();
        }
    });
    card.querySelector('.copy-button').addEventListener('click', ()=>{
        let monster = new Monster(monsters.length+1, player.hp, player.getHeight(), player.speed, player.armor, player.damage, player.GetDC(), player.level);
        monsters.push(monster);
        createMonsterCard(monster);
    });


    var IntervalID = null;
    card.querySelector('.add-health').addEventListener('click', () => {
        player.hp += 1;
        card.querySelector('.player-health').textContent = player.hp;
    });
    card.querySelector('.add-health').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.hp += 1;
            card.querySelector('.player-health').textContent = player.hp;
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
        player.hp -= 1;
        card.querySelector('.player-health').textContent = player.hp;
    });
    card.querySelector('.remove-health').addEventListener('mousedown', () => {
        IntervalID = setInterval(() => {
            player.hp -= 1;
            card.querySelector('.player-health').textContent = player.hp;
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
}

