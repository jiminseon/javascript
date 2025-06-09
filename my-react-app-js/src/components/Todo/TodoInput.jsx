export default function TodoInput({
  text,
  setText,
  find,
  setFind,
  selectedColor,
  handleAdd,
  handleFind,
}) {
  return (
    <div>
      <h2>Todo App</h2>
      todo
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        style={{ backgroundColor: selectedColor }}
      ></input>
      <button onClick={handleAdd}>입력</button>
      <p />
      find
      <input
        type="text"
        value={find}
        onChange={(e) => {
          setFind(e.target.value);
        }}
      ></input>
      <button onClick={handleFind}>입력</button>
    </div>
  );
}
