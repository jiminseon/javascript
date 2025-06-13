// 1. DB 연결
const mongoose = require("mongoose");
const DB_URL =
  "mongodb+srv://admin:admin1234@cluster0.nlqimgu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const Cat = require("./models/cat");

async function main() {
  await mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("연결완료");
    })
    .catch((err) => {
      console.log(err);
    });

  // 실습
  Cat.create({
    name: "야옹",
  });
  console.log(Cat);
}

main();
