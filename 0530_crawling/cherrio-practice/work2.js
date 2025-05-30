import * as fs from "fs";
import * as cheerio from "cheerio";

const baseUrl = "https://quotes.toscrape.com";
let nextPage = "/page/1/";
const allQuotes = [];

async function fetchPage(url) {
  const res = await fetch(baseUrl + url);
  const html = await res.text();
  const $ = cheerio.load(html);

  $(".quote").each((_, el) => {
    const text = $(el).find(".text").text().trim();
    const author = $(el).find(".author").text().trim();
    const tags = $(el)
      .find(".tag")
      .map((_, tag) => $(tag).text().trim())
      .get();

    allQuotes.push({ text, author, tags });
  });

  const next = $(".next a").attr("href");
  return next || null;
}

(async () => {
  try {
    while (nextPage) {
      //   console.log(`다음페이지: ${baseUrl + nextPage}`);
      nextPage = await fetchPage(nextPage);
    }

    fs.writeFileSync(
      "workData2.json",
      JSON.stringify(allQuotes, null, 2),
      "utf-8"
    );
  } catch (err) {
    console.error(err);
  }
})();
