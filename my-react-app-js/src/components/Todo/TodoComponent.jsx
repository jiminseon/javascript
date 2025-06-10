import { useEffect, useState, useRef } from "react";
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
  const idRef = useRef(1);

  const handleAdd = () => {
    const newItem = {
      id: idRef.current++,
      text,
      color: selectedColor,
    };
    setArr([...arr, newItem]);
    setText("");
  };

  const handleFind = () => {
    const filtered = filterText(find);
    setFindArr(filtered);
    setFind("");
    console.log(filtered);
  };

  const filterText = (find) => {
    const result = [];
    arr.forEach((elem) => {
      if (elem.text.includes(find)) result.push(elem);
    });
    return result;
  };

  useEffect(() => {
    if (arr.length > 0) {
      localStorage.setItem("todos", JSON.stringify(arr));
    }
  }, [arr]);

  useEffect(() => {
    if (findArr.length > 0) {
      localStorage.setItem("finds", JSON.stringify(findArr));
    }
  }, [findArr]);

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

  const handleDelete = (idToDelete) => {
    console.log("삭제");
    const deletedItem = arr.find((item) => item.id === idToDelete);

    const newArr = arr.filter((item) => item.id !== idToDelete);
    setArr(newArr);

    const newFindArr = findArr.filter((item) => item.id !== deletedItem.id);
    setFindArr(newFindArr);

    localStorage.setItem("todos", JSON.stringify(newArr));
    localStorage.setItem("finds", JSON.stringify(newFindArr));
  };

  const handleModify = (id, newText) => {
    const newArr = arr.map((item) =>
      item.id === id ? { ...item, text: newText } : item
    );
    setArr(newArr);
    localStorage.setItem("todos", JSON.stringify(newArr));
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
      <TodoList
        arr={arr}
        handleDelete={handleDelete}
        handleModify={handleModify}
      />
      <FindList findArr={findArr} />
    </div>
  );
}
