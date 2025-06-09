import { useEffect, useState } from "react";
import "../todo.css";

export default function TodoComponent() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Todo App</h2>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        style={{ backgroundColor: "pink" }}
      ></input>
      <button
        onClick={() => {
          setArr([...arr, text]);
          setText("");
        }}
      >
        입력
      </button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
        <div class="circle circle4"></div>
      </div>
      <div>
        <h3>Todo Items</h3>
        <div class="items">
          {arr.map((elem) => (
            <div>{elem}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
