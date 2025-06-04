import * as fs from "fs";
import * as cheerio from "cheerio";

const url =
  "https://search.naver.com/search.naver?ssc=tab.news.all&where=news&sm=tab_jum&query=%EC%9D%B4%EC%B0%A8%EC%A0%84%EC%A7%80";

(async () => {
  try {
    const response = await fetch(url, {
      method: "GET", // 생략가능
    });

    if (response.ok) {
      console.log("성공");
    }
    const text = await response.text();
    const $ = cheerio.load(text);

    //가져올 데이터 (제목, 신문사, 요약설명, 날짜, URL)
    const lists = $(".c-list-basic > li");
    //console.log(lists.eq(0).find(".tit_item > .txt_info").text());
    console.log(lists.length);

    const articleData = [];

    for (let i = 0; i < 10; i++) {
      const listNode = lists.eq(i);
      const newspaper = listNode.find(".tit_item .txt_info").first().text(); // 신문사
      const title = listNode.find(".item-title").text(); // 제목
      const summation = listNode.find(".item-contents").text(); //요약설명
      const date = listNode.find(".gem-subinfo > .txt_info").text(); //날짜
      const url = listNode.find(".item-title > strong > a").attr("href"); // url

      articleData.push({
        newspaper,
        title,
        summation,
        date,
        url,
      });
    }

    // JSON으로 변환
    const data = JSON.stringify(articleData, null, 2);

    await fs.promises.writeFile("workData7.json", data);
  } catch (err) {
    console.error(err);
  }
})();
