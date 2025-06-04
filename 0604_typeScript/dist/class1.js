"use strict";
var MyUser = /** @class */ (function () {
    function MyUser(name, age) {
        this.name = name;
        this.age = age;
    }
    MyUser.prototype.greet = function () {
        return "Hi my name is ".concat(this.name);
    };
    return MyUser;
}());
var myUser1 = new MyUser("John", 30);
myUser1.age;
var MyUser2 = /** @class */ (function () {
    function MyUser2(name, age) {
        this.name = name;
        this.age = age;
    }
    MyUser2.prototype.greet = function () {
        return "Hi my name is ".concat(this.name);
    };
    return MyUser2;
}());
