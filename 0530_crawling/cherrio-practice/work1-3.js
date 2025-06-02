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

//---------------------------------------------
//---------------------------------------------
//---------------------------------------------
// 강사님
import * as cheeio from "cheerio";
import * as fs from "fs";

const baseUrl2 = "https://quotes.toscrape.com/";

const authorDescCache = {
  // key: url
  // value: authorDesc
};

async function fetchAuthorDesc(authorHref) {
  if (authorDescCache[authorHref]) {
    return authorDescCache[authorHref];
  }
  const authorUrl = baseUrl + authorHref;
  const authorResp = await fetch(authorUrl);
  const authroHtml = await authorResp.text();
  const $author = cheeio.load(authroHtml);
  const authorDescription = $author(".author-description").text().trim();

  authorDescCache[authorHref] = authorDescription;

  return authorDescription;
}

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
      const authorHref = quoteTag.find("span a").attr("href");
      const authorDescription = await fetchAuthorDesc(authorHref);

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
        authorDescription,
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
  await fs.promises.writeFile("quote3.json", jsonResult);
}

main();
