let n = parseInt(prompt("정수를 입력해주세요"))

for (let i = 0; i < n; i++) {
    console.log("안녕")
}

let result = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result)

let result2 = "";
for (let i = n; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        result2 += "*";
    }
    result2 += "\n";
}
console.log(result2)

// (2) 사용자로부터 정수를 입력받아, 입력된 정수 만큼 별 찍기
const inputValue = parseInt(prompt("정수입력"));
for (let i=0; i<inputValue; i++){
    console.log("*".repeat(i+1));
}

// (3) 사용자로부터 정수를 입력받아, 입력된 정수 만큼 별 찍기(역순)
const inputValue2 = parseInt(prompt("정수입력"));
for (let i=inputValue2; i>0; i--){
    console.log("*".repeat(i));
}