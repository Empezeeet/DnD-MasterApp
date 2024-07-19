export class Monster {
    id: number
    hitPoints: number
    height: string
    speed: number
    damage: number
    difficultyClass: number
    level: number
   
    constructor(
        id: number, hitPoints: number, height: string, speed: number, damage: number, difficultyClass: number, level: number
    ) {
        this.id = id
        this.hitPoints = hitPoints
        this.height = height
        this.speed = speed
        this.damage = damage
        this.difficultyClass = difficultyClass
        this.level = level
    }
    

}