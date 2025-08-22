"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function func(obj) {
    obj.name;
    obj.email;
    obj.password;
    obj.gender;
}
func({ name: "khushal", email: "khushla@gmail.com", password: "2536", gender: "male" });
//# sourceMappingURL=app.js.map