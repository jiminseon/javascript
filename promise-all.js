const delay = ms => new Promise(resolve=>setTimeout(resolve, ms));

async function slowFunction(data){
    await delay(3000);
    if (data===0){
        throw new Error("에러 발생")
    }
    const result = data + 10;
    return result;
}

async function fastFunction(data){
    await delay(1000);
    if (data ===0){
        throw new Error("에러 발생");
    }
    const result = data * 2;
    return result;
}

// 복잡한 비동기 로직 관리
// 1. 다양한 데이터 소스에 있는 데이터를 조회한 후 함께 작업을 가정
const task1 = fastFunction(10);
const task2 = slowFunction(100);
// task1의 data-type: Promise객체, 
Promise.all([task1, task2]).then(([result1, result2])=>{
    return result1 + result2;
    // console.log('task1 result:', result[0]);
    // console.log('task2 result:', result[1])
}).then(data=>{
    console.log(data);
})