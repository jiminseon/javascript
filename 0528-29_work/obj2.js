//구조분해 및 할당
let arr = ["Kim", "Shin"];

let [name1, name2] = arr;
console.log(name1); // Kim
console.log(name2); // Shin

let arr2 = ['a', 'b', 'c', 'd', 'e'];
let [v1, v2, ...rest] = arr2;
console.log(v1); // a
console.log(v2); // b
console.log(rest); // [ 'c', 'd', 'e' ]


