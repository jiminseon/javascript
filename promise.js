const promise = new Promise((resolve, reject)=>{
    // resolve, reject는 함수.
    // resolve: 성공시 호출할 함수.
    // reject: 실패시 호출할 함수
})

// fastFunction 1초 후 data*2
// slowFunction 3초 후 data+10
function fastFunction(data){
    return new Promise ((resolve, reject)=>{
        setTimeout(function(){
            const result = data * 2;
            resolve(result);
        }, 1000)
    })
}

function slowFunction(data){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            if (data === 0){
                reject(new Error("data가 0이 되어서는 안 됩니다."))
            }else{
                const result = data + 10;
                resolve(result);    
            }
            

        }, 3000)
    })
}

// slowFunction(0).then(data=>{
//     console.log("slowFunction호출결과");
//     console.log(data);
// }).catch(err=>{
//     console.error(err);
// });

slowFunction(10).then(data=>{
    console.log('fastFunction의 실행 결과.')
    console.log(data);
    return data;
}).then(data=>{
    return fastFunction(data);
}).then(data=>{
    return slowFunction(data);
}).then(data=>{
    return fastFunction(data)
})

// const result = fastFunction(10);
// result.then(data=>{
//     console.log('fastFunction의 실행 결과.')
//     console.log(data);
//     return data;
// }).then(data=>{
//     return slowFunction(data);
// }).then(data=>{
//     console.log("slowFunction의 결과");
//     console.log(data);
//     return data;
// }).then(data=>{
//     return fastFunction(data);
// }).then (data=>{
//     return slowFunction(data);
// }).then(data=>{
//     return fastFunction(data);
// }).then(data=>{
//     console.log(data)
// })


