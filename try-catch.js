try{
    // const sentence = `{"name": "신윤수", "city": "서울"}`;
    const sentence = `{"name": "신윤수" "city": "서울"}`;
    const data = JSON.parse(sentence);
    console.log(data);
} catch (err){
    console.log("[에러 발생]");
    // console.error(err);
}

try {
    throw new Error ("임의의 에러 발생");
} catch (err){
    console.log("에러 처리");
    console.error(err);
}