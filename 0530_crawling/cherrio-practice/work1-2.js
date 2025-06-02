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

//---------------------------------------------
//---------------------------------------------
//---------------------------------------------
//강사님1
import * as cheeio from "cheerio";
import * as fs from "fs";

const baseUrl2 = "https://quotes.toscrape.com/";

async function main() {
  const result = [];
  let url = baseUrl2;

  while (true) {
    // 1. request -> response
    const response = await fetch(url);
    const html = await response.text();
    // 2. response를 parsing
    const $ = cheeio.load(html);
    // 3. (quote:string, authorName:string, tags:string[])
    const quoteTags = $(".quote");

    for (let i = 0; i < quoteTags.length; i++) {
      const quoteTag = quoteTags.eq(i);

      const quote = quoteTag.find(".text").text().trim();
      const authorName = quoteTag.find(".author").text().trim();

      const tags = [];

      const tagTags = quoteTag.find(".tag");
      for (let j = 0; j < tagTags.length; j++) {
        const tagText = tagTags.eq(j).text().trim();
        tags.push(tagText);
      }

      result.push({
        quote,
        authorName,
        tags,
      });
    }

    const nextATag = $(".next a");
    const href = nextATag.attr("href");
    if (!href) {
      break;
    }
    url = baseUrl + href;
  }

  // 4. json으로 저장
  // JS => JSON문자열로 변환
  const jsonResult = JSON.stringify(result);
  await fs.promises.writeFile("quote2.json", jsonResult);
}

main();

//---------------------------------------------
//---------------------------------------------
//---------------------------------------------
//강사님2
import * as cheeio from "cheerio";
import * as fs from "fs";

const baseUr3 = "https://quotes.toscrape.com/";

async function main() {
  const result = [];
  let url = baseUrl3;

  for (let page = 1; page <= 10; page++) {
    const url = baseUrl + `page/${page}`;
    // 1. request -> response
    const response = await fetch(url);
    const html = await response.text();
    // 2. response를 parsing
    const $ = cheeio.load(html);
    // 3. (quote:string, authorName:string, tags:string[])
    const quoteTags = $(".quote");

    for (let i = 0; i < quoteTags.length; i++) {
      const quoteTag = quoteTags.eq(i);

      const quote = quoteTag.find(".text").text().trim();
      const authorName = quoteTag.find(".author").text().trim();

      const tags = [];

      const tagTags = quoteTag.find(".tag");
      for (let j = 0; j < tagTags.length; j++) {
        const tagText = tagTags.eq(j).text().trim();
        tags.push(tagText);
      }

      result.push({
        quote,
        authorName,
        tags,
      });
    }
  }

  // 4. json으로 저장
  // JS => JSON문자열로 변환
  const jsonResult = JSON.stringify(result);
  await fs.promises.writeFile("quote2-2.json", jsonResult);
}

main();
