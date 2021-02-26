// let playerName;

// playerName = "Abc";

// console.log(playerName);

// playerName = 34;

// let players = ["Abc", 34, {}];

// players.push(34);

// players.push({
//   name: "Def",
//   age: 25,
// });

// let player = {
//   name: "'Ghi",
//   age: 25,
//   country: "",
// };

// player.country = "Bd";

// function multiply(a: number, b: number) {
//   return a + b;
// }

// console.log(multiply(3, 4));

// let a: string;

// a = "abc";

// let b: number;

// b = "abc";
// b = 5;

// let array: string[] = [];

// array.push("s");
// // array.push(5);

// let arr: (number | string)[] = [];

// arr.push("name");
// arr.push(5);
// // arr.push(false);

// let obj: {
//   name: string;
// };

// // obj.name = "as";

// obj = {
//   name: "abc",
// };

// let a: any;

// a = 5;
// a = "Name";

// console.log(a);

// let b: any[] = [];

// b.push("a");

// console.log(b);

// let c: {
//   name: any;
// };

// c = {
//   name: "a",
// };

// console.log(c);

// let myFunc: Function;

// myFunc = () => {
//   console.log("Function");
// };

// myFunc();

let sum = (a: string, b: number, c: string = "abc"): string => {
  return a + b;
};

console.log(sum("3", 4));
