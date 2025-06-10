import TodoItem from "./TodoItem";
import React from "react";
import { useTodo } from "./TodoProvider";
export default function TodoList() {
  const ctx = useTodo();
  return (
    <div>
      <h3>Todo Items</h3>
      <div>
        {ctx.arr.map((elem) => (
          <TodoItem
            key={elem.id}
            id={elem.id}
            text={elem.text}
            color={elem.color}
            handleDelete={() => ctx.removeTodo(elem.id)}
            handleModify={ctx.editTodo}
          />
        ))}
      </div>
    </div>
  );
}
