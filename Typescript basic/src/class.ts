import Player from "./classes/Player.js";

let abc: Player;

abc = new Player("Abc", 30, "BD'");

// const players: Player[] = [];

// players.push(abc);
// players.push(def);

abc.play();
abc.name = "as";
abc.play();
console.log(abc.getProperty());
