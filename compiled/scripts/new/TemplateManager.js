function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
import playerTemplate from "./templates/playerCardTemplate.html";
export var TemplateManager = /*#__PURE__*/ function() {
    "use strict";
    function TemplateManager() {
        _class_call_check(this, TemplateManager);
    }
    _create_class(TemplateManager, null, [
        {
            key: "createPlayerCard",
            value: function createPlayerCard(player) {
                var template = playerTemplate.replace("{{name}}", player.name).replace("{{level}}", player.level.toString()).replace("{{health}}", player.hitPoints.toString()).replace("{{xp}}", player.xp.toString()).replace("{{height}}", player.height.toString()).replace("{{weight}}", player.weight.toString()).replace("{{initiative}}", player.initiative.toString()).replace("{{armorClass}}", player.armorClass.toString()).replace("{{playerSpeed}}", player.speed.toString()).replace("{{cp}}", player.coins.copper.toString()).replace("{{sp}}", player.coins.silver.toString()).replace("{{ep}}", player.coins.electrum.toString()).replace("{{gp}}", player.coins.gold.toString()).replace("{{pp}}", player.coins.platinum.toString());
                document.getElementById("player-cards").appendChild(template);
                return null;
            }
        }
    ]);
    return TemplateManager;
}();
