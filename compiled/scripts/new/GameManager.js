function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
var GameManager = function GameManager() {
    "use strict";
    _class_call_check(this, GameManager);
    _define_property(this, "Players", []);
    _define_property(this, "Monsters", []);
    _define_property(this, "turn", 1);
    _define_property(this, "gameDay", 1);
    _define_property(this, "gameHour", 12);
    _define_property(this, "gameMinute", 0);
    _define_property(this, "timePlayingSeconds", 0);
    _define_property(this, "gameDayText", void 0);
};
export { };
