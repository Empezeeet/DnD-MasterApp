class Player {
    constructor(name, health, armor, speed, height, initiative, effects=[]) {
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
        
        
        this.initiative = initiative;
        this.height = height;
        this.effects = effects;
    }
}