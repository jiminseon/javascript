import { useEffect, useState } from "react";
import "../../todo.css";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./TodoList";

export default function TodoComponent() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState("pink");

  const handleAdd = () => {
    setArr([...arr, { text, color: selectedColor }]);
    setText("");
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
        selectedColor={selectedColor}
        add={handleAdd}
      />
      <Colorbar setSelectedColor={setSelectedColor} />
      <TodoList arr={arr} />
    </div>
  );
}
