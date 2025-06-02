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
        const image = listNode
          .find(".c-item-content img")
          .attr("data-original-src"); //image

        articleData.push({
          newspaper,
          title,
          summation,
          date,
          url,
          image,
        });
      }
    }

    const data = JSON.stringify(articleData, null, 2);
    await fs.promises.writeFile("workData2-3.json", data);
  } catch (err) {
    console.error("에러 발생:", err);
  }
})();

//-----------------------------------------------
//------------------------------------------------
// 강사님
import * as cheerio from "cheerio";

async function scrapeDaumNews(query, page) {
  const baseUrl = "https://search.daum.net/search";
  const url = `${baseUrl}?q=${query}&p=${page}&w=news`;

  const resp = await fetch(url);
  const html = await resp.text();
  fs.writeFileSync(`${query}-${page}.html`, html);

  const $ = cheerio.load(html);

  const newsListTags = $(".c-list-basic > li");

  const result = [];

  for (let i = 0; i < newsListTags.length; i++) {
    const target = newsListTags.eq(i);

    const press = target.find(".tit_item").text().trim();
    const titleTag = target.find(".c-item-content .item-title a");
    const descTag = target.find(".item-contents .conts-desc");
    const dateTag = target.find(".gem-subinfo");

    const imageTag = target.find(".item-thumb img");
    // const imageSrc = imageTag.attr("src");
    const imageSrc = imageTag.attr("data-original-src");

    if (!titleTag.text()) {
      continue;
    }

    result.push({
      press: press,
      title: titleTag.text().trim(),
      url: titleTag.attr("href"),
      desc: descTag.text().trim(),
      date: dateTag.text().trim(),
      image: imageSrc,
    });
  }
  return result;
}
import * as fs from "fs";

async function main() {
  const result = [];
  for (let p = 1; p <= 3; p++) {
    const data = await scrapeDaumNews("금융서비스", p);
    result.push(data);
  }
  fs.writeFileSync("./daum-news1.json", JSON.stringify(result));
  console.log(result);
}

main();
