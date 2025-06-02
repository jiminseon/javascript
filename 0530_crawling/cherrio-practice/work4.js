import * as fs from "fs";
import * as cheerio from "cheerio";

const url = "https://finance.naver.com/item/sise.nhn?code=005930";
const baseurl = "https://finance.naver.com";

async function siseUrl(siseurl) {
  const siseData = [];
  for (let page = 1; page <= 2; page++) {
    const sise = await fetch(baseurl + siseurl + `&page=${page}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      },
    });
    const body = await sise.text();
    const $day = cheerio.load(body);

    const lists = $day("tr").has("td.num");
    console.log(lists.length);
    console.log(lists.eq(0).find(".tah").text());
    console.log(lists.eq(0).find(".tah").length);

    for (let i = 0; i < lists.length; i++) {
      const listNode = lists.eq(i).find(".tah");
      const date = listNode.eq(0).text(); // 신문사
      const finalPrice = listNode.eq(1).text(); // 제목
      const change = listNode.eq(2).text().trim(); //요약설명
      const price = listNode.eq(3).text(); //날짜
      const high = listNode.eq(4).text(); // url
      const low = listNode.eq(5).text(); // url
      const trading = listNode.eq(6).text(); // url

      siseData.push({
        date,
        finalPrice,
        change,
        price,
        high,
        low,
        trading,
      });
    }
  }
  // JSON으로 변환
  const data = JSON.stringify(siseData, null, 2);

  await fs.promises.writeFile("workData4.json", data);
}

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

    const siseurl = $("iframe").last().attr("src");
    console.log(siseurl);
    await siseUrl(siseurl);
  } catch (err) {
    console.error(err);
  }
})();
