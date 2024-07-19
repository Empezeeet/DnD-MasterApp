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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
import { Coins } from './Coins';
export var Player = /*#__PURE__*/ function() {
    "use strict";
    function Player(name, hitPoints, armorClass, speed, initiative, height) {
        var effects = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [];
        _class_call_check(this, Player);
        _define_property(this, "name", void 0);
        _define_property(this, "hitPoints", void 0);
        _define_property(this, "armorClass", void 0);
        _define_property(this, "speed", void 0);
        _define_property(this, "level", void 0);
        _define_property(this, "xp", void 0);
        _define_property(this, "coins", void 0);
        _define_property(this, "initiative", void 0);
        _define_property(this, "height", void 0);
        _define_property(this, "weight", void 0);
        _define_property(this, "effects", void 0);
        _define_property(this, "card", null);
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
    _create_class(Player, [
        {
            key: "addXP",
            value: function addXP(xp) {
                this.xp += xp;
                if (this.xp >= Player.level_xp[this.level]) {
                    this.xp -= Player.level_xp[this.level];
                    this.level++;
                    this.card.querySelector('.level').textContent = this.level.toString();
                }
            }
        },
        {
            key: "linkCard",
            value: function linkCard(card) {
                this.card = card;
            }
        }
    ]);
    return Player;
}();
_define_property(Player, "level_xp", [
    0,
    300,
    900,
    2700,
    6500,
    14000,
    23000,
    34000,
    48000,
    64000,
    85000,
    100000,
    120000,
    140000,
    165000,
    195000,
    225000,
    265000,
    305000,
    355000
]);
