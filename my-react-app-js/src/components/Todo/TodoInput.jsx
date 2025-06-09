export default function TodoInput({ text, setText, selectedColor, add }) {
  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        style={{ backgroundColor: selectedColor }}
      ></input>
      <button onClick={add}>입력</button>
    </div>
  );
}
