const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url, {
    method: "POST",
    body: JSON.stringify({
        title: "제목",
        body: "본문"
    }),
    headers: {
        'Content-Type': "application/json"
    }
}).then(resp=>{
    if(resp.ok){
        console.log("ok");
    }
    return resp.json();
}).then(data=>{
    console.log(data);
    console.log("완료");
})


// const url = 'https://jsonplaceholder.typicode.com/posts';
// const headers = {"Content-Type": "application/json",};

// (async ()=>{
//     try{
//         const response = await fetch(url, {
//             headers,
//             method: "POST",
//             body: JSON.stringify({
//                 title: '제목',
//                 body: '내용',
//             })
//         });
        
//         if(response.ok){ console.log("성공") }
//         const data = await response.text();
//         console.log(data);
//     } catch(err){ console.error(err); }
// })();
