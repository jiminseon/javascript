export default function TodoItem({ text, color, handleDelete }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "70%",
        margin: "5px auto",
      }}
    >
      {text}
      <button
        style={{
          width: "50px",
          float: "right",
          background: "grey", // 배경 제거 (선택)
          padding: 0, // 여백 제거 (선택)
        }}
        onClick={handleDelete}
      >
        삭제
      </button>
      {/* <button
        style={{
          width: "50px",
          float: "right",
          background: "grey", // 배경 제거 (선택)
          padding: 0, // 여백 제거 (선택)
        }}
        onClick={handleDelete}
      >
        수정
      </button> */}
    </div>
  );
}
