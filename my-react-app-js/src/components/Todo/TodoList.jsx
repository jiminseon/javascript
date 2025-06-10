import TodoItem from "./TodoItem";
export default function TodoList({ arr, handleDelete, handleModify }) {
  return (
    <div>
      <h3>Todo Items</h3>
      <div>
        {arr.map((elem, index) => (
          <TodoItem
            key={index}
            index={index}
            text={elem.text}
            color={elem.color}
            handleDelete={() => handleDelete(index)}
            handleModify={handleModify}
          />
        ))}
      </div>
    </div>
  );
}
