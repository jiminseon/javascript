import TodoItem from "./TodoItem";
export default function TodoList({ arr, handleDelete, handleModify }) {
  return (
    <div>
      <h3>Todo Items</h3>
      <div>
        {arr.map((elem) => (
          <TodoItem
            key={elem.id}
            id={elem.id}
            text={elem.text}
            color={elem.color}
            handleDelete={() => handleDelete(elem.id)}
            handleModify={handleModify}
          />
        ))}
      </div>
    </div>
  );
}
