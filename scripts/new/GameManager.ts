import { Player } from "./Player";
import { Monster } from "./Monster";

class GameManager {

    Players: Array<Player> = [];
    Monsters: Array<Monster> = [];

    turn: number = 1;
    gameDay: number = 1;
    gameHour: number = 12;
    gameMinute: number = 0;
    timePlayingSeconds: number = 0;
    gameDayText: HTMLElement;
    


    constructor() {
    
    }
    


}