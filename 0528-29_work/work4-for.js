// 1-100 까지 숫자중 3과 5의 공배수일경우 "3과 5의 공배수"
// 나머지 숫자중 3의배수일경우 "3의배수"
// 나머지 숫자중 5의배수일경우 "5의배수"
// 모두 해당되지 않을경우 그냥숫자
// 를 출력하세요

for (let i =1; i<=100; i++){
    const mul3 = i%3 === 0;
    const mul5 = i%5 === 0;
    
    if (mul3 && mul5){
        console.log("3과 5의 공배수")
    } else if (mul3){
        console.log("3의 배수");
    } else if (mul5){
        console.log("5의 배수");
    } else{
        console.log(i);
    }
}

// 심화 : 1-입력한숫자까지의 숫자중
const value = parseInt(prompt("입력"))

for (let i =1; i<=value; i++){
    const mul3 = i%3 === 0;
    const mul5 = i%5 === 0;
    
    if (mul3 && mul5){
        console.log("3과 5의 공배수")
    } else if (mul3){
        console.log("3의 배수");
    } else if (mul5){
        console.log("5의 배수");
    } else{
        console.log(i);
    }
}