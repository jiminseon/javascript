import fetch from "node-fetch";
import * as fs from "fs";
import * as cheerio from "cheerio";
import iconv from "iconv-lite";

const url = "https://finance.naver.com/item/news.nhn?code=005930";
const baseurl = "https://finance.naver.com";

async function disclosure(disclosureUrl) {
  const infoData = [];
  for (let page = 1; page <= 2; page++) {
    const infoUrl = await fetch(
      baseurl + disclosureUrl + `&page=${page}&page=2`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        },
      }
    );

    const buffer = await infoUrl.buffer(); // buffer로 읽기
    const decoded = iconv.decode(buffer, "EUC-KR"); // EUC-KR 디코딩
    const $day = cheerio.load(decoded);

    // console.log(sise);

    const lists = $day("tr").has("td.title");
    console.log(lists.length);
    console.log(lists.eq(0).find(".title > a").text());
    // console.log(lists.eq(0).find(".tah").length);

    for (let i = 0; i < lists.length; i++) {
      const listNode = lists.eq(i);
      const title = listNode.find(".title").text();
      const info = listNode.find(".info").text();
      const date = listNode.find(".date").text();

      infoData.push({
        title,
        info,
        date,
      });
    }
  }
  // JSON으로 변환
  const data = JSON.stringify(infoData, null, 2);

  await fs.promises.writeFile("workData5.json", data);
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

    const disclosureUrl = $("iframe").last().attr("src");
    console.log(disclosureUrl);
    await disclosure(disclosureUrl);
  } catch (err) {
    console.error(err);
  }
})();
