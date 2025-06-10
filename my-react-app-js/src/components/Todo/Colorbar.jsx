import { useTodo } from "./TodoProvider";
export default function Colorbar() {
  const ctx = useTodo();
  const colorOptions = [
    { className: "circle1", color: "white" },
    { className: "circle2", color: "red" },
    { className: "circle3", color: "yellow" },
    { className: "circle4", color: "pink" },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {colorOptions.map(({ className, color }) => (
        <div
          className={`circle ${className}`}
          onClick={() => ctx.setSelectedColor(color)}
        ></div>
      ))}
    </div>
  );
}
