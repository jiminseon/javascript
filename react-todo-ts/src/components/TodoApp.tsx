import { useState } from "react";
import TodoList from "./TodoList";
import type { Todo } from "./TodoList";

const COLORS = ["white", "red", "pink", "yellow"];
let myId = 0;

export default function TodoApp() {
  //State의 typing
  const [todoList, setTodoList] = useState<Todo[]>([]);
  //   const [todoList, setTodoList] = useState<Array<Todo[]>>([]);

  const [inputText, setInputText] = useState("");
  return (
    <div>
      <div>
        <input type="text" />
        <button
          onClick={() => {
            setTodoList((prev) => [
              ...prev,
              {
                id: (myId++).toString(),
                text: inputText,
                color: "yellow",
              },
            ]);
          }}
        >
          {" "}
          추가
        </button>
      </div>
      <TodoList todoList={todoList} />
    </div>
  );
}
