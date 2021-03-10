// const num1 = document.querySelector("#num1") as HTMLInputElement;
// const num2 = <HTMLInputElement>document.querySelector("#num2");
// const btn = document.querySelector("#btn") as HTMLButtonElement;

// function printResult(num1: number, num2: number): number {
//   return num1 + num2;
// }

// let results: { res: number }[] = [];

// btn.addEventListener("click", () => {
//   const a = +num1.value;
//   const b = +num2.value;
//   const result: number = printResult(a, b);
//   const resultContainer: { res: number; print: () => void } = {
//     res: result,
//     print() {
//       console.log(`${this.res}`);
//     },
//   };
//   results.push(resultContainer);
//   //   results.push(3);
// });

// class User {
//   name: string;
//   private age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const user = new User("Abc", 30);
// console.log(user.age);

interface ObjectUser {
  name: string;
  print: () => void;
}

class User implements ObjectUser {
  constructor(public name: string, private age: number) {}

  print() {}
}

class Admin extends User {
  constructor(name: string, age: number, private members: string[]) {
    super(name, age);
  }
}

// const user = new User();
