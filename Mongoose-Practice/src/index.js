// 1. DB 연결
const mongoose = require("mongoose");
const DB_URL =
  "mongodb+srv://admin:admin1234@cluster0.nlqimgu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const Cat = require("./models/cat");
const Movie = require("./models/Movie");
const Review = require("./models/Review");
async function main() {
  await mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("연결완료");
    })
    .catch((err) => {
      console.log(err);
    });

  // 실습1: 데이터 생성
  //   Cat.create({
  //     name: "야옹",
  //   });
  //   console.log(Cat);

  // 2. insertMany
  //   const result = await Cat.insertMany([{ name: "나비" }, { name: "부엉이" }]);
  //   console.log(result);

  // 3. 조회 (find, findOne, findById)
  //   const cat1 = await Cat.find({ name: "야옹이" }); // 데이터 일치하는 것 모두 조회
  //   console.log(cat1); //data type?

  //   const cat2 = await Cat.find(); // 전체 조회
  //   console.log(cat2);

  //   const cat3 = await Cat.findOne({ name: "나비" }); // 데이터 일치하는 것 1개 조회
  //   console.log(cat3);

  //   const cat4 = await Cat.findById({ name: "684ba8a7f7cbb725839d54be" }); //나비 id로 조회
  //   console.log(cat4);

  // 4. 삭제
  //   const result = await Cat.deleteMany({
  //     name: "야옹",
  //   });
  //   console.log(result);

  //   // 5. 수정
  //   const result = await Cat.updateOne(
  //     {
  //       name: "부엉이",
  //     },
  //     {
  //       name: "meow",
  //     }
  //   );
  //   console.log(result);
  //----------------------------------------

  //2-1 영화생성
  //   const movie = await Movie.create({
  //     title: "영화1",
  //     director: "신윤수",
  //     startDate: "2017-01-18",
  //     thumbnail:
  //       "https://an2-img.amz.wtchn.net/image/v2/W-6OOBFuHj6lBaBEfctSjw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMjV5YW5kaE5uaDFZbWx2WW5kbmJuWjVZM0J3SW4wLlVxRm83bHNuaHU3dzc5aXBIVlYtU2prUFQxY29JYWV2TUdMNDBLaVg5eTQ",
  //     story:
  //       "비밀리에 제작된 위조 지폐 동판을 탈취하려는 내부 조직에 의해 작전 중 아내와 동료들을 잃게 된 특수 정예부대...",
  //     tags: [2017, "액션", "한국"],
  //   });

  // 2.2. Review추가
  //   const reviews = Array.from({ length: 3 }).map((_, idx) => {
  //     return {
  //       writer: "신윤수",
  //       title: `리뷰제목-${idx}`,
  //       content: `리뷰내용-${idx}`,
  //       movie: "684bb30c7be083ca921dda4c",
  //     };
  //   });
  //   const savedReview = await Review.insertMany(reviews);
  //   console.log(savedReview);

  // 2.3. Review 조회 (참조하고 있는 movie를 포함해서 가져오기)

  //   const review1 = await Review.find(); // movie값은 objectId
  //   console.log(review1);

  //   const review = await Review.find().populate("movie"); // populate: movie가 가지고 있는 objectId에 해당하는 실제 객체 함께 조회
  //   console.log(review);

  // 2.4. Moview 조회(populate with reviews)
  const movie = await Movie.findOne().populate("reviews");
  console.log(movie);
}

main();
