"use strict";
var a = 9;
var j = "khushal";
//array
let arr = [7, 4, 56, 7, "khushal"];
//tuple
let tuple = [2, "khushla", {
        value: 67
    }];
//Enums
var admin;
(function (admin) {
    admin["admin"] = "khushal";
    admin["password"] = "khushal@2536";
})(admin || (admin = {}));
admin.admin;
admin.password;
var errorstutas;
(function (errorstutas) {
    errorstutas["showerror"] = "user not found";
})(errorstutas || (errorstutas = {}));
errorstutas.showerror;
//Any
let b;
b = 9;
b = "khushal";
// unknown
let c;
c = 90;
c = "khushal";
if (typeof c === "string") {
    c.toUpperCase();
}
//void
function abcd() {
    console.log(89);
}
//null
let d;
d = "khushal";
d = null;
// undefined
let e;
// never
function abc() {
    while (true) {
    }
}
// abc()
console.log("hj");
let var1;
var1 = 34;
var1 = "khushal";
var1 = 45;
function func(obj) {
    obj.name;
    obj.email;
    obj.password;
    obj.gender;
}
func({ name: "khushal", email: "khushla@gmail.com", password: "2536", gender: "male" });
function func1(obj) {
    obj.coding;
    obj.speak;
}
func1({ speak: true, coding: true });
let val1;
val1 = 67;
function func2(val2, val3) {
}
func2("khushal", 78);
// unon
let val4;
function func3(obj) {
    obj.getDetails;
}
// class and object
class Device {
    constructor() {
        this.name = "mouse";
        this.price = 8000;
    }
}
let obj14 = new Device();
// constructor
class bottlemekar {
    constructor(size, colour) {
        this.size = size;
        this.colour = colour;
        console.log(colour);
    }
}
let obj2 = new bottlemekar(34, "green");
let obj3 = new bottlemekar(34, "pink");
class penmekar {
    constructor(size, ink = "bule") {
        this.size = size;
        this.ink = ink;
        if (size < 11) {
            console.log("less than 11 size is", size);
        }
    }
}
let pen1 = new penmekar(44, "bule");
let pen2 = new penmekar(4, "black");
let pen3 = new penmekar(10);
// this keyword
class changename {
    constructor() {
        this.name = "khushal";
    }
    changenamefunc() {
        this.name = "kunal";
        console.log(this.name);
    }
}
let obj4 = new changename();
obj4.changenamefunc();
// private protected public
class parent1 {
    constructor(name) {
        this.name = name;
    }
    changename() {
        console.log(this.name);
    }
}
let obj5 = new parent1("khushal");
class parent2 {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log(this.name);
    }
}
class child2 extends parent2 {
    constructor(name) {
        super(name);
        this.name = name;
    }
    showname() {
        console.log(this.name);
        this.show();
    }
}
let obj6 = new child2("khushal");
// readonly
class parent3 {
    constructor(name) {
        this.name = name;
    }
}
let obj7 = new parent3("khushal");
// option parameter
class parent4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let obj8 = new parent4("khushal", 90);
let obj9 = new parent4("kunal");
// parameter property
class parent5 {
    constructor(name) {
        this.name = name;
    }
}
let obj10 = new parent5("khushal");
// setter and getter
class parent6 {
    constructor(name) {
        this.name = name;
    }
    set setname(nam) {
        this.name = nam;
    }
    get getname() {
        return this.name;
    }
}
let obj11 = new parent6("kunal");
// static
class parent7 {
    static getradomnumber() {
        return Math.floor(Math.random() * 40);
    }
}
// abstract class and method
// it is threy of abstract class :- it use only base class
// function type
function func4(name, cb) {
    cb("payal");
}
func4("khushal", (arg) => {
    console.log(arg);
});
// Option parameter
function func5(name, email, age) {
    console.log(name);
    console.log(age);
    console.log(email);
}
func5("khushal", "khushal@");
// default parameter
function func6(name, age = 20) {
    console.log(name);
    console.log(age);
}
func6("payal");
