export default function TodoItem({ todoId, color, text, removeTodo }) {
  return (
    <li
      style={{
        display: "block",
        padding: 10,
        backgroundColor: color,
        borderRadius: 5,
        position: "relative",
      }}
    >
      {text}
      <span style={{ position: "absolute", right: 10 }}>
        <button
          onClick={() => {
            removeTodo(todoId);
          }}
        >
          삭제
        </button>
      </span>
    </li>
  );
}
