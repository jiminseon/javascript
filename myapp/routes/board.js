const express = require("express");
const router = express.Router();
const Board = require("../models/Board");
/**
 *
 */
router.get("/", async function (req, res, next) {
  //   console.log("router ./board 실행");
  //   res.send("this is Board");
  const board = await Board.find();
  res.send(board);
});

router.post("/", async function (req, res) {
  /**
   * 1. req body로 "게시글 제목"과 "게시글 내용"을 받는다.
   * 2. mongoose를 이용해 저장한다.
   * 3. response를 만들어 준다.
   *
   */
  const data = req.body;
  console.log(data);
  const board = await Board.create({
    title: data.title,
    content: data.content,
  });

  res.json(board);
});

module.exports = router;
