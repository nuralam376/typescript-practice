import Player from "./classes/Player.js";

const abc = new Player("Abc", 40, "Bd");
const def = new Player("Def", 25, "Eng");

const players: Player[] = [];

players.push(abc);
players.push(def);

abc.play();
abc.name = "as";
// abc.age = 45;
// abc.country = "India";
console.log(abc.name);
// console.log(abc.age);
console.log(abc.country);
