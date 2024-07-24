class Player {
    static level_xp =[
        0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000,
        85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000,
        305000, 355000
    ]

    constructor(name, health, armor, speed, height, initiative, effects=[]) {
        this.type = "Player";
        this.name = name;    // works as ID;
        this.health = health;
        this.maxHealth = health;
        this.armor = armor;
        this.speed = speed;
        this.level = 1;
        this.xp = 0;
    
        this.coins = {
            copper: 0,
            silver: 0,
            gold: 0,
            platinum: 0,
            electrum: 0
        }
        
        this.weight = 0;
        this.initiative = initiative;
        this.height = height;
        this.effects = effects;

        this.card = "nulling";
        this.xp_gain = this.level*10;
    }
    changeMaxHealth(amount) {
        this.maxHealth += amount;
        if (this.maxHealth < 0) this.maxHealth = 0;
        this.card.querySelector('.max-health').textContent = this.maxHealth;
    }

    linkCard(card) {
        console.log("Linking card");
        this.card = card;
    }
    addXP() {
        this.xp += this.xp_gain;
        while(this.xp >= Player.level_xp[this.level]) {
            this.xp -= Player.level_xp[this.level];
            this.addLevel();
        }

    }
    addLevel() {
        this.level += 1;
        this.xp_gain = this.level*10;
    }
    removeLevel() {
        this.level = Math.max(1, this.level - 1);
    }
    resetXP() {
        this.xp = 0;
    }
    addHealth() {
        this.health = Math.min(this.maxHealth, this.health+1);
    }
    removeHealth() {
        this.health = Math.max(0, this.health -1);
    }
    addArmor() {
        this.armor += 1;
    }
    removeArmor() {
        this.armor = Math.max(0, this.armor - 1);
    }
    addSpeed() {
        this.speed += 1;
    }
    removeSpeed() {
        this.speed = Math.max(0, this.speed-1);
    }
    changeCoins(value, coin_type) {
        let coinSelector = `.${coin_type}-count`;

        if (coinSelector === ".gold-count") {
            this.coins.gold = Math.max(0, this.coins.gold + value);
        } else if (coinSelector === ".silver-count") {
            this.coins.silver = Math.max(0, this.coins.silver + value);
        } else if (coinSelector === ".copper-count") {
            this.coins.copper = Math.max(0, this.coins.copper + value);
        } else if (coinSelector === ".platinum-count") {
            this.coins.platinum = Math.max(0, this.coins.platinum + value);
        } else if (coinSelector === ".electrum-count") {
            this.coins.electrum = Math.max(0, this.coins.electrum + value);
        }



    }
}