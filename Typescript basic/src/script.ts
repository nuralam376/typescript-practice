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

// let sum = (a: string, b: number, c: string = "abc"): string => {
//   return a + b;
// };

// console.log(sum("3", 4));

// type stringOrNum = string | number;
// type userType = { name: string; age: number };

// const userDetails = (id: stringOrNum, user: userType) => {
//   console.log(
//     `User id is ${id}, user name : ${user.name}, user age : ${user.age}`
//   );
// };

// const sayHello = (user: userType) => {
//   console.log(`User name ${user.name} and age is {user.age}`);
// };

// let add: (x: number, y: number, z: string) => number;

// add = (a: number, b: number, c: string) => {
//   if (c === "add") {
//     return a + b;
//   } else {
//     return a - b;
//   }
// };

// let userDetails: (user: { name: string; age: number }) => void;

// userDetails = (userType: { name: string; age: number }) => {};

// interface Rectangle {
//   width: number;
//   height: number;
// }

// function drawRectangle(options: Rectangle) {
//   let width = options.width;
//   let height = options.height;
// }

// let options = {
//   width: 800,
//   height: 455,
//   length: 877,
// };

// drawRectangle(options);

// const addID = <
//   T extends {
//     name: string;
//     age: number;
//     country: string;
//   }
// >(
//   obj: T
// ) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };

// let user = addID({
//   name: "Abc",
//   age: 30,
//   country: "",
// });

// // user.country = "eng";
// // let user = addID("as");

// console.log(user);

// interface ApiResponse<T> {
//   status: number;
//   type: string;
//   data: T;
// }

// const response1: ApiResponse<object> = {
//   status: 1,
//   type: "as",
//   data: {
//     name: "test",
//   },
// };

// enum RType {
//   SUCCESS,
//   FAILURE,
//   UNAUTHENTICATED,
//   UNAUTHORIZED,
// }

// interface ApiResponse<T> {
//   status: number;
//   type: RType;
//   data: T;
// }

// const response1: ApiResponse<object> = {
//   status: 4,
//   type: RType.FAILURE,
//   data: {},
// };

// console.log(response1);

let a = [3, "hello", { p: 3 }];

let b: [number, string, object] = [4, "worlf", { p: 3 }];

b.push("as");

console.log(b);
