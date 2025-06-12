export type Todo = {
  id: string;
  text: string;
  //   color: (typeof COLORS)[number];
  color: "white" | "red" | "pink" | "yellow";
};

interface ITodoListProps {
  todoList: Todo[];
}

export default function TodoList({ todoList }: ITodoListProps) {
  return (
    <div>
      TodoList
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id} style={{ backgroundColor: todo.color }}>
              {todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
