// (1) word = ["school", "game", "piano", "science", "hotel", "mountian"] 중 글자수가 6글자 이상인 문자를 모아 새로운 배열 생성하세요

const word = ["school", "game", "piano", "science", "hotel", "mountain"]
const word2 = word.filter(w=> w.length>=6);
console.log(word2);

// (2) 구구단을 1단부터 9단까지 출력하세요
for (let i=1; i<=9; i++){
    for (let j=1; j<=9; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}