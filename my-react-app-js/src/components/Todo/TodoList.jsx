import TodoItem from "./TodoItem";
export default function TodoList({ arr, handleDelete }) {
  return (
    <div>
      <h3>Todo Items</h3>
      <div>
        {arr.map((elem, index) => (
          <TodoItem
            key={index}
            text={elem.text}
            color={elem.color}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}
