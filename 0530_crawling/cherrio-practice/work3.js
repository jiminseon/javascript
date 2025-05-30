import * as fs from "fs";
import * as cheerio from "cheerio";

const baseUrl = "https://quotes.toscrape.com";
let nextPage = "/page/1/";
const allQuotes = [];

async function fetchAboutPage(about) {
  const res = await fetch(baseUrl + about);
  const html = await res.text();
  const $ = cheerio.load(html);

  return $(".author-description").text().trim();
}

async function fetchPage(url) {
  const res = await fetch(baseUrl + url);
  const html = await res.text();
  const $ = cheerio.load(html);

  // 비동기 처리를 위한 배열
  const promises = $(".quote")
    .map((_, el) => {
      return (async () => {
        const text = $(el).find(".text").text().trim();
        const author = $(el).find(".author").text().trim();
        const tags = $(el)
          .find(".tag")
          .map((_, tag) => $(tag).text().trim())
          .get();
        const about = $(el).find("a").attr("href");

        const description = await fetchAboutPage(about);

        allQuotes.push({ text, author, tags, description });
      })();
    })
    .get(); // jQuery-style object → 배열로 변환

  await Promise.all(promises);

  const next = $(".next a").attr("href");
  return next || null;
}

(async () => {
  try {
    while (nextPage) {
      nextPage = await fetchPage(nextPage);
    }

    fs.writeFileSync(
      "workData3.json",
      JSON.stringify(allQuotes, null, 2),
      "utf-8"
    );
  } catch (err) {
    console.error(err);
  }
})();
