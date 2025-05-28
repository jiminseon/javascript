function add(a, b) {
    return a + b;
}
// const add = (a,b) => a+b;

//args(가변인수) 는 받아서 배열로 받음.
function withLoggin(fn) {
    return function(...args) {
        console.log(`[${args}]를 인자로 받은 함수 호출`)
        return fn(...args) //배열을 풀어서 넣겠다.
    }
}

const addWithLogging = withLoggin(add);
const result = addWithLogging(1, 2); // 로그 출력 후 3 반환
console.log("결과:", result); // → 결과: 3
