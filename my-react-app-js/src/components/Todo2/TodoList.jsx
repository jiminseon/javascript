import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList, removeTodo }) {
  return (
    <ul
      style={{
        padding: 0,
        listStyleType: "none",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {todoList.map(({ id, text, color }, idx) => {
        return (
          <TodoItem
            todoId={id}
            text={text}
            color={color}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
}
