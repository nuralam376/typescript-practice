import Invoice from "./classes/Invoice.js";
var invOne = new Invoice("Abc", "Work for abc", 200);
var invTwo = new Invoice("Def", "work for def", 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
  //   inv.client = "New";
  console.log(inv.client, inv.amount, inv.format());
});
var anchor = document.querySelector("a");
// console.log(anchor.href);
// const form = document.querySelector("form");
// console.log(form);
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var toForm = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(type.value, toForm.value, details.value, amount.value);
});
