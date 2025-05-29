const delay = ms => new Promise(resolve=>setTimeout(resolve, ms));

function fastFunction(data){
    return new Promise ((resolve, reject)=>{
        setTimeout(function(){
            if (data === 0) {
                //reject(new Error("data must not be 0"))
                //위와 아래는 똑같다.
                throw new Error("data must not be 0");
            }
            const result = data * 2;
            resolve(result);
        }, 1000)
    })
}

// async function으로 정의
async function slowFunction(data){
    await delay(3000);
    if (data === 0) {
        throw new Error("에러 발생")
    }
    const result = data + 10;
    console.log("slowFunction완료", result);
    return result;
}

async function runTasks(){
    // fast -> slow
    try {
        const result = await slowFunction(0);
        console.log(result);
    } catch(err) {
        console.log("에러 처리");
    }
}
const task = runTasks();
console.log("task", task);
