import TodoItem from "./TodoItem";
export default function TodoList({
  arr,
  handleDelete,
  handleModify,
  modifyText,
  setModifyText,
  isEditing,
  setIsEditing,
}) {
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
            handleModify={() => handleModify(index, elem.text, isEditing)}
            modifyText={modifyText}
            setModifyText={setModifyText}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        ))}
      </div>
    </div>
  );
}
