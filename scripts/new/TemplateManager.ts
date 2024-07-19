import playerTemplate from "./templates/playerCardTemplate.html";
import { Player } from "./Player";



export class TemplateManager {
    public static createPlayerCard(player: Player): HTMLElement | null {
        const template = playerTemplate
        .replace("{{name}}", player.name)
        .replace("{{level}}", player.level.toString())
        .replace("{{health}}", player.hitPoints.toString())
        .replace("{{xp}}", player.xp.toString())
        .replace("{{height}}", player.height.toString())
        .replace("{{weight}}", player.weight.toString())
        .replace("{{initiative}}", player.initiative.toString())
        .replace("{{armorClass}}", player.armorClass.toString())
        .replace("{{playerSpeed}}", player.speed.toString())
        .replace("{{cp}}", player.coins.copper.toString())
        .replace("{{sp}}", player.coins.silver.toString())
        .replace("{{ep}}", player.coins.electrum.toString())
        .replace("{{gp}}", player.coins.gold.toString())
        .replace("{{pp}}", player.coins.platinum.toString());

        
        document.getElementById("player-cards")!.appendChild(template);
    
        return null;
    }
}