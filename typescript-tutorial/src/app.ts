import Invoice from "./classes/Invoice.js";
let invOne = new Invoice("Abc", "Work for abc", 200);
const invTwo = new Invoice("Def", "work for def", 300);

const invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  //   inv.client = "New";
  console.log(inv.client, inv.amount, inv.format());
});

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
  console.log(type.value, toForm.value, details.value, amount.value);
});
