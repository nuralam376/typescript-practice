"use strict";
var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player.prototype.play = function () {
        console.log(this.name + " from " + this.country + " is " + this.age + " years old and is playing");
    };
    return Player;
}());
var abc = new Player("Abc", 40, "Bd");
var def = new Player("Def", 25, "Eng");
var players = [];
players.push(abc);
players.push(def);
abc.play();
console.log(abc.name);
