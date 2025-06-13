const express = require("express");
const router = express.Router();
const Board = require("./modls/Board");

/**
 *
 */
router.get("/", function (req, res, next) {
  console.log("router ./board 실행");
  res.send("this is Board");
});

route.post("/", function (req, res) {
  Board.create({
    title: "임시 게시글",
    content: "임시 게시글 내용",
  });
});

module.exports = router;
