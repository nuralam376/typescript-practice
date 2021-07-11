const date = new Date();

console.log(date.getMonth());

const person = {
  age: 20,
};

// person.name = 'Abc';

class Color {}

const red = new Color();
// red.fill = "";

const number: number = 5;
const boolean: boolean = true;
const string: string = 'Abc';
const type2: null = null;
const type3: undefined = undefined;

let now: Date = new Date();

let friuits: string[] = ['a', 'b'];
// let numbers: number[] = [5];
let booleans: boolean[] = [true, false];

class Car {}

const car: Car = new Car();

const point: { x: number; y: number } = {
  x: 5,
  y: 5,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

logNumber(4);

let text = '{"x" : 5, "y" : 6}';
const parsedText: { x: number; y: string } = JSON.parse(text);
console.log(parsedText);

let words: string[] = ['Abc', 'Def', 'Ghi'];
let findWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'Def') {
    findWord = false;
  }
}

let numbers: number[] = [-1, 2, 10];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
