let num = 0;
do {
    num = prompt("알림내용");
} while(num < 100);

//2번
function limitCalls(func, n) {
    // 여기에 코드를 작성하세요.
    let i = 0; 
    return function() {
        if (i < n) {
            func();     
        }
        i++
    }
}
const limitedHello = limitCalls(() => console.log("Hello!"), 2);
limitedHello(); // "Hello!"
limitedHello(); // "Hello!"
limitedHello(); // 아무 일도 일어나지 않음