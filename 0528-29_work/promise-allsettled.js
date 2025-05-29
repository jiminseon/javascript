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

Promise.allSettled([
    fastFunction(10), 
    slowFunction(20), 
    fastFunction(0), 
    slowFunction(20)]
).then(([result1, result2, result3, result4])=>{
    console.log(result1);
    console.log(result3);
})