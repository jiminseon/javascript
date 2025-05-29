function fastFunction(data, done){
    // done: function
    // 1초 걸리는 작업 (data *2)
    setTimeout(function (){
        const result = data*2;
        done(result);
    }, 1000)
}

function slowFunction(data, done){
    // 3초 걸리는 작업 (data + 10)
    setTimeout(function (){
        const result = data+10;
        done(result);
    }, 3000);
}

fastFunction(10, (data)=>{
    console.log("fastFunction완료");
    slowFunction(data, (result=>{
        console.log("slowFunction완료");
        console.log(result);
        fastFunction(result, (result2)=>{
            console.log(result2);
            slowFunction(result2, result3=>{
                console.log(result3)
            })
        })
    }))
})

// const num = 10;

// // fastFunction - > slowFunction

// function runTasks(){
//     let num = 10;
//     fastFunction(undefined, num, (err,data)=>{
//         console.log('fastFunction 실행', data);
//         slowFunction(undefined, data, (err,data)=>{
//             console.log('slowFunction', data)
//         })
//     })
// }

// runTasks();
