var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Invoice from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import Payment from "./classes/Payment.js";
var invOne = new Invoice("Abc", "Work for abc", 200);
var invTwo = new Invoice("Def", "work for def", 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    //   inv.client = "New";
    console.log(inv.client, inv.amount, inv.format());
});
var docOne;
var docTwo;
var docs = [];
docOne = new Invoice("Abc", "Marketing", 200);
docTwo = new Payment("Def", "Website", 500);
docs.push(docOne);
docs.push(docTwo);
var me = {
    name: "Abc",
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log(amount);
        return amount;
    },
};
var greetPeople = function (person) {
    console.log("Hello " + person.name);
};
greetPeople(me);
var anchor = document.querySelector("a");
// console.log(anchor.href);
// const form = document.querySelector("form");
// console.log(form);
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var toForm = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
var ul = document.querySelector("ul");
var list = new ListTemplate(ul);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var doc;
    if (type.value === "payment") {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
});
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var user = { name: "name", age: 30 };
var result = addUID(user);
console.log(result);
var docThree = {
    uid: 25,
    resourseName: "obj",
    data: "",
};
var docFour = {
    uid: 30,
    resourseName: "str",
    data: {},
};
