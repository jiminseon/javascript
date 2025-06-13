const mongoose = require("mongoose");

// 1. 스키마 정의
const catSchema = mongoose.Schema({
  name: {
    type: String,
  },
});

// 2. 스키마를 이용한 모델 정의
// mongoose.Model(<Collection 이름>, <스키마>);
// <Collection이름>이 실제 MongoDB에 저장되는 이름
const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
