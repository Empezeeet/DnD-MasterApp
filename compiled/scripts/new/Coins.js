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
export var Coins = function Coins() {
    "use strict";
    var copper = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, silver = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, electrum = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, gold = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, platinum = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    _class_call_check(this, Coins);
    _define_property(this, "copper", 0);
    _define_property(this, "silver", 0);
    _define_property(this, "electrum", 0);
    _define_property(this, "gold", 0);
    _define_property(this, "platinum", 0);
    this.copper = copper;
    this.silver = silver;
    this.electrum = electrum;
    this.gold = gold;
    this.platinum = platinum;
};
