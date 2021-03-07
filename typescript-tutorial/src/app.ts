import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";
import { hasFormatter } from "./interfaces/hasFormatter";
let invOne = new Invoice("Abc", "Work for abc", 200);
const invTwo = new Invoice("Def", "work for def", 300);

const invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  //   inv.client = "New";
  console.log(inv.client, inv.amount, inv.format());
});

let docOne: hasFormatter;
let docTwo: hasFormatter;

let docs: hasFormatter[] = [];

docOne = new Invoice("Abc", "Marketing", 200);
docTwo = new Payment("Def", "Website", 500);

docs.push(docOne);
docs.push(docTwo);

interface IsPerson {
  name: string;
  age: number;
  speak: (text: string) => void;
  spend: (amount: number) => number;
}

const me: IsPerson = {
  name: "Abc",
  age: 30,
  speak: (text: string) => {
    console.log(text);
  },
  spend: (amount: number) => {
    console.log(amount);
    return amount;
  },
};

const greetPeople = (person: IsPerson) => {
  console.log(`Hello ${person.name}`);
};

greetPeople(me);

const anchor = document.querySelector("a")!;

// console.log(anchor.href);

// const form = document.querySelector("form");
// console.log(form);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toForm = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: hasFormatter;

  if (type.value === "payment") {
    doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});
