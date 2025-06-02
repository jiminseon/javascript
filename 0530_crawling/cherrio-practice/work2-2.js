import * as fs from "fs";
import * as cheerio from "cheerio";

const articleData = [];

(async () => {
  try {
    for (let page = 1; page <= 3; page++) {
      const url = `https://search.daum.net/search?w=news&nil_search=btn&DA=NTB&enc=utf8&cluster=y&cluster_page=1&q=%EA%B8%88%EC%9C%B5+%EC%84%9C%EB%B9%84%EC%8A%A4&p=${page}`;

      const response = await fetch(url);
      if (!response.ok) {
        console.log(`페이지 ${page} 불러오기 실패`);
        continue;
      }

      const text = await response.text();
      const $ = cheerio.load(text);
      const lists = $(".c-list-basic > li");

      for (let i = 0; i < 10; i++) {
        const listNode = lists.eq(i);

        // carousel 제외
        if (listNode.find(".c-carousel").length > 0) continue;

        const newspaper = listNode.find(".tit_item .txt_info").first().text();
        const title = listNode.find(".item-title").text();
        const summation = listNode.find(".item-contents").text();
        const date = listNode.find(".gem-subinfo .txt_info").text();
        const url = listNode.find(".item-title > strong > a").attr("href");

        articleData.push({
          newspaper,
          title,
          summation,
          date,
          url,
        });
      }
    }

    const data = JSON.stringify(articleData, null, 2);
    await fs.promises.writeFile("workData2-2.json", data);
  } catch (err) {
    console.error("에러 발생:", err);
  }
})();
