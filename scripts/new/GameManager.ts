import { Player } from "./Player";
import { Monster } from "./Monster";

class GameManager {

    Players: Array<Player>;
    Monsters: Array<Monster>

    private turn: number = 1;
    gameDay: number = 1;
    gameHour: number = 12;
    gameMinute: number = 0;
    timePlayingSeconds: number = 0;
    gameDayText: HTMLElement;
    


    constructor() {
        this.Players = [];
        this.Monsters = [];
    }
    add15Minutes(): void {
        this.gameMinute += 15;
        if (this.gameMinute >= 60) {
            this.gameMinute = 0;
            this.gameHour++;
            if (this.gameHour >= 24) {
                this.gameHour = 0;
                this.gameDay++;
            }
        }
    }
    add1Hour(): void {
        this.gameHour++;
        if (this.gameHour >= 24) {
            this.gameHour = 0;
            this.gameDay++;
        }
    }





    getTurn(): number {
        return this.turn;
    }
    nextTurn(): number {
        this.turn++;
        return this.turn;
    }
    

}