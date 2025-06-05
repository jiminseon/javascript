import React, { useState } from "react";

export default function ForbiddenWordApp() {
  const [forbiddenWords, setForbiddenWords] = useState([]);
  const [inputWord, setInputWord] = useState("");
  const [inputSentence, setInputSentence] = useState("");
  const [filteredSentences, setFilteredSentences] = useState([]);

  // 금지어 추가
  const handleAddForbiddenWord = () => {
    //const trimmed = inputWord.trim();
    if (!forbiddenWords.includes(inputWord)) {
      setForbiddenWords([...forbiddenWords, inputWord]);
    }
    setInputWord("");
  };

  // 문장 입력 -> 필터링 -> 리스트에 추가
  const handleSentenceSubmit = () => {
    const filtered = filterText(inputSentence);
    setFilteredSentences([...filteredSentences, filtered]);
    setInputSentence("");
  };

  // 금지어 마스킹 함수
  const filterText = (text) => {
    let result = text;
    forbiddenWords.forEach((word) => {
      //const regex = new RegExp(word, "gi");
      result = result.replaceAll(word, "**");
    });
    return result;
  };

  return (
    <div style={{ display: "flex" }}>
      {/* 왼쪽 영역: 사용자 문장 입력 */}
      <div style={{ flex: 1, marginRight: "40px" }}>
        <div>
          <label>사용자 입력 </label>
          <input
            type="text"
            value={inputSentence}
            onChange={(e) => setInputSentence(e.target.value)}
            placeholder="욕은 하면 안됨!"
          />
          <button onClick={handleSentenceSubmit}>추가</button>
        </div>

        <ul style={{ marginTop: "20px" }}>
          {filteredSentences.map((sentence, idx) => (
            <li key={idx}> {sentence}</li>
          ))}
        </ul>
      </div>

      {/* 오른쪽 영역: 금지어 추가 */}
      <div>
        <div>
          <label>금지어 입력 </label>
          <input
            type="text"
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
          />
          <button onClick={handleAddForbiddenWord}>Add</button>
        </div>

        <ul style={{ marginTop: "20px" }}>
          {forbiddenWords.map((word, idx) => (
            <li key={idx}> {word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
