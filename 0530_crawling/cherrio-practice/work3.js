import * as fs from "fs";
import * as cheerio from "cheerio";

const baseurl =
  "https://search.daum.net/search?w=news&nil_search=btn&DA=NTB&enc=utf8&cluster=y&cluster_page=1&q=%EA%B8%88%EC%9C%B5+%EC%84%9C%EB%B9%84%EC%8A%A4";
const detailData = [];

async function detailNews(url) {
  const detailUrl = await fetch(url);
  console.log(detailUrl);
  const text = await detailUrl.text();

  return text;
}

(async () => {
  try {
    const response = await fetch(baseurl, {
      method: "GET", // 생략가능
    });

    if (response.ok) {
      console.log("성공");
    }
    const text = await response.text();
    const $ = cheerio.load(text);

    //가져올 데이터 (제목, 신문사, 요약설명, 날짜, URL)
    const lists = $(".c-list-basic > li");

    for (let i = 0; i < 10; i++) {
      const listNode = lists.eq(i);
      const newspaper = listNode.find(".item-title a").attr("href");

      detailData.push(detailNews(newspaper));
    }

    // JSON으로 변환
    // const data = JSON.stringify(detailData, null, 2);

    await fs.promises.writeFile("workData3.json", detailData);
  } catch (err) {
    console.error(err);
  }
})();
