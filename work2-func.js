function add(a, b) {
    return a + b;
}

function withLoggin(fn) {
    return function(...args) {
        console.log("[" + args + "]를 인자로 전달한 함수 호출")
        return fn(...args)
    }
}

const addWithLogging = withLoggin(add);
const result = addWithLogging(1, 2); // 로그 출력 후 3 반환
console.log("결과:", result); // → 결과: 3
