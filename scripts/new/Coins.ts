export class Coins {
    copper: number = 0;
    silver: number = 0;
    electrum: number = 0;
    gold: number = 0;
    platinum: number = 0;

    constructor(copper: number = 0, silver: number = 0, electrum: number = 0, gold: number = 0, platinum: number = 0) {
        this.copper = copper;
        this.silver = silver;
        this.electrum = electrum;
        this.gold = gold;
        this.platinum = platinum;
    }

}