const delay = ms => new Promise(resolve=>setTimeout(resolve, ms));

// function fastFunction(data){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(function(){
//             const result = data * 2;
//             resolve(result);
//         }, 1000)
//     })
// }

async function fastFunction(data){
    await delay(1000);
    const result = data * 2;
    return result;
}

// async function으로 정의
async function slowFunction(data){
    await delay(3000);
    const result = data + 10;
    console.log("slowFunction완료", result);
    return result;
}

async function runTasks(){
    // fast -> slow
    let result = await fastFunction(10);
    console.log("fastFunction완료", result);
    result = await slowFunction(result);
    console.log(result); 
}
const task = runTasks();
console.log("task", task);


