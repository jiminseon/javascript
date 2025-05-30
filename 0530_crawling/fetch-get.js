import * as fs from 'fs';

const url = 'https://jsonplaceholder.typicode.com/posts';

(async ()=>{
    const response = await fetch(url);

    if(response.ok){
        console.log("성공");
    }
    // const body = await response.text();
    // const data = JSON.parse(body);
    const data = await response.json();
    
    // const body = await response.text();
    // console.log(body);

    // JSON.parse(<string>): 문자열이 json형태이면 구문분석후 js객체로 만드는 함수.
    // const data = JSON.parse(body);
    // JSON.stringify(<js-obj>): js객체를 json문자열로 만드는 함수
    console.log(data);
    console.log("-".repeat(30));
    console.log(data[0]);

    // fs.promises.writeFile('posts.json', body);

})();



// import * as fs from 'fs'
// const url = 'https://jsonplaceholder.typicode.com/posts';

// (async ()=>{
//     try{
//         const response = await fetch(url,{
//            method: "GET" // 생략가능
//         });
    
//         if(response.ok){ console.log("성공") }
//         const text = await response.text();
//         console.log(text);
//         await fs.promises.writeFile('post.json', text);
//         // const data = await response.json(); // json일 경우 읽고 바로 object로 변환
//         // console.log(data);
//     } catch(err){ console.error(err); }
// })();
