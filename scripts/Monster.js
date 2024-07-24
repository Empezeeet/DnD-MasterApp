class Monster {
    constructor(id, hp, height, speed, damage, dc, lvl) {
        this.type = "Monster";
        this.id = id;
        this.health = hp;
        this.height = height;
        this.speed = speed;
        this.damage = damage;
        this.difficulty_class = dc;
        this.level = lvl;
        this.card = null;
    }
    linkCard(card) {
        this.card = card;
    }

    addHealth() {
        this.health += 1;
    }
    removeHealth() {
        this.health = Math.max(0, this.health -1);
    }
    addSpeed() {
        this.speed += 1;
    }
    removeSpeed() {
        this.speed = Math.max(0, this.speed-1);
    }
    copyMonster(monster_id) {
        let monster = new Monster(monster_id, this.health, this.height, this.speed, this.damage, this.difficulty_class, this.level);
        return monster;
    }


}