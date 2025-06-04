"use strict";
var user = {
    name: "John",
    age: 30,
};
var user2 = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("greet!");
    },
};
var user4 = {
    name: "John",
    age: 30,
};
var user5 = {
    name: "Hey",
    age: 50,
    greet: function () { },
};
var teacher1 = {
    name: "John",
    age: 30,
    subject: "math",
};
// const teacher2: Teacher = {};
// inter
function something(_a) {
    var age = _a.age, name = _a.name, greet = _a.greet;
}
var myUser = {
    id: 1,
    name: "신윤수",
};
console.log("readonly");
console.log(myUser);
