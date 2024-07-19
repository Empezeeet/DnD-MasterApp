import { Coins } from './Coins';
import { Effect } from './IEffect';



export class Player {
    name: string;
    hitPoints: number;
    armorClass: number;
    speed: number;
    level: number;
    xp: number;
    coins: Coins;

    initiative: number;
    height: string;
    weight: number;
    static level_xp: Array<number> = [
        0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000,
        85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000,
        305000, 355000
    ]

    effects: Array<Effect>;

    private card: any = null;
    constructor(
        name: string, hitPoints: number, 
        armorClass: number, speed: number, 
        initiative: number, height: string, 
        effects: Array<Effect> = []
    ) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.armorClass = armorClass;
        this.speed = speed;
        this.level = 1;
        this.xp = 0;
        this.coins = new Coins();
        this.initiative = initiative;
        this.height = height;
        this.weight = 0;
        this.effects = effects;
    }
    addXP(xp: number): void {
        this.xp += xp;
        if (this.xp >= Player.level_xp[this.level]) {
            this.xp -= Player.level_xp[this.level];
            this.level++;
            this.card.querySelector('.level').textContent = this.level.toString();
        }
    }
    linkCard(card: any): void {
        this.card = card;
    }


}