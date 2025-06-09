export default function FindItem({ text, color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "80%",
        margin: "5px auto",
      }}
    >
      {text}
    </div>
  );
}
