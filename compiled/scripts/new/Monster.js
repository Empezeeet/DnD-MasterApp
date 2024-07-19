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
export var Monster = function Monster(id, hitPoints, height, speed, damage, difficultyClass, level) {
    "use strict";
    _class_call_check(this, Monster);
    _define_property(this, "id", void 0);
    _define_property(this, "hitPoints", void 0);
    _define_property(this, "height", void 0);
    _define_property(this, "speed", void 0);
    _define_property(this, "damage", void 0);
    _define_property(this, "difficultyClass", void 0);
    _define_property(this, "level", void 0);
    this.id = id;
    this.hitPoints = hitPoints;
    this.height = height;
    this.speed = speed;
    this.damage = damage;
    this.difficultyClass = difficultyClass;
    this.level = level;
};
