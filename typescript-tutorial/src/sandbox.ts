// let character = "Abc";

// let age = 30;

// // character = 30;

// // age = "as";

// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };

// console.log(circ(12));

// let arrays = ["abc", "def", "ghi"];

// arrays.push("def");

// // arrays.push(23);
// arrays[0] = "as";
// // arrays[1] = 25;

// // arrays = "gekko";

// let numbers = [23, 2, 3];

// numbers.push(23);
// // numbers.push("qw");
// numbers = [];
// // numbers = "test";

// let mixed = ["ghj", 12, "av", true];

// mixed.push("as");
// mixed.push(12);
// mixed.push(false);

// mixed = [];
// // mixed = "test";

// let person = {
//   name: "abc",
//   age: 25,
//   country: "bd",
// };

// person.name = "def";
// // person.age = "23";
// // person.skills = ["lan"];

// person = {
//   name: "def",
//   age: 45,
//   country: "eng",
//   // skills: ["a"],
// };

// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// character = "abc";
// age = 23;
// isLoggedIn = false;

// let arrays: string[] = [];

// arrays[0] = "21";
// arrays.push("21");
// // arrays[3] = false;

// let mixed: (number | string)[] = [];
// mixed.push(21);
// mixed.push("as");
// // mixed.push(false);

// let person: object;

// // person = "as";

// person = [];

// // person;

// let people: {
//   name: string;
//   age: number;
//   country: string;
// };

// people = {
//   name: "Abc",
//   age: 21,
//   country: "bnd",
// };

// let uuid: string | number;

// uuid = 23;
// uuid = "bd";

// let age: any = false;

// age = 25;

// age = "as";

// let names: any[] = [];

// names.push("as");
// names.push(21);
// names.push(false);

// let obj: {
//   name: any;
//   age: any;
// };

// obj = { name: 21, age: "as" };

// let greet: Function;

// greet = (): void => {
//   console.log("Hello World");
// };

// let plus = (a: number, b: number, c: number | string = 21): number => {
//   // return "as";
//   return a + b;
// };

// let result = plus(5, 7);
// // result = "as";

// type stringOrNum = string | number;
// type userObject = { name: string; uuid: stringOrNum };

// let greet = (name: string, uuid: stringOrNum) => {
//   console.log(`${name} - ${uuid}`);
// };

// let logUser = (user: userObject) => {
//   console.log(`${user.name} - ${user.uuid}`);
// };

// let greet : Function;

let greet: (name: string, greeting: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

let calc: (a: number, b: number, c: string) => number;

calc = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  }
  return a - b;
};

let user: (person: { name: string; uuid: string | number }) => void;

type stringOrNum = string | number;
type people = { name: string; uuid: stringOrNum };

user = (person: people) => {
  console.log(`${person.name} - ${person.uuid}`);
};
