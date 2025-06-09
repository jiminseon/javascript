import TodoItem from "./TodoItem";
export default function FindList({ findArr }) {
  return (
    <div>
      <h3>Find Items</h3>
      <div>
        {findArr.map((elem, index) => (
          <TodoItem key={index} text={elem.text} color={elem.color} />
        ))}
      </div>
    </div>
  );
}
