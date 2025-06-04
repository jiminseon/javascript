import * as fs from "fs/promises";

const url = "https://service.wadiz.kr/api/search/funding";

// POST body에 보낼 데이터 정의 필요
const data = {
  startNum: 0,
  limit: 20,
  order: "recommend", // 예시 정렬 기준 (선택사항)
};

async function fetchFundingData(startNum = 0, limit = 100) {
  const postData = { ...data, startNum, limit };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0",
    },
    body: JSON.stringify(postData),
  });

  const json = await res.json();

  // 디버깅용
  console.log(`Fetched ${startNum}~${startNum + limit - 1}`);

  return json.data.list; // ✅ 수정된 부분
}

(async () => {
  const result = [];

  for (let start = 0; start < 500; start += 100) {
    const list = await fetchFundingData(start);

    for (const item of list) {
      result.push({
        title: item.title,
        link: item.landingUrl,
        category: item.categoryName,
        achievementRate: item.achievementRate,
      });
    }
  }

  await fs.writeFile("wadiz_funding.json", JSON.stringify(result, null, 2));
})();

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// 강사님 코드

import * as fs from "fs";
import * as cheerio from "cheerio";

async function main() {
  const url = "https://service.wadiz.kr/api/search/funding";
  const body = {
    startNum: 0,
    order: "recommend",
    limit: 500,
    categoryCode: "",
    endYn: "",
    isMakerClub: false,
  };

  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      referer: "https://www.wadiz.kr/",
    },
  });
  //   const data = await resp.text();
  //   const result = JSON.parse(data);

  const result = await resp.json();

  //   console.log(result.data.list.length);
  fs.writeFileSync("wadiz.json", JSON.stringify(result.data.list));
}

main();
