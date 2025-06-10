import { useEffect, useState, useRef } from "react";
import "../../todo.css";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./TodoList";
import FindList from "./FindList";
import { TodoProvider } from "./TodoProvider";

export default function TodoComponent() {
  return (
    <TodoProvider>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "blue",
          minHeight: "100vh",
        }}
      >
        <TodoInput />
        <Colorbar />
        <TodoList />
        <FindList />
      </div>
    </TodoProvider>
  );
}
