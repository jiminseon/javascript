import { useState } from "react";

export default function TodoItem({
  text,
  color,
  handleDelete,
  handleModify,
  modifyText,
}) {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={text}
          style={{
            backgroundColor: color,
            width: "70%",
            margin: "5px auto",
            cursor: "default",

            border: "none", // 테두리 제거
            outline: "none", // 포커스 테두리 제거
            pointerEvents: "none",
          }}
          readOnly
        />
      ) : (
        <input
          type="text"
          value={modifyText}
          style={{
            backgroundColor: color,
            width: "70%",
            margin: "5px auto",
          }}
          readonly
        />
      )}
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
      <button
        style={{
          width: "50px",
          float: "right",
          background: "grey", // 배경 제거 (선택)
          padding: 0, // 여백 제거 (선택)
        }}
        onClick={() => {
          isEditing ? handleModify() : handleSave();
          setIsEditing(!isEditing);
        }}
      >
        {isEditing ? "수정" : "저장"}
      </button>
    </div>
  );
}
