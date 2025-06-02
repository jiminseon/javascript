import * as fs from "fs";
import * as cheerio from "cheerio";

const url =
  "https://search.daum.net/search?w=news&nil_search=btn&DA=NTB&enc=utf8&cluster=y&cluster_page=1&q=%EA%B8%88%EC%9C%B5+%EC%84%9C%EB%B9%84%EC%8A%A4";

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

    await fs.promises.writeFile("workData2-1.json", data);
  } catch (err) {
    console.error(err);
  }
})();

//------------------------------------------
//------------------------------------------
//------------------------------------------
//강사님
import * as cheerio from "cheerio";

async function scrapeDaumNews(query, page) {
  const baseUrl = "https://search.daum.net/search";
  const url = `${baseUrl}?q=${query}&p=${page}&w=news`;

  const resp = await fetch(url);
  const html = await resp.text();

  const $ = cheerio.load(html);

  const newsListTags = $(".c-list-basic > li");

  const result = [];

  for (let i = 0; i < newsListTags.length; i++) {
    const target = newsListTags.eq(i);

    const press = target.find(".tit_item").text().trim();
    const titleTag = target.find(".c-item-content .item-title a");
    const descTag = target.find(".item-contents .conts-desc");
    const dateTag = target.find(".gem-subinfo");

    if (!titleTag.text()) {
      continue;
    }

    result.push({
      press: press,
      title: titleTag.text().trim(),
      url: titleTag.attr("href"),
      desc: descTag.text().trim(),
      date: dateTag.text().trim(),
    });
  }
  return result;
}

async function main() {
  const result = [];
  for (let p = 1; p <= 3; p++) {
    const data = await scrapeDaumNews("금융서비스", p);
    result.push(...data);
  }
  console.log(result);
}

main();
