import { useEffect, useState } from "react";
import "../todo.css";

export default function TodoComponent() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState("white");

  // 각 circle 클래스와 색상을 매핑
  const colorOptions = [
    { className: "circle1", color: "white" },
    { className: "circle2", color: "red" },
    { className: "circle3", color: "yellow" },
    { className: "circle4", color: "pink" },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "blue",
        minHeight: "100vh",
      }}
    >
      <h2>Todo App</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        style={{ backgroundColor: selectedColor }}
      ></input>
      <button
        onClick={() => {
          setArr([...arr, { text, color: selectedColor }]);
          setText("");
        }}
      >
        입력
      </button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {colorOptions.map(({ className, color }) => (
          <div
            className={`circle ${className}`}
            onClick={() => setSelectedColor(color)}
          ></div>
        ))}
      </div>
      <div>
        <h3>Todo Items</h3>
        <div>
          {arr.map((elem, index) => (
            <div
              key={index}
              style={{
                backgroundColor: elem.color,
                width: "80%",
                margin: "5px auto",
              }}
            >
              {elem.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
