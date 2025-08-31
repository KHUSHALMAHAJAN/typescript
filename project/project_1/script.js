"use strict";
let from = document.querySelector("form");
from === null || from === void 0 ? void 0 : from.addEventListener("submit", function (val) {
    val.preventDefault();
});
let people = [];
let sumbit = document.querySelector("submit");
let input = document.querySelectorAll("input");
let cardconatiner = document.querySelector("#cardconatiner");
let addconatin;
class cratetemplet {
    constructor(username, name, age) {
        this.username = username;
        this.name = name;
        this.age = age;
        this.display();
    }
    display() {
        addconatin += `<div class="card">
            <div>Username :- ${this.username}</div>
            <div>Name :- ${this.name}</div>
            <div>Age :- ${this.age}</div>
        </div>`;
        cardconatiner.innerHTML = addconatin;
    }
}
from === null || from === void 0 ? void 0 : from.addEventListener("submit", function () {
    console.log("hu");
    people[0] = new cratetemplet(input[0].value, input[1].value, Number(input[2].value));
    // people[0].display()
});
