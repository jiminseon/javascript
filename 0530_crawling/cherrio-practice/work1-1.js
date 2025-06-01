import * as fs from "fs";
import * as cheerio from "cheerio";

const url = "https://quotes.toscrape.com/";

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
    //console.log(text);

    const quotes = $(".quote");

    // const contentQuote = quote1.find('.text');
    // const contentAuthor = quote1.find('.author');
    // const contentTags = quote1.find('.tags > .tag');

    // console.log(contentQuote.text())
    // console.log(contentAuthor.text())
    // console.log(contentTags.text());

    const quoteData = [];

    for (let i = 0; i < quotes.length; i++) {
      const quoteNode = quotes.eq(i);
      const contentQuote = quoteNode.find(".text").text();
      const contentAuthor = quoteNode.find(".author").text();
      const contentTags = quoteNode
        .find(".tags > .tag")
        .map((_, el) => $(el).text())
        .get();

      quoteData.push({
        quote: contentQuote,
        author: contentAuthor,
        tags: contentTags,
      });
    }

    // JSON으로 변환
    const data = JSON.stringify(quoteData, null, 2);

    // const authorNames = $('.author');
    // //console.log(authorNames.text());

    // const tags = $('.tags > .tag')
    // const tag1 = tags.eq(0);
    // //console.log(tags.text());

    await fs.promises.writeFile("workData1.json", data);
  } catch (err) {
    console.error(err);
  }
})();
