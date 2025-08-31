"use strict";
let from = document.querySelector("form");
from === null || from === void 0 ? void 0 : from.addEventListener("submit", function (val) {
    val.preventDefault();
});
let people = [];
// let username : string[]
let i = 0;
let sumbit = document.querySelector("submit");
let input = document.querySelectorAll("input");
let cardconatiner = document.querySelector("#cardconatiner");
let search = document.querySelector("#search");
let addconatin = "";
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
    // console.log("hu")
    let username;
    username = input[0].value;
    username = new cratetemplet(input[0].value, input[1].value, Number(input[2].value));
    people.push(username);
    // console.log(people)
    // people[0].display()
});
search === null || search === void 0 ? void 0 : search.addEventListener("input", (e) => {
    let target = e.target.value;
    target;
    let find = people.filter(person => person.username.toLowerCase().startsWith(target.toLowerCase()));
    console.log(find);
});
