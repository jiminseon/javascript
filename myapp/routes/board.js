const express = require("express");
const router = express.Router();
const Board = require("../models/Board");
/**
 * 특정 자원에 대한 API
 * GET  / : 전체 리소스 조회
 * POST / : 리소스 등록
 *
 * GET      /:resourceId : 특정 resource 조회
 * PUT      /:resourceId : 특정 resource 수정
 * DELETE   /:resourceId : 특정 resource 삭제
 */

// req: 요청, res: 응답, next: middleware 실행
router.get("/", async function (req, res, next) {
  //   console.log("router ./board 실행");
  //   res.send("this is Board");
  const board = await Board.find();
  res.json(board);
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
router.get("/:boardId", async (req, res) => {
  console.log(req.params);
  const { boardId } = req.params;
  const board = await Board.findById(boardId);
  res.json(board);
});

router.put("/:boardId", async (req, res) => {
  const { boardId } = req.params;
  const data = req.body;
  const board = await Board.findByIdAndUpdate(boardId, {
    title: data.title,
    content: data.content,
  });
  res.json(board);
});

router.delete("/:boardId", async (req, res) => {
  const { boardId } = req.params;
  const board = await Board.findByIdAndDelete(boardId);
  res.send("성공");
});

module.exports = router;
