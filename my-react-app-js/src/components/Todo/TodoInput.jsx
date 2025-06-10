import React from "react";
import { useTodo } from "./TodoProvider";

export default function TodoInput() {
  const ctx = useTodo();

  return (
    <div>
      <h2>Todo App</h2>
      todo
      <input
        type="text"
        value={ctx.text}
        onChange={(e) => {
          ctx.setText(e.target.value);
        }}
        style={{ backgroundColor: ctx.selectedColor }}
      ></input>
      <button onClick={ctx.addTodo}>입력</button>
      <p />
      find
      <input
        type="text"
        value={ctx.find}
        onChange={(e) => {
          ctx.setFind(e.target.value);
        }}
      ></input>
      <button onClick={ctx.findTodo}>입력</button>
    </div>
  );
}
