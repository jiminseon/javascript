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

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setArr(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const saved2 = localStorage.getItem("finds");
    if (saved2) {
      setFindArr(JSON.parse(saved2));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(arr));
  }, [arr]);

  useEffect(() => {
    localStorage.setItem("finds", JSON.stringify(findArr));
  }, [findArr]);

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
