"use strict";
var Player = /** @class */ (function () {
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
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
abc.name = "as";
// abc.age = 45;
// abc.country = "India";
console.log(abc.name);
// console.log(abc.age);
console.log(abc.country);
