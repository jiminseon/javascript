function createGreeting(greetingPrefix) {
    return function(name) {
        console.log(greetingPrefix + ", " + name + "!");
    }
}

const greetHello = createGreeting("Hello"); // 반환타입 function(name) {console.log(~~~)}
const greetHi = createGreeting("Hi");

greetHello("Allice"); // argument : name
greetHi("Bob");

function outer() {
    let count = 0;
    function inner() {
        count++;
        return count;
    }
    return inner;
}
const counter = outer();
console.log(counter());
console.log(counter());

const counter2 = outer();
console.log(counter2());
console.log(counter2());