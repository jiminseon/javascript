let x = [3, 6, 9, 20, -7, 5];
for (let i = 0; i < x.length; i++) {
    x[i] *= 10;
}
console.log(x)

let y = {"math": 70, "science": 80, "english": 20} 
for (let key in y) {
    y[key] *= 10;
}
console.log(y)


const inputValue = parseInt(prompt("정수입력"));
for (let i=1; i<=9; i++){
    const result = inputValue * i;
    console.log(`${inputValue} x ${i} = ${result}`);
}