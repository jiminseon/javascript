import { useEffect, useState } from "react";
import "../../todo.css";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./TodoList";
import FindList from "./FindList";

export default function TodoComponent() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [findArr, setFindArr] = useState([]);
  const [selectedColor, setSelectedColor] = useState("pink");

  const handleAdd = () => {
    setArr([...arr, { text, color: selectedColor }]);
    setText("");
  };

  // 문장 입력 -> 필터링 -> 리스트에 추가
  const handleFind = () => {
    const filtered = filterText(find);
    setFindArr(filtered);
    setFind("");
    console.log(filtered);
  };

  // 금지어 마스킹 함수
  const filterText = (find) => {
    const result = [];
    arr.forEach((elem) => {
      if (elem.text.includes(find)) result.push(elem);
    });
    return result;
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "blue",
        minHeight: "100vh",
      }}
    >
      <TodoInput
        text={text}
        setText={setText}
        find={find}
        setFind={setFind}
        selectedColor={selectedColor}
        handleAdd={handleAdd}
        handleFind={handleFind}
      />
      <Colorbar setSelectedColor={setSelectedColor} />
      <TodoList arr={arr} />
      <FindList findArr={findArr} />
    </div>
  );
}
