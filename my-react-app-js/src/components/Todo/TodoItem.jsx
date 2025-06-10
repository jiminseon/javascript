import { useState } from "react";

export default function TodoItem({
  id,
  text,
  color,
  handleDelete,
  handleModify,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [modifyText, setModifyText] = useState(text);

  const handleEditClick = () => {
    if (isEditing) {
      handleModify(id, modifyText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={modifyText}
          onChange={(e) => setModifyText(e.target.value)}
          style={{
            backgroundColor: color,
            width: "70%",
            margin: "5px auto",
          }}
        />
      ) : (
        <input
          type="text"
          value={text}
          readOnly
          style={{
            backgroundColor: color,
            width: "70%",
            margin: "5px auto",
            border: "none",
            outline: "none",
            pointerEvents: "none",
            cursor: "default",
          }}
        />
      )}
      <button
        style={{
          width: "50px",
          float: "right",
          background: "grey",
          padding: 0,
        }}
        onClick={handleDelete}
      >
        삭제
      </button>
      <button
        style={{
          width: "50px",
          float: "right",
          background: "grey",
          padding: 0,
        }}
        onClick={handleEditClick}
      >
        {isEditing ? "저장" : "수정"}
      </button>
    </div>
  );
}
