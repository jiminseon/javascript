"use strict";
function func1(num1, num2, num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
}
func1(1, 2, 3);
console.log("-".repeat(10));
func1(1, 2); // undefined
console.log("-".repeat(10));
func1(1, 2, 3, 4); // 4 버림
// [1, 2, 3].map(val) => {
// }
