function createIncrementer(start, step) {
    // 여기에 코드를 작성하세요.
    function plus() {
        start += step;
        return start;
    }
    return plus;
}

const incByOne = createIncrementer(5, 1); // return 타입 함수
console.log(incByOne()); // 6 함수를 호출
console.log(incByOne()); // 7

const incByTen = createIncrementer(10, 10);
console.log(incByTen()); // 20
console.log(incByTen()); // 30
    