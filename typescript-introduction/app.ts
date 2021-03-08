const num1 = document.querySelector("#num1") as HTMLInputElement;
const num2 = <HTMLInputElement>document.querySelector("#num2");
const btn = document.querySelector("#btn") as HTMLButtonElement;

function printResult(num1: number, num2: number): number {
  return num1 + num2;
}

let results: { res: number }[] = [];

btn.addEventListener("click", () => {
  const a = +num1.value;
  const b = +num2.value;
  const result: number = printResult(a, b);
  const resultContainer: { res: number; print: () => void } = {
    res: result,
    print() {
      console.log(`${this.res}`);
    },
  };
  results.push(resultContainer);
  //   results.push(3);
});
