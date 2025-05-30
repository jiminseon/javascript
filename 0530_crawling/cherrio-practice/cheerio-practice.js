import * as fs from 'fs';
import * as cheerio from 'cheerio';


const html = fs.readFileSync("./blog.html");
const $ = cheerio.load(html);


// HTML redering
// console.log($.html());

// CSS Selector
// 태그 이름 
// const titleTag = $('title');
// console.log(titleTag.text());

// console.log("-".repeat(10));
// // id로 가져오기
// const headerTitle = $('#title');
// console.log(headerTitle.text());

// console.log("-".repeat(10));
// // 데이터 속성으로
// const myData101Tag = $('[data-id=101]');
// console.log(myData101Tag.text());


console.log("-".repeat(10));
// 클래스로
const postTags = $('.post');
postTags.text();
//찾은 노드의 개수
console.log(postTags.length);
// // 속성 가져오기
// const postTag1 = postTags.eq(0);
// console.log(postTag1.attr());

// const postTag2 = postTags.eq(1);
// console.log(postTag2.attr());

// console.log(postTag2.attr('data-id));
// console.log(postTag2.attr()['data-id']);

for (let i = 0; i < postTags.length; i++) {
    const targetNode = postTags.eq(i);
    console.log(targetNode.attr());
}


