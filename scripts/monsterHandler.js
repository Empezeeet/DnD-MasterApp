

class Monster {
    #height;
    #difficulty_class;
    constructor(hp, height, speed, armor, damage, dc) {
        this.hp = hp;
        this.#height = height;
        this.speed = speed;
        this.armor = armor;
        this.damage = damage;
        this.#difficulty_class = dc;

    }
}